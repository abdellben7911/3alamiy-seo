'use client';

import { useState, useEffect, useRef } from 'react';

const ADMIN_PASSWORD = 'HALLAMADRID7911@123';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const H = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation',
};

type Tab = 'airdrops' | 'articles';
type Airdrop = { id: string; name: string; slug: string; status: string; cost: string; difficulty: string; };

const STATUS_CFG: Record<string, { color: string; bg: string; dot: string }> = {
  Active:   { color: '#7CF5C0', bg: 'rgba(124,245,192,0.1)', dot: '#7CF5C0' },
  Ended:    { color: '#f87171', bg: 'rgba(248,113,113,0.1)', dot: '#f87171' },
  Claim:    { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',  dot: '#f59e0b' },
  Upcoming: { color: '#818cf8', bg: 'rgba(129,140,248,0.1)', dot: '#818cf8' },
};
const COST_CFG: Record<string, { color: string; bg: string }> = {
  Free: { color: '#7CF5C0', bg: 'rgba(124,245,192,0.08)' },
  Low:  { color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  Paid: { color: '#f87171', bg: 'rgba(248,113,113,0.08)' },
};
const DIFF_CFG: Record<string, { color: string }> = {
  Easy:   { color: '#7CF5C0' },
  Medium: { color: '#f59e0b' },
  Hard:   { color: '#f87171' },
};
const CAT_COLORS = ['#7CF5C0','#f87171','#f59e0b','#818cf8','#60a5fa','#c084fc','#10b981','#06b6d4'];

export default function AdminPage() {
  const [authed, setAuthed]   = useState(false);
  const [pw, setPw]           = useState('');
  const [pwErr, setPwErr]     = useState(false);
  const [shake, setShake]     = useState(false);
  const [tab, setTab]         = useState<Tab>('airdrops');
  const [airdrops, setAirdrops] = useState<Airdrop[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch]   = useState('');
  const [edits, setEdits]     = useState<Record<string, Partial<Airdrop>>>({});
  const [saving, setSaving]   = useState<string | null>(null);
  const [saved, setSaved]     = useState<string | null>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const [art, setArt] = useState({ slug:'', title:'', desc:'', cat:'', catColor:'#7CF5C0', time:'7 min' });
  const [artSaving, setArtSaving] = useState(false);
  const [artSaved, setArtSaved]   = useState(false);
  const [artErr, setArtErr]       = useState('');

  const login = () => {
    if (pw === ADMIN_PASSWORD) { setAuthed(true); }
    else { setPwErr(true); setShake(true); setTimeout(() => { setPwErr(false); setShake(false); }, 600); }
  };

  const fetchAirdrops = async () => {
    setLoading(true);
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=id,name,slug,status,cost,difficulty&order=created_at.desc&limit=300`, { headers: H });
      const d = await r.json();
      setAirdrops(Array.isArray(d) ? d : []);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { if (authed) fetchAirdrops(); }, [authed]);

  const edit = (id: string, field: string, value: string) =>
    setEdits(p => ({ ...p, [id]: { ...p[id], [field]: value } }));

  const get = (a: Airdrop, f: keyof Airdrop) => (edits[a.id]?.[f] ?? a[f]) as string;

  const save = async (id: string) => {
    const changes = edits[id]; if (!changes || !Object.keys(changes).length) return;
    setSaving(id);
    await fetch(`${SUPABASE_URL}/rest/v1/airdrops?id=eq.${id}`, { method: 'PATCH', headers: H, body: JSON.stringify(changes) });
    setAirdrops(p => p.map(a => a.id === id ? { ...a, ...changes } : a));
    setEdits(p => { const n = { ...p }; delete n[id]; return n; });
    setSaving(null); setSaved(id); setTimeout(() => setSaved(null), 2500);
  };

  const saveArt = async () => {
    if (!art.slug || !art.title) { setArtErr('Slug and title required.'); return; }
    setArtSaving(true); setArtErr('');
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/articles`, {
        method: 'POST', headers: H,
        body: JSON.stringify({ ...art, description: art.desc, date: new Date().toISOString().split('T')[0] }),
      });
      if (r.ok || r.status === 201) {
        setArtSaved(true); setArt({ slug:'', title:'', desc:'', cat:'', catColor:'#7CF5C0', time:'7 min' });
        setTimeout(() => setArtSaved(false), 4000);
      } else setArtErr('Failed — check articles table exists in Supabase.');
    } catch { setArtErr('Network error.'); }
    setArtSaving(false);
  };

  const filtered = airdrops.filter(a =>
    a.name?.toLowerCase().includes(search.toLowerCase()) ||
    a.slug?.toLowerCase().includes(search.toLowerCase())
  );

  const changed = (id: string) => !!edits[id] && Object.keys(edits[id]).length > 0;

  // ── LOGIN ──
  if (!authed) return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@400;600;700&display=swap');
        .adm-login { min-height:100vh; background:#04080F; display:flex; align-items:center; justify-content:center; font-family:'Outfit',system-ui; }
        .adm-login-card { width:100%; max-width:360px; padding:0 20px; }
        .adm-login-inner { background:#0A1020; border:1px solid rgba(255,255,255,0.07); border-radius:20px; padding:44px 36px; text-align:center; }
        .adm-login-logo { width:52px; height:52px; margin:0 auto 20px; border-radius:14px; background:rgba(124,245,192,0.1); border:1px solid rgba(124,245,192,0.2); display:flex; align-items:center; justify-content:center; font-size:24px; }
        .adm-login-title { font-size:22px; font-weight:700; color:#fff; margin-bottom:4px; letter-spacing:-0.02em; }
        .adm-login-sub { font-size:13px; color:rgba(255,255,255,0.3); margin-bottom:32px; font-family:'JetBrains Mono',monospace; }
        .adm-login-input { width:100%; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09); border-radius:11px; padding:12px 16px; color:#fff; font-size:14px; outline:none; margin-bottom:14px; box-sizing:border-box; font-family:'Outfit',system-ui; transition:border-color 0.2s; }
        .adm-login-input:focus { border-color:rgba(124,245,192,0.35); }
        .adm-login-input.err { border-color:rgba(248,113,113,0.5); }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-6px)} 40%,80%{transform:translateX(6px)} }
        .shaking { animation:shake 0.4s ease; }
        .adm-login-btn { width:100%; background:#7CF5C0; color:#04080F; border:none; border-radius:11px; padding:13px; font-weight:700; font-size:14px; cursor:pointer; font-family:'Outfit',system-ui; letter-spacing:0.01em; transition:opacity 0.15s; }
        .adm-login-btn:hover { opacity:0.88; }
        .adm-err { font-size:12px; color:#f87171; margin-bottom:10px; font-family:'JetBrains Mono',monospace; }
      `}</style>
      <div className="adm-login">
        <div className="adm-login-card">
          <div className="adm-login-inner">
            <div className="adm-login-logo">⚙️</div>
            <div className="adm-login-title">Admin Panel</div>
            <div className="adm-login-sub">3alamiy.web3 / internal</div>
            <input ref={pwRef} type="password" placeholder="Enter password" value={pw}
              onChange={e => setPw(e.target.value)} onKeyDown={e => e.key === 'Enter' && login()}
              className={`adm-login-input ${shake ? 'shaking' : ''} ${pwErr ? 'err' : ''}`}
            />
            {pwErr && <div className="adm-err">// incorrect password</div>}
            <button onClick={login} className="adm-login-btn">Access Dashboard →</button>
          </div>
        </div>
      </div>
    </>
  );

  // ── DASHBOARD ──
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        :root { --bg:#04080F; --surface:#090F1D; --card:#0D1628; --border:rgba(255,255,255,0.07); --green:#7CF5C0; --red:#f87171; --amber:#f59e0b; --purple:#818cf8; }
        .adm * { box-sizing:border-box; }
        .adm { min-height:100vh; background:var(--bg); font-family:'Outfit',system-ui; color:#fff; }

        /* Topbar */
        .adm-top { height:54px; background:var(--surface); border-bottom:1px solid var(--border); display:flex; align-items:center; padding:0 28px; gap:16px; position:sticky; top:0; z-index:20; backdrop-filter:blur(12px); }
        .adm-logo { display:flex; align-items:center; gap:8px; }
        .adm-logo img { width:26px; height:26px; border-radius:7px; }
        .adm-logo-name { font-weight:700; font-size:14px; letter-spacing:-0.01em; }
        .adm-logo-tag { font-family:'JetBrains Mono',monospace; font-size:10px; color:rgba(255,255,255,0.25); background:rgba(255,255,255,0.05); border:1px solid var(--border); padding:2px 8px; border-radius:99px; }
        .adm-top-center { flex:1; display:flex; justify-content:center; gap:4px; }
        .adm-tab { padding:6px 18px; border-radius:9px; border:1px solid transparent; font-size:12px; font-weight:600; cursor:pointer; font-family:'Outfit',system-ui; transition:all 0.15s; color:rgba(255,255,255,0.35); background:transparent; }
        .adm-tab:hover { color:rgba(255,255,255,0.65); border-color:var(--border); }
        .adm-tab.on { color:var(--green); background:rgba(124,245,192,0.08); border-color:rgba(124,245,192,0.22); }
        .adm-top-right { display:flex; align-items:center; gap:8px; }
        .adm-online { display:flex; align-items:center; gap:5px; font-family:'JetBrains Mono',monospace; font-size:10px; color:rgba(255,255,255,0.25); }
        .adm-online-dot { width:6px; height:6px; border-radius:50%; background:var(--green); box-shadow:0 0 6px rgba(124,245,192,0.8); animation:adm-pulse 2s infinite; }
        @keyframes adm-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

        /* Body */
        .adm-body { max-width:1140px; margin:0 auto; padding:28px 28px 80px; }

        /* Section header */
        .adm-sec-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; flex-wrap:wrap; gap:12px; }
        .adm-sec-title { font-size:20px; font-weight:700; letter-spacing:-0.02em; }
        .adm-sec-sub { font-size:12px; color:rgba(255,255,255,0.3); margin-top:3px; font-family:'JetBrains Mono',monospace; }
        .adm-actions { display:flex; gap:8px; align-items:center; }

        /* Search */
        .adm-search { position:relative; }
        .adm-search input { background:rgba(255,255,255,0.04); border:1px solid var(--border); border-radius:10px; padding:8px 14px 8px 34px; color:#fff; font-size:12px; outline:none; width:200px; font-family:'Outfit',system-ui; transition:border-color 0.2s; }
        .adm-search input:focus { border-color:rgba(124,245,192,0.3); }
        .adm-search-icon { position:absolute; left:11px; top:50%; transform:translateY(-50%); color:rgba(255,255,255,0.2); pointer-events:none; }
        .adm-btn { background:rgba(255,255,255,0.04); border:1px solid var(--border); color:rgba(255,255,255,0.45); padding:8px 14px; border-radius:10px; cursor:pointer; font-size:12px; font-family:'Outfit',system-ui; font-weight:500; transition:all 0.15s; }
        .adm-btn:hover { border-color:rgba(255,255,255,0.14); color:rgba(255,255,255,0.7); }

        /* Stats strip */
        .adm-stats { display:flex; gap:10px; margin-bottom:24px; flex-wrap:wrap; }
        .adm-stat { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:12px 18px; display:flex; align-items:center; gap:10px; }
        .adm-stat-val { font-size:20px; font-weight:700; font-family:'JetBrains Mono',monospace; }
        .adm-stat-lbl { font-size:10px; color:rgba(255,255,255,0.3); text-transform:uppercase; letter-spacing:0.08em; font-weight:600; }

        /* Table */
        .adm-thead { display:grid; grid-template-columns:2.5fr 1.1fr 0.9fr 0.9fr 90px; gap:10px; padding:7px 16px; margin-bottom:5px; }
        .adm-th { font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,0.18); font-family:'JetBrains Mono',monospace; }

        .adm-rows { display:flex; flex-direction:column; gap:5px; }
        .adm-row { display:grid; grid-template-columns:2.5fr 1.1fr 0.9fr 0.9fr 90px; gap:10px; align-items:center; background:var(--card); border:1px solid var(--border); border-radius:13px; padding:10px 16px; transition:border-color 0.25s, background 0.2s; }
        .adm-row:hover { background:#0F1A2E; border-color:rgba(255,255,255,0.1); }
        .adm-row.has-changes { border-color:rgba(245,158,11,0.3); }
        .adm-row.is-saved { border-color:rgba(124,245,192,0.35); background:rgba(124,245,192,0.03); }

        .adm-airdrop-name { font-size:13px; font-weight:600; color:#fff; margin-bottom:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .adm-airdrop-slug { font-size:10px; color:rgba(255,255,255,0.2); font-family:'JetBrains Mono',monospace; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

        /* Custom select */
        .adm-sel { width:100%; border-radius:9px; padding:7px 10px; font-size:11px; font-weight:600; cursor:pointer; outline:none; appearance:none; -webkit-appearance:none; font-family:'Outfit',system-ui; border:1px solid; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 8px center; padding-right:24px; }

        /* Save button */
        .adm-save-btn { width:100%; padding:8px 0; border-radius:9px; font-size:11px; font-weight:700; cursor:pointer; font-family:'Outfit',system-ui; border:1px solid; transition:all 0.2s; letter-spacing:0.02em; }

        /* Empty */
        .adm-empty { text-align:center; padding:60px 0; color:rgba(255,255,255,0.15); font-family:'JetBrains Mono',monospace; font-size:13px; }

        /* Article form */
        .adm-form { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:28px; max-width:600px; }
        .adm-field { margin-bottom:16px; }
        .adm-label { display:block; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,0.3); margin-bottom:7px; font-family:'JetBrains Mono',monospace; }
        .adm-input { width:100%; background:rgba(255,255,255,0.04); border:1px solid var(--border); border-radius:9px; padding:10px 14px; color:#fff; font-size:13px; outline:none; font-family:'Outfit',system-ui; transition:border-color 0.2s; }
        .adm-input:focus { border-color:rgba(124,245,192,0.35); }
        .adm-hint { font-size:10px; color:rgba(255,255,255,0.18); margin-top:5px; font-family:'JetBrains Mono',monospace; }
        .adm-colors { display:flex; gap:8px; flex-wrap:wrap; }
        .adm-color-btn { width:28px; height:28px; border-radius:7px; cursor:pointer; transition:all 0.15s; border:2px solid transparent; outline:none; }
        .adm-color-btn.active { border-color:#fff; transform:scale(1.15); }
        .adm-preview { background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:10px; padding:14px 16px; margin:16px 0; }
        .adm-preview-label { font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,0.18); margin-bottom:10px; font-family:'JetBrains Mono',monospace; }
        .adm-preview-cat { display:inline-block; font-size:9px; font-weight:700; padding:2px 9px; border-radius:99px; margin-bottom:6px; }
        .adm-preview-title { font-size:14px; font-weight:600; color:#fff; margin-bottom:4px; }
        .adm-preview-desc { font-size:12px; color:rgba(255,255,255,0.35); }
        .adm-submit { width:100%; background:var(--green); color:#04080F; border:none; border-radius:10px; padding:13px; font-weight:700; font-size:14px; cursor:pointer; font-family:'Outfit',system-ui; transition:opacity 0.15s; }
        .adm-submit:hover { opacity:0.88; }
        .adm-submit:disabled { opacity:0.5; cursor:not-allowed; }
        .adm-msg { font-size:12px; padding:10px 14px; border-radius:9px; margin-bottom:14px; font-family:'JetBrains Mono',monospace; }
        .adm-msg.ok { color:var(--green); background:rgba(124,245,192,0.06); border:1px solid rgba(124,245,192,0.2); }
        .adm-msg.err { color:var(--red); background:rgba(248,113,113,0.06); border:1px solid rgba(248,113,113,0.2); }
        .adm-note { margin-top:14px; padding:12px 16px; background:rgba(245,158,11,0.04); border:1px solid rgba(245,158,11,0.12); border-radius:10px; font-size:11px; color:rgba(255,255,255,0.35); font-family:'JetBrains Mono',monospace; max-width:600px; }
        .adm-note strong { color:var(--amber); }
        code { background:rgba(255,255,255,0.06); padding:1px 5px; border-radius:4px; }

        @keyframes adm-fade { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .adm-body > * { animation:adm-fade 0.3s ease forwards; }

        @media(max-width:768px) {
          .adm-top { padding:0 16px; }
          .adm-body { padding:20px 16px 60px; }
          .adm-thead { display:none; }
          .adm-row { grid-template-columns:1fr; gap:8px; }
          .adm-stats { display:grid; grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div className="adm">

        {/* Topbar */}
        <header className="adm-top">
          <div className="adm-logo">
            <img src="/icon.svg" alt="" />
            <span className="adm-logo-name">Admin</span>
            <span className="adm-logo-tag">3alamiy.web3</span>
          </div>
          <div className="adm-top-center">
            {([['airdrops','🪂 Airdrops'],['articles','📝 Articles']] as [Tab,string][]).map(([k,l]) => (
              <button key={k} className={`adm-tab${tab===k?' on':''}`} onClick={() => setTab(k)}>{l}</button>
            ))}
          </div>
          <div className="adm-top-right">
            <div className="adm-online"><span className="adm-online-dot" />online</div>
          </div>
        </header>

        <div className="adm-body">

          {/* ── AIRDROPS ── */}
          {tab === 'airdrops' && (<>
            <div className="adm-sec-hdr">
              <div>
                <div className="adm-sec-title">Manage Airdrops</div>
                <div className="adm-sec-sub">// {airdrops.length} records · edit inline · click save to push</div>
              </div>
              <div className="adm-actions">
                <div className="adm-search">
                  <svg className="adm-search-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  <input placeholder="Search name or slug..." value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <button className="adm-btn" onClick={fetchAirdrops}>↻ Refresh</button>
              </div>
            </div>

            {/* Stats */}
            <div className="adm-stats">
              {[
                { val: airdrops.filter(a=>a.status==='Active').length, lbl: 'Active', color: '#7CF5C0' },
                { val: airdrops.filter(a=>a.status==='Ended').length, lbl: 'Ended', color: '#f87171' },
                { val: airdrops.filter(a=>a.cost==='Free').length, lbl: 'Free', color: '#7CF5C0' },
                { val: airdrops.filter(a=>a.difficulty==='Easy').length, lbl: 'Easy', color: '#7CF5C0' },
              ].map(s => (
                <div key={s.lbl} className="adm-stat">
                  <div className="adm-stat-val" style={{ color: s.color }}>{s.val}</div>
                  <div className="adm-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="adm-thead">
              {['Airdrop / Slug','Status','Cost','Difficulty',''].map(h => (
                <div key={h} className="adm-th">{h}</div>
              ))}
            </div>

            {loading ? (
              <div className="adm-empty">// loading records...</div>
            ) : (
              <div className="adm-rows">
                {filtered.map(a => {
                  const st = get(a,'status'); const co = get(a,'cost'); const di = get(a,'difficulty');
                  const sc = STATUS_CFG[st] || STATUS_CFG.Active;
                  const cc = COST_CFG[co] || COST_CFG.Free;
                  const dc = DIFF_CFG[di] || DIFF_CFG.Easy;
                  const isSaved = saved === a.id;
                  const hasChg = changed(a.id);

                  return (
                    <div key={a.id} className={`adm-row${hasChg?' has-changes':''}${isSaved?' is-saved':''}`}>
                      {/* Name */}
                      <div style={{ minWidth: 0 }}>
                        <div className="adm-airdrop-name">{a.name}</div>
                        <div className="adm-airdrop-slug">{a.slug}</div>
                      </div>

                      {/* Status */}
                      <select className="adm-sel" value={st} onChange={e => edit(a.id,'status',e.target.value)}
                        style={{ color: sc.color, background: sc.bg, borderColor: sc.color+'40' }}>
                        {['Active','Ended','Claim','Upcoming'].map(o => <option key={o} value={o}>{o}</option>)}
                      </select>

                      {/* Cost */}
                      <select className="adm-sel" value={co} onChange={e => edit(a.id,'cost',e.target.value)}
                        style={{ color: cc.color, background: cc.bg, borderColor: cc.color+'40' }}>
                        {['Free','Low','Paid'].map(o => <option key={o} value={o}>{o}</option>)}
                      </select>

                      {/* Difficulty */}
                      <select className="adm-sel" value={di} onChange={e => edit(a.id,'difficulty',e.target.value)}
                        style={{ color: dc.color, background: 'rgba(255,255,255,0.04)', borderColor: dc.color+'35' }}>
                        {['Easy','Medium','Hard'].map(o => <option key={o} value={o}>{o}</option>)}
                      </select>

                      {/* Save */}
                      <button className="adm-save-btn" onClick={() => save(a.id)} disabled={saving===a.id || !hasChg}
                        style={{
                          color: isSaved ? '#7CF5C0' : hasChg ? '#fff' : 'rgba(255,255,255,0.2)',
                          background: isSaved ? 'rgba(124,245,192,0.12)' : hasChg ? 'rgba(124,245,192,0.1)' : 'rgba(255,255,255,0.03)',
                          borderColor: isSaved ? 'rgba(124,245,192,0.4)' : hasChg ? 'rgba(124,245,192,0.3)' : 'rgba(255,255,255,0.06)',
                          cursor: hasChg ? 'pointer' : 'default',
                        }}>
                        {saving===a.id ? '···' : isSaved ? '✓ saved' : hasChg ? 'Save' : '—'}
                      </button>
                    </div>
                  );
                })}
                {filtered.length === 0 && !loading && (
                  <div className="adm-empty">// no results for "{search}"</div>
                )}
              </div>
            )}
          </>)}

          {/* ── ARTICLES ── */}
          {tab === 'articles' && (<>
            <div className="adm-sec-hdr">
              <div>
                <div className="adm-sec-title">Add New Article</div>
                <div className="adm-sec-sub">// saves to supabase · appears on /learn within 5 min</div>
              </div>
            </div>

            <div className="adm-form">
              {[
                { k:'slug', l:'Slug *', ph:'zcash-orchard-vulnerability-2026', hint:'Must match app/learn/[slug] folder name' },
                { k:'title', l:'Title *', ph:'Zcash Critical Bug — AI Found 4-Year Vulnerability' },
                { k:'desc', l:'Description', ph:'Short description shown on learn page (max 120 chars)' },
                { k:'cat', l:'Category', ph:'Breaking · Analysis · Strategy · Beginners · Geo · Data · Hot' },
                { k:'time', l:'Read Time', ph:'7 min' },
              ].map(f => (
                <div key={f.k} className="adm-field">
                  <label className="adm-label">{f.l}</label>
                  <input className="adm-input" value={(art as any)[f.k]} placeholder={f.ph}
                    onChange={e => setArt(p => ({ ...p, [f.k]: e.target.value }))} />
                  {f.hint && <div className="adm-hint">// {f.hint}</div>}
                </div>
              ))}

              <div className="adm-field">
                <label className="adm-label">Category Color</label>
                <div className="adm-colors">
                  {CAT_COLORS.map(c => (
                    <button key={c} className={`adm-color-btn${art.catColor===c?' active':''}`}
                      onClick={() => setArt(p => ({ ...p, catColor: c }))}
                      style={{ background: c }} />
                  ))}
                </div>
              </div>

              {art.slug && (
                <div className="adm-preview">
                  <div className="adm-preview-label">// card preview</div>
                  <div className="adm-preview-cat" style={{ color: art.catColor, background: art.catColor+'18', border: `1px solid ${art.catColor}30` }}>
                    {art.cat || 'Category'}
                  </div>
                  <div className="adm-preview-title">{art.title || 'Article title'}</div>
                  <div className="adm-preview-desc">{(art.desc || 'Description').slice(0,120)}</div>
                  <div style={{ fontSize:10, color:'rgba(255,255,255,0.2)', marginTop:6, fontFamily:'JetBrains Mono,monospace' }}>{art.time} · /learn/{art.slug}</div>
                </div>
              )}

              {artSaved && <div className="adm-msg ok">✓ saved — appears on /learn within 5 minutes</div>}
              {artErr && <div className="adm-msg err">// {artErr}</div>}

              <button className="adm-submit" onClick={saveArt} disabled={artSaving}>
                {artSaving ? 'Saving...' : '+ Publish Article'}
              </button>
            </div>

            <div className="adm-note">
              <strong>Note:</strong> This saves metadata to the <code>articles</code> table. The actual article file at <code>app/learn/[slug]/page.tsx</code> still needs to be created manually or via a future dynamic renderer.
            </div>
          </>)}

        </div>
      </div>
    </>
  );
}
