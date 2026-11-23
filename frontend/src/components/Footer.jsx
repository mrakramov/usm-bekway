import { contactEmail, website } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} USM Bekway Logistics</span>
        <span>
          {contactEmail} · {website}
        </span>
      </div>
    </footer>
  );
}
