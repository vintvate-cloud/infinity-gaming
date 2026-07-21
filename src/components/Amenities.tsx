'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AMENITIES = [
  {
    num: '01',
    title: 'PS5 LOUNGE',
    tagline: 'Console Gaming at its Zenith',
    desc: 'Immerse yourself in true 4K HDR gaming on Sony OLED displays. Powered by DualSense haptic feedback and tempest 3D audio headsets.',
    features: [
      'Sony 4K OLED 120Hz Displays',
      'DualSense Edge Wireless Controllers',
      'Sony Pulse 3D Audio Headsets',
      'Complete PS5 Digital Library',
    ],
    bgGradient: 'linear-gradient(135deg, #1C0A10 0%, #0F0609 100%)',
    accentColor: '#FF1E27',
    icon: '🎮',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '02',
    title: 'SIM RACING RIG',
    tagline: 'Realistic Track Experience',
    desc: 'Test your driving skills on our dedicated Logitech G29 Sim Racing setup complete with force feedback and a manual gearbox.',
    features: [
      'Logitech G29 Force Feedback Wheel',
      'Manual Gearbox Shifter',
      'Racing Cockpit & Bucket Seat',
      'Top Racing Games Included',
    ],
    bgGradient: 'linear-gradient(135deg, #220B14 0%, #0C0408 100%)',
    accentColor: '#E50914',
    icon: '🏎️',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '03',
    title: 'PROFESSIONAL POOL LOUNGE',
    tagline: 'Slate Tables & Ambient Social Hub',
    desc: 'Unwind or compete on tournament-grade slate pool tables. Complete with professional cues, atmospheric overhead lighting, and full service.',
    features: [
      'English Slate Pool Tables',
      'Hand-crafted Professional Cues',
      'Lounge Seating & Mood Lighting',
      'Walk-ins & Challenge Matches',
    ],
    bgGradient: 'linear-gradient(135deg, #260C18 0%, #10050B 100%)',
    accentColor: '#FF4D55',
    icon: '🎱',
    image: '/images/pool_table.png',
  },
];

export default function Amenities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // DESKTOP ONLY: GSAP Pinning Deck Stacking
    mm.add('(min-width: 769px)', () => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0 || !deckRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: deckRef.current,
          start: 'top top',
          end: `+=${cards.length * 60}%`,
          pin: true,
          pinSpacing: true,
          scrub: 0.3,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i > 0) {
          tl.fromTo(
            card,
            { yPercent: 100 },
            { yPercent: 0, ease: 'power2.out' },
            i
          );
          tl.to(
            cards[i - 1],
            { scale: 0.94, opacity: 0.35, ease: 'power2.out' },
            i
          );
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="amenities" ref={containerRef} style={{ background: 'var(--black)', position: 'relative' }}>
      
      {/* Intro Header */}
      <div className="section-inner" style={{ padding: '6rem 1.5rem 3rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="section-eyebrow">
              <span className="label">World-Class Facilities</span>
            </div>
            <h2 className="display-md">
              THE ULTIMATE<br />
              <span style={{ color: 'var(--red-bright)', textShadow: '0 0 20px var(--red-glow)' }}>
                GAMING AMENITIES
              </span>
            </h2>
          </div>
          <div style={{ maxWidth: '380px' }}>
            <p className="body-sm">
              Explore our full-size screen dedicated gaming zones. Every area engineered for immersion and high-performance play.
            </p>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH STACKING DECK CONTAINER */}
      <div ref={deckRef} className="amenity-deck-container">
        {AMENITIES.map((card, idx) => (
          <div
            key={card.num}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className="amenity-card-wrapper"
            style={{
              background: card.bgGradient,
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid var(--red-border)',
              boxShadow: '0 -20px 50px rgba(0, 0, 0, 0.95), 0 0 45px rgba(229, 9, 20, 0.25)',
              willChange: 'transform, opacity',
              zIndex: idx + 1,
            }}
          >
            {/* Inner Full-Width Grid Content */}
            <div className="amenity-card-grid">

              {/* Details Column */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                    color: card.accentColor,
                    lineHeight: 1,
                    textShadow: `0 0 25px ${card.accentColor}`,
                  }}>
                    {card.num}
                  </span>
                  <span style={{
                    fontSize: '1.4rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '.35rem .85rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-md)',
                  }}>
                    {card.icon}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 3.5rem)',
                  fontWeight: 900,
                  color: 'var(--white)',
                  marginBottom: '.4rem',
                  letterSpacing: '.02em',
                  lineHeight: 1.05,
                }}>
                  {card.title}
                </h3>

                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(.7rem, 1vw, 1.05rem)',
                  fontWeight: 700,
                  letterSpacing: '.15em',
                  textTransform: 'uppercase',
                  color: card.accentColor,
                  marginBottom: '.85rem',
                }}>
                  {card.tagline}
                </div>

                <p className="body-sm" style={{ marginBottom: '1.25rem', fontSize: 'clamp(.85rem, 1.1vw, 1.15rem)', lineHeight: 1.55, maxWidth: '580px' }}>
                  {card.desc}
                </p>

                {/* Features Pills */}
                <div className="amenity-features-grid">
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.6rem',
                        padding: '.55rem .75rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-md)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '.78rem',
                        fontWeight: 600,
                        color: 'var(--white)',
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: card.accentColor,
                        boxShadow: `0 0 8px ${card.accentColor}`,
                        flexShrink: 0,
                      }} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '.25rem' }}>
                  <a
                    href="tel:+917067601040"
                    className="btn btn-red"
                    style={{ padding: '.85rem 2.2rem', fontSize: '.78rem', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                  >
                    Reserve {card.title.split(' ')[0]}
                  </a>
                </div>
              </div>

              {/* Visual Image Card */}
              <div className="amenity-image-box">
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 10, 14, 0.92) 0%, rgba(18, 10, 14, 0.2) 60%, transparent 100%)',
                }} />
                
                {/* Badge overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(9, 6, 8, 0.88)',
                  backdropFilter: 'blur(14px)',
                  padding: '.65rem 1rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-md)',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-tech)', fontSize: '.6rem', color: card.accentColor, fontWeight: 700, letterSpacing: '.15em' }}>
                      ZONE AMENITY
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '.85rem', fontWeight: 700, color: 'var(--white)' }}>
                      {card.title}
                    </div>
                  </div>
                  <span style={{ fontSize: '1.2rem' }}>{card.icon}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
