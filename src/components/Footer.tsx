'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  {
    title: 'Experience',
    items: ['PS5 Pro Gaming', 'RTX 4090 Rigs', 'Slate Pool Tables', 'VIP Private Suites', 'Racing Sim', 'VR Cricket'],
  },
  {
    title: 'Vault',
    items: ['Single Player', '2 Player Showdowns', 'Multiplayer Arena', 'New Additions'],
  },
  {
    title: 'Quick Links',
    items: ['MP Nagar Lounge', 'Operating Hours', 'Price Rates', 'Book a Session'],
  },
];

const SOCIALS = [
  { label: 'IG', href: '#' },
  { label: 'WA', href: 'https://wa.me/919800000000' },
  { label: 'DC', href: '#' },
  { label: 'YT', href: '#' },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-mega-line', {
        y: 100, opacity: 0, duration: 1.5, stagger: .1, ease: 'expo.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} style={{ borderTop: '1px solid var(--border)', overflow: 'hidden', position: 'relative', background: 'var(--surface-1)' }}>

      {/* MEGA TYPOGRAPHY */}
      <div style={{ padding: '4rem clamp(1.5rem,5vw,5rem) 0', overflow: 'hidden' }}>
        <div className="footer-mega-line footer-mega" style={{ display: 'block', color: 'var(--surface-3)' }}>INFINITY</div>
        <div
          className="footer-mega-line footer-mega"
          style={{ display: 'block', marginTop: '-.15em', color: 'var(--red-deep)', opacity: 0.6 }}
        >
          GAMING
        </div>
      </div>

      <div style={{ height: '1px', background: 'var(--border)', margin: '2rem clamp(1.5rem,5vw,5rem)' }} />

      {/* BODY */}
      <div
        className="footer-body-content"
        style={{ padding: '0 clamp(1.5rem,5vw,5rem) 4rem' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr repeat(3, 1fr)',
          gap: 'clamp(2rem,4vw,4rem)',
          alignItems: 'start',
        }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-tech)', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '.12em', color: 'var(--white)' }}>
                INFINITY<span style={{ color: 'var(--red-bright)' }}>.</span>
              </span>
            </div>

            <p className="body-sm" style={{ fontSize: '.85rem', marginBottom: '1.75rem', maxWidth: '260px' }}>
              Bhopal's most premium gaming lounge. High refresh rates, pro console setups, and private suites.
            </p>

            <div className="hours-pill" style={{ display: 'inline-flex', marginBottom: '1.75rem' }}>
              <div className="live-dot" />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '.75rem', letterSpacing: '.1em', color: 'var(--white)', fontWeight: 600 }}>
                10 AM – 11 PM · Daily
              </span>
            </div>

            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '.8rem', color: 'var(--grey-1)', lineHeight: 1.7 }}>
              MP Nagar Zone II, Bhopal<br />
              Madhya Pradesh — 462011
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '.6rem', marginTop: '1.5rem' }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    width: '38px', height: '38px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid var(--border-md)', fontFamily: 'var(--font-tech)',
                    fontSize: '.7rem', fontWeight: 700, letterSpacing: '.05em',
                    color: 'var(--grey-1)', textDecoration: 'none', cursor: 'none',
                    transition: 'all .3s', background: 'var(--surface-2)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--red-bright)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--red-bright)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px var(--red-glow)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-md)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--grey-1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--red-bright)', marginBottom: '1.25rem' }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                {col.items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '.85rem', fontWeight: 400, color: 'var(--grey-1)', textDecoration: 'none', cursor: 'none', transition: 'color .3s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--red-bright)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey-1)')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '3.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '.75rem', fontWeight: 400, color: 'var(--grey-1)' }}>
            © 2025 Infinity Gaming, Bhopal. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(t => (
              <a key={t} href="#"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '.75rem', fontWeight: 400, color: 'var(--grey-1)', textDecoration: 'none', cursor: 'none', transition: 'color .3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--red-bright)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey-1)')}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
