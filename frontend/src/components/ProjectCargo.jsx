import { img } from '../assetPath.js';
import { useI18n } from '../i18n/index.jsx';

export default function ProjectCargo() {
  const { t } = useI18n();
  const p = t.project;
  return (
    <section id="project" className="project-wrap">
      <div className="container">
        <div className="project">
          <div className="project__copy">
            <p className="eyebrow eyebrow--dark">{p.eyebrow}</p>
            <h2 className="h2 h2--dark">{p.title}</h2>
            <p className="project__lead">{p.lead}</p>
            <ul className="chips chips--onGold">
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project__stats">
            <div className="project__stat"><strong>{p.length.value}</strong><span>{p.length.label}</span></div>
            <div className="project__stat"><strong>{p.weight.value}</strong><span>{p.weight.label}</span></div>
          </div>
          <div className="project__photos">
            <img src={img('project.jpg')} alt={p.photo1Alt} loading="lazy" />
            <img src={img('lowbed.jpg')} alt={p.photo2Alt} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
