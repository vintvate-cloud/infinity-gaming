'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.location-hd', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="location" className="section" style={{ background: 'var(--surface-1)' }}>
      <div className="section-inner">

        <div className="location-hd" style={{ marginBottom: '4rem' }}>
          <div className="section-eyebrow">
            <span className="label">Locate Lounge</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 className="display-md">
              FIND US IN <span style={{ color: 'var(--red-bright)', textShadow: '0 0 15px var(--red-glow)' }}>Indrapuri</span>
            </h2>
            <p className="body-sm" style={{ maxWidth: '380px' }}>
              Heart of Bhopal's gaming circuit. Ample parking, food court nearby, easy access.
            </p>
          </div>
        </div>

        {/* Split Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>

          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            <div style={{ padding: '2rem', background: 'var(--surface-2)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-md)' }}>
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '.75rem', color: 'var(--red-bright)', fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '.6rem' }}>
                // Location Details
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--white)', marginBottom: '.5rem' }}>
                Indrapuri Sector C, Bhopal
              </div>
              <p className="body-sm" style={{ fontSize: '.9rem' }}>
                Near Gourav Dairy, Madhya Pradesh 462022
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'var(--surface-2)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-md)' }}>
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '.75rem', color: 'var(--red-bright)', fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '.6rem' }}>
                // Opening Hours
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.4rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--white)', fontSize: '.95rem' }}>Monday — Friday</span>
                <span style={{ fontFamily: 'var(--font-tech)', color: 'var(--red-bright)', fontWeight: 700, fontSize: '.95rem' }}>12:00 PM – 11:00 PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.4rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--white)', fontSize: '.95rem' }}>Saturday & Sunday</span>
                <span style={{ fontFamily: 'var(--font-tech)', color: 'var(--red-bright)', fontWeight: 700, fontSize: '.95rem' }}>11:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div style={{ padding: '2rem', background: 'var(--surface-2)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--white)', fontSize: '1rem' }}>
                  Need Direct Directions?
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '.85rem', color: 'var(--grey-1)' }}>
                  Open directly in Google Maps
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/%F0%9D%97%A1%F0%9D%97%B2%F0%9D%97%BC%F0%9D%97%BB+%F0%9D%97%9A%F0%9D%97%AE%F0%9D%97%BA%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B4+-+Gaming+Zone+in+Bhopal+%7C+Play+Station+in+Bhopal+%7C+Amusement+Zone+in+Bhopal/@23.2523346,77.4621087,17z/data=!3m1!4b1!4m6!3m5!1s0x397c435fc92491c3:0x1221244c375edc23!8m2!3d23.2523346!4d77.4646836!16s%2Fg%2F11k9fk0gsk?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-red"
                style={{ fontSize: '.72rem' }}
              >
                Get Directions ↗
              </a>
            </div>

          </div>

          {/* Map Frame */}
          <div style={{
            position: 'relative',
            aspectRatio: '4/3',
            width: '100%',
            overflow: 'hidden',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--red-border)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.6), 0 0 25px var(--red-glow)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.43719082269!2d77.4646836!3d23.2523346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c435fc92491c3%3A0x1221244c375edc23!2sNeon%20Gaming!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-dark"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
