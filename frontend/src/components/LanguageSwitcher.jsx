import { useEffect, useRef, useState } from 'react';
import { LANGUAGES, useI18n } from '../i18n/index.jsx';

export default function LanguageSwitcher({ onChange }) {
  const { lang, setLang, t, language } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (code) => {
    setLang(code);
    setOpen(false);
    onChange?.();
  };

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang__toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${language.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
        </svg>
        <span>{language.short}</span>
        <svg className="lang__chev" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul className="lang__menu" role="listbox" aria-label={t.nav.language}>
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button type="button" lang={l.htmlLang} onClick={() => choose(l.code)} className={l.code === lang ? 'is-active' : ''}>
                <span className="lang__short">{l.short}</span>
                <span>{l.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
