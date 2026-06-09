'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { createClient } from '../auth/supabase';

type Wallet = { id: string; wallet_address: string; nickname: string | null; chain: string; created_at: string };
type Token = { chain: string; chainColor: string; symbol: string; name: string; balanceFormatted: number; logoUrl: string | null; quoteRate: number; valueUsd: number; change24h: number | null; isNative: boolean; contractAddress: string };
type BalanceData = { tokens: Token[]; totalUsd: number; byChain: Record<string, number>; tokenCount: number };

const fmt = (n: number) => n >= 1e6 ? `$${(n/1e6).toFixed(2)}M` : n >= 1e3 ? `$${(n/1e3).toFixed(2)}K` : `$${n.toFixed(2)}`;
const fmtBal = (n: number) => n >= 1e6 ? `${(n/1e6).toFixed(2)}M` : n >= 1e3 ? `${(n/1e3).toFixed(2)}K` : n >= 1 ? n.toFixed(4) : n.toPrecision(3);
const shortAddr = (a: string) => `${a.slice(0,6)}…${a.slice(-4)}`;

const CHAIN_COLORS: Record<string, string> = {
  Ethereum:'#627EEA', Arbitrum:'#28A0F0', Base:'#0052FF', Optimism:'#FF0420',
  Polygon:'#8247E5', 'BNB Chain':'#F0B90B', zkSync:'#8C8DFC', Linea:'#61DFFF', Solana:'#9945FF',
};

const TRENDING = [
  { name:'LayerZero', chain:'Multi-chain', reward:'$200–2,000', hot:true, href:'/learn' },
  { name:'Hyperliquid S2', chain:'HyperEVM', reward:'Up to $10K', hot:true, href:'/learn/hyperliquid-guide' },
  { name:'MegaETH', chain:'MegaETH', reward:'TBA', hot:true, href:'/learn/how-to-farm-megaeth-airdrop' },
  { name:'Base Ecosystem', chain:'Base', reward:'Multiple', hot:false, href:'/learn/best-base-airdrops-2026' },
  { name:'Arbitrum ARB2', chain:'Arbitrum', reward:'TBA', hot:false, href:'/airdrops' },
];

// ── Global styles injected always (never gated behind a conditional return) ──
const GLOBAL_CSS = `
  @keyframes pf-spin { to { transform: rotate(360deg); } }
  @keyframes pf-fade { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
  @keyframes pf-shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  .pf-page { min-height:100vh; background:#060A12; font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif; color:#fff; }
  .pf-spin { width:36px; height:36px; border:3px solid rgba(124,245,192,0.15); border-top-color:#7CF5C0; border-radius:50%; animation:pf-spin 0.75s linear infinite; }
  .pf-skel { background:linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 100%); background-size:400px 100%; animation:pf-shimmer 1.4s ease infinite; border-radius:8px; display:inline-block; }

  /* ─ Hero ─ */
  .pf-hero { padding:36px 24px 28px; border-bottom:1px solid rgba(255,255,255,0.07); }
  .pf-hero-inner { max-width:1100px; margin:0 auto; }
  .pf-hero-row { display:flex; align-items:flex-start; justify-content:space-between; gap:20px; flex-wrap:wrap; margin-bottom:24px; }
  .pf-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(124,245,192,0.07); border:1px solid rgba(124,245,192,0.2); color:#7CF5C0; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:12px; }
  .pf-h1 { font-size:clamp(26px,4vw,38px); font-weight:900; color:#fff; letter-spacing:-0.04em; margin:0 0 10px; line-height:1.1; }
  .pf-sub { font-size:14px; color:rgba(255,255,255,0.35); line-height:1.75; margin:0; max-width:440px; }
  .pf-actions { display:flex; align-items:center; gap:10px; flex-wrap:wrap; padding-top:4px; }
  .pf-add-btn { display:flex; align-items:center; gap:7px; background:linear-gradient(135deg,#7CF5C0,#4ade80); color:#060A12; font-size:13px; font-weight:800; padding:11px 22px; border-radius:11px; border:none; cursor:pointer; transition:all 0.15s; font-family:inherit; white-space:nowrap; }
  .pf-add-btn:hover { transform:translateY(-1px); box-shadow:0 8px 24px rgba(124,245,192,0.25); }
  .pf-refresh-btn { display:flex; align-items:center; gap:7px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.09); color:rgba(255,255,255,0.45); font-size:12px; font-weight:700; padding:11px 18px; border-radius:11px; cursor:pointer; transition:all 0.15s; font-family:inherit; white-space:nowrap; }
  .pf-refresh-btn:hover { background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.75); }
  .pf-refresh-btn:disabled { opacity:0.4; cursor:not-allowed; }

  /* ─ Wallet tabs ─ */
  .pf-tabs { display:flex; gap:8px; flex-wrap:wrap; align-items:center; }
  .pf-tab { display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:12px; padding:10px 14px; cursor:pointer; transition:all 0.15s; }
  .pf-tab:hover { border-color:rgba(255,255,255,0.14); background:rgba(255,255,255,0.05); }
  .pf-tab.active { background:rgba(124,245,192,0.06); border-color:rgba(124,245,192,0.3); }
  .pf-tab-dot { width:7px; height:7px; border-radius:50%; background:rgba(255,255,255,0.15); flex-shrink:0; }
  .pf-tab.active .pf-tab-dot { background:#7CF5C0; box-shadow:0 0 8px rgba(124,245,192,0.6); }
  .pf-tab-nick { font-size:12px; font-weight:700; color:rgba(255,255,255,0.45); line-height:1.3; }
  .pf-tab.active .pf-tab-nick { color:#7CF5C0; }
  .pf-tab-addr { font-size:10px; color:rgba(255,255,255,0.2); font-family:monospace; }
  .pf-tab-del { background:none; border:none; color:rgba(255,255,255,0.12); cursor:pointer; font-size:12px; padding:3px 6px; border-radius:5px; transition:all 0.15s; line-height:1; }
  .pf-tab-del:hover { color:#f87171; background:rgba(248,113,113,0.1); }
  .pf-tab-add { display:flex; align-items:center; gap:6px; background:rgba(124,245,192,0.04); border:1px dashed rgba(124,245,192,0.22); border-radius:12px; padding:10px 16px; cursor:pointer; font-size:12px; font-weight:700; color:rgba(124,245,192,0.55); transition:all 0.15s; font-family:inherit; }
  .pf-tab-add:hover { background:rgba(124,245,192,0.08); color:#7CF5C0; border-color:rgba(124,245,192,0.4); }

  /* ─ Body ─ */
  .pf-body { max-width:1100px; margin:0 auto; padding:32px 24px 80px; animation:pf-fade 0.35s ease; }

  /* ─ Stats ─ */
  .pf-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:32px; }
  .pf-stat { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:20px 22px; }
  .pf-stat-lbl { font-size:10px; font-weight:800; color:rgba(255,255,255,0.2); text-transform:uppercase; letter-spacing:0.09em; margin-bottom:10px; }
  .pf-stat-val { font-size:clamp(20px,3vw,28px); font-weight:900; letter-spacing:-0.05em; line-height:1; }
  .pf-stat-sub { font-size:11px; color:rgba(255,255,255,0.18); margin-top:5px; }

  /* ─ Two-col ─ */
  .pf-cols { display:grid; grid-template-columns:1fr 300px; gap:18px; }

  /* ─ Cards ─ */
  .pf-card { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:18px; overflow:hidden; }
  .pf-card + .pf-card { margin-top:16px; }
  .pf-card-hd { display:flex; align-items:center; justify-content:space-between; padding:17px 22px; border-bottom:1px solid rgba(255,255,255,0.05); }
  .pf-card-ttl { font-size:11px; font-weight:800; color:rgba(255,255,255,0.35); text-transform:uppercase; letter-spacing:0.09em; }
  .pf-card-meta { font-size:11px; color:rgba(255,255,255,0.18); font-weight:600; }

  /* ─ Token table ─ */
  .pf-th { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 72px; gap:8px; padding:10px 22px; }
  .pf-th span { font-size:10px; font-weight:700; color:rgba(255,255,255,0.18); text-transform:uppercase; letter-spacing:0.07em; }
  .pf-tr { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 72px; gap:8px; padding:13px 22px; border-top:1px solid rgba(255,255,255,0.04); align-items:center; transition:background 0.1s; }
  .pf-tr:hover { background:rgba(255,255,255,0.02); }
  .pf-logo { width:32px; height:32px; border-radius:8px; object-fit:cover; flex-shrink:0; }
  .pf-logo-ph { width:32px; height:32px; border-radius:8px; background:rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; color:rgba(255,255,255,0.3); flex-shrink:0; }

  /* ─ Chain breakdown ─ */
  .pf-chain-row { display:flex; align-items:center; gap:12px; padding:11px 22px; border-top:1px solid rgba(255,255,255,0.04); }
  .pf-chain-name { font-size:11px; font-weight:700; width:82px; flex-shrink:0; }
  .pf-chain-track { flex:1; height:5px; background:rgba(255,255,255,0.05); border-radius:99px; overflow:hidden; }
  .pf-chain-fill { height:100%; border-radius:99px; transition:width 1s cubic-bezier(0.4,0,0.2,1); opacity:0.75; }
  .pf-chain-val { font-size:11px; font-weight:700; color:#7CF5C0; width:70px; text-align:right; flex-shrink:0; }

  /* ─ Sidebar ─ */
  .pf-trend-row { display:flex; align-items:center; justify-content:space-between; gap:10px; padding:12px 20px; border-top:1px solid rgba(255,255,255,0.04); text-decoration:none; transition:background 0.1s; }
  .pf-trend-row:hover { background:rgba(255,255,255,0.025); }
  .pf-trend-name { font-size:13px; font-weight:700; color:#fff; margin-bottom:2px; }
  .pf-trend-chain { font-size:10px; color:rgba(255,255,255,0.25); }
  .pf-trend-reward { font-size:11px; font-weight:800; color:#7CF5C0; white-space:nowrap; }
  .pf-hot { display:inline-block; background:rgba(244,63,94,0.1); border:1px solid rgba(244,63,94,0.2); color:#f43f5e; font-size:8px; font-weight:800; letter-spacing:0.05em; padding:2px 5px; border-radius:4px; text-transform:uppercase; margin-left:6px; vertical-align:middle; }
  .pf-qlink { display:flex; align-items:center; gap:12px; padding:12px 20px; border-top:1px solid rgba(255,255,255,0.04); text-decoration:none; transition:background 0.1s; }
  .pf-qlink:hover { background:rgba(255,255,255,0.025); }

  /* ─ Upgrade banner ─ */
  .pf-upgrade { background:rgba(99,102,241,0.06); border:1px solid rgba(99,102,241,0.18); border-radius:14px; padding:18px 22px; display:flex; align-items:center; gap:16px; margin-bottom:28px; flex-wrap:wrap; }

  /* ─ Empty state ─ */
  .pf-empty { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:80px 24px; text-align:center; }

  /* ─ Auth gate ─ */
  .pf-gate { min-height:100vh; background:#060A12; display:flex; align-items:center; justify-content:center; padding:24px; }

  /* ─ Responsive ─ */
  @media(max-width:900px){ .pf-cols{grid-template-columns:1fr;} }
  @media(max-width:680px){
    .pf-stats{grid-template-columns:1fr 1fr;}
    .pf-th,.pf-tr{grid-template-columns:2fr 1fr 1fr;}
    .pf-th span:nth-child(4),.pf-th span:nth-child(5),
    .pf-tr>*:nth-child(4),.pf-tr>*:nth-child(5){display:none;}
  }
`;

function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />;
}

function AddWalletModal({ onAdd, onClose }: { onAdd:(a:string,n:string)=>Promise<string|null>; onClose:()=>void }) {
  const [addr, setAddr] = useState('');
  const [nick, setNick] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  async function submit() {
    if (!addr.trim()) return;
    setLoading(true); setErr('');
    const error = await onAdd(addr.trim(), nick.trim());
    setLoading(false);
    if (error) setErr(error); else onClose();
  }

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.78)', backdropFilter:'blur(12px)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div style={{ background:'#0D1221', border:'1px solid rgba(255,255,255,0.1)', borderRadius:24, padding:32, width:'100%', maxWidth:460, boxShadow:'0 40px 80px rgba(0,0,0,0.6)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
          <div>
            <h2 style={{ fontSize:20, fontWeight:900, color:'#fff', margin:'0 0 4px', letterSpacing:'-0.03em' }}>Add Wallet</h2>
            <p style={{ fontSize:12, color:'rgba(255,255,255,0.3)', margin:0 }}>EVM (0x…) or Solana address</p>
          </div>
          <button onClick={onClose} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, width:32, height:32, display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.5)', cursor:'pointer', fontSize:15 }}>✕</button>
        </div>
        <label style={{ display:'block', fontSize:10, fontWeight:800, color:'rgba(255,255,255,0.28)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>Wallet Address *</label>
        <input value={addr} onChange={e=>setAddr(e.target.value)} onKeyDown={e=>e.key==='Enter'&&submit()} placeholder="0x… or Solana address" autoFocus
          style={{ width:'100%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:'13px 16px', color:'#fff', fontSize:13, fontFamily:'monospace', outline:'none', boxSizing:'border-box', marginBottom:14 }} />
        <label style={{ display:'block', fontSize:10, fontWeight:800, color:'rgba(255,255,255,0.28)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>Nickname (optional)</label>
        <input value={nick} onChange={e=>setNick(e.target.value)} placeholder="Main wallet, Farming wallet…"
          style={{ width:'100%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:'13px 16px', color:'#fff', fontSize:13, outline:'none', boxSizing:'border-box', marginBottom:20 }} />
        {err && <p style={{ fontSize:12, color:'#f87171', background:'rgba(248,113,113,0.06)', border:'1px solid rgba(248,113,113,0.18)', borderRadius:10, padding:'10px 14px', margin:'0 0 16px' }}>⚠️ {err}</p>}
        <button onClick={submit} disabled={loading||!addr.trim()} style={{ width:'100%', background:loading||!addr.trim()?'rgba(124,245,192,0.15)':'linear-gradient(135deg,#7CF5C0,#4ade80)', color:'#060A12', fontWeight:800, fontSize:14, padding:14, borderRadius:12, border:'none', cursor:loading||!addr.trim()?'not-allowed':'pointer', fontFamily:'inherit' }}>
          {loading ? 'Adding…' : '+ Add Wallet'}
        </button>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [activeWallet, setActiveWallet] = useState<string|null>(null);
  const [balances, setBalances] = useState<Record<string, BalanceData>>({});
  const [loadingBal, setLoadingBal] = useState<Record<string, boolean>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [deletingId, setDeletingId] = useState<string|null>(null);
  const supabase = createClient();

  const maxWallets = isPro ? 5 : 1;

  // Auth check
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user ?? null);
      if (!user) { setAuthLoading(false); return; }
      supabase.from('subscriptions').select('status').eq('user_id', user.id).in('status',['active','trialing']).maybeSingle()
        .then(({ data }) => { setIsPro(!!data); setAuthLoading(false); });
    });
  }, []);

  // Load wallets once user known
  useEffect(() => {
    if (!user) return;
    fetch('/api/portfolio/wallets').then(r => r.json()).then(d => {
      const list = d.wallets ?? [];
      setWallets(list);
      if (list.length) setActiveWallet(list[0].wallet_address);
    });
  }, [user]);

  const loadBalances = useCallback(async (address: string, force = false) => {
    if (balances[address] && !force) return;
    setLoadingBal(p => ({ ...p, [address]:true }));
    try {
      const res = await fetch(`/api/portfolio/balances?address=${address}`);
      const data = await res.json();
      setBalances(p => ({ ...p, [address]:data }));
    } catch {}
    setLoadingBal(p => ({ ...p, [address]:false }));
  }, [balances]);

  useEffect(() => { if (activeWallet) loadBalances(activeWallet); }, [activeWallet]);

  async function addWallet(address: string, nickname: string): Promise<string|null> {
    const res = await fetch('/api/portfolio/wallets', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ address, nickname }) });
    const data = await res.json();
    if (!res.ok) return data.error || 'Failed to add wallet';
    setWallets(p => [...p, data.wallet]);
    setActiveWallet(data.wallet.wallet_address);
    return null;
  }

  async function deleteWallet(id: string, address: string) {
    setDeletingId(id);
    await fetch('/api/portfolio/wallets', { method:'DELETE', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ id }) });
    const next = wallets.filter(w => w.id !== id);
    setWallets(next);
    if (activeWallet === address) setActiveWallet(next[0]?.wallet_address ?? null);
    setDeletingId(null);
  }

  function handleRefresh() {
    if (!activeWallet) return;
    setBalances(p => { const n={...p}; delete n[activeWallet!]; return n; });
    loadBalances(activeWallet, true);
  }

  const active = wallets.find(w => w.wallet_address === activeWallet);
  const bd: BalanceData|null = activeWallet ? (balances[activeWallet] ?? null) : null;
  const isBal = activeWallet ? (loadingBal[activeWallet] ?? false) : false;
  const topChains = bd ? Object.entries(bd.byChain).sort((a,b)=>b[1]-a[1]).slice(0,6) : [];

  // Always render GlobalStyles first — even during loading/auth gate
  return (
    <>
      <GlobalStyles />

      {authLoading ? (
        <div className="pf-gate">
          <div className="pf-spin" />
        </div>
      ) : !user ? (
        <div className="pf-gate">
          <div style={{ textAlign:'center', maxWidth:460 }}>
            <div style={{ width:72, height:72, borderRadius:20, background:'linear-gradient(135deg,rgba(124,245,192,0.1),rgba(124,245,192,0.04))', border:'1px solid rgba(124,245,192,0.2)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px', fontSize:32 }}>📊</div>
            <h1 style={{ fontSize:28, fontWeight:900, letterSpacing:'-0.03em', margin:'0 0 12px' }}>Portfolio Tracker</h1>
            <p style={{ fontSize:15, color:'rgba(255,255,255,0.35)', lineHeight:1.75, margin:'0 0 28px' }}>Sign in to track your crypto across 9 chains and check airdrop eligibility.</p>
            <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginBottom:16 }}>
              <Link href="/pro" style={{ background:'linear-gradient(135deg,#7CF5C0,#4ade80)', color:'#060A12', fontWeight:800, fontSize:14, padding:'13px 30px', borderRadius:12, textDecoration:'none' }}>Sign In / Sign Up</Link>
            </div>
            <p style={{ fontSize:12, color:'rgba(255,255,255,0.18)', margin:0 }}>Free: 1 wallet · Pro: up to 5 wallets</p>
          </div>
        </div>
      ) : (
        <div className="pf-page">
          {showAdd && <AddWalletModal onAdd={addWallet} onClose={() => setShowAdd(false)} />}

          {/* ── Hero Header ── */}
          <div className="pf-hero">
            <div className="pf-hero-inner">
              <div className="pf-hero-row">
                <div>
                  <div className="pf-badge">
                    <span style={{ width:6, height:6, borderRadius:'50%', background:'#7CF5C0', display:'inline-block' }}/>
                    {isPro ? 'Pro Account' : 'Free Account'}
                  </div>
                  <h1 className="pf-h1">My Portfolio</h1>
                  <p className="pf-sub">
                    Multi-chain balance tracker across 9 networks &nbsp;·&nbsp;
                    {isPro ? 'Up to 5 wallets' : '1 wallet · '}
                    {!isPro && <Link href="/pro" style={{ color:'#7CF5C0', textDecoration:'none', fontWeight:700 }}>upgrade for more</Link>}
                  </p>
                </div>
                <div className="pf-actions">
                  {activeWallet && (
                    <button className="pf-refresh-btn" onClick={handleRefresh} disabled={isBal}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M23 4v6h-6"/><path d="M1 20v-6h6"/>
                        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                      </svg>
                      Refresh
                    </button>
                  )}
                  {wallets.length < maxWallets && (
                    <button className="pf-add-btn" onClick={() => setShowAdd(true)}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      Add Wallet
                    </button>
                  )}
                </div>
              </div>

              {/* Wallet tabs */}
              {wallets.length > 0 && (
                <div className="pf-tabs">
                  {wallets.map(w => (
                    <div key={w.id} className={`pf-tab${activeWallet === w.wallet_address ? ' active' : ''}`} onClick={() => setActiveWallet(w.wallet_address)}>
                      <span className="pf-tab-dot"/>
                      <div>
                        <div className="pf-tab-nick">{w.nickname || shortAddr(w.wallet_address)}</div>
                        {w.nickname && <div className="pf-tab-addr">{shortAddr(w.wallet_address)}</div>}
                      </div>
                      <button className="pf-tab-del" disabled={deletingId === w.id} onClick={e => { e.stopPropagation(); deleteWallet(w.id, w.wallet_address); }}>✕</button>
                    </div>
                  ))}
                  {wallets.length < maxWallets && (
                    <button className="pf-tab-add" onClick={() => setShowAdd(true)}>+ Add wallet</button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ── Body ── */}
          <div className="pf-body">

            {/* Upgrade nudge */}
            {!isPro && wallets.length > 0 && (
              <div className="pf-upgrade">
                <div style={{ fontSize:24, flexShrink:0 }}>⭐</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, fontWeight:800, color:'rgba(255,255,255,0.8)', marginBottom:3 }}>Unlock 5 wallets with Pro</div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,0.3)' }}>Free plan: 1 wallet. Pro ($5/mo): up to 5 wallets + full airdrop reports + no ads.</div>
                </div>
                <Link href="/pro" style={{ background:'linear-gradient(135deg,#6366f1,#4f46e5)', color:'#fff', fontWeight:800, fontSize:12, padding:'10px 20px', borderRadius:10, textDecoration:'none', flexShrink:0, whiteSpace:'nowrap' }}>
                  Upgrade →
                </Link>
              </div>
            )}

            {/* Empty state */}
            {wallets.length === 0 ? (
              <div className="pf-empty">
                <div style={{ fontSize:56, marginBottom:18 }}>📊</div>
                <h2 style={{ fontSize:22, fontWeight:900, margin:'0 0 12px', letterSpacing:'-0.03em' }}>Add your first wallet</h2>
                <p style={{ fontSize:14, color:'rgba(255,255,255,0.3)', maxWidth:380, lineHeight:1.8, margin:'0 0 28px' }}>
                  Paste any EVM or Solana address to see token balances across 9 chains and check airdrop eligibility.
                </p>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center', marginBottom:28 }}>
                  {['Ethereum','Arbitrum','Base','Solana','Polygon','Optimism','BNB','zkSync','Linea'].map(c => (
                    <span key={c} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', color:'rgba(255,255,255,0.3)', fontSize:11, fontWeight:700, padding:'5px 12px', borderRadius:99 }}>{c}</span>
                  ))}
                </div>
                <button onClick={() => setShowAdd(true)} style={{ background:'linear-gradient(135deg,#7CF5C0,#4ade80)', color:'#060A12', fontWeight:800, fontSize:14, padding:'14px 32px', borderRadius:12, border:'none', cursor:'pointer', fontFamily:'inherit' }}>
                  + Add Wallet
                </button>
              </div>
            ) : (
              <>
                {/* Stats */}
                <div className="pf-stats">
                  <div className="pf-stat">
                    <div className="pf-stat-lbl">Total Value</div>
                    <div className="pf-stat-val" style={{ color:'#7CF5C0' }}>
                      {isBal ? <span className="pf-skel" style={{ width:80, height:26 }}/> : bd ? fmt(bd.totalUsd) : '—'}
                    </div>
                    <div className="pf-stat-sub">{active?.nickname || shortAddr(activeWallet ?? '')}</div>
                  </div>
                  <div className="pf-stat">
                    <div className="pf-stat-lbl">Tokens</div>
                    <div className="pf-stat-val">
                      {isBal ? <span className="pf-skel" style={{ width:40, height:26 }}/> : bd?.tokenCount ?? '—'}
                    </div>
                    <div className="pf-stat-sub">balance &gt; $0.01</div>
                  </div>
                  <div className="pf-stat">
                    <div className="pf-stat-lbl">Active Chains</div>
                    <div className="pf-stat-val">
                      {isBal ? <span className="pf-skel" style={{ width:32, height:26 }}/> : bd ? Object.keys(bd.byChain).length : '—'}
                    </div>
                    <div className="pf-stat-sub">with balance</div>
                  </div>
                  <div className="pf-stat">
                    <div className="pf-stat-lbl">Wallets</div>
                    <div className="pf-stat-val">
                      {wallets.length}<span style={{ fontSize:15, color:'rgba(255,255,255,0.18)', fontWeight:600 }}>/{maxWallets}</span>
                    </div>
                    <div className="pf-stat-sub">{isPro ? 'Pro plan' : 'Free plan'}</div>
                  </div>
                </div>

                {/* Main layout */}
                <div className="pf-cols">
                  {/* Left: Holdings + Chain breakdown */}
                  <div>
                    <div className="pf-card">
                      <div className="pf-card-hd">
                        <span className="pf-card-ttl">Holdings</span>
                        <span className="pf-card-meta">{bd ? `${bd.tokenCount} tokens` : ''}</span>
                      </div>
                      {isBal ? (
                        <div style={{ padding:'52px 24px', textAlign:'center' }}>
                          <div className="pf-spin" style={{ margin:'0 auto 16px' }}/>
                          <p style={{ fontSize:13, color:'rgba(255,255,255,0.2)', margin:0 }}>Scanning 9 chains…</p>
                        </div>
                      ) : bd && bd.tokens.length > 0 ? (
                        <>
                          <div className="pf-th">
                            <span>Token</span><span>Balance</span><span>Price</span><span>Value</span><span>24h</span>
                          </div>
                          {bd.tokens.map((t, i) => (
                            <div key={`${t.chain}-${t.contractAddress}-${i}`} className="pf-tr">
                              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                                {t.logoUrl
                                  ? <img src={t.logoUrl} alt={t.symbol} className="pf-logo" onError={e => { (e.target as HTMLImageElement).style.display='none'; }}/>
                                  : <div className="pf-logo-ph">{t.symbol?.[0]}</div>
                                }
                                <div>
                                  <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{t.symbol}</div>
                                  <div style={{ fontSize:10, color:'rgba(255,255,255,0.2)' }}>
                                    <span style={{ color: CHAIN_COLORS[t.chain] ?? '#888', marginRight:4 }}>●</span>{t.chain}
                                    {t.isNative && <span style={{ marginLeft:5, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:4, padding:'1px 4px', fontSize:9 }}>NATIVE</span>}
                                  </div>
                                </div>
                              </div>
                              <div style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.5)' }}>{fmtBal(t.balanceFormatted)}</div>
                              <div style={{ fontSize:12, color:'rgba(255,255,255,0.3)' }}>
                                {t.quoteRate > 0 ? `$${t.quoteRate < 0.01 ? t.quoteRate.toPrecision(3) : t.quoteRate.toLocaleString(undefined,{maximumFractionDigits:4})}` : '—'}
                              </div>
                              <div style={{ fontSize:13, fontWeight:800, color:'#fff' }}>{fmt(t.valueUsd)}</div>
                              <div style={{ fontSize:12, fontWeight:700, color: t.change24h == null ? 'rgba(255,255,255,0.2)' : t.change24h >= 0 ? '#7CF5C0' : '#f87171' }}>
                                {t.change24h == null ? '—' : `${t.change24h >= 0 ? '+' : ''}${t.change24h.toFixed(2)}%`}
                              </div>
                            </div>
                          ))}
                        </>
                      ) : bd ? (
                        <div style={{ padding:'52px 24px', textAlign:'center' }}>
                          <p style={{ fontSize:14, color:'rgba(255,255,255,0.25)', margin:0 }}>No token balances found for this address.</p>
                        </div>
                      ) : null}
                    </div>

                    {/* Chain breakdown */}
                    {!isBal && topChains.length > 0 && (
                      <div className="pf-card">
                        <div className="pf-card-hd">
                          <span className="pf-card-ttl">Chain Breakdown</span>
                          <span className="pf-card-meta">{topChains.length} chains</span>
                        </div>
                        {topChains.map(([chain, val]) => (
                          <div key={chain} className="pf-chain-row">
                            <span className="pf-chain-name" style={{ color: CHAIN_COLORS[chain] ?? 'rgba(255,255,255,0.4)' }}>{chain}</span>
                            <div className="pf-chain-track">
                              <div className="pf-chain-fill" style={{ width:`${(val/(bd?.totalUsd||1))*100}%`, background: CHAIN_COLORS[chain] ?? '#7CF5C0' }}/>
                            </div>
                            <span className="pf-chain-val">{fmt(val)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right sidebar */}
                  <div style={{ display:'flex', flexDirection:'column', gap:16 }}>

                    {/* Airdrop eligibility CTA */}
                    {activeWallet && (
                      <div style={{ background:'linear-gradient(135deg,rgba(124,245,192,0.07),rgba(124,245,192,0.02))', border:'1px solid rgba(124,245,192,0.16)', borderRadius:18, padding:'24px 22px' }}>
                        <div style={{ fontSize:28, marginBottom:12 }}>🎯</div>
                        <h3 style={{ fontSize:15, fontWeight:900, color:'#fff', margin:'0 0 8px', letterSpacing:'-0.02em' }}>Check Airdrop Eligibility</h3>
                        <p style={{ fontSize:12, color:'rgba(255,255,255,0.32)', margin:'0 0 18px', lineHeight:1.75 }}>See which of 125+ tracked airdrops this wallet qualifies for based on on-chain activity.</p>
                        <Link href={`/wallet-checker?address=${activeWallet}`}
                          style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, background:'linear-gradient(135deg,#7CF5C0,#4ade80)', color:'#060A12', fontWeight:800, fontSize:13, padding:'12px', borderRadius:10, textDecoration:'none' }}>
                          Check Eligibility →
                        </Link>
                      </div>
                    )}

                    {/* Trending airdrops */}
                    <div className="pf-card">
                      <div className="pf-card-hd">
                        <span className="pf-card-ttl">Trending Airdrops</span>
                        <Link href="/airdrops" style={{ fontSize:11, color:'rgba(124,245,192,0.7)', textDecoration:'none', fontWeight:700 }}>All →</Link>
                      </div>
                      {TRENDING.map(a => (
                        <Link key={a.name} href={a.href} className="pf-trend-row">
                          <div>
                            <div className="pf-trend-name">
                              {a.name}
                              {a.hot && <span className="pf-hot">Hot</span>}
                            </div>
                            <div className="pf-trend-chain">{a.chain}</div>
                          </div>
                          <div className="pf-trend-reward">{a.reward}</div>
                        </Link>
                      ))}
                    </div>

                    {/* Quick links */}
                    <div className="pf-card">
                      <div className="pf-card-hd">
                        <span className="pf-card-ttl">Quick Links</span>
                      </div>
                      {[
                        { label:'Learn to Farm Airdrops', href:'/learn', icon:'📚' },
                        { label:'Top Airdrops 2026', href:'/airdrops', icon:'🏆' },
                        { label:'Wallet Checker', href:'/wallet-checker', icon:'🔍' },
                        { label:'GM Station', href:'/gm', icon:'☀️' },
                      ].map(l => (
                        <Link key={l.href} href={l.href} className="pf-qlink">
                          <span style={{ fontSize:16 }}>{l.icon}</span>
                          <span style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.45)' }}>{l.label}</span>
                          <span style={{ marginLeft:'auto', fontSize:11, color:'rgba(255,255,255,0.15)' }}>→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
