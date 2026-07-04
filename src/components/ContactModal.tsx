'use client';
import { useEffect, useRef, useState } from 'react';

const SESSION_TYPES = [
  { id: 'ps5',     label: 'PS5 Console' },
  { id: 'pc',      label: 'PC Gaming'   },
  { id: 'pool',    label: 'Pool Table'  },
  { id: 'private', label: 'VIP Private Suite'},
  { id: 'racing',  label: 'Racing Sim'  },
  { id: 'movie',   label: 'Movie Night' },
];

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', session: 'ps5', message: '' });
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => { setOpen(false); setSent(false); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', session: 'ps5', message: '' });
  };

  return (
    <div
      className={`modal-overlay ${open ? 'open' : ''}`}
      onClick={e => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="modal-box" ref={boxRef}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.75rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '.08em', color: 'var(--white)' }}>
              BOOK A SESSION
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '.72rem', color: 'var(--red-light)', letterSpacing: '.12em', marginTop: '.2rem', fontWeight: 600 }}>
              INFINITY GAMING · MP NAGAR, BHOPAL
            </div>
          </div>
          <button
            onClick={close}
            style={{
              background: 'none', border: '1px solid var(--border-md)', color: 'var(--grey-1)',
              width: '36px', height: '36px', borderRadius: 'var(--radius-full)', cursor: 'none', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all .3s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--red-bright)';
              (e.currentTarget as HTMLElement).style.color = 'var(--red-bright)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-md)';
              (e.currentTarget as HTMLElement).style.color = 'var(--grey-1)';
            }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '2rem' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '.08em', color: 'var(--red-bright)', textShadow: '0 0 15px var(--red-glow)', marginBottom: '.75rem' }}>
                BOOKING REQUEST SENT
              </div>
              <p className="body-sm" style={{ marginBottom: '2rem', fontSize: '.9rem' }}>
                We'll contact you immediately to confirm your reservation. See you at Infinity Gaming!
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => setSent(false)} className="btn btn-outline" style={{ fontSize: '.75rem' }}>
                  Book Another
                </button>
                <button onClick={close} className="btn btn-red" style={{ fontSize: '.75rem' }}>
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label" htmlFor="m-name">Your Name</label>
                  <input id="m-name" type="text" required placeholder="Arjun Sharma" className="form-input"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="form-label" htmlFor="m-phone">Phone Number</label>
                  <input id="m-phone" type="tel" required placeholder="+91 98000 00000" className="form-input"
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>

              {/* Session selection */}
              <div>
                <span className="form-label" style={{ display: 'block', marginBottom: '.6rem' }}>Select Setup</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                  {SESSION_TYPES.map(s => (
                    <button key={s.id} type="button"
                      className={`session-chip ${form.session === s.id ? 'active' : ''}`}
                      onClick={() => setForm({ ...form, session: s.id })}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="form-label" htmlFor="m-msg">
                  Notes / Time <span style={{ opacity: .5 }}>(optional)</span>
                </label>
                <textarea id="m-msg" rows={3} placeholder="Preferred arrival time, number of players, special requests..." className="form-input"
                  style={{ lineHeight: 1.6 }}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Submit */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', paddingTop: '.25rem' }}>
                <button type="submit" className="btn btn-red" style={{ flex: 1, justifyContent: 'center' }}>
                  Send Reservation
                </button>
                <a href="https://wa.me/919800000000" target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline" style={{ fontSize: '.72rem', whiteSpace: 'nowrap' }}>
                  WhatsApp ↗
                </a>
              </div>

              {/* Hours note */}
              <div className="hours-pill" style={{ justifyContent: 'center', marginTop: '.5rem' }}>
                <div className="live-dot" />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '.75rem', color: 'var(--white)', fontWeight: 600, letterSpacing: '.08em' }}>
                  OPEN DAILY · 10 : 00 AM — 11 : 00 PM
                </span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
