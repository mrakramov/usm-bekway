"""Optional e-mail notification when a new quote request arrives."""
from __future__ import annotations

import logging
import smtplib
from email.message import EmailMessage

from .config import Settings

log = logging.getLogger("usm_bekway.notify")


def send_quote_email(settings: Settings, quote_id: int, data: dict) -> None:
    if not settings.email_enabled:
        return

    msg = EmailMessage()
    msg["Subject"] = f"New quote request #{quote_id}: {data['origin']} → {data['destination']}"
    msg["From"] = settings.notify_from or settings.smtp_user
    msg["To"] = ", ".join(settings.notify_to)
    msg["Reply-To"] = data["email"]
    msg.set_content(
        "\n".join(
            [
                f"Request #{quote_id}",
                "",
                f"Name:        {data['name']}",
                f"Email:       {data['email']}",
                f"Phone:       {data.get('phone') or '-'}",
                f"Service:     {data['service']}",
                f"Origin:      {data['origin']}",
                f"Destination: {data['destination']}",
                "",
                "Cargo details:",
                data.get("details") or "-",
            ]
        )
    )

    try:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15) as smtp:
            if settings.smtp_use_tls:
                smtp.starttls()
            if settings.smtp_user:
                smtp.login(settings.smtp_user, settings.smtp_password)
            smtp.send_message(msg)
    except Exception:  # never fail the request because e-mail is down
        log.exception("Could not send notification e-mail for quote %s", quote_id)
