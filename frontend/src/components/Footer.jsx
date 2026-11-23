import { contactEmail, legalName, website } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">© {new Date().getFullYear()} USM Bekway Logistics</span>
          <span className="footer__legal">{legalName}</span>
        </div>
        <div className="footer__links">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
        </div>
      </div>
    </footer>
  );
}
