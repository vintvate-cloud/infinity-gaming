'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tournaments')
      .then(res => res.json())
      .then(data => {
        // Only show upcoming or ongoing tournaments on landing page
        const activeTournaments = data.filter((t: any) => t.status !== 'completed');
        setTournaments(activeTournaments);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || tournaments.length === 0) {
    return null; // Don't show the section if no tournaments are active
  }

  return (
    <section id="tournaments" className="section" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background elements */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, var(--red-glow) 0%, transparent 70%)', opacity: 0.1, zIndex: 0, filter: 'blur(60px)' }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="section-eyebrow">
            <span className="label">Compete & Win</span>
          </div>
          <h2 className="display-md">
            UPCOMING <span style={{ color: 'var(--red-bright)', textShadow: '0 0 15px var(--red-glow)' }}>TOURNAMENTS</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--grey-1)', maxWidth: '600px', margin: '1rem auto 0' }}>
            Join the action, show your skills, and win big prizes in our organized gaming tournaments.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {tournaments.map((t: any, i: number) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'var(--surface-2)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-md)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card Header with Glowing Status */}
              <div style={{ padding: '1.5rem 1.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.85rem', color: 'var(--red-bright)', letterSpacing: '0.1em' }}>
                    {t.game}
                  </span>
                  <span style={{ 
                    background: t.status === 'ongoing' ? 'rgba(0, 255, 0, 0.1)' : 'var(--surface-3)', 
                    color: t.status === 'ongoing' ? '#00ff00' : 'var(--white)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    boxShadow: t.status === 'ongoing' ? '0 0 10px rgba(0,255,0,0.2)' : 'none'
                  }}>
                    {t.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--grey-1)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--red-bright)' }}>⏱</span> {t.date}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: 'var(--grey-2)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                  {t.description}
                </p>
                <a
                  href="tel:+917067601040"
                  className="btn"
                  style={{ 
                    width: '100%', 
                    background: 'transparent',
                    border: '1px solid var(--red-border)',
                    textAlign: 'center'
                  }}
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
