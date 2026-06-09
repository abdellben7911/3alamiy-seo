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

const TRENDING_AIRDROPS = [
  { name:'LayerZero', chain:'Multi-chain', reward:'$200–2,000', hot:true },
  { name:'Hyperliquid S2', chain:'HyperEVM', reward:'Up to $10K', hot:true },
  { name:'zkSync Era', chain:'zkSync', reward:'TBA', hot:false },
  { name:'Base Ecosystem', chain:'Base', reward:'Multiple', hot:true },
  { name:'Arbitrum ARB2', chain:'Arbitrum', reward:'TBA', hot:false },
];

function AuthGate() {
  return (
    <div style={{ minHeight:'100vh', background:'#060A12', display:'flex', alignItems:'center', justifyContent:'center', padding:24, fontFamily:"var(--font-space),'Space Grotesk',system-ui,sans-serif" }}>
      <div style={{ textAlign:'center', maxWidth:460 }}>
        <div style={{ width:72, height:72, borderRadius:20, background:'linear-gradient(135deg,rgba(124,245,192,0.12),rgba(124,245,192,0.04))', border:'1px solid rgba(124,245,192,0.2)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px', fontSize:32 }}>📊</div>
        <h1 style={{ fontSize:28, fontWeight:900, color:'#fff', letterSpacing:'-0.03em', margin:'0 0 12px' }}>Portfolio Tracker</h1>
        <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', lineHeight:1.75, margin:'0 0 28px' }}>Sign in to track your crypto portfolio across 9 chains and check airdrop eligibility.</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/pro" style={{ background:'linear-gradient(135deg,#7CF5C0,#4ade80)', color:'#060A12', fontWeight:800, fontSize:14, padding:'13px 28px', borderRadius:12, textDecoration:'none' }}>Sign In / Sign Up</Link>
        </div>
        <p style={{ marginTop:16, fontSize:12, color:'rgba(255,255,255,0.2)' }}>Free: 1 wallet · Pro: up to 5 wallets + unlimited history</p>
      </div>
    </div>
  );
}

function AddWalletModal({ onAdd, onClose }: { onAdd:(addr:string, nick:string)=>Promise<string|null>; onClose:()=>void }) {
  const [addr, setAddr] = useState('');
  const [nick, setNick] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  async function submit() {
    if (!addr.trim()) return;
    setLoading(true); setErr('');
    const error = await onAdd(addr.trim(), nick.trim());
    setLoading(false);
    if (error) setErr(error);
    else onClose();
  }

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', backdropFilter:'blur(12px)', zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div style={{ background:'#0D1221', border:'1px solid rgba(255,255,255,0.1)', borderRadius:24, padding:'32px', width:'100%', maxWidth:460, boxShadow:'0 32px 80px rgba(0,0,0,0.5)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
          <div>
            <h2 style={{ fontSize:20, fontWeight:900, color:'#fff', margin:'0 0 4px', letterSpacing:'-0.03em' }}>Add Wallet</h2>
            <p style={{ fontSize:12, color:'rgba(255,255,255,0.3)', margin:0 }}>EVM (0x…) or Solana address</p>
          </div>
          <button onClick={onClose} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, width:32, height:32, display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.4)', cursor:'pointer', fontSize:16 }}>✕</button>
        </div>
        <div style={{ marginBottom:14 }}>
          <label style={{ display:'block', fontSize:10, fontWeight:800, color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>Wallet Address *</label>
          <input value={addr} onChange={e => setAddr(e.target.value)} onKeyDown={e => e.key==='Enter' && submit()} placeholder="0x… or Solana address" autoFocus
            style={{ width:'100%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:'13px 16px', color:'#fff', fontSize:13, fontFamily:'monospace', outline:'none', boxSizing:'border-box', transition:'border-color 0.15s' }} />
        </div>
        <div style={{ marginBottom:20 }}>
          <label style={{ display:'block', fontSize:10, fontWeight:800, color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>Nickname (optional)</label>
          <input value={nick} onChange={e => setNick(e.target.value)} placeholder="e.g. Main wallet, Farming wallet"
            style={{ width:'100%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:'13px 16px', color:'#fff', fontSize:13, outline:'none', boxSizing:'border-box' }} />
        </div>
        {err && <p style={{ fontSize:12, color:'#f87171', margin:'0 0 16px', background:'rgba(248,113,113,0.06)', border:'1px solid rgba(248,113,113,0.18)', borderRadius:10, padding:'10px 14px' }}>⚠️ {err}</p>}
        <button onClick={submit} disabled={loading || !addr.trim()}
          style={{ width:'100%', background: loading||!addr.trim() ? 'rgba(124,245,192,0.15)' : 'linear-gradient(135deg,#7CF5C0,#4ade80)', color:'#060A12', fontWeight:800, fontSize:14, padding:'14px', borderRadius:12, border:'none', cursor:loading||!addr.trim()?'not-allowed':'pointer', transition:'all 0.15s' }}>
          {loading ? 'Adding…' : '+ Add Wallet'}
        </button>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [activeWallet, setActiveWallet] = useState<string|null>(null);
  const [balances, setBalances] = useState<Record<string, BalanceData>>({});
  const [loadingBalances, setLoadingBalances] = useState<Record<string, boolean>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [deletingId, setDeletingId] = useState<string|null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const supabase = createClient();

  const maxWallets = isPro ? 5 : 1;

  useEffect(() => {
    (async () => {
      const { data:{ user } } = await supabase.auth.getUser();
      setUser(user);
      if (!user) { setLoading(false); return; }
      const { data:sub } = await supabase.from('subscriptions').select('status').eq('user_id', user.id).in('status', ['active','trialing']).maybeSingle();
      setIsPro(!!sub);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!user) return;
    fetch('/api/portfolio/wallets')
      .then(r => r.json())
      .then(d => {
        if (d.wallets?.length) {
          setWallets(d.wallets);
          setActiveWallet(d.wallets[0].wallet_address);
        }
      });
  }, [user, refreshKey]);

  const loadBalances = useCallback(async (address: string, force = false) => {
    if (balances[address] && !force) return;
    setLoadingBalances(prev => ({ ...prev, [address]:true }));
    try {
      const res = await fetch(`/api/portfolio/balances?address=${address}`);
      const data = await res.json();
      setBalances(prev => ({ ...prev, [address]:data }));
    } catch { /* silent */ }
    setLoadingBalances(prev => ({ ...prev, [address]:false }));
  }, [balances]);

  useEffect(() => {
    if (activeWallet) loadBalances(activeWallet);
  }, [activeWallet]);

  function handleRefresh() {
    if (!activeWallet) return;
    setBalances(prev => { const n = { ...prev }; delete n[activeWallet]; return n; });
    loadBalances(activeWallet, true);
  }

  async function addWallet(address: string, nickname: string): Promise<string|null> {
    const res = await fetch('/api/portfolio/wallets', {
      method:'POST', headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ address, nickname }),
    });
    const data = await res.json();
    if (!res.ok) return data.error || 'Failed to add wallet';
    setWallets(prev => [...prev, data.wallet]);
    setActiveWallet(data.wallet.wallet_address);
    return null;
  }

  async function deleteWallet(id: string, address: string) {
    setDeletingId(id);
    await fetch('/api/portfolio/wallets', { method:'DELETE', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify({ id }) });
    setWallets(prev => prev.filter(w => w.id !== id));
    if (activeWallet === address) setActiveWallet(wallets.find(w => w.id !== id)?.wallet_address ?? null);
    setDeletingId(null);
  }

  if (loading) return (
    <div style={{ minHeight:'100vh', background:'#060A12', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ width:32, height:32, border:'3px solid rgba(124,245,192,0.15)', borderTopColor:'#7CF5C0', borderRadius:'50%', animation:'spin 0.8s linear infinite' }} />
    </div>
  );

  if (!user) return <AuthGate />;

  const active = wallets.find(w => w.wallet_address === activeWallet);
  const bd: BalanceData|null = activeWallet ? (balances[activeWallet] ?? null) : null;
  const isLoadingBal = activeWallet ? (loadingBalances[activeWallet] ?? false) : false;
  const topChains = bd ? Object.entries(bd.byChain).sort((a,b) => b[1]-a[1]).slice(0,6) : [];
  const totalUsdAll = wallets.reduce((sum, w) => sum + (balances[w.wallet_address]?.totalUsd ?? 0), 0);

  return (
    <>
      <style>{`
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        * { box-sizing:border-box; }
        .pf { min-height:100vh; background:#060A12; font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif; }

        /* ── Hero Header ── */
        .pf-hero { padding:40px 24px 32px; border-bottom:1px solid rgba(255,255,255,0.06); position:relative; overflow:hidden; }
        .pf-hero::before { content:''; position:absolute; top:-120px; right:-80px; width:500px; height:500px; background:radial-gradient(ellipse,rgba(124,245,192,0.04) 0%,transparent 65%); pointer-events:none; }
        .pf-hero-inner { max-width:1100px; margin:0 auto; }
        .pf-hero-top { display:flex; align-items:flex-start; justify-content:space-between; gap:24px; flex-wrap:wrap; margin-bottom:28px; }
        .pf-hero-left { flex:1; min-width:260px; }
        .pf-pro-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(124,245,192,0.06); border:1px solid rgba(124,245,192,0.18); color:#7CF5C0; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:14px; }
        .pf-hero-title { font-size:clamp(24px,3.5vw,36px); font-weight:900; color:#fff; letter-spacing:-0.04em; margin:0 0 10px; line-height:1.1; }
        .pf-hero-sub { font-size:14px; color:rgba(255,255,255,0.35); line-height:1.7; margin:0; max-width:420px; }
        .pf-hero-actions { display:flex; align-items:center; gap:10px; flex-shrink:0; flex-wrap:wrap; }
        .pf-add-btn { display:flex; align-items:center; gap:8px; background:linear-gradient(135deg,#7CF5C0,#4ade80); color:#060A12; fontWeight:800; font-size:13px; font-weight:800; padding:'10px 20px'; padding:10px 20px; border-radius:10px; border:none; cursor:pointer; transition:all 0.15s; }
        .pf-add-btn:hover { transform:translateY(-1px); box-shadow:0 8px 24px rgba(124,245,192,0.25); }
        .pf-refresh-btn { display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); color:rgba(255,255,255,0.4); font-size:12px; font-weight:700; padding:10px 16px; border-radius:10px; cursor:pointer; transition:all 0.15s; }
        .pf-refresh-btn:hover { background:rgba(255,255,255,0.07); color:rgba(255,255,255,0.7); }

        /* ── Wallet tabs ── */
        .pf-wallet-tabs { display:flex; gap:8px; flex-wrap:wrap; align-items:center; }
        .pf-wallet-tab { display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:12px; padding:10px 14px; cursor:pointer; transition:all 0.15s; }
        .pf-wallet-tab:hover { border-color:rgba(255,255,255,0.13); background:rgba(255,255,255,0.05); }
        .pf-wallet-tab.active { background:rgba(124,245,192,0.06); border-color:rgba(124,245,192,0.28); }
        .pf-wallet-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,0.2); flex-shrink:0; }
        .pf-wallet-tab.active .pf-wallet-dot { background:#7CF5C0; box-shadow:0 0 8px rgba(124,245,192,0.5); }
        .pf-wallet-nick { font-size:11px; font-weight:700; color:rgba(255,255,255,0.5); }
        .pf-wallet-tab.active .pf-wallet-nick { color:#7CF5C0; }
        .pf-wallet-addr { font-size:11px; color:rgba(255,255,255,0.2); font-family:monospace; }
        .pf-tab-add { display:flex; align-items:center; gap:6px; background:rgba(124,245,192,0.04); border:1px dashed rgba(124,245,192,0.2); border-radius:12px; padding:10px 14px; cursor:pointer; font-size:12px; font-weight:700; color:rgba(124,245,192,0.6); transition:all 0.15s; }
        .pf-tab-add:hover { background:rgba(124,245,192,0.08); color:#7CF5C0; }
        .pf-del-btn { background:none; border:none; color:rgba(255,255,255,0.12); cursor:pointer; font-size:12px; padding:2px 6px; border-radius:5px; transition:all 0.15s; line-height:1; }
        .pf-del-btn:hover { color:#f87171; background:rgba(248,113,113,0.08); }

        /* ── Body ── */
        .pf-body { max-width:1100px; margin:0 auto; padding:32px 24px 80px; animation:fadeUp 0.4s ease; }

        /* ── Stats ── */
        .pf-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:32px; }
        .pf-stat { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:20px 22px; transition:border-color 0.15s; }
        .pf-stat:hover { border-color:rgba(255,255,255,0.1); }
        .pf-stat-label { font-size:10px; font-weight:800; color:rgba(255,255,255,0.22); text-transform:uppercase; letter-spacing:0.09em; margin-bottom:10px; }
        .pf-stat-val { font-size:26px; font-weight:900; color:#fff; letter-spacing:-0.05em; line-height:1; }
        .pf-stat-sub { font-size:11px; color:rgba(255,255,255,0.2); margin-top:5px; }

        /* ── Two-col layout ── */
        .pf-cols { display:grid; grid-template-columns:1fr 320px; gap:20px; margin-bottom:32px; }

        /* ── Section ── */
        .pf-card { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:18px; overflow:hidden; }
        .pf-card-head { display:flex; align-items:center; justify-content:space-between; padding:18px 22px; border-bottom:1px solid rgba(255,255,255,0.05); }
        .pf-card-title { font-size:12px; font-weight:800; color:rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing:0.09em; }
        .pf-card-count { font-size:11px; color:rgba(255,255,255,0.2); font-weight:700; }

        /* ── Token table ── */
        .pf-token-head { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 70px; gap:8px; padding:10px 22px; }
        .pf-token-head span { font-size:10px; font-weight:700; color:rgba(255,255,255,0.18); text-transform:uppercase; letter-spacing:0.07em; }
        .pf-token-row { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 70px; gap:8px; padding:13px 22px; border-top:1px solid rgba(255,255,255,0.04); align-items:center; transition:background 0.1s; }
        .pf-token-row:hover { background:rgba(255,255,255,0.02); }
        .pf-token-logo { width:32px; height:32px; border-radius:8px; object-fit:cover; flex-shrink:0; }
        .pf-token-logo-ph { width:32px; height:32px; border-radius:8px; background:rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; color:rgba(255,255,255,0.3); flex-shrink:0; }

        /* ── Chain bars ── */
        .pf-chain-row { display:flex; align-items:center; gap:12px; padding:10px 22px; border-top:1px solid rgba(255,255,255,0.04); }
        .pf-chain-name { font-size:11px; font-weight:700; color:rgba(255,255,255,0.45); width:80px; flex-shrink:0; }
        .pf-chain-track { flex:1; height:5px; background:rgba(255,255,255,0.04); border-radius:99px; overflow:hidden; }
        .pf-chain-fill { height:100%; border-radius:99px; transition:width 1s cubic-bezier(0.4,0,0.2,1); }
        .pf-chain-pct { font-size:11px; font-weight:700; color:rgba(255,255,255,0.3); width:48px; text-align:right; flex-shrink:0; }
        .pf-chain-val { font-size:11px; font-weight:700; color:#7CF5C0; width:72px; text-align:right; flex-shrink:0; }

        /* ── Trending sidebar ── */
        .pf-trend-row { display:flex; align-items:center; justify-content:space-between; gap:10px; padding:12px 22px; border-top:1px solid rgba(255,255,255,0.04); }
        .pf-trend-name { font-size:13px; font-weight:700; color:#fff; margin-bottom:2px; }
        .pf-trend-chain { font-size:10px; color:rgba(255,255,255,0.25); }
        .pf-trend-reward { font-size:11px; font-weight:800; color:#7CF5C0; white-space:nowrap; }
        .pf-hot { display:inline-block; background:rgba(244,63,94,0.1); border:1px solid rgba(244,63,94,0.2); color:#f43f5e; font-size:8px; font-weight:800; letter-spacing:0.06em; padding:2px 5px; border-radius:4px; text-transform:uppercase; margin-left:6px; vertical-align:middle; }

        /* ── Airdrop CTA ── */
        .pf-cta { background:linear-gradient(135deg,rgba(124,245,192,0.06),rgba(124,245,192,0.02)); border:1px solid rgba(124,245,192,0.14); border-radius:18px; padding:28px 32px; display:flex; align-items:center; gap:24px; flex-wrap:wrap; }

        /* ── Upgrade banner ── */
        .pf-upgrade { background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(99,102,241,0.03)); border:1px solid rgba(99,102,241,0.2); border-radius:14px; padding:18px 22px; display:flex; align-items:center; gap:16px; margin-bottom:32px; flex-wrap:wrap; }

        /* ── Skeleton ── */
        .pf-skel { background:linear-gradient(90deg,rgba(255,255,255,0.04) 25%,rgba(255,255,255,0.07) 50%,rgba(255,255,255,0.04) 75%); background-size:200% 100%; animation:shimmer 1.5s infinite; border-radius:8px; }

        /* ── Empty ── */
        .pf-empty { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:72px 24px; text-align:center; }

        @media(max-width:900px){ .pf-cols{grid-template-columns:1fr;} }
        @media(max-width:680px){
          .pf-stats{grid-template-columns:1fr 1fr;}
          .pf-token-head,.pf-token-row{grid-template-columns:2fr 1fr 1fr;}
          .pf-token-head span:nth-child(4),.pf-token-head span:nth-child(5),.pf-token-row>*:nth-child(4),.pf-token-row>*:nth-child(5){display:none;}
          .pf-cta{flex-direction:column;text-align:center;}
        }
        @media(max-width:480px){ .pf-stats{grid-template-columns:1fr 1fr;} }
      `}</style>

      {showAdd && <AddWalletModal onAdd={addWallet} onClose={() => setShowAdd(false)} />}

      <div className="pf">

        {/* ── Hero Header ── */}
        <div className="pf-hero">
          <div className="pf-hero-inner">
            <div className="pf-hero-top">
              <div className="pf-hero-left">
                <div className="pf-pro-badge">
                  <span style={{ width:6, height:6, borderRadius:'50%', background:'#7CF5C0', display:'inline-block' }}/>
                  {isPro ? 'Pro Account' : 'Free Account'}
                </div>
                <h1 className="pf-hero-title">My Portfolio</h1>
                <p className="pf-hero-sub">
                  Track token balances across 9 chains · Check airdrop eligibility · {isPro ? 'Up to 5 wallets' : '1 wallet — upgrade for more'}
                </p>
              </div>
              <div className="pf-hero-actions">
                {activeWallet && (
                  <button className="pf-refresh-btn" onClick={handleRefresh} disabled={isLoadingBal}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition:'transform 0.4s', transform: isLoadingBal ? 'rotate(360deg)' : 'none' }}>
                      <path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
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
              <div className="pf-wallet-tabs">
                {wallets.map(w => (
                  <div key={w.id} className={`pf-wallet-tab${activeWallet === w.wallet_address ? ' active' : ''}`} onClick={() => setActiveWallet(w.wallet_address)}>
                    <span className="pf-wallet-dot"/>
                    <div>
                      <div className="pf-wallet-nick">{w.nickname || shortAddr(w.wallet_address)}</div>
                      {w.nickname && <div className="pf-wallet-addr">{shortAddr(w.wallet_address)}</div>}
                    </div>
                    <button className="pf-del-btn" disabled={deletingId === w.id} onClick={e => { e.stopPropagation(); deleteWallet(w.id, w.wallet_address); }}>✕</button>
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

          {/* Upgrade nudge for free users */}
          {!isPro && wallets.length >= 1 && (
            <div className="pf-upgrade">
              <div style={{ fontSize:28, flexShrink:0 }}>⭐</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:800, color:'rgba(255,255,255,0.8)', marginBottom:3 }}>Upgrade to Pro for more wallets</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.3)' }}>Free plan: 1 wallet. Pro ($5/mo): up to 5 wallets + full airdrop reports.</div>
              </div>
              <Link href="/pro" style={{ background:'linear-gradient(135deg,#6366f1,#4f46e5)', color:'#fff', fontWeight:800, fontSize:12, padding:'10px 20px', borderRadius:10, textDecoration:'none', flexShrink:0, whiteSpace:'nowrap' }}>
                Upgrade →
              </Link>
            </div>
          )}

          {wallets.length === 0 ? (
            <div className="pf-empty">
              <div style={{ fontSize:56, marginBottom:18, filter:'drop-shadow(0 8px 24px rgba(124,245,192,0.2))' }}>📊</div>
              <h2 style={{ fontSize:22, fontWeight:900, color:'#fff', margin:'0 0 12px', letterSpacing:'-0.03em' }}>Add your first wallet</h2>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.3)', maxWidth:380, lineHeight:1.8, margin:'0 0 28px' }}>
                Paste any EVM or Solana address to instantly see token balances across 9 chains and check airdrop eligibility.
              </p>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center', marginBottom:32 }}>
                {['Ethereum','Arbitrum','Base','Solana','Polygon','Optimism'].map(c => (
                  <span key={c} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', color:'rgba(255,255,255,0.3)', fontSize:11, fontWeight:700, padding:'5px 12px', borderRadius:99 }}>{c}</span>
                ))}
              </div>
              <button onClick={() => setShowAdd(true)} style={{ background:'linear-gradient(135deg,#7CF5C0,#4ade80)', color:'#060A12', fontWeight:800, fontSize:14, padding:'14px 32px', borderRadius:12, border:'none', cursor:'pointer' }}>
                + Add Wallet
              </button>
            </div>
          ) : (
            <>
              {/* Stats row */}
              <div className="pf-stats">
                <div className="pf-stat">
                  <div className="pf-stat-label">Total Value</div>
                  <div className="pf-stat-val" style={{ color:'#7CF5C0' }}>
                    {isLoadingBal ? <span className="pf-skel" style={{ display:'block', width:80, height:26 }}/> : bd ? fmt(bd.totalUsd) : '—'}
                  </div>
                  <div className="pf-stat-sub">{active?.nickname || shortAddr(activeWallet ?? '')}</div>
                </div>
                <div className="pf-stat">
                  <div className="pf-stat-label">Tokens</div>
                  <div className="pf-stat-val">
                    {isLoadingBal ? <span className="pf-skel" style={{ display:'block', width:40, height:26 }}/> : bd?.tokenCount ?? '—'}
                  </div>
                  <div className="pf-stat-sub">with balance &gt; $0.01</div>
                </div>
                <div className="pf-stat">
                  <div className="pf-stat-label">Active Chains</div>
                  <div className="pf-stat-val">
                    {isLoadingBal ? <span className="pf-skel" style={{ display:'block', width:32, height:26 }}/> : bd ? Object.keys(bd.byChain).length : '—'}
                  </div>
                  <div className="pf-stat-sub">chains with balance</div>
                </div>
                <div className="pf-stat">
                  <div className="pf-stat-label">Wallets</div>
                  <div className="pf-stat-val">
                    {wallets.length}<span style={{ fontSize:15, color:'rgba(255,255,255,0.18)', fontWeight:600 }}>/{maxWallets}</span>
                  </div>
                  <div className="pf-stat-sub">{isPro ? 'Pro limit' : 'Free limit'}</div>
                </div>
              </div>

              {/* Main two-col layout */}
              <div className="pf-cols">
                {/* Left: Holdings */}
                <div>
                  <div className="pf-card" style={{ marginBottom:20 }}>
                    <div className="pf-card-head">
                      <span className="pf-card-title">Holdings</span>
                      <span className="pf-card-count">{bd ? `${bd.tokenCount} tokens` : ''}</span>
                    </div>
                    {isLoadingBal ? (
                      <div style={{ padding:'48px', textAlign:'center' }}>
                        <div style={{ width:28, height:28, border:'3px solid rgba(124,245,192,0.15)', borderTopColor:'#7CF5C0', borderRadius:'50%', animation:'spin 0.8s linear infinite', margin:'0 auto 14px' }}/>
                        <p style={{ fontSize:13, color:'rgba(255,255,255,0.2)', margin:0 }}>Scanning 9 chains…</p>
                      </div>
                    ) : bd && bd.tokens.length > 0 ? (
                      <>
                        <div className="pf-token-head">
                          <span>Token</span><span>Balance</span><span>Price</span><span>Value</span><span>24h</span>
                        </div>
                        {bd.tokens.map((t, i) => (
                          <div key={`${t.chain}-${t.contractAddress}-${i}`} className="pf-token-row">
                            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                              {t.logoUrl
                                ? <img src={t.logoUrl} alt={t.symbol} className="pf-token-logo" onError={e => { (e.target as HTMLImageElement).style.display='none'; }}/>
                                : <div className="pf-token-logo-ph">{t.symbol?.[0]}</div>
                              }
                              <div>
                                <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{t.symbol}</div>
                                <div style={{ fontSize:10, color:'rgba(255,255,255,0.2)' }}>
                                  <span style={{ color: CHAIN_COLORS[t.chain] ?? '#fff', marginRight:4 }}>●</span>{t.chain}
                                  {t.isNative && <span style={{ marginLeft:5, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:4, padding:'1px 4px', fontSize:9 }}>NATIVE</span>}
                                </div>
                              </div>
                            </div>
                            <div style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.55)' }}>{fmtBal(t.balanceFormatted)}</div>
                            <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{t.quoteRate > 0 ? `$${t.quoteRate < 0.01 ? t.quoteRate.toPrecision(3) : t.quoteRate.toLocaleString(undefined,{maximumFractionDigits:4})}` : '—'}</div>
                            <div style={{ fontSize:13, fontWeight:800, color:'#fff' }}>{fmt(t.valueUsd)}</div>
                            <div style={{ fontSize:12, fontWeight:700, color: t.change24h == null ? 'rgba(255,255,255,0.2)' : t.change24h >= 0 ? '#7CF5C0' : '#f87171' }}>
                              {t.change24h == null ? '—' : `${t.change24h >= 0 ? '+' : ''}${t.change24h.toFixed(2)}%`}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : bd ? (
                      <div style={{ padding:'48px', textAlign:'center' }}>
                        <p style={{ fontSize:14, color:'rgba(255,255,255,0.25)', margin:0 }}>No token balances found for this address.</p>
                      </div>
                    ) : null}
                  </div>

                  {/* Chain breakdown */}
                  {!isLoadingBal && topChains.length > 0 && (
                    <div className="pf-card">
                      <div className="pf-card-head">
                        <span className="pf-card-title">Chain Breakdown</span>
                      </div>
                      {topChains.map(([chain, val]) => (
                        <div key={chain} className="pf-chain-row">
                          <span className="pf-chain-name" style={{ color: CHAIN_COLORS[chain] ?? 'rgba(255,255,255,0.45)' }}>{chain}</span>
                          <div className="pf-chain-track">
                            <div className="pf-chain-fill" style={{ width:`${(val/(bd?.totalUsd||1))*100}%`, background: CHAIN_COLORS[chain] ?? '#7CF5C0', opacity:0.7 }}/>
                          </div>
                          <span className="pf-chain-pct">{((val/(bd?.totalUsd||1))*100).toFixed(0)}%</span>
                          <span className="pf-chain-val">{fmt(val)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right sidebar */}
                <div style={{ display:'flex', flexDirection:'column', gap:20 }}>

                  {/* Airdrop eligibility CTA */}
                  {activeWallet && (
                    <div style={{ background:'linear-gradient(135deg,rgba(124,245,192,0.07),rgba(124,245,192,0.02))', border:'1px solid rgba(124,245,192,0.15)', borderRadius:18, padding:24 }}>
                      <div style={{ fontSize:28, marginBottom:12 }}>🎯</div>
                      <h3 style={{ fontSize:15, fontWeight:900, color:'#fff', margin:'0 0 8px', letterSpacing:'-0.02em' }}>Check Airdrop Eligibility</h3>
                      <p style={{ fontSize:12, color:'rgba(255,255,255,0.35)', margin:'0 0 18px', lineHeight:1.75 }}>See which of 125+ tracked airdrops this wallet qualifies for based on on-chain activity.</p>
                      <Link href={`/wallet-checker?address=${activeWallet}`}
                        style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, background:'linear-gradient(135deg,#7CF5C0,#4ade80)', color:'#060A12', fontWeight:800, fontSize:13, padding:'12px 20px', borderRadius:10, textDecoration:'none' }}>
                        Check Eligibility →
                      </Link>
                    </div>
                  )}

                  {/* Trending airdrops */}
                  <div className="pf-card">
                    <div className="pf-card-head">
                      <span className="pf-card-title">Trending Airdrops</span>
                      <Link href="/airdrops" style={{ fontSize:11, color:'rgba(124,245,192,0.7)', textDecoration:'none', fontWeight:700 }}>View all →</Link>
                    </div>
                    {TRENDING_AIRDROPS.map(a => (
                      <div key={a.name} className="pf-trend-row">
                        <div>
                          <div className="pf-trend-name">
                            {a.name}
                            {a.hot && <span className="pf-hot">Hot</span>}
                          </div>
                          <div className="pf-trend-chain">{a.chain}</div>
                        </div>
                        <div className="pf-trend-reward">{a.reward}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quick links */}
                  <div className="pf-card">
                    <div className="pf-card-head">
                      <span className="pf-card-title">Quick Links</span>
                    </div>
                    {[
                      { label:'Learn to Farm Airdrops', href:'/learn', icon:'📚' },
                      { label:'Best Airdrops 2026', href:'/airdrops', icon:'🏆' },
                      { label:'Wallet Checker', href:'/wallet-checker', icon:'🔍' },
                      { label:'GM Station', href:'/gm', icon:'☀️' },
                    ].map(l => (
                      <Link key={l.href} href={l.href} style={{ display:'flex', alignItems:'center', gap:12, padding:'11px 22px', borderTop:'1px solid rgba(255,255,255,0.04)', textDecoration:'none', transition:'background 0.1s' }}
                        onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.025)')}
                        onMouseLeave={e => (e.currentTarget.style.background='transparent')}>
                        <span style={{ fontSize:16 }}>{l.icon}</span>
                        <span style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.5)' }}>{l.label}</span>
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
    </>
  );
}
