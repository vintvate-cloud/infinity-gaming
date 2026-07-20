'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<'tournaments' | 'games'>('tournaments');

  // Dashboard state
  const [tournaments, setTournaments] = useState([]);
  const [formData, setFormData] = useState({ id: '', title: '', game: '', date: '', description: '', status: 'upcoming' });
  const [isEditing, setIsEditing] = useState(false);

  // Games state
  const [games, setGames] = useState([]);
  const [gameData, setGameData] = useState({ id: '', title: '', genre: '', category: 'singleplayer', platform: 'PS5', rating: '', poster: '', description: '' });
  const [isEditingGame, setIsEditingGame] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchTournaments();
      fetchGames();
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
        fetchGames();
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

  const fetchGames = async () => {
    const res = await fetch('/api/games');
    const data = await res.json();
    setGames(data);
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

  const handleGameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = '/api/games';
    const method = isEditingGame ? 'PUT' : 'POST';
    
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gameData),
    });
    
    setGameData({ id: '', title: '', genre: '', category: 'singleplayer', platform: 'PS5', rating: '', poster: '', description: '' });
    setIsEditingGame(false);
    fetchGames();
  };

  const handleGameEdit = (g: any) => {
    setGameData(g);
    setIsEditingGame(true);
  };

  const handleGameDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this game?')) return;
    await fetch(`/api/games?id=${id}`, { method: 'DELETE' });
    fetchGames();
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ color: 'var(--red-bright)', fontFamily: 'var(--font-display)' }}>Admin Dashboard</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/" className="btn" style={{ background: 'var(--surface-3)', border: '1px solid var(--border-md)' }}>View Site</a>
            <button onClick={handleLogout} className="btn btn-red">Logout</button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-md)', paddingBottom: '1rem' }}>
          <button onClick={() => setActiveTab('tournaments')} style={{ background: activeTab === 'tournaments' ? 'var(--red-bright)' : 'transparent', color: activeTab === 'tournaments' ? 'var(--white)' : 'var(--grey-1)', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-tech)' }}>Tournaments</button>
          <button onClick={() => setActiveTab('games')} style={{ background: activeTab === 'games' ? 'var(--red-bright)' : 'transparent', color: activeTab === 'games' ? 'var(--white)' : 'var(--grey-1)', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-tech)' }}>Game Vault</button>
        </div>

        {activeTab === 'tournaments' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Tournament Form */}
            <div style={{ flex: '1 1 300px', background: 'var(--surface-2)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-md)', height: 'fit-content' }}>
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

            {/* Tournament List */}
            <div style={{ flex: '2 1 400px' }}>
              <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-tech)' }}>Manage Tournaments</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tournaments.length === 0 ? (
                  <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--surface-2)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-md)', color: 'var(--grey-1)' }}>
                    No tournaments found. Add one to get started.
                  </div>
                ) : (
                  tournaments.map((t: any) => (
                    <div key={t.id} style={{ background: 'var(--surface-2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
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
        )}

        {activeTab === 'games' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Game Form */}
            <div style={{ flex: '1 1 300px', background: 'var(--surface-2)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-md)', height: 'fit-content' }}>
              <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-tech)' }}>{isEditingGame ? 'Edit Game' : 'Add New Game'}</h3>
              <form onSubmit={handleGameSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label">Game Title</label>
                  <input type="text" className="form-input" required value={gameData.title} onChange={e => setGameData({...gameData, title: e.target.value})} placeholder="e.g. GTA V" />
                </div>
                <div>
                  <label className="form-label">Genre</label>
                  <input type="text" className="form-input" required value={gameData.genre} onChange={e => setGameData({...gameData, genre: e.target.value})} placeholder="e.g. Action-RPG" />
                </div>
                <div>
                  <label className="form-label">Category</label>
                  <select className="form-input" value={gameData.category} onChange={e => setGameData({...gameData, category: e.target.value})}>
                    <option value="singleplayer">Single Player</option>
                    <option value="twoplayer">2 Player</option>
                    <option value="fourplayer">4 Player</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Platform</label>
                  <select className="form-input" value={gameData.platform} onChange={e => setGameData({...gameData, platform: e.target.value})}>
                    <option value="PS5">PS5</option>
                    <option value="PC">PC</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Rating</label>
                  <input type="text" className="form-input" required value={gameData.rating} onChange={e => setGameData({...gameData, rating: e.target.value})} placeholder="e.g. 9.5" />
                </div>
                <div>
                  <label className="form-label">Poster Image URL</label>
                  <input type="text" className="form-input" required value={gameData.poster} onChange={e => setGameData({...gameData, poster: e.target.value})} placeholder="e.g. https://cdn.../image.jpg" />
                </div>
                <div>
                  <label className="form-label">Description</label>
                  <textarea className="form-input" required rows={2} value={gameData.description} onChange={e => setGameData({...gameData, description: e.target.value})} placeholder="Short description..." />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button type="submit" className="btn btn-red" style={{ flex: 1 }}>{isEditingGame ? 'Update' : 'Save'}</button>
                  {isEditingGame && (
                    <button type="button" onClick={() => { setIsEditingGame(false); setGameData({ id: '', title: '', genre: '', category: 'singleplayer', platform: 'PS5', rating: '', poster: '', description: '' }); }} className="btn" style={{ background: 'var(--surface-3)', border: '1px solid var(--border-md)' }}>Cancel</button>
                  )}
                </div>
              </form>
            </div>

            {/* Game List */}
            <div style={{ flex: '2 1 400px' }}>
              <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-tech)' }}>Manage Game Vault</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {games.length === 0 ? (
                  <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--surface-2)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-md)', color: 'var(--grey-1)' }}>
                    No games found. Add one to get started.
                  </div>
                ) : (
                  games.map((g: any) => (
                    <div key={g.id} style={{ background: 'var(--surface-2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <img src={g.poster} alt={g.title} style={{ width: '50px', height: '70px', objectFit: 'cover', borderRadius: '4px' }} />
                        <div>
                          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--white)' }}>{g.title}</h4>
                          <div style={{ color: 'var(--grey-1)', fontSize: '0.85rem' }}>{g.genre} • {g.platform} • {g.category}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button onClick={() => handleGameEdit(g)} style={{ background: 'var(--surface-3)', border: '1px solid var(--border-md)', color: 'var(--white)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => handleGameDelete(g.id)} style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid var(--red-border)', color: 'var(--red-bright)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Del</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
