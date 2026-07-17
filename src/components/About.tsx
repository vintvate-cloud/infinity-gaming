'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-left-col', {
        x: -40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      gsap.from('.about-right-col', {
        x: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const features = [
    { num: '01', label: '1 Gbps Low-Ping Fiber', desc: 'Zero-lag high refresh rate gaming' },
    { num: '02', label: 'RTX 4090 Monster Rigs', desc: 'Ultra-spec liquid-cooled setups' },
    { num: '03', label: 'PS5 Pro with 4K OLED', desc: 'Console gaming at peak perfection' },
    { num: '04', label: 'SecretLab Ergonomic Chairs', desc: 'All-day comfort & posture support' },
    { num: '05', label: 'Pro 7.1 Surround Headsets', desc: 'Complete auditory spatial awareness' },
    { num: '06', label: 'Full Gourmet Snack Bar', desc: 'Fuel up directly at your station' },
  ];

  return (
    <section ref={ref} id="about" className="section">
      <div className="section-inner">

        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="section-eyebrow" style={{ marginBottom: 0 }}>
            <span className="label">Next-Gen Gaming Hub</span>
          </div>
          <div className="hours-pill">
            <div className="live-dot" />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '.78rem', letterSpacing: '.1em', color: 'var(--white)', fontWeight: 600 }}>
              OPEN DAILY · 10 AM – 11 PM
            </span>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(3rem, 5vw, 6rem)', alignItems: 'center' }}>
          {/* Left Column */}
          <div className="about-left-col">
            <h2 className="display-md" style={{ marginBottom: '1.75rem' }}>
              BHOPAL'S #1<br />
              <span style={{ color: 'var(--red-bright)', textShadow: '0 0 15px var(--red-glow)' }}>
                ULTRA-PREMIUM LOUNGE
              </span>
            </h2>
            <p className="body-sm" style={{ marginBottom: '1.5rem' }}>
              NEON GAMING was engineered with a single objective — delivering an unrivaled esports and entertainment lounge in MP Nagar, Bhopal.
            </p>
            <p className="body-sm" style={{ marginBottom: '2.5rem' }}>
              From high-fps PC setups to private 4K console suites and slate pool tables, every square foot offers peak comfort, lighting, and hospitality.
            </p>
            
            {/* Stats row */}
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[{ v: '50+', l: 'Stations' }, { v: '200+', l: 'Game Titles' }, { v: '4.9★', l: 'Top Rated' }].map(s => (
                <div key={s.l} style={{ background: 'var(--surface-2)', padding: '1.2rem 1.8rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-md)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--red-bright)', lineHeight: 1, textShadow: '0 0 10px var(--red-glow)' }}>{s.v}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.12em', color: 'var(--grey-1)', textTransform: 'uppercase', marginTop: '.4rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="about-right-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {features.map((f) => (
              <div
                key={f.num}
                style={{
                  padding: '1.75rem 1.5rem',
                  background: 'var(--surface-2)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-md)',
                  transition: 'border-color .3s, transform .3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--red-border)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-md)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.1rem', color: 'var(--red-bright)', fontWeight: 800, marginBottom: '.75rem' }}>
                  {f.num}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '.95rem', color: 'var(--white)', marginBottom: '.3rem' }}>
                  {f.label}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '.8rem', color: 'var(--grey-1)', fontWeight: 400 }}>
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
