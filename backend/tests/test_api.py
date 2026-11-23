from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from app.config import Settings
from app.main import create_app

VALID = {
    "name": "Aziz Karimov",
    "email": "aziz@example.com",
    "phone": "+998 90 123 45 67",
    "origin": "Hamburg",
    "destination": "Tashkent",
    "service": "Road freight",
    "details": "2 pallets, 800 kg, ready next week",
}


@pytest.fixture()
def client(tmp_path):
    settings = Settings(
        database_path=str(tmp_path / "test.db"),
        admin_token="secret-token",
        frontend_dist=str(tmp_path / "no-dist"),
        rate_limit_per_hour=3,
    )
    return TestClient(create_app(settings))


def test_health(client):
    assert client.get("/api/health").json() == {"status": "ok"}


def test_create_and_list_quote(client):
    res = client.post("/api/quotes", json=VALID)
    assert res.status_code == 201
    quote_id = res.json()["id"]
    assert quote_id > 0

    listed = client.get("/api/quotes", headers={"X-Admin-Token": "secret-token"})
    assert listed.status_code == 200
    rows = listed.json()
    assert len(rows) == 1
    assert rows[0]["id"] == quote_id
    assert rows[0]["destination"] == "Tashkent"


def test_list_requires_token(client):
    assert client.get("/api/quotes").status_code == 401
    assert client.get("/api/quotes", headers={"X-Admin-Token": "wrong"}).status_code == 401


@pytest.mark.parametrize(
    "field,value",
    [
        ("email", "not-an-email"),
        ("name", ""),
        ("origin", "x"),
        ("service", "Teleportation"),
        ("phone", "call me maybe"),
    ],
)
def test_validation_errors(client, field, value):
    res = client.post("/api/quotes", json={**VALID, field: value})
    assert res.status_code == 422


def test_honeypot_is_not_stored(client):
    res = client.post("/api/quotes", json={**VALID, "company_website": "http://spam"})
    assert res.status_code == 201
    assert res.json()["id"] == 0
    rows = client.get("/api/quotes", headers={"X-Admin-Token": "secret-token"}).json()
    assert rows == []


def test_rate_limit(client):
    for _ in range(3):
        assert client.post("/api/quotes", json=VALID).status_code == 201
    assert client.post("/api/quotes", json=VALID).status_code == 429
