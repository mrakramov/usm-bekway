import { img } from '../assetPath.js';
export default function Gallery() {
  return (
    <section aria-label="Fleet and facilities" className="container gallery">
      <figure className="gallery__item gallery__item--wide">
        <img src={img('warehouse-ext.jpg')} alt="Warehouse with trucks at loading docks" loading="lazy" />
        <figcaption>Warehousing &amp; distribution</figcaption>
      </figure>
      <figure className="gallery__item">
        <img src={img('reefer.jpg')} alt="Insulated refrigerated trailer interior" loading="lazy" />
        <figcaption>Refrigerated transport</figcaption>
      </figure>
    </section>
  );
}
