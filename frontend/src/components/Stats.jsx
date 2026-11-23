import { stats } from '../data/content.js';

export default function Stats() {
  return (
    <section aria-label="Key figures" className="stats">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
