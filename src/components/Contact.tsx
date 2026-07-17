'use client';


export default function Contact() {

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
                    <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)' }}>+91 70676 01040</div>
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



          </div>
        </div>
      </div>
    </section>
  );
}
