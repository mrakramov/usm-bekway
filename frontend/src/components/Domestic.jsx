import { img } from '../assetPath.js';
import { cargoTypes, domesticCities, specialServices } from '../data/content.js';

export default function Domestic() {
  return (
    <section id="domestic" className="domestic">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Domestic transport · Türkiye</p>
            <h2 className="h2">A national network in all four corners of Turkey.</h2>
          </div>
          <p className="muted section-head__aside">
            For all your domestic, complete, groupage and dedicated shipments — the most appropriate
            quality-price service.
          </p>
        </div>

        <div className="domestic__top">
          <figure className="domestic__map">
            <img src={img('turkey-network.jpg')} alt="Map of Turkey showing routes between Istanbul, Bursa, Izmir, Ankara, Mersin, Gaziantep and Trabzon" loading="lazy" />
            <figcaption>
              <ul className="chips chips--dark">
                {domesticCities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </figcaption>
          </figure>

          <div className="cargo-types">
            <h3>Cargo we carry</h3>
            <ul>
              {cargoTypes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="domestic__sub">Special services</h3>
        <div className="special-grid">
          {specialServices.map((s) => (
            <article key={s.title} className="special">
              <img src={s.img} alt="" loading="lazy" />
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
