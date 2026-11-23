import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { img } from '../assetPath.js';
import { navLinks } from '../data/content.js';
import { useI18n } from '../i18n/index.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const MOBILE_MAX = 900; // always use the menu button at or below this width
const GAPS = 48; // spacing between brand, nav and actions

export default function Header() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(true);
  const innerRef = useRef(null);
  const brandRef = useRef(null);
  const navRef = useRef(null);
  const actionsRef = useRef(null);
  const neededRef = useRef(0); // width the full menu needs in the current language

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Measure how wide the full menu is. The nav is laid out off-screen in its
  // desktop form (via the measuring class) so this works while compact too.
  const measure = useCallback(() => {
    const inner = innerRef.current;
    const nav = navRef.current;
    if (!inner || !nav) return;
    nav.classList.add('nav--measure');
    const needed =
      (brandRef.current?.offsetWidth || 0) +
      nav.scrollWidth +
      (actionsRef.current?.querySelector('.lang')?.offsetWidth || 0) +
      GAPS;
    nav.classList.remove('nav--measure');
    neededRef.current = needed;
    const styles = getComputedStyle(inner);
    const available = inner.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
    setCompact(window.innerWidth <= MOBILE_MAX || needed > available);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [lang, measure]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    // Fonts load after first paint and change text widths
    document.fonts?.ready?.then(measure).catch(() => {});
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  useEffect(() => {
    if (!compact) setOpen(false);
  }, [compact]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${compact ? ' header--compact' : ''}`}>
      <div className="container header__inner" ref={innerRef}>
        <a href="#top" className="brand" onClick={close} ref={brandRef}>
          <img src={img('logo-mark.png')} alt="" width="40" height="42" />
          <span className="brand__text">
            <span className="brand__name">USM BEKWAY</span>
            <span className="brand__sub">LOGISTICS</span>
          </span>
        </a>

        <div className="header__actions" ref={actionsRef}>
          <LanguageSwitcher onChange={close} />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav id="main-nav" aria-label="Main" className={`nav${open ? ' nav--open' : ''}`} ref={navRef}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {t.nav[l.key]}
            </a>
          ))}
          <a href="#contact" className="btn btn--gold nav__cta" onClick={close}>
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
