import { img } from '../assetPath.js';
import { specialImages } from '../data/content.js';
import { useI18n } from '../i18n/index.jsx';

export default function Domestic() {
  const { t } = useI18n();
  const d = t.domestic;
  return (
    <section id="domestic" className="domestic">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">{d.eyebrow}</p>
            <h2 className="h2">{d.title}</h2>
          </div>
          <p className="muted section-head__aside">{d.aside}</p>
        </div>

        <div className="domestic__top">
          <figure className="domestic__map">
            <img src={img('turkey-network.jpg')} alt={d.mapAlt} loading="lazy" />
            <figcaption>
              <ul className="chips chips--dark">
                {d.cities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </figcaption>
          </figure>

          <div className="cargo-types">
            <h3>{d.cargoTitle}</h3>
            <ul>
              {d.cargo.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="domestic__sub">{d.specialTitle}</h3>
        <div className="special-grid">
          {d.special.map((s, i) => (
            <article key={i} className="special">
              <img src={specialImages[i]} alt="" loading="lazy" />
              <div className="special__body">
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
