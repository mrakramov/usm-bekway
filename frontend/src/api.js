// Base URL of the Python backend. Empty string = same origin (dev proxy or
// production build served by FastAPI). Override with VITE_API_URL at build time.
const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

// Static preview builds (VITE_DEMO_MODE=true) have no backend: the form is
// validated in the browser and nothing is sent.
export const DEMO_MODE = import.meta.env.VITE_DEMO_MODE === 'true';

export async function submitQuote(payload) {
  if (DEMO_MODE) {
    await new Promise((r) => setTimeout(r, 600));
    return { id: 0, demo: true };
  }
  const res = await fetch(`${API_URL}/api/quotes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }

  if (!res.ok) {
    const detail = data?.detail;
    let message = 'Something went wrong. Please try again or call us.';
    if (Array.isArray(detail) && detail.length) {
      message = detail.map((d) => d.msg).join(' ');
    } else if (typeof detail === 'string') {
      message = detail;
    }
    throw new Error(message);
  }
  return data;
}
