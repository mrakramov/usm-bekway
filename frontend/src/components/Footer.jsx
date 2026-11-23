import { contactEmail, website } from '../data/content.js';
import { useI18n } from '../i18n/index.jsx';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">© {new Date().getFullYear()} {t.footer.rights}</span>
          <span className="footer__legal">{t.contact.details.legalName}</span>
        </div>
        <div className="footer__links">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
        </div>
      </div>
    </footer>
  );
}
