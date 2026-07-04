'use client';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about',     label: 'About'     },
  { href: '#amenities', label: 'Amenities' },
  { href: '#games',     label: 'Vault'     },
  { href: '#pricing',   label: 'Rates'     },
  { href: '#location',  label: 'Location'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile,   setMobile]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">
          INFINITY<span>.</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
            className="nav-cta desktop-only"
          >
            Book Session
          </button>
          <button
            onClick={() => setMobile(true)}
            className="mobile-only"
            style={{
              background: 'var(--surface-3)',
              border: '1px solid var(--red-border)',
              color: 'var(--white)',
              padding: '.45rem .9rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'none',
              fontSize: '.75rem',
              fontWeight: 700,
              letterSpacing: '.1em',
            }}
            aria-label="Menu"
          >
            MENU
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobile && (
        <div className="mobile-nav">
          <button
            onClick={() => setMobile(false)}
            style={{
              position: 'absolute', top: '2rem', right: '2rem',
              background: 'none', border: '1px solid var(--border-md)', color: 'var(--grey-1)',
              width: '42px', height: '42px', borderRadius: 'var(--radius-full)', cursor: 'none', fontSize: '1.2rem',
            }}
          >
            ✕
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobile(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMobile(false); window.dispatchEvent(new CustomEvent('openContactModal')); }}
            className="btn btn-red"
            style={{ marginTop: '1.5rem' }}
          >
            Book Session
          </button>
        </div>
      )}
    </>
  );
}
