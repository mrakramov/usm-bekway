# USM Bekway Logistics — Website

Company website for **USM Bekway Logistics**: road, air, sea, intermodal and project cargo
between Europe, the Middle East and Central Asia.

- **Frontend:** React 18 + Vite (`frontend/`)
- **Backend:** Python, FastAPI + SQLite (`backend/`) — handles the "Request a quote" form

```
usm-bekway/
├── frontend/              React site (design: "Option A — Noir Gold", gray theme)
│   ├── public/images/     logo and photos
│   └── src/
│       ├── components/    Header, Hero, Stats, Services, Coverage, ProjectCargo,
│       │                  About, Gallery, Contact, Footer
│       ├── data/content.js  all page copy (services, countries, offices…)
│       ├── api.js         calls the backend
│       └── styles.css     design tokens + styles
├── backend/
│   ├── app/               FastAPI app (main.py, schemas.py, db.py, notify.py, config.py)
│   └── tests/             pytest suite
├── Dockerfile             one image: builds the site and serves it with the API
└── docker-compose.yml
```

## Run locally

**Backend** (Python 3.10+):

```bash
cd backend
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements-dev.txt
cp .env.example .env             # then edit ADMIN_TOKEN etc.
uvicorn app.main:app --reload --port 8000
```

API docs: http://localhost:8000/api/docs

**Frontend** (Node 18+), in a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 — requests to `/api` are proxied to the backend on port 8000.

## API

| Method | Path          | Description                                                        |
|--------|---------------|--------------------------------------------------------------------|
| GET    | `/api/health` | Health check                                                       |
| POST   | `/api/quotes` | Save a quote request (validated; honeypot + per-IP rate limit)     |
| GET    | `/api/quotes` | List quote requests — header `X-Admin-Token: <ADMIN_TOKEN>`        |

Example:

```bash
curl -X POST http://localhost:8000/api/quotes \
  -H "Content-Type: application/json" \
  -d '{"name":"Aziz Karimov","email":"aziz@example.com","origin":"Hamburg",
       "destination":"Tashkent","service":"Road freight","details":"2 pallets, 800 kg"}'

curl http://localhost:8000/api/quotes -H "X-Admin-Token: change-me"
```

Set the `SMTP_*` and `NOTIFY_TO` variables in `backend/.env` to receive an e-mail for every new
request. All settings are documented in [`backend/.env.example`](backend/.env.example).

## Tests

```bash
cd backend && pytest
```

## Production

Build the site and let FastAPI serve it together with the API:

```bash
cd frontend && npm run build          # creates frontend/dist
cd ../backend && uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Or with Docker:

```bash
docker compose up --build -d          # http://localhost:8000
```

If the frontend is hosted separately (e.g. Vercel/Netlify), build it with
`VITE_API_URL=https://api.your-domain.com npm run build` and add that site's URL to
`CORS_ORIGINS` in the backend.

## Still to fill in

- Company e-mail and website in `frontend/src/data/content.js` (`[YOUR EMAIL]`, `[YOUR WEBSITE]`).
- Photos in `frontend/public/images/` come from the company presentation and are low resolution
  (~500–1000 px). Replace them with original high-resolution photos (same file names) for best
  quality.
