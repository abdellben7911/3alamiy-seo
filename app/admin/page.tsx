'use client';

import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'HALLAMADRID7911@123';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const headers = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation',
};

type Tab = 'airdrops' | 'articles';

type Airdrop = {
  id: string;
  name: string;
  slug: string;
  status: string;
  cost: string;
  difficulty: string;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState(false);
  const [tab, setTab] = useState<Tab>('airdrops');

  const [airdrops, setAirdrops] = useState<Airdrop[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [localEdits, setLocalEdits] = useState<Record<string, Partial<Airdrop>>>({});

  const [article, setArticle] = useState({ slug: '', title: '', desc: '', cat: '', catColor: '#7CF5C0', time: '7 min' });
  const [articleSaving, setArticleSaving] = useState(false);
  const [articleSaved, setArticleSaved] = useState(false);
  const [articleError, setArticleError] = useState('');

  const login = () => {
    if (pw === ADMIN_PASSWORD) { setAuthed(true); setPwError(false); }
    else { setPwError(true); setTimeout(() => setPwError(false), 2000); }
  };

  const fetchAirdrops = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=id,name,slug,status,cost,difficulty&order=created_at.desc&limit=200`, { headers });
      const data = await res.json();
      setAirdrops(Array.isArray(data) ? data : []);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  useEffect(() => { if (authed) fetchAirdrops(); }, [authed]);

  const edit = (id: string, field: string, value: string) => {
    setLocalEdits(prev => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const getVal = (a: Airdrop, field: keyof Airdrop) => {
    return (localEdits[a.id]?.[field] ?? a[field]) as string;
  };

  const saveAirdrop = async (id: string) => {
    const changes = localEdits[id];
    if (!changes || Object.keys(changes).length === 0) return;
    setSaving(id);
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/airdrops?id=eq.${id}`, {
        method: 'PATCH', headers, body: JSON.stringify(changes),
      });
      setAirdrops(prev => prev.map(a => a.id === id ? { ...a, ...changes } : a));
      setLocalEdits(prev => { const n = { ...prev }; delete n[id]; return n; });
      setSaved(id);
      setTimeout(() => setSaved(null), 2500);
    } catch (e) { console.error(e); }
    setSaving(null);
  };

  const saveArticle = async () => {
    if (!article.slug || !article.title) { setArticleError('Slug and title are required.'); return; }
    setArticleSaving(true); setArticleError('');
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/articles`, {
        method: 'POST', headers,
        body: JSON.stringify({ ...article, description: article.desc, date: new Date().toISOString().split('T')[0] }),
      });
      if (res.ok || res.status === 201) {
        setArticleSaved(true);
        setArticle({ slug: '', title: '', desc: '', cat: '', catColor: '#7CF5C0', time: '7 min' });
        setTimeout(() => setArticleSaved(false), 4000);
      } else {
        setArticleError('Save failed. Check that the articles table exists in Supabase.');
      }
    } catch { setArticleError('Network error.'); }
    setArticleSaving(false);
  };

  const filtered = airdrops.filter(a =>
    a.name?.toLowerCase().includes(search.toLowerCase()) ||
    a.slug?.toLowerCase().includes(search.toLowerCase())
  );

  const sel = (val: string, opts: string[], colors: Record<string, string>, onChange: (v: string) => void) => (
    <select value={val} onChange={e => onChange(e.target.value)} style={{
      background: 'rgba(255,255,255,0.04)', border: `1px solid ${colors[val] ? colors[val] + '35' : 'rgba(255,255,255,0.1)'}`,
      color: colors[val] || 'rgba(255,255,255,0.6)', borderRadius: 8,
      padding: '7px 10px', fontSize: 12, fontWeight: 600, cursor: 'pointer', outline: 'none',
      fontFamily: 'var(--font-space), system-ui', width: '100%',
    }}>
      {opts.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );

  // ── LOGIN ──
  if (!authed) return (
    <div style={{ minHeight: '100vh', background: '#060A12', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space), system-ui' }}>
      <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '44px 40px', width: '100%', maxWidth: 380, textAlign: 'center' }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>🔐</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Admin Dashboard</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginBottom: 32 }}>3alamiy Web3 · Internal Only</div>
        <input
          type="password" placeholder="Password" value={pw}
          onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
          style={{
            width: '100%', background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${pwError ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: 10, padding: '12px 16px', color: '#fff', fontSize: 14,
            outline: 'none', marginBottom: pwError ? 8 : 16, boxSizing: 'border-box',
            fontFamily: 'var(--font-space), system-ui', transition: 'border-color 0.2s',
          }}
        />
        {pwError && <div style={{ fontSize: 12, color: '#f87171', marginBottom: 12, animation: 'shake 0.3s' }}>Incorrect password</div>}
        <button onClick={login} style={{
          width: '100%', background: '#7CF5C0', color: '#060A12',
          border: 'none', borderRadius: 10, padding: '12px',
          fontWeight: 700, fontSize: 14, cursor: 'pointer',
          fontFamily: 'var(--font-space), system-ui',
        }}>
          Enter Dashboard
        </button>
      </div>
    </div>
  );

  // ── DASHBOARD ──
  return (
    <div style={{ minHeight: '100vh', background: '#060A12', fontFamily: 'var(--font-space), system-ui', color: '#fff' }}>

      {/* Topbar */}
      <div style={{ background: '#0B1120', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 28px', position: 'sticky', top: 0, zIndex: 10, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/icon.svg" alt="" width={28} height={28} style={{ borderRadius: 7 }} />
            <span style={{ fontWeight: 700, fontSize: 15 }}>Admin</span>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', padding: '2px 8px', borderRadius: 99 }}>
              3alamiy Web3
            </span>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {[{ key: 'airdrops' as Tab, icon: '🪂', label: 'Airdrops' }, { key: 'articles' as Tab, icon: '📝', label: 'Articles' }].map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} style={{
                background: tab === t.key ? 'rgba(124,245,192,0.1)' : 'transparent',
                border: `1px solid ${tab === t.key ? 'rgba(124,245,192,0.25)' : 'rgba(255,255,255,0.07)'}`,
                color: tab === t.key ? '#7CF5C0' : 'rgba(255,255,255,0.4)',
                padding: '7px 16px', borderRadius: 9, cursor: 'pointer',
                fontSize: 12, fontWeight: 600,
                fontFamily: 'var(--font-space), system-ui', transition: 'all 0.15s',
              }}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 28px' }}>

        {/* ── AIRDROPS ── */}
        {tab === 'airdrops' && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Manage Airdrops</h1>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: '4px 0 0' }}>{airdrops.length} total · Edit status, cost, difficulty inline</p>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}
                  style={{
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 9, padding: '8px 14px', color: '#fff', fontSize: 12,
                    outline: 'none', width: 180, fontFamily: 'var(--font-space), system-ui',
                  }}
                />
                <button onClick={fetchAirdrops} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.5)', padding: '8px 14px', borderRadius: 9,
                  cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-space), system-ui',
                }}>↻ Refresh</button>
              </div>
            </div>

            {/* Column headers */}
            <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1.2fr 1fr 1fr 80px', gap: 12, padding: '6px 16px', marginBottom: 6 }}>
              {['Airdrop', 'Status', 'Cost', 'Difficulty', ''].map(h => (
                <span key={h} style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.2)' }}>{h}</span>
              ))}
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: 60, color: 'rgba(255,255,255,0.2)' }}>Loading...</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {filtered.map(a => {
                  const hasChanges = !!localEdits[a.id] && Object.keys(localEdits[a.id]).length > 0;
                  const isSaved = saved === a.id;
                  return (
                    <div key={a.id} style={{
                      display: 'grid', gridTemplateColumns: '2.5fr 1.2fr 1fr 1fr 80px',
                      gap: 12, alignItems: 'center',
                      background: '#0D1221',
                      border: `1px solid ${isSaved ? 'rgba(124,245,192,0.3)' : hasChanges ? 'rgba(245,158,11,0.25)' : 'rgba(255,255,255,0.055)'}`,
                      borderRadius: 12, padding: '10px 16px',
                      transition: 'border-color 0.25s',
                    }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>{a.slug}</div>
                      </div>

                      {sel(getVal(a, 'status'), ['Active', 'Ended', 'Claim', 'Upcoming'],
                        { Active: '#7CF5C0', Ended: '#f87171', Claim: '#f59e0b', Upcoming: '#818cf8' },
                        v => edit(a.id, 'status', v)
                      )}

                      {sel(getVal(a, 'cost'), ['Free', 'Low', 'Paid'],
                        { Free: '#7CF5C0', Low: '#f59e0b', Paid: '#f87171' },
                        v => edit(a.id, 'cost', v)
                      )}

                      {sel(getVal(a, 'difficulty'), ['Easy', 'Medium', 'Hard'],
                        { Easy: '#7CF5C0', Medium: '#f59e0b', Hard: '#f87171' },
                        v => edit(a.id, 'difficulty', v)
                      )}

                      <button onClick={() => saveAirdrop(a.id)} disabled={saving === a.id || !hasChanges} style={{
                        background: isSaved ? 'rgba(124,245,192,0.15)' : hasChanges ? 'rgba(124,245,192,0.1)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${isSaved ? 'rgba(124,245,192,0.4)' : hasChanges ? 'rgba(124,245,192,0.25)' : 'rgba(255,255,255,0.06)'}`,
                        color: hasChanges || isSaved ? '#7CF5C0' : 'rgba(255,255,255,0.2)',
                        borderRadius: 8, padding: '7px 0', width: '100%',
                        fontSize: 11, fontWeight: 700, cursor: hasChanges ? 'pointer' : 'default',
                        fontFamily: 'var(--font-space), system-ui', transition: 'all 0.2s',
                      }}>
                        {saving === a.id ? '...' : isSaved ? '✓ Done' : hasChanges ? 'Save' : '—'}
                      </button>
                    </div>
                  );
                })}
                {filtered.length === 0 && !loading && (
                  <div style={{ textAlign: 'center', padding: 48, color: 'rgba(255,255,255,0.2)', fontSize: 14 }}>No airdrops match your search</div>
                )}
              </div>
            )}
          </>
        )}

        {/* ── ARTICLES ── */}
        {tab === 'articles' && (
          <div style={{ maxWidth: 580 }}>
            <div style={{ marginBottom: 24 }}>
              <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Add New Article</h1>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: '4px 0 0' }}>Save article metadata — then add to app/learn/page.tsx</p>
            </div>

            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>

              {[
                { k: 'slug', l: 'Slug *', ph: 'zcash-orchard-vulnerability-2026', hint: 'Must match your app/learn/[slug] folder' },
                { k: 'title', l: 'Title *', ph: 'Zcash Critical Bug — AI Found 4-Year Vulnerability', hint: '' },
                { k: 'desc', l: 'Description', ph: 'Short description for the learn page card (max 120 chars)', hint: '' },
                { k: 'cat', l: 'Category', ph: 'Breaking / Analysis / Strategy / Beginners / Geo / Data / Hot', hint: '' },
                { k: 'time', l: 'Read Time', ph: '7 min', hint: '' },
              ].map(f => (
                <div key={f.k}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{f.l}</label>
                  <input value={(article as any)[f.k]} onChange={e => setArticle(p => ({ ...p, [f.k]: e.target.value }))} placeholder={f.ph}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9, padding: '10px 14px', color: '#fff', fontSize: 13, outline: 'none', fontFamily: 'var(--font-space), system-ui', boxSizing: 'border-box' }}
                  />
                  {f.hint && <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', marginTop: 4 }}>{f.hint}</div>}
                </div>
              ))}

              {/* Color picker */}
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Category Color</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['#7CF5C0','#f87171','#f59e0b','#818cf8','#60a5fa','#c084fc','#10b981','#06b6d4'].map(c => (
                    <button key={c} onClick={() => setArticle(p => ({ ...p, catColor: c }))} style={{
                      width: 30, height: 30, borderRadius: 8, background: c, cursor: 'pointer',
                      border: `3px solid ${article.catColor === c ? '#fff' : 'transparent'}`,
                      transition: 'border 0.15s', outline: 'none',
                    }} />
                  ))}
                </div>
              </div>

              {/* Preview card */}
              {article.slug && (
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '12px 14px' }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Card Preview</div>
                  <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, padding: '2px 9px', borderRadius: 99, background: `${article.catColor}18`, color: article.catColor, border: `1px solid ${article.catColor}30`, marginBottom: 6 }}>
                    {article.cat || 'Category'}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{article.title || 'Article title'}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{(article.desc || 'Description').slice(0, 120)}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', marginTop: 6 }}>{article.time}</div>
                </div>
              )}

              {articleError && <div style={{ fontSize: 12, color: '#f87171', background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: 8, padding: '10px 14px' }}>{articleError}</div>}
              {articleSaved && <div style={{ fontSize: 12, color: '#7CF5C0', background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.2)', borderRadius: 8, padding: '10px 14px' }}>✓ Saved! Now add to app/learn/page.tsx allArticles array.</div>}

              <button onClick={saveArticle} disabled={articleSaving} style={{
                background: '#7CF5C0', color: '#060A12', border: 'none', borderRadius: 10,
                padding: '13px', fontWeight: 700, fontSize: 14, cursor: articleSaving ? 'not-allowed' : 'pointer',
                opacity: articleSaving ? 0.7 : 1, fontFamily: 'var(--font-space), system-ui',
                transition: 'opacity 0.2s',
              }}>
                {articleSaving ? 'Saving...' : '+ Add Article'}
              </button>
            </div>

            <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: 10, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
              <strong style={{ color: '#f59e0b' }}>Note:</strong> Requires an <code style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 4px', borderRadius: 4 }}>articles</code> table in Supabase.
              The article file in <code style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 4px', borderRadius: 4 }}>app/learn/</code> still needs to be created manually.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
