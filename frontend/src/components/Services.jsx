import { serviceImages } from '../data/content.js';
import { useI18n } from '../i18n/index.jsx';

export default function Services() {
  const { t } = useI18n();
  const s = t.services;
  return (
    <section id="services" className="container section services">
      <div className="section-head">
        <div>
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="h2">{s.title}</h2>
        </div>
        <p className="muted section-head__aside">{s.aside}</p>
      </div>

      <ul className="pillars" aria-label={s.pillarsLabel}>
        {s.pillars.map((p, i) => (
          <li key={i}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {p}
          </li>
        ))}
      </ul>

      <div className="services__grid">
        {s.items.map((item, i) => {
          const n = String(i + 1).padStart(2, '0');
          return (
            <article key={n} className="service-card">
              <div className="service-card__media">
                <img src={serviceImages[i]} alt={item.title} loading="lazy" />
                <span className="service-card__num">{n}</span>
              </div>
              <div className="service-card__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
