import { img } from '../assetPath.js';
import { useEffect, useState } from 'react';
import { navLinks } from '../data/content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" onClick={close}>
          <img src={img('logo-mark.png')} alt="" width="40" height="42" />
          <span className="brand__text">
            <span className="brand__name">USM BEKWAY</span>
            <span className="brand__sub">LOGISTICS</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-nav" aria-label="Main" className={`nav${open ? ' nav--open' : ''}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--gold nav__cta" onClick={close}>
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
