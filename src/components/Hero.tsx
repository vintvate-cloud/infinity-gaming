'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MARQUEE = [
  'PS5 GAMING', '⚡', 'RACING SIMULATOR', '⚡', 'SLATE POOL TABLES', '⚡',
  'MP NAGAR BHOPAL', '⚡', 'PS5 GAMING', '⚡', 'RACING SIMULATOR', '⚡',
  'SLATE POOL TABLES', '⚡', 'MP NAGAR BHOPAL', '⚡',
];

const openModal = () => window.dispatchEvent(new CustomEvent('openContactModal'));

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.clip-reveal-inner', {
        y: 0, duration: 1.3, stagger: .13, ease: 'expo.out', delay: 2.8,
      });
      gsap.from('.hero-eyebrow', { y: 20, opacity: 0, duration: .9, delay: 2.8, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 22, opacity: 0, duration: 1, delay: 3.3, ease: 'power3.out' });
      gsap.from('.hero-ctas', { y: 22, opacity: 0, duration: 1, delay: 3.5, ease: 'power3.out' });

      gsap.to('.hero-img-bg', {
        scale: 1.08, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      });
      gsap.to('.hero-ghost-text', {
        y: 140, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(1.5rem,5vw,5rem)',
          paddingTop: '16vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          className="hero-img-bg"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1)',
            transformOrigin: 'center',
          }}
        />

        {/* Layered gradients */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(9, 6, 8, 0.72)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9, 6, 8, 1) 0%, rgba(9, 6, 8, 0.5) 45%, rgba(9, 6, 8, 0.2) 80%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 40%, rgba(229, 9, 20, 0.15) 0%, transparent 65%)' }} />

        {/* Ghost background text */}
        <div
          className="hero-ghost-text display-xl"
          style={{
            position: 'absolute', bottom: '2%', left: '-1%',
            color: 'rgba(255, 30, 39, 0.04)', whiteSpace: 'nowrap',
            fontSize: 'clamp(9rem, 22vw, 24rem)', pointerEvents: 'none', userSelect: 'none', zIndex: 1,
          }}
        >
          NEON
        </div>

        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 3, maxWidth: '1320px', margin: '0 auto', width: '100%' }}>

          {/* Eyebrow */}
          <div className="hero-eyebrow section-eyebrow" style={{ marginBottom: '1.75rem' }}>
            <span className="label">MP NAGAR · BHOPAL · ULTIMATE GAMING LOUNGE</span>
          </div>

          {/* Big title */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="clip-reveal">
              <span className="clip-reveal-inner display-xl" style={{ display: 'block' }}>
                NEON
              </span>
            </div>
            <div className="clip-reveal">
              <span className="clip-reveal-inner display-xl" style={{ display: 'block', color: 'var(--red-bright)', textShadow: '0 0 35px var(--red-glow)' }}>
                GAMING
              </span>
            </div>
          </div>

          {/* Subtitle & CTAs */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <p className="hero-sub body-sm" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', maxWidth: '440px', fontWeight: 400 }}>
              PS5 Gaming. Racing Simulator. Slate Pool Tables.
              Experience next-level gaming in Bhopal.
            </p>

            <div className="hero-ctas" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a href="tel:+917067601040" className="btn btn-red" style={{ textDecoration: 'none' }}>
                Book a Station
              </a>
              <a href="#games" className="btn btn-outline">Browse Games</a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="marquee-track">
        {[0, 1].map(n => (
          <div key={n} className="marquee-inner" aria-hidden={n === 1}>
            {MARQUEE.map((item, i) => (
              <span key={i} className={`marquee-item ${item === '⚡' ? 'accent' : ''}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
