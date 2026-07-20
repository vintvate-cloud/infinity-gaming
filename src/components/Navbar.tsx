'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#amenities', label: 'Amenities' },
  { href: '/#games', label: 'Vault' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/#pricing', label: 'Rates' },
  { href: '/#location', label: 'Location' },
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
        <a href="/#hero" className="nav-logo">
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
          <a
            href="tel:+917067601040"
            className="nav-cta desktop-only"
            style={{ textDecoration: 'none' }}
          >
            Book Session
          </a>
          <button
            onClick={() => setMobile(true)}
            className="mobile-only"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'var(--white)',
              padding: '0.55rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              zIndex: 1001,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--red-bright)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(229, 9, 20, 0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            aria-label="Toggle Menu"
          >
            <span style={{ color: 'var(--red-bright)', letterSpacing: '0' }}>///</span> MENU
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'linear-gradient(135deg, rgba(9,6,8,0.95) 0%, rgba(15,8,12,0.98) 100%)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              height: '100dvh',
              maxHeight: '100vh',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Glow */}
            <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--red-glow) 0%, transparent 70%)', opacity: 0.15, filter: 'blur(50px)', pointerEvents: 'none' }} />

            {/* Header Area (Fixed at top) */}
            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '1.5rem',
                fontWeight: 900,
                letterSpacing: '.15em',
                color: 'var(--white)',
              }}>
                NEON<span style={{ color: 'var(--red-bright)' }}>.</span>
              </div>

              <button
                onClick={() => setMobile(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--white)',
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--red-bright)'; e.currentTarget.style.borderColor = 'var(--red-bright)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
                aria-label="Close Menu"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch', padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              {/* Nav links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexShrink: 0 }}>
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobile(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 8vw, 3rem)',
                    letterSpacing: '.05em',
                    color: 'var(--white)',
                    textDecoration: 'none',
                    transition: 'all .3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--red-bright)';
                    e.currentTarget.style.paddingLeft = '1rem';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  <span style={{ fontSize: '1rem', color: 'var(--red-light)', fontFamily: 'var(--font-tech)', opacity: 0.7 }}>0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Footer / CTA Area */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '1.5rem', flexShrink: 0, paddingBottom: '2rem' }}
            >
              <div>
                <div style={{ color: 'var(--grey-1)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Reserve a Station</div>
                <a href="tel:+917067601040" style={{ color: 'var(--red-bright)', fontSize: '1.2rem', fontFamily: 'var(--font-tech)', textDecoration: 'none' }}>+91 70676 01040</a>
              </div>
              <a
                href="tel:+917067601040"
                onClick={() => setMobile(false)}
                className="btn btn-red"
                style={{ padding: '1rem 2rem', fontSize: '.9rem', textDecoration: 'none', textAlign: 'center', width: '100%' }}
              >
                Book Session Now
              </a>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
