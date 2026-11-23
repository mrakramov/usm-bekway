import { regions } from '../data/content.js';

export default function Coverage() {
  return (
    <section id="coverage" className="container section">
      <p className="eyebrow">Coverage</p>
      <h2 className="h2 h2--spaced">From the Atlantic to the Pamir.</h2>
      <div className="coverage__grid">
        {regions.map((r) => (
          <div key={r.name} className={`region${r.highlight ? ' region--highlight' : ''}`}>
            <h3>{r.name}</h3>
            <p>{r.countries}</p>
            {r.note && <p className="region__note">{r.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
