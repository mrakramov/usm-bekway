import { img } from '../assetPath.js';
import { aboutTags } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="container section about">
      <div className="about__logo">
        <img src={img('logo-full.png')} alt="USM Bekway Logistics logo" loading="lazy" />
      </div>
      <div className="about__copy">
        <p className="eyebrow">About us</p>
        <h2 className="h2 h2--md">A century of freight experience, passed from father to son.</h2>
        <p className="about__text">
          Our roots go back to freight runs from Mesopotamia to Baghdad, Amman and Damascus in the
          1900s. Today we are the partner and companion of our customers in a growing economy — a
          strong organisation delivering boutique services and flexible solutions from Europe to Asia.
        </p>
        <ul className="tags">
          {aboutTags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
