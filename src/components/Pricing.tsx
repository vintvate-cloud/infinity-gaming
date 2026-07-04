'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { pricing } from '@/data/pricing';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-hd', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const filteredPricing = activeTab === 'all'
    ? pricing
    : pricing.filter(cat => cat.id === activeTab);

  return (
    <section ref={ref} id="pricing" className="section" style={{ background: 'var(--surface-1)' }}>
      <div className="section-inner">

        {/* Header */}
        <div className="pricing-hd" style={{ marginBottom: '2rem' }}>
          <div className="section-eyebrow">
            <span className="label">Transparent Rates</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <h2 className="display-md">
              OUR <span style={{ color: 'var(--red-bright)', textShadow: '0 0 15px var(--red-glow)' }}>RATES</span>
            </h2>
            <p className="body-sm" style={{ maxWidth: '400px' }}>
              Affordable, transparent pricing across all gaming zones. No hidden charges — pure premium experience.
            </p>
          </div>
        </div>

        {/* Category Tabs for Instant Navigation */}
        <div style={{
          display: 'flex',
          gap: '.6rem',
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '.5rem',
          WebkitOverflowScrolling: 'touch',
        }}>
          <button
            onClick={() => setActiveTab('all')}
            className={`cat-tab ${activeTab === 'all' ? 'active' : ''}`}
            style={{ padding: '.6rem 1.3rem', fontSize: '.78rem', whiteSpace: 'nowrap' }}
          >
            🔥 All Rates
          </button>
          {pricing.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`cat-tab ${activeTab === cat.id ? 'active' : ''}`}
              style={{ padding: '.6rem 1.3rem', fontSize: '.78rem', whiteSpace: 'nowrap' }}
            >
              {cat.emoji} {cat.title}
            </button>
          ))}
        </div>

        {/* Animated Pricing Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pricing-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: activeTab === 'all' ? 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' : '1fr',
              maxWidth: activeTab === 'all' ? '100%' : '650px',
              margin: activeTab === 'all' ? '0' : '0 auto',
              gap: '1.25rem',
            }}
          >
            {filteredPricing.map((cat) => (
              <div
                key={cat.id}
                className="pricing-card"
                style={{
                  background: cat.highlight ? 'linear-gradient(145deg, rgba(38, 12, 24, 0.95), rgba(18, 6, 12, 0.98))' : 'var(--surface-1)',
                  borderColor: cat.highlight ? 'var(--red-border)' : 'var(--border-md)',
                  padding: 'clamp(1.25rem, 3vw, 2rem)',
                  boxShadow: cat.highlight ? '0 15px 40px rgba(229, 9, 20, 0.25)' : '0 10px 30px rgba(0,0,0,0.4)',
                }}
              >
                {/* Top: emoji + title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      fontSize: '1.6rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '.45rem .8rem',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-md)',
                      lineHeight: 1,
                    }}>
                      {cat.emoji}
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                        fontWeight: 800,
                        color: 'var(--white)',
                        letterSpacing: '.02em',
                        lineHeight: 1.1,
                      }}>
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {cat.highlight && (
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '.6rem',
                      fontWeight: 800,
                      letterSpacing: '.18em',
                      textTransform: 'uppercase',
                      color: 'var(--red-bright)',
                      border: '1px solid var(--red-border)',
                      padding: '.3rem .7rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--red-dim)',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 0 10px var(--red-glow)',
                    }}>
                      Popular
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1rem' }} />

                {/* Tier rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {cat.tiers.map((tier, i) => (
                    <div
                      key={tier.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '.75rem 0',
                        borderBottom: i < cat.tiers.length - 1 ? '1px solid var(--border)' : 'none',
                      }}
                    >
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '.9rem',
                          fontWeight: 700,
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
                        fontSize: 'clamp(1.7rem, 3.8vw, 2.2rem)',
                        letterSpacing: '.04em',
                        color: 'var(--red-bright)',
                        textShadow: '0 0 12px rgba(255, 30, 39, 0.4)',
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
                    marginTop: '1rem',
                    padding: '.65rem .85rem',
                    background: 'var(--red-dim)',
                    borderLeft: '3px solid var(--red-bright)',
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '.75rem',
                    color: 'var(--grey-1)',
                    lineHeight: 1.45,
                  }}>
                    {cat.note}
                  </div>
                )}

                <div className="pricing-accent-line" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA Banner */}
        <div style={{
          marginTop: 'clamp(2rem, 4vw, 3.5rem)',
          padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px solid var(--red-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
          background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))',
          boxShadow: '0 15px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(229, 9, 20, 0.15)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
              letterSpacing: '.04em',
              color: 'var(--white)',
              marginBottom: '.3rem',
              lineHeight: 1.1,
            }}>
              WALK IN ANYTIME OR BOOK A PRIVATE ROOM
            </div>
            <p className="body-sm" style={{ fontSize: '.88rem', maxWidth: '480px' }}>
              No reservations required for regular PC and PS5 setups. For private rooms, movie screenings & groups, reserve online.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%', maxWidth: '360px' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="btn btn-red" style={{ flex: 1 }}>
              Book a Room
            </button>
            <a href="https://wa.me/919800000000" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1 }}>
              WhatsApp Us ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
