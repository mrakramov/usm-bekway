"""USM Bekway Logistics — FastAPI backend.

Endpoints
---------
GET  /api/health        liveness check
POST /api/quotes        store a "Request a quote" form submission
GET  /api/quotes        list submissions (requires header ``X-Admin-Token``)

When ``frontend/dist`` exists (``npm run build``), the React site is served at ``/``.
"""
from __future__ import annotations

import hmac
import time
from collections import defaultdict, deque
from pathlib import Path

from fastapi import BackgroundTasks, Depends, FastAPI, Header, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from . import db
from .config import Settings, get_settings
from .notify import send_quote_email
from .schemas import Quote, QuoteCreate, QuoteCreated


def create_app(settings: Settings | None = None) -> FastAPI:
    settings = settings or get_settings()
    db.init_db(settings.database_path)

    app = FastAPI(
        title="USM Bekway Logistics API",
        version="1.0.0",
        docs_url="/api/docs",
        openapi_url="/api/openapi.json",
    )
    app.state.settings = settings
    app.state.hits = defaultdict(deque)  # client ip -> timestamps (rate limiting)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_methods=["GET", "POST"],
        allow_headers=["Content-Type", "X-Admin-Token"],
    )

    def get_cfg(request: Request) -> Settings:
        return request.app.state.settings

    def client_ip(request: Request) -> str:
        forwarded = request.headers.get("x-forwarded-for")
        if forwarded:
            return forwarded.split(",")[0].strip()
        return request.client.host if request.client else ""

    def check_rate_limit(request: Request, cfg: Settings) -> None:
        ip = client_ip(request)
        now = time.monotonic()
        window = request.app.state.hits[ip]
        while window and now - window[0] > 3600:
            window.popleft()
        if len(window) >= cfg.rate_limit_per_hour:
            raise HTTPException(
                status_code=429,
                detail="Too many requests. Please try again later or call one of our offices.",
            )
        window.append(now)

    @app.get("/api/health")
    def health() -> dict:
        return {"status": "ok"}

    @app.post("/api/quotes", response_model=QuoteCreated, status_code=201)
    def create_quote(
        payload: QuoteCreate,
        request: Request,
        background: BackgroundTasks,
        cfg: Settings = Depends(get_cfg),
    ) -> QuoteCreated:
        # Honeypot filled in -> silently accept but do not store (bot).
        if payload.company_website:
            return QuoteCreated(id=0, message="Thank you. We will be in touch shortly.")

        check_rate_limit(request, cfg)
        data = payload.model_dump(exclude={"company_website"})
        quote_id = db.insert_quote(cfg.database_path, data, client_ip(request))
        background.add_task(send_quote_email, cfg, quote_id, data)
        return QuoteCreated(id=quote_id, message="Thank you. We will be in touch shortly.")

    @app.get("/api/quotes", response_model=list[Quote])
    def get_quotes(
        cfg: Settings = Depends(get_cfg),
        x_admin_token: str = Header(default=""),
        limit: int = Query(default=100, ge=1, le=500),
        offset: int = Query(default=0, ge=0),
    ) -> list[dict]:
        if not cfg.admin_token:
            raise HTTPException(status_code=404, detail="Not found")
        if not hmac.compare_digest(x_admin_token, cfg.admin_token):
            raise HTTPException(status_code=401, detail="Invalid admin token")
        return db.list_quotes(cfg.database_path, limit=limit, offset=offset)

    # ---- Serve the built React app (single-page) ----
    dist = Path(settings.frontend_dist)
    if (dist / "index.html").is_file():
        assets = dist / "assets"
        if assets.is_dir():
            app.mount("/assets", StaticFiles(directory=assets), name="assets")

        @app.get("/{full_path:path}", include_in_schema=False)
        def spa(full_path: str) -> FileResponse:
            if full_path.startswith("api/"):
                raise HTTPException(status_code=404, detail="Not found")
            candidate = (dist / full_path).resolve()
            if full_path and candidate.is_file() and dist.resolve() in candidate.parents:
                return FileResponse(candidate)
            return FileResponse(dist / "index.html")

    return app


app = create_app()
