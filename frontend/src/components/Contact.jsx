import { useState } from 'react';
import { companyDetails, contactEmail, offices, serviceOptions, team } from '../data/content.js';
import { submitQuote, DEMO_MODE } from '../api.js';

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  origin: '',
  destination: '',
  service: serviceOptions[0],
  details: '',
  company_website: '', // honeypot: real users never see or fill this
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await submitQuote(form);
      setStatus('sent');
      setForm(EMPTY);
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <p className="eyebrow">Contact</p>
          <h2 className="h2 h2--spaced">Let&apos;s move your cargo.</h2>
          <div className="offices">
            {offices.map((o) => (
              <div key={o.city} className={`office${o.primary ? ' office--primary' : ''}`}>
                <div className="office__city">{o.city}</div>
                <div className="office__addr">{o.address}</div>
                <div className="office__phones">
                  {o.phones.map((ph) => (
                    <a key={ph.tel} href={`tel:${ph.tel}`}>{ph.label}</a>
                  ))}
                </div>
              </div>
            ))}
            <div className="office">
              <div className="office__city">Management — direct lines</div>
              {team.map((p) => (
                <div key={p.name} className="office__addr">
                  {p.name}, {p.role}:{' '}
                  {p.phones.map((ph, i) => (
                    <span key={ph.tel}>
                      {i > 0 && ', '}
                      <a href={`tel:${ph.tel}`}>{ph.label}</a>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="office">
              <div className="office__city">E-mail</div>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </div>

          <div className="requisites">
            <h3>Company details</h3>
            <p className="requisites__name">{companyDetails.legalName}</p>
            <p className="requisites__addr">{companyDetails.address}</p>
            <dl>
              {companyDetails.rows.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <form className="quote-form" onSubmit={onSubmit}>
          <h3>Request a quote</h3>

          {status === 'sent' ? (
            <div className="form-success" role="status">
              {DEMO_MODE ? (
                <>
                  <strong>Form check passed (preview).</strong>
                  <p>This preview is not connected to the backend, so nothing was sent.</p>
                </>
              ) : (
                <>
                  <strong>Thank you — your request has been sent.</strong>
                  <p>Our team will reply with a route and a price shortly.</p>
                </>
              )}
              <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>
                Send another request
              </button>
            </div>
          ) : (
            <>
              <div className="form-grid">
                <label>
                  Full name
                  <input type="text" required maxLength={120} value={form.name} onChange={update('name')} autoComplete="name" />
                </label>
                <label>
                  Email
                  <input type="email" required maxLength={200} placeholder="you@company.com" value={form.email} onChange={update('email')} autoComplete="email" />
                </label>
                <label>
                  Origin
                  <input type="text" required maxLength={120} placeholder="e.g. Hamburg" value={form.origin} onChange={update('origin')} />
                </label>
                <label>
                  Destination
                  <input type="text" required maxLength={120} placeholder="e.g. Tashkent" value={form.destination} onChange={update('destination')} />
                </label>
                <label>
                  Service
                  <select value={form.service} onChange={update('service')}>
                    {serviceOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Phone <span className="optional">(optional)</span>
                  <input type="tel" maxLength={40} value={form.phone} onChange={update('phone')} autoComplete="tel" />
                </label>
              </div>
              <label>
                Cargo details
                <textarea rows={4} maxLength={2000} placeholder="Weight, dimensions, ready date" value={form.details} onChange={update('details')} />
              </label>

              <div className="hp" aria-hidden="true">
                <label>
                  Company website
                  <input type="text" tabIndex={-1} autoComplete="off" value={form.company_website} onChange={update('company_website')} />
                </label>
              </div>

              {DEMO_MODE && (
                <p className="demo-note">Preview mode: submissions are not sent anywhere.</p>
              )}

              {status === 'error' && (
                <p className="form-error" role="alert">{error}</p>
              )}

              <button type="submit" className="btn btn--gold btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send request'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
