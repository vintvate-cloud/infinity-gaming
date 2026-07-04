'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let hovered = false;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top  = my + 'px';
      }
      const el = document.elementFromPoint(mx, my);
      const clickable = el?.closest('a,button,[role="button"],.game-card,.amenity-card,.session-chip,.cat-tab');
      if (!!clickable !== hovered) {
        hovered = !!clickable;
        dotRef.current?.classList.toggle('hover', hovered);
        ringRef.current?.classList.toggle('hover', hovered);
      }
    };

    let raf: number;
    const follow = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top  = ry + 'px';
      }
      raf = requestAnimationFrame(follow);
    };

    document.addEventListener('mousemove', move);
    raf = requestAnimationFrame(follow);
    return () => { document.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
