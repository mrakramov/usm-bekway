"""Application settings, read from environment variables (or a .env file)."""
from __future__ import annotations

import os
from dataclasses import dataclass, field
from pathlib import Path

try:  # optional: load backend/.env when python-dotenv is installed
    from dotenv import load_dotenv

    load_dotenv(Path(__file__).resolve().parent.parent / ".env")
except ImportError:  # pragma: no cover
    pass


def _split(value: str) -> list[str]:
    return [v.strip() for v in value.split(",") if v.strip()]


@dataclass(frozen=True)
class Settings:
    # SQLite database file for stored quote requests
    database_path: str = field(
        default_factory=lambda: os.getenv(
            "DATABASE_PATH",
            str(Path(__file__).resolve().parent.parent / "data" / "usm_bekway.db"),
        )
    )
    # Origins allowed to call the API from a browser (comma separated)
    cors_origins: list[str] = field(
        default_factory=lambda: _split(
            os.getenv("CORS_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173")
        )
    )
    # Token required to list quote requests via GET /api/quotes. Empty = endpoint disabled.
    admin_token: str = field(default_factory=lambda: os.getenv("ADMIN_TOKEN", ""))

    # Optional e-mail notification for each new quote request
    smtp_host: str = field(default_factory=lambda: os.getenv("SMTP_HOST", ""))
    smtp_port: int = field(default_factory=lambda: int(os.getenv("SMTP_PORT", "587")))
    smtp_user: str = field(default_factory=lambda: os.getenv("SMTP_USER", ""))
    smtp_password: str = field(default_factory=lambda: os.getenv("SMTP_PASSWORD", ""))
    smtp_use_tls: bool = field(
        default_factory=lambda: os.getenv("SMTP_USE_TLS", "true").lower() in {"1", "true", "yes"}
    )
    notify_from: str = field(default_factory=lambda: os.getenv("NOTIFY_FROM", ""))
    notify_to: list[str] = field(default_factory=lambda: _split(os.getenv("NOTIFY_TO", "")))

    # Folder with the built React app (frontend/dist). Served at "/" when present.
    frontend_dist: str = field(
        default_factory=lambda: os.getenv(
            "FRONTEND_DIST",
            str(Path(__file__).resolve().parents[2] / "frontend" / "dist"),
        )
    )

    # Simple anti-spam limit: max quote requests per client IP per hour
    rate_limit_per_hour: int = field(
        default_factory=lambda: int(os.getenv("RATE_LIMIT_PER_HOUR", "10"))
    )

    @property
    def email_enabled(self) -> bool:
        return bool(self.smtp_host and self.notify_to and (self.notify_from or self.smtp_user))


def get_settings() -> Settings:
    return Settings()
