'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AMENITIES = [
  {
    num: '01',
    title: 'PS5 PRO LOUNGE',
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
    title: 'ULTRA PC BATTLESTATIONS',
    tagline: 'Uncompromising FPS & Cyberpunk Visuals',
    desc: 'Custom liquid-cooled rigs featuring RTX 4090 GPUs, Intel i9 processors, 240Hz Esports monitors, and SecretLab Titan Evo ergonomic chairs.',
    features: [
      'Nvidia RTX 4090 & Intel i9 Rigs',
      'ZOWIE 240Hz Esports Monitors',
      'Custom Mechanical Keyboards',
      '1 Gbps Dedicated Fiber Line',
    ],
    bgGradient: 'linear-gradient(135deg, #220B14 0%, #0C0408 100%)',
    accentColor: '#E50914',
    icon: '💻',
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
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '04',
    title: 'VIP PRIVATE SUITES',
    tagline: 'Exclusive Private Suites for Groups',
    desc: 'Sound-isolated private suites for up to 8 players. Equipped with multi-console setups, 75" 4K screens, surround sound, mini-fridge & dedicated room service.',
    features: [
      'Seating for up to 8 Gamers',
      '75" 4K Cinema Screen & Surround',
      'Multi-Platform (PS5 + PC)',
      'Mini-bar & Direct Food/Drink Ordering',
    ],
    bgGradient: 'linear-gradient(135deg, #2E0E1D 0%, #12060C 100%)',
    accentColor: '#FF1E27',
    icon: '🚪',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Amenities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0 || !deckRef.current) return;

      // Snappy, 60fps fast & fluid GSAP timeline pin scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: deckRef.current,
          start: 'top top',
          end: `+=${cards.length * 60}%`, // Reduced scroll distance for fast transition
          pin: true,
          pinSpacing: true,
          scrub: 0.3, // Ultra-responsive scrub tracking
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
    }, containerRef);

    return () => ctx.revert();
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

      {/* FULL-WIDTH FULL-VIEWPORT GSAP PINNED STACKING DECK */}
      <div ref={deckRef} style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', padding: '1rem' }}>
        {AMENITIES.map((card, idx) => (
          <div
            key={card.num}
            ref={(el) => { cardsRef.current[idx] = el; }}
            style={{
              position: 'absolute',
              inset: '1rem',
              height: 'calc(100vh - 2rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(1.5rem, 4vw, 4.5rem)',
              background: card.bgGradient,
              borderRadius: '32px',
              border: '1.5px solid var(--red-border)',
              boxShadow: '0 -25px 60px rgba(0, 0, 0, 0.95), 0 0 45px rgba(229, 9, 20, 0.25)',
              willChange: 'transform, opacity',
              transform: 'translate3d(0,0,0)',
              zIndex: idx + 1,
              overflow: 'hidden',
            }}
          >
            {/* Inner Full-Width Grid Content */}
            <div style={{
              maxWidth: '1350px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: 'clamp(2rem, 4vw, 5rem)',
              alignItems: 'center',
              maxHeight: '85vh',
            }}>

              {/* Left Details */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: card.accentColor,
                    lineHeight: 1,
                    textShadow: `0 0 25px ${card.accentColor}`,
                  }}>
                    {card.num}
                  </span>
                  <span style={{
                    fontSize: '1.8rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '.5rem 1.1rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-md)',
                  }}>
                    {card.icon}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  color: 'var(--white)',
                  marginBottom: '.6rem',
                  letterSpacing: '.02em',
                  lineHeight: 1.05,
                }}>
                  {card.title}
                </h3>

                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(.8rem, 1.1vw, 1.05rem)',
                  fontWeight: 700,
                  letterSpacing: '.15em',
                  textTransform: 'uppercase',
                  color: card.accentColor,
                  marginBottom: '1.25rem',
                }}>
                  {card.tagline}
                </div>

                <p className="body-sm" style={{ marginBottom: '2rem', fontSize: 'clamp(.95rem, 1.2vw, 1.15rem)', lineHeight: 1.65, maxWidth: '580px' }}>
                  {card.desc}
                </p>

                {/* Features Pills */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '.85rem',
                  marginBottom: '2rem',
                }}>
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.75rem',
                        padding: '.75rem 1rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-md)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '.85rem',
                        fontWeight: 600,
                        color: 'var(--white)',
                      }}
                    >
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: card.accentColor,
                        boxShadow: `0 0 10px ${card.accentColor}`,
                        flexShrink: 0,
                      }} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                    className="btn btn-red"
                    style={{ padding: '1rem 2.6rem', fontSize: '.82rem' }}
                  >
                    Reserve {card.title.split(' ')[0]}
                  </button>
                </div>
              </div>

              {/* Right Visual Image Card */}
              <div style={{
                position: 'relative',
                height: '100%',
                maxHeight: '480px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1.5px solid var(--red-border)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 40px var(--red-glow)',
              }}>
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
                  bottom: '1.75rem',
                  left: '1.75rem',
                  right: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(9, 6, 8, 0.88)',
                  backdropFilter: 'blur(14px)',
                  padding: '1rem 1.4rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-md)',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-tech)', fontSize: '.7rem', color: card.accentColor, fontWeight: 700, letterSpacing: '.15em' }}>
                      ZONE AMENITY
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--white)' }}>
                      {card.title}
                    </div>
                  </div>
                  <span style={{ fontSize: '1.5rem' }}>{card.icon}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
