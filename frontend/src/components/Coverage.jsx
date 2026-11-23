import { highlightedRegion } from '../data/content.js';
import { useI18n } from '../i18n/index.jsx';

export default function Coverage() {
  const { t } = useI18n();
  return (
    <section id="coverage" className="container section">
      <p className="eyebrow">{t.coverage.eyebrow}</p>
      <h2 className="h2 h2--spaced">{t.coverage.title}</h2>
      <div className="coverage__grid">
        {t.coverage.regions.map((r, i) => (
          <div key={i} className={`region${i === highlightedRegion ? ' region--highlight' : ''}`}>
            <h3>{r.name}</h3>
            <p>{r.countries}</p>
            {r.note && <p className="region__note">{r.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
