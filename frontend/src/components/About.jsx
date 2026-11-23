import { img } from '../assetPath.js';
import { aboutTags, history } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="container section about-wrap">
      <div className="about">
        <div className="about__logo">
          <img src={img('logo-full.png')} alt="USM Bekway Logistics logo" loading="lazy" />
        </div>
        <div className="about__copy">
          <p className="eyebrow">About us</p>
          <h2 className="h2 h2--md">A century of freight experience, passed from father to son.</h2>
          <p className="about__text">
            We are the partner and companion of our customers in a growing and developing economy —
            the logistics solution office of customers who trust us with their experience and
            knowledge at every stage of the project.
          </p>
          <p className="about__text">
            With a strong organisational structure, we make a difference by producing special
            boutique services and flexible solutions.
          </p>
          <ul className="tags">
            {aboutTags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <ol className="timeline" aria-label="Company history">
        {history.map((h) => (
          <li key={h.year} className="timeline__item">
            <span className="timeline__year">{h.year}</span>
            <p>{h.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
