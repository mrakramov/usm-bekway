import { img } from '../assetPath.js';
import { projectItems } from '../data/content.js';

export default function ProjectCargo() {
  return (
    <section id="project" className="project-wrap">
      <div className="container">
        <div className="project">
          <div className="project__copy">
            <p className="eyebrow eyebrow--dark">Project transportation</p>
            <h2 className="h2 h2--dark">Heavy, oversized, handled.</h2>
            <p className="project__lead">
              Parts up to 80 metres long and 1000 tonnes can be transported, loaded and reloaded with
              hydraulic trailers and/or cranes right at your work or construction site.
            </p>
            <ul className="chips chips--onGold">
              {projectItems.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="project__stats">
            <div className="project__stat"><strong>80 m</strong><span>Max part length</span></div>
            <div className="project__stat"><strong>1000 t</strong><span>Max part weight</span></div>
          </div>
          <div className="project__photos">
            <img src={img('project.jpg')} alt="Oversized cylindrical cargo on a hydraulic trailer" loading="lazy" />
            <img src={img('lowbed.jpg')} alt="Low-bed trailer on a coastal road" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
