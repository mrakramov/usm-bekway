import { img } from '../assetPath.js';
import { useI18n } from '../i18n/index.jsx';

export default function About() {
  const { t } = useI18n();
  const a = t.about;
  return (
    <section id="about" className="container section about-wrap">
      <div className="about">
        <div className="about__logo">
          <img src={img('logo-full.png')} alt={a.logoAlt} loading="lazy" />
        </div>
        <div className="about__copy">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 className="h2 h2--md">{a.title}</h2>
          <p className="about__text">{a.p1}</p>
          <p className="about__text">{a.p2}</p>
          <ul className="tags">
            {a.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>

      <ol className="timeline" aria-label={a.historyLabel}>
        {a.history.map((h) => (
          <li key={h.year} className="timeline__item">
            <span className="timeline__year">{h.year}</span>
            <p>{h.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
