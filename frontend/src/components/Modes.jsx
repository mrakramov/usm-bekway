import { modes } from '../data/content.js';

export default function Modes() {
  return (
    <section id="modes" className="container section modes">
      <p className="eyebrow">How we move it</p>
      <h2 className="h2 h2--spaced">Road, air, sea — or all three.</h2>
      <div className="modes__list">
        {modes.map((m, i) => (
          <article key={m.id} id={m.id} className={`mode${i % 2 ? ' mode--flip' : ''}`}>
            <div className="mode__media">
              <img src={m.img} alt={m.alt} loading="lazy" />
            </div>
            <div className="mode__copy">
              <p className="eyebrow">{m.eyebrow}</p>
              <h3 className="mode__title">{m.title}</h3>
              {m.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mode__text">{p}</p>
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
