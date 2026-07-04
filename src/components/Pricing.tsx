'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pricing } from '@/data/pricing';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-hd', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      gsap.from('.pricing-card', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.pricing-grid', start: 'top 78%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="pricing" className="section" style={{ background: 'var(--surface-1)' }}>
      <div className="section-inner">

        {/* Header */}
        <div className="pricing-hd" style={{ marginBottom: '4rem' }}>
          <div className="section-eyebrow">
            <span className="label">Transparent Rates</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}>
            <h2 className="display-md">
              OUR <span style={{ color: 'var(--red-bright)', textShadow: '0 0 15px var(--red-glow)' }}>RATES</span>
            </h2>
            <p className="body-sm" style={{ maxWidth: '380px' }}>
              Affordable pricing across all platforms. No hidden charges — just pure gaming.
            </p>
          </div>
        </div>

        {/* Pricing grid */}
        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {pricing.map((cat) => (
            <div
              key={cat.id}
              className="pricing-card"
              style={{
                background: cat.highlight ? 'var(--surface-2)' : 'var(--surface-1)',
                borderColor: cat.highlight ? 'var(--red-border)' : 'var(--border-md)',
              }}
            >
              {/* Top: emoji + title */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '.5rem', lineHeight: 1 }}>
                    {cat.emoji}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                    letterSpacing: '.02em',
                  }}>
                    {cat.title}
                  </div>
                </div>
                {cat.highlight && (
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '.6rem',
                    fontWeight: 700,
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    color: 'var(--red-bright)',
                    border: '1px solid var(--red-border)',
                    padding: '.3rem .75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--red-dim)',
                  }}>
                    Popular
                  </div>
                )}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.5rem' }} />

              {/* Tier rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {cat.tiers.map((tier, i) => (
                  <div
                    key={tier.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '.85rem 0',
                      borderBottom: i < cat.tiers.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '.9rem',
                        fontWeight: 600,
                        color: 'var(--white)',
                      }}>
                        {tier.label}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '.7rem',
                        color: 'var(--grey-1)',
                        marginTop: '.1rem',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                      }}>
                        {tier.unit}
                      </div>
                    </div>

                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.2rem',
                      letterSpacing: '.04em',
                      color: 'var(--red-bright)',
                      textShadow: '0 0 10px rgba(255, 30, 39, 0.3)',
                      lineHeight: 1,
                    }}>
                      {tier.price}
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              {cat.note && (
                <div style={{
                  marginTop: '1.25rem',
                  padding: '.75rem 1rem',
                  background: 'var(--red-dim)',
                  borderLeft: '3px solid var(--red-bright)',
                  borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '.75rem',
                  color: 'var(--grey-1)',
                  lineHeight: 1.5,
                }}>
                  {cat.note}
                </div>
              )}

              <div className="pricing-accent-line" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          marginTop: '4rem',
          padding: '2.5rem 3rem',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--red-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '.04em',
              color: 'var(--white)',
              marginBottom: '.4rem',
            }}>
              WALK IN ANYTIME OR BOOK A PRIVATE ROOM
            </div>
            <p className="body-sm" style={{ fontSize: '.9rem', maxWidth: '460px' }}>
              No reservations required for regular PC and PS5 setups. For private rooms, movie screenings & groups, reserve online.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="btn btn-red">
              Book a Room
            </button>
            <a href="https://wa.me/919800000000" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              WhatsApp Us ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
