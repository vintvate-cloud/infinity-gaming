'use client';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Word reveal
    const t1 = setTimeout(() => setReveal(true), 200);

    // Progress counting
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    // Fade out
    const t2 = setTimeout(() => {
      setHidden(true);
      setTimeout(onComplete, 600);
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className="loader-wrap"
      style={{
        opacity: progress === 100 ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Title */}
      <div className={`loader-word ${reveal ? 'reveal' : ''}`}>
        <span>NEON</span>
      </div>

      <div style={{
        fontFamily: 'var(--font-tech)',
        fontSize: '.75rem',
        letterSpacing: '.25em',
        color: 'var(--red-bright)',
        textTransform: 'uppercase',
        marginTop: '-1.5rem',
        fontWeight: 700,
      }}>
        ULTRA GAMING LOUNGE · BHOPAL
      </div>

      {/* Progress Bar */}
      <div className="loader-bar-wrap">
        <div
          className="loader-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Counter */}
      <div className="loader-pct">
        {progress.toString().padStart(3, '0')} %
      </div>
    </div>
  );
}
