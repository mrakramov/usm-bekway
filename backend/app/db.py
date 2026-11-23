"""Tiny SQLite persistence layer for quote requests."""
from __future__ import annotations

import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterator

SCHEMA = """
CREATE TABLE IF NOT EXISTS quotes (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT NOT NULL,
    email       TEXT NOT NULL,
    phone       TEXT NOT NULL DEFAULT '',
    origin      TEXT NOT NULL,
    destination TEXT NOT NULL,
    service     TEXT NOT NULL,
    details     TEXT NOT NULL DEFAULT '',
    client_ip   TEXT NOT NULL DEFAULT '',
    created_at  TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes (created_at);
"""


def init_db(path: str) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    with connect(path) as conn:
        conn.executescript(SCHEMA)


@contextmanager
def connect(path: str) -> Iterator[sqlite3.Connection]:
    conn = sqlite3.connect(path)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def insert_quote(path: str, data: dict, client_ip: str) -> int:
    with connect(path) as conn:
        cur = conn.execute(
            """INSERT INTO quotes (name, email, phone, origin, destination, service, details,
                                   client_ip, created_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            (
                data["name"],
                data["email"],
                data.get("phone", ""),
                data["origin"],
                data["destination"],
                data["service"],
                data.get("details", ""),
                client_ip,
                datetime.now(timezone.utc).isoformat(),
            ),
        )
        return int(cur.lastrowid)


def list_quotes(path: str, limit: int = 100, offset: int = 0) -> list[dict]:
    with connect(path) as conn:
        rows = conn.execute(
            """SELECT id, name, email, phone, origin, destination, service, details, created_at
               FROM quotes ORDER BY id DESC LIMIT ? OFFSET ?""",
            (limit, offset),
        ).fetchall()
    return [dict(r) for r in rows]
