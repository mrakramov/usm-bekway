import { useState } from 'react';
import { contactEmail, officePhones, serviceOptions, teamMeta } from '../data/content.js';
import { submitQuote, DEMO_MODE } from '../api.js';
import { useI18n } from '../i18n/index.jsx';

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
  const { t } = useI18n();
  const c = t.contact;
  const f = t.form;
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorKind, setErrorKind] = useState('error'); // error | invalid | rateLimit

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitQuote(form);
      setStatus('sent');
      setForm(EMPTY);
    } catch (err) {
      setErrorKind(err.status === 429 ? 'rateLimit' : err.status === 422 ? 'invalid' : 'error');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="h2 h2--spaced">{c.title}</h2>
          <div className="offices">
            {c.offices.map((o, i) => (
              <div key={i} className={`office${i === 0 ? ' office--primary' : ''}`}>
                <div className="office__city">{o.city}</div>
                <div className="office__addr">{o.address}</div>
                <div className="office__phones">
                  {officePhones[i].map((ph) => (
                    <a key={ph.tel} href={`tel:${ph.tel}`}>{ph.label}</a>
                  ))}
                </div>
              </div>
            ))}
            <div className="office">
              <div className="office__city">{c.management}</div>
              {t.team.members.map((m, i) => (
                <div key={m.name} className="office__addr">
                  {m.name}, {m.role}:{' '}
                  {teamMeta[i].phones.map((ph, j) => (
                    <span key={ph.tel}>
                      {j > 0 && ', '}
                      <a href={`tel:${ph.tel}`}>{ph.label}</a>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="office">
              <div className="office__city">{c.email}</div>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </div>

          <div className="requisites">
            <h3>{c.details.title}</h3>
            <p className="requisites__name">{c.details.legalName}</p>
            <p className="requisites__addr">{c.details.address}</p>
            <dl>
              {c.details.rows.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <form className="quote-form" onSubmit={onSubmit}>
          <h3>{f.title}</h3>

          {status === 'sent' ? (
            <div className="form-success" role="status">
              <strong>{DEMO_MODE ? f.demoTitle : f.successTitle}</strong>
              <p>{DEMO_MODE ? f.demoText : f.successText}</p>
              <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>
                {f.another}
              </button>
            </div>
          ) : (
            <>
              <div className="form-grid">
                <label>
                  {f.name}
                  <input type="text" required minLength={2} maxLength={120} value={form.name} onChange={update('name')} autoComplete="name" />
                </label>
                <label>
                  {f.email}
                  <input type="email" required maxLength={200} placeholder={f.emailPh} value={form.email} onChange={update('email')} autoComplete="email" />
                </label>
                <label>
                  {f.origin}
                  <input type="text" required minLength={2} maxLength={120} placeholder={f.originPh} value={form.origin} onChange={update('origin')} />
                </label>
                <label>
                  {f.destination}
                  <input type="text" required minLength={2} maxLength={120} placeholder={f.destinationPh} value={form.destination} onChange={update('destination')} />
                </label>
                <label>
                  {f.service}
                  <select value={form.service} onChange={update('service')}>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{f.services[s]}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>
                    {f.phone} <span className="optional">{f.optional}</span>
                  </span>
                  <input type="tel" maxLength={40} pattern="[0-9+()\-\s]*" value={form.phone} onChange={update('phone')} autoComplete="tel" />
                </label>
              </div>
              <label>
                {f.details}
                <textarea rows={4} maxLength={2000} placeholder={f.detailsPh} value={form.details} onChange={update('details')} />
              </label>

              <div className="hp" aria-hidden="true">
                <label>
                  Company website
                  <input type="text" tabIndex={-1} autoComplete="off" value={form.company_website} onChange={update('company_website')} />
                </label>
              </div>

              {DEMO_MODE && <p className="demo-note">{f.demoNote}</p>}

              {status === 'error' && (
                <p className="form-error" role="alert">{f[errorKind]}</p>
              )}

              <button type="submit" className="btn btn--gold btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? f.sending : f.send}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
