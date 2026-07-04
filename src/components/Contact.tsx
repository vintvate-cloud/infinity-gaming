'use client';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', session: 'ps5', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--black)' }}>
      <div className="section-inner">
        <div style={{
          background: 'var(--surface-2)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--red-border)',
          padding: 'clamp(2rem, 5vw, 4rem)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 30px var(--red-glow)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left */}
            <div>
              <div className="section-eyebrow">
                <span className="label">Get In Touch</span>
              </div>
              <h2 className="display-md" style={{ marginBottom: '1.25rem' }}>
                RESERVE YOUR<br />
                <span style={{ color: 'var(--red-bright)', textShadow: '0 0 15px var(--red-glow)' }}>
                  GAMING SPOT
                </span>
              </h2>
              <p className="body-sm" style={{ marginBottom: '2rem' }}>
                Planning a squad session, FIFA tournament, or private room movie night? Send us your request below or call us directly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--surface-3)', border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red-bright)', fontSize: '1.2rem' }}>
                    📞
                  </div>
                  <div>
                    <div style={{ fontSize: '.72rem', color: 'var(--grey-1)', textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 600 }}>Phone / WhatsApp</div>
                    <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)' }}>+91 98000 00000</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--surface-3)', border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red-bright)', fontSize: '1.2rem' }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: '.72rem', color: 'var(--grey-1)', textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 600 }}>Lounge Address</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '.95rem', fontWeight: 600, color: 'var(--white)' }}>MP Nagar Zone II, Bhopal (MP)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div>
              {sent ? (
                <div style={{ padding: '3rem 2rem', background: 'var(--surface-3)', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--red-border)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--red-bright)', marginBottom: '.5rem', textShadow: '0 0 10px var(--red-glow)' }}>
                    REQUEST RECEIVED
                  </div>
                  <p className="body-sm">We'll contact you shortly. See you at Infinity Gaming!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label className="form-label">Full Name</label>
                    <input type="text" required placeholder="Arjun Sharma" className="form-input"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input type="tel" required placeholder="+91 98000 00000" className="form-input"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Message / Time</label>
                    <textarea rows={3} placeholder="Tell us what you want to play or reserve..." className="form-input"
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-red" style={{ width: '100%' }}>
                    Submit Reservation
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
