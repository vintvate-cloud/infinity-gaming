'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#games', label: 'Vault' },
  { href: '#pricing', label: 'Rates' },
  { href: '#location', label: 'Location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
  }, [mobile]);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">
          NEON<span>.</span>
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
              padding: '.5rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              fontSize: '.8rem',
              fontWeight: 700,
              letterSpacing: '.12em',
              zIndex: 1001,
            }}
            aria-label="Toggle Menu"
          >
            MENU ☰
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(9, 6, 8, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              padding: '2rem',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setMobile(false)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'var(--surface-3)',
                border: '1px solid var(--red-border)',
                color: 'var(--white)',
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                fontSize: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px var(--red-glow)',
              }}
              aria-label="Close Menu"
            >
              ✕
            </button>

            {/* Logo */}
            <div style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '1.5rem',
              fontWeight: 900,
              letterSpacing: '.15em',
              color: 'var(--white)',
              marginBottom: '1rem',
            }}>
              NEON<span style={{ color: 'var(--red-bright)' }}>.</span>
            </div>

            {/* Nav links */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobile(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    letterSpacing: '.08em',
                    color: 'var(--white)',
                    textDecoration: 'none',
                    transition: 'color .3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--red-bright)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--white)')}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Book Now Button */}
            <button
              onClick={() => {
                setMobile(false);
                window.dispatchEvent(new CustomEvent('openContactModal'));
              }}
              className="btn btn-red"
              style={{ marginTop: '1rem', padding: '1.1rem 2.8rem', fontSize: '.85rem' }}
            >
              Book Session Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
