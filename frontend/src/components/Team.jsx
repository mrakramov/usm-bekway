import { team } from '../data/content.js';

export default function Team() {
  return (
    <section id="team" className="container section team">
      <div className="section-head">
        <div>
          <p className="eyebrow">Leadership</p>
          <h2 className="h2">The people behind your cargo.</h2>
        </div>
        <p className="muted section-head__aside">
          Talk directly to our management in Tashkent.
        </p>
      </div>

      <div className="team__grid">
        {team.map((p) => (
          <article key={p.name} className="person">
            <div className="person__photo">
              <img src={p.photo} alt={`Portrait of ${p.name}`} loading="lazy" />
            </div>
            <div className="person__body">
              <p className="person__role">{p.role}</p>
              <h3 className="person__name">{p.name}</h3>
              <p className="person__native" lang="ru">{p.nameRu}</p>
              <ul className="person__phones">
                {p.phones.map((ph) => (
                  <li key={ph.tel}>
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                    <a href={`tel:${ph.tel}`}>{ph.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
