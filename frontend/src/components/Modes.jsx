import { modeMeta } from '../data/content.js';
import { useI18n } from '../i18n/index.jsx';

export default function Modes() {
  const { t } = useI18n();
  return (
    <section id="modes" className="container section modes">
      <p className="eyebrow">{t.modes.eyebrow}</p>
      <h2 className="h2 h2--spaced">{t.modes.title}</h2>
      <div className="modes__list">
        {t.modes.items.map((m, i) => (
          <article key={modeMeta[i].id} id={modeMeta[i].id} className={`mode${i % 2 ? ' mode--flip' : ''}`}>
            <div className="mode__media">
              <img src={modeMeta[i].img} alt={m.alt} loading="lazy" />
            </div>
            <div className="mode__copy">
              <p className="eyebrow">{m.eyebrow}</p>
              <h3 className="mode__title">{m.title}</h3>
              {m.paragraphs.map((p, j) => (
                <p key={j} className="mode__text">{p}</p>
              ))}
              <ul className="chips">
                {m.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
