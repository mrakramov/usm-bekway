import { img } from '../assetPath.js';

const heroBg = {
  backgroundImage: `linear-gradient(90deg, rgba(42, 43, 46, 0.97) 0%, rgba(42, 43, 46, 0.88) 48%, rgba(42, 43, 46, 0.55) 100%), url(${img('road-truck.jpg')})`,
};

export default function Hero() {
  return (
    <section id="top" className="hero" style={heroBg}>
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--line">Europe · Middle East · Central Asia</p>
          <h1 className="hero__title">
            Freight that moves
            <br />
            between <span className="gold">continents.</span>
          </h1>
          <p className="hero__lead">
            Road, air, sea and intermodal transport from every corner of Europe to Turkey, the Gulf
            and Central Asia — with boutique service and flexible solutions at every stage of your
            project.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn--gold btn--lg">Request a quote</a>
            <a href="#services" className="btn btn--ghost btn--lg">Explore services</a>
          </div>
        </div>

        <div className="route-card">
          <div className="route-card__head">
            <span>Transit corridor</span>
            <span className="gold">● Active lanes</span>
          </div>
          <svg
            viewBox="0 0 400 220"
            role="img"
            aria-label="Route from Europe through Istanbul and Mersin to Tashkent"
            className="route-card__map"
          >
            <path d="M20 70 C 120 40, 150 150, 230 120 S 340 60, 380 90" fill="none" stroke="#55565C" strokeWidth="2" />
            <path
              className="route-card__dash"
              d="M20 70 C 120 40, 150 150, 230 120 S 340 60, 380 90"
              fill="none"
              stroke="#E3B341"
              strokeWidth="2.5"
              strokeDasharray="6 8"
            />
            <circle cx="20" cy="70" r="7" fill="#2A2B2E" stroke="#E3B341" strokeWidth="2.5" />
            <circle cx="150" cy="105" r="7" fill="#2A2B2E" stroke="#E3B341" strokeWidth="2.5" />
            <circle cx="230" cy="120" r="7" fill="#2A2B2E" stroke="#E3B341" strokeWidth="2.5" />
            <circle cx="380" cy="90" r="9" fill="#E3B341" />
            <text x="20" y="45" fill="#D9D3C7" fontSize="13">Europe</text>
            <text x="118" y="140" fill="#D9D3C7" fontSize="13">Istanbul</text>
            <text x="210" y="155" fill="#D9D3C7" fontSize="13">Mersin</text>
            <text x="335" y="65" fill="#FFFFFF" fontSize="13" fontWeight="600">Tashkent</text>
          </svg>
          <div className="route-card__modes">
            <div><strong>Road</strong><span>FTL · LTL · Low-bed</span></div>
            <div><strong>Air</strong><span>Door-to-door</span></div>
            <div><strong>Sea</strong><span>FCL · Groupage</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
