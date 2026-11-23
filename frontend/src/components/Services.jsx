import { pillars, services } from '../data/content.js';

export default function Services() {
  return (
    <section id="services" className="container section services">
      <div className="section-head">
        <div>
          <p className="eyebrow">Our services</p>
          <h2 className="h2">One partner for every mode of transport.</h2>
        </div>
        <p className="muted section-head__aside">
          Your logistics office at every stage of the project — from first quote to final delivery.
        </p>
      </div>

      <ul className="pillars" aria-label="Service areas">
        {pillars.map((p, i) => (
          <li key={p}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {p}
          </li>
        ))}
      </ul>

      <div className="services__grid">
        {services.map((s) => (
          <article key={s.n} className="service-card">
            <div className="service-card__media">
              <img src={s.img} alt={s.title} loading="lazy" />
              <span className="service-card__num">{s.n}</span>
            </div>
            <div className="service-card__body">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
