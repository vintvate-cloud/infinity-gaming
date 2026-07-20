'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { games, categories, type GameCategory } from '@/data/games';

gsap.registerPlugin(ScrollTrigger);

const FALLBACKS: Record<string, string[]> = {
  singleplayer: ['#281016', '#221218', '#1F0C14', '#2B121A'],
  twoplayer:    ['#20121A', '#291018', '#1A0C16', '#261214'],
  fourplayer:   ['#1D101C', '#281014', '#200E18', '#1C0D16'],
};

function GameCardImage({ src, title, genre, activeCategory, index }: { src: string, title: string, genre: string, activeCategory: string, index: number }) {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [activeCategory, src]);

  if (error) {
    const bgColor = FALLBACKS[activeCategory]?.[index % 4] ?? '#201018';
    return (
      <div style={{
        background: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '3/4',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        padding: '1.5rem 1rem'
      }}>
        <div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.8rem',
            color: 'rgba(255, 30, 39, 0.85)',
            lineHeight: 1.1,
            letterSpacing: '0.04em'
          }}>
            {title}
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(245, 245, 247, 0.7)',
            marginTop: '0.5rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}>
            {genre}
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="game-card-img"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
}

export default function GamesSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<GameCategory>('singleplayer');
  const [gamesList, setGamesList] = useState(games);

  useEffect(() => {
    fetch('/api/games', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setGamesList(data);
        }
      })
      .catch(err => console.error('Failed to fetch games:', err));
  }, []);

  const filtered = gamesList.filter((g: any) => g.category === active);
  
  const dynamicCategories = categories.map(c => ({
    ...c,
    count: gamesList.filter((g: any) => g.category === c.id).length
  }));
  const cat = dynamicCategories.find(c => c.id === active)!;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.games-hd', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const platClass = (p: string) => p === 'PS5' ? 'ps5' : p === 'PC' ? 'pc' : 'both';

  return (
    <section ref={ref} id="games" className="section" style={{ background: 'var(--surface-1)' }}>
      <div className="section-inner">

        {/* Header */}
        <div className="games-hd" style={{ marginBottom: '2.5rem' }}>
          <div className="section-eyebrow">
            <span className="label">Full Game Vault</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <h2 className="display-md" style={{ lineHeight: 0.92 }}>
              PLAY WHAT YOU<br />
              <span style={{ color: 'var(--red-bright)', textShadow: '0 0 20px var(--red-glow)' }}>
                DESIRE
              </span>
            </h2>
            <p className="body-sm" style={{ maxWidth: '420px', fontSize: '1rem' }}>
              {gamesList.length}+ AAA titles across PS5 & high-end PCs. Filter by playstyle below.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div style={{
          display: 'flex',
          gap: '.6rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
        }}>
          {dynamicCategories.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id as GameCategory)}
              className={`cat-tab ${active === c.id ? 'active' : ''}`}
              style={{ padding: '.65rem 1.4rem', fontSize: '.8rem' }}
            >
              {c.label}
              <span style={{
                marginLeft: '.6rem',
                fontFamily: 'var(--font-tech)',
                fontSize: '.85rem',
                color: active === c.id ? 'var(--red-bright)' : 'var(--grey-1)',
              }}>
                ({c.count})
              </span>
            </button>
          ))}
        </div>

        {/* Subtitle */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="body-sm" style={{ fontSize: '.9rem', color: 'var(--red-light)', fontWeight: 600 }}>
            // {cat.sub}
          </span>
        </div>

        {/* Games Grid - 4 IN A LINE */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="games-grid-4-col"
        >
          {filtered.map((game, i) => (
            <div
              key={game.id}
              className="game-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-lg)',
                background: 'var(--surface-2)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="game-card-img-wrap" style={{ aspectRatio: '3/4', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }}>
                <GameCardImage
                  src={game.poster}
                  title={game.title}
                  genre={game.genre}
                  activeCategory={active}
                  index={i}
                />
                <div className="game-card-overlay" />

                {/* Hover info overlay */}
                <div className="game-card-hover-overlay" style={{ padding: '1.25rem 1rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    letterSpacing: '0.08em',
                    color: 'var(--red-bright)',
                    marginBottom: '0.5rem',
                    textShadow: '0 0 12px var(--red-glow)',
                  }}>
                    {game.rating !== 'TBA' ? `★ ${game.rating}` : 'COMING SOON'}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    color: 'var(--white)',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                    fontWeight: 400,
                  }}>
                    {game.description}
                  </p>
                  <span className={`plat-chip ${platClass(game.platform)}`} style={{ padding: '.3rem .7rem', fontSize: '.68rem' }}>
                    {game.platform}
                  </span>
                </div>

                {/* Rating badge */}
                {game.rating !== 'TBA' && (
                  <div style={{
                    position: 'absolute', top: '.75rem', right: '.75rem', zIndex: 3,
                    background: 'rgba(9,6,8,0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--red-border)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.2rem 0.6rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                  }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.08em', color: 'var(--red-bright)' }}>
                      ★ {game.rating}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="game-card-foot" style={{ padding: '1rem 1.1rem', background: 'var(--surface-2)', position: 'relative' }}>
                <div className="game-card-title" style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-tech)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {game.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                  <span className="game-card-genre" style={{ fontSize: '.75rem', color: 'var(--grey-1)', fontWeight: 600 }}>{game.genre}</span>
                  <span className={`plat-chip ${platClass(game.platform)}`}>{game.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
