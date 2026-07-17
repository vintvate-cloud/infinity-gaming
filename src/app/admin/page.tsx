'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Dashboard state
  const [tournaments, setTournaments] = useState([]);
  const [formData, setFormData] = useState({ id: '', title: '', game: '', date: '', description: '', status: 'upcoming' });
  const [isEditing, setIsEditing] = useState(false);

  // Check auth implicitly by trying to fetch tournaments
  useEffect(() => {
    // If it's a real app we'd verify auth server side, but here we can just rely on the cookies.
    // Let's just assume not authenticated until logged in, since it's a simple app.
    // To be slightly better, we check localStorage or just let them login.
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchTournaments();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('admin_auth', 'true');
        fetchTournaments();
      } else {
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      setError('An error occurred');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    localStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
  };

  const fetchTournaments = async () => {
    const res = await fetch('/api/tournaments');
    const data = await res.json();
    setTournaments(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = '/api/tournaments';
    const method = isEditing ? 'PUT' : 'POST';
    
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    setFormData({ id: '', title: '', game: '', date: '', description: '', status: 'upcoming' });
    setIsEditing(false);
    fetchTournaments();
  };

  const handleEdit = (t: any) => {
    setFormData(t);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this tournament?')) return;
    await fetch(`/api/tournaments?id=${id}`, { method: 'DELETE' });
    fetchTournaments();
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--black)' }}>
        <CustomCursor />
        <div style={{ background: 'var(--surface-2)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--red-border)', width: '100%', maxWidth: '400px' }}>
          <h1 style={{ color: 'var(--red-bright)', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'var(--font-display)' }}>ADMIN LOGIN</h1>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="form-input"
              required
            />
            {error && <div style={{ color: 'var(--red-bright)', fontSize: '0.85rem' }}>{error}</div>}
            <button type="submit" className="btn btn-red" disabled={loading}>
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', padding: '4rem 2rem', color: 'var(--white)' }}>
      <CustomCursor />
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: 'var(--red-bright)', fontFamily: 'var(--font-display)' }}>Admin Dashboard</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/" className="btn" style={{ background: 'var(--surface-3)', border: '1px solid var(--border-md)' }}>View Site</a>
            <button onClick={handleLogout} className="btn btn-red">Logout</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
          {/* Form */}
          <div style={{ background: 'var(--surface-2)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-md)', height: 'fit-content' }}>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-tech)' }}>{isEditing ? 'Edit Tournament' : 'Add New Tournament'}</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className="form-label">Tournament Title</label>
                <input type="text" className="form-input" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Winter FIFA Cup" />
              </div>
              <div>
                <label className="form-label">Game</label>
                <input type="text" className="form-input" required value={formData.game} onChange={e => setFormData({...formData, game: e.target.value})} placeholder="e.g. FIFA 24" />
              </div>
              <div>
                <label className="form-label">Date & Time</label>
                <input type="text" className="form-input" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} placeholder="e.g. Oct 25, 6:00 PM" />
              </div>
              <div>
                <label className="form-label">Description / Prize</label>
                <textarea className="form-input" required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="e.g. 50k Prize pool. 32 slots available." />
              </div>
              <div>
                <label className="form-label">Status</label>
                <select className="form-input" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-red" style={{ flex: 1 }}>{isEditing ? 'Update' : 'Save'}</button>
                {isEditing && (
                  <button type="button" onClick={() => { setIsEditing(false); setFormData({ id: '', title: '', game: '', date: '', description: '', status: 'upcoming' }); }} className="btn" style={{ background: 'var(--surface-3)', border: '1px solid var(--border-md)' }}>Cancel</button>
                )}
              </div>
            </form>
          </div>

          {/* List */}
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-tech)' }}>Manage Tournaments</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tournaments.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--surface-2)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-md)', color: 'var(--grey-1)' }}>
                  No tournaments found. Add one to get started.
                </div>
              ) : (
                tournaments.map((t: any) => (
                  <div key={t.id} style={{ background: 'var(--surface-2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'inline-block', padding: '0.2rem 0.6rem', background: t.status === 'ongoing' ? 'rgba(0,255,0,0.1)' : 'var(--surface-3)', color: t.status === 'ongoing' ? '#00ff00' : 'var(--grey-1)', fontSize: '0.7rem', borderRadius: 'var(--radius-full)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        {t.status}
                      </div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--white)' }}>{t.title}</h4>
                      <div style={{ color: 'var(--red-bright)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-tech)' }}>{t.game} • {t.date}</div>
                      <p style={{ color: 'var(--grey-1)', fontSize: '0.85rem' }}>{t.description}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => handleEdit(t)} style={{ background: 'var(--surface-3)', border: '1px solid var(--border-md)', color: 'var(--white)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleDelete(t.id)} style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid var(--red-border)', color: 'var(--red-bright)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Del</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
