from __future__ import annotations

from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator

ServiceType = Literal[
    "Road freight",
    "Air freight",
    "Sea freight",
    "Intermodal",
    "Project cargo",
    "Domestic transport",
    "Warehousing & distribution",
    "Customs clearance",
]


class QuoteCreate(BaseModel):
    """Payload sent by the website's "Request a quote" form."""

    model_config = ConfigDict(str_strip_whitespace=True)

    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(default="", max_length=40)
    origin: str = Field(min_length=2, max_length=120)
    destination: str = Field(min_length=2, max_length=120)
    service: ServiceType
    details: str = Field(default="", max_length=2000)
    # Honeypot field — hidden from humans; bots tend to fill it in.
    company_website: str = Field(default="", max_length=200)

    @field_validator("phone")
    @classmethod
    def phone_chars(cls, v: str) -> str:
        allowed = set("0123456789+-() ")
        if v and not set(v) <= allowed:
            raise ValueError("Phone number may only contain digits, spaces and + - ( )")
        return v


class QuoteCreated(BaseModel):
    id: int
    message: str


class Quote(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    origin: str
    destination: str
    service: str
    details: str
    created_at: datetime
