'use client';

import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWalletClient } from 'wagmi';
import { parseEther } from 'viem';
import Link from 'next/link';

const MAINNET_CHAINS = [
  { id: 'base', name: 'Base', icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg', hot: true, isNew: true, color: '#0052ff' },
  { id: 'eth', name: 'Ethereum', icon: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg', hot: true, isNew: false, color: '#627eea' },
  { id: 'arb', name: 'Arbitrum', icon: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg', hot: true, isNew: false, color: '#12aaff' },
  { id: 'op', name: 'Optimism', icon: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg', hot: false, isNew: false, color: '#ff0420' },
  { id: 'unichain', name: 'Unichain', icon: 'https://icons.llamao.fi/icons/chains/rsz_unichain.jpg', hot: true, isNew: true, color: '#ff007a' },
  { id: 'abstract', name: 'Abstract', icon: 'https://icons.llamao.fi/icons/chains/rsz_abstract.jpg', hot: true, isNew: true, color: '#00ff88' },
  { id: 'zksync', name: 'ZKSync', icon: 'https://icons.llamao.fi/icons/chains/rsz_zksync%20era.jpg', hot: true, isNew: false, color: '#8b5cf6' },
  { id: 'scroll', name: 'Scroll', icon: 'https://icons.llamao.fi/icons/chains/rsz_scroll.jpg', hot: false, isNew: false, color: '#f5a623' },
  { id: 'polygon', name: 'Polygon', icon: 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg', hot: false, isNew: false, color: '#8247e5' },
  { id: 'linea', name: 'Linea', icon: 'https://icons.llamao.fi/icons/chains/rsz_linea.jpg', hot: false, isNew: false, color: '#61dfff' },
  { id: 'avalanche', name: 'Avalanche', icon: 'https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg', hot: false, isNew: false, color: '#e84142' },
  { id: 'bsc', name: 'BNB Chain', icon: 'https://icons.llamao.fi/icons/chains/rsz_binance.jpg', hot: false, isNew: false, color: '#f3ba2f' },
  { id: 'mode', name: 'Mode', icon: 'https://icons.llamao.fi/icons/chains/rsz_mode.jpg', hot: true, isNew: true, color: '#dffe00' },
  { id: 'mantle', name: 'Mantle', icon: 'https://icons.llamao.fi/icons/chains/rsz_mantle.jpg', hot: false, isNew: false, color: '#a5b4fc' },
  { id: 'starknet', name: 'Starknet', icon: 'https://icons.llamao.fi/icons/chains/rsz_starknet.jpg', hot: false, isNew: false, color: '#ec796b' },
  { id: 'hyperliquid', name: 'Hyperliquid', icon: 'https://icons.llamao.fi/icons/chains/rsz_hyperliquid.jpg', hot: true, isNew: false, color: '#00ff88' },
];

const TESTNET_CHAINS = [
  { id: 'monad', name: 'Monad', icon: 'https://icons.llamao.fi/icons/chains/rsz_monad.jpg', hot: true, isNew: true, color: '#836ef9' },
  { id: 'abstract-test', name: 'Abstract', icon: 'https://icons.llamao.fi/icons/chains/rsz_abstract.jpg', hot: true, isNew: true, color: '#00ff88' },
  { id: 'unichain-sep', name: 'Unichain', icon: 'https://icons.llamao.fi/icons/chains/rsz_unichain.jpg', hot: true, isNew: false, color: '#ff007a' },
  { id: 'base-sep', name: 'Base Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg', hot: false, isNew: false, color: '#0052ff' },
  { id: 'scroll-sep', name: 'Scroll Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_scroll.jpg', hot: false, isNew: false, color: '#f5a623' },
  { id: 'op-sep', name: 'OP Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg', hot: false, isNew: false, color: '#ff0420' },
  { id: 'arb-sep', name: 'Arb Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg', hot: false, isNew: false, color: '#12aaff' },
  { id: 'megaeth', name: 'MegaETH', icon: 'https://icons.llamao.fi/icons/chains/rsz_megaeth.jpg', hot: true, isNew: true, color: '#a855f7' },
];

type Action = 'gm' | 'gn' | 'nft' | 'counter' | 'token';
type TxState = 'idle' | 'loading' | 'done' | 'error';
type GMRecord = { chain: string; action: string; tx: string; time: string; date: string };

function useCountdown() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const calc = () => { const now = new Date(); const next = new Date(); next.setUTCHours(24,0,0,0); return Math.floor((next.getTime()-now.getTime())/1000); };
    setSeconds(calc());
    const iv = setInterval(() => setSeconds(s => s <= 0 ? calc() : s-1), 1000);
    return () => clearInterval(iv);
  }, []);
  const h = String(Math.floor(seconds/3600)).padStart(2,'0');
  const m = String(Math.floor((seconds%3600)/60)).padStart(2,'0');
  const s = String(seconds%60).padStart(2,'0');
  return `${h}:${m}:${s}`;
}

function ChainLogo({ icon, name, color }: { icon: string; name: string; color: string }) {
  const [err, setErr] = useState(false);
  if (err) return (
    <div style={{ width:56, height:56, borderRadius:16, background:color+'22', border:`1.5px solid ${color}33`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, fontWeight:900, color }}>
      {name[0]}
    </div>
  );
  return <img src={icon} alt={name} onError={() => setErr(true)} style={{ width:56, height:56, borderRadius:16, objectFit:'cover' }} />;
}

export default function GMPage() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const countdown = useCountdown();
  const [txState, setTxState] = useState<Record<string,TxState>>({});
  const [myActivity, setMyActivity] = useState<GMRecord[]>([]);
  const [streak, setStreak] = useState(0);
  const [streakChain, setStreakChain] = useState('Base');
  const [totalGM, setTotalGM] = useState(0);
  const [favs, setFavs] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all'|'new'|'hot'>('all');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'gm'|'activity'>('gm');
  const [network, setNetwork] = useState<'mainnet'|'testnet'>('mainnet');
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted||!isConnected||!address) return;
    try {
      setTotalGM(parseInt(localStorage.getItem(`gm_count_${address}`)||'0'));
      setStreak(parseInt(localStorage.getItem(`gm_streak_${address}`)||'0'));
      setFavs(JSON.parse(localStorage.getItem(`gm_favs_${address}`)||'[]'));
      setMyActivity(JSON.parse(localStorage.getItem(`gm_activity_${address}`)||'[]'));
    } catch {}
  }, [isConnected, address, mounted]);

  const toggleFav = (id: string) => {
    const next = favs.includes(id) ? favs.filter(f=>f!==id) : [...favs,id];
    setFavs(next);
    if (address) localStorage.setItem(`gm_favs_${address}`, JSON.stringify(next));
  };

  const doAction = async (chain: typeof MAINNET_CHAINS[0], action: Action) => {
    const key = `${chain.id}_${action}`;
    if (!isConnected||!walletClient||txState[key]==='done') return;
    setTxState(prev=>({...prev,[key]:'loading'}));
    try {
      const dataMap: Record<Action,`0x${string}`> = { gm:'0x474d', gn:'0x474e', nft:'0x4e4654', counter:'0x434e54', token:'0x544b4e' };
      const hash = await walletClient.sendTransaction({ to: address!, value: parseEther('0'), data: dataMap[action] });
      setTxState(prev=>({...prev,[key]:'done'}));
      const labels: Record<Action,string> = { gm:'GM', gn:'GN', nft:'Deploy NFT', counter:'Deploy Counter', token:'Deploy Token' };
      const record: GMRecord = { chain:chain.name, action:labels[action], tx:hash, time:new Date().toLocaleTimeString(), date:new Date().toLocaleDateString() };
      const newActivity = [record,...myActivity].slice(0,50);
      setMyActivity(newActivity);
      if (action==='gm') {
        const n = totalGM+1; setTotalGM(n); setStreakChain(chain.name);
        const s = streak+1; setStreak(s);
        if (address) { localStorage.setItem(`gm_count_${address}`, String(n)); localStorage.setItem(`gm_streak_${address}`, String(s)); }
      }
      if (address) localStorage.setItem(`gm_activity_${address}`, JSON.stringify(newActivity));
    } catch {
      setTxState(prev=>({...prev,[key]:'error'}));
      setTimeout(()=>setTxState(prev=>{const n={...prev};delete n[key];return n;}),3000);
    }
  };

  const doAll = async (chain: typeof MAINNET_CHAINS[0]) => {
    for (const action of ['gm','gn','nft','counter','token'] as Action[]) {
      await doAction(chain, action);
      await new Promise(r=>setTimeout(r,500));
    }
  };

  const copyRef = () => {
    navigator.clipboard.writeText(`https://seo.3alamiyweb3.online/gm?ref=${address?.slice(0,8)}`);
    setCopied(true);
    setTimeout(()=>setCopied(false), 2000);
  };

  const chains = network==='mainnet' ? MAINNET_CHAINS : TESTNET_CHAINS;
  const filtered = chains
    .filter(c => filter==='hot'?c.hot : filter==='new'?c.isNew : true)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const gs = (chainId: string, action: Action): TxState => txState[`${chainId}_${action}`]||'idle';

  if (!mounted) return null;

  const actionLabels: Record<Action, string> = { gm: 'GM', gn: 'GN', nft: 'NFT', counter: 'Counter', token: 'Token' };

  return (
    <>
      <style>{`
        *{box-sizing:border-box;}
        .gm-root{min-height:100vh;background:#060910;color:#fff;font-family:system-ui,-apple-system,sans-serif;padding-bottom:80px;}

        /* Header */
        .gm-header{padding:32px 28px 0;border-bottom:1px solid #1a1f2e;margin-bottom:0;}
        .gm-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px;}
        .gm-title{font-size:22px;font-weight:900;margin:0;letter-spacing:-0.02em;color:#fff;}
        .gm-title span{color:#6366f1;}

        /* Tabs */
        .tab-row{display:flex;gap:0;margin-bottom:-1px;}
        .tab-btn{background:transparent;border:none;border-bottom:2px solid transparent;color:#52525b;padding:10px 20px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.2s;letter-spacing:0.01em;}
        .tab-btn.active{color:#fff;border-bottom-color:#6366f1;}
        .tab-btn:hover:not(.active){color:#a1a1aa;}

        /* Controls bar */
        .controls-bar{display:flex;align-items:center;gap:10px;padding:16px 28px;border-bottom:1px solid #1a1f2e;flex-wrap:wrap;}
        .search-input{background:#0d1117;border:1px solid #1a1f2e;color:#fff;padding:9px 14px;border-radius:10px;font-size:13px;outline:none;font-family:inherit;width:200px;transition:border-color 0.2s;}
        .search-input:focus{border-color:#2a2f3e;}
        .search-input::placeholder{color:#3f3f46;}
        .seg-group{display:flex;background:#0d1117;border:1px solid #1a1f2e;border-radius:10px;overflow:hidden;}
        .seg-btn{background:transparent;border:none;color:#52525b;padding:8px 16px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s;}
        .seg-btn.active{background:#1a1f2e;color:#fff;}
        .filter-pill{background:transparent;border:1px solid #1a1f2e;color:#52525b;padding:7px 14px;border-radius:99px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.2s;}
        .filter-pill.active{background:#1a1f2e;border-color:#2a2f3e;color:#fff;}

        /* Countdown */
        .countdown-strip{display:flex;align-items:center;justify-content:space-between;padding:12px 28px;background:#0d1117;border-bottom:1px solid #1a1f2e;}
        .cd-left{display:flex;align-items:center;gap:8px;}
        .cd-dot{width:6px;height:6px;background:#10b981;border-radius:50%;animation:pulse 1.5s infinite;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
        .cd-label{font-size:12px;color:#52525b;font-weight:600;}
        .cd-timer{font-size:15px;font-weight:900;color:#fff;font-family:monospace;letter-spacing:0.05em;}

        /* Main layout */
        .main-layout{display:grid;grid-template-columns:1fr 280px;gap:0;padding:0;}
        .chains-area{padding:20px 28px;border-right:1px solid #1a1f2e;}
        .chains-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}

        /* Chain card */
        .chain-card{background:#0d1117;border:1px solid #1a1f2e;border-radius:14px;padding:16px 14px;transition:all 0.2s;position:relative;display:flex;flex-direction:column;align-items:center;gap:10px;}
        .chain-card:hover{border-color:#2a2f3e;box-shadow:0 4px 20px rgba(0,0,0,0.3);}
        .card-top-row{width:100%;display:flex;align-items:flex-start;justify-content:space-between;}
        .card-badges{display:flex;gap:3px;flex-wrap:wrap;}
        .b-new{background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);color:#818cf8;font-size:8px;font-weight:800;padding:2px 6px;border-radius:99px;letter-spacing:0.04em;}
        .b-hot{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#f87171;font-size:8px;font-weight:800;padding:2px 6px;border-radius:99px;letter-spacing:0.04em;}
        .fav-btn{background:none;border:none;cursor:pointer;color:#1a1f2e;font-size:14px;padding:0;line-height:1;transition:color 0.2s;}
        .fav-btn.active{color:#f43f5e;}
        .chain-name{font-size:13px;font-weight:800;color:#e4e4e7;text-align:center;letter-spacing:-0.01em;}

        /* Action tags */
        .action-row{display:flex;gap:4px;flex-wrap:wrap;justify-content:center;width:100%;}
        .action-tag{background:#060910;border:1px solid #1a1f2e;color:#3f3f46;padding:3px 7px;border-radius:6px;font-size:9px;font-weight:700;cursor:pointer;transition:all 0.15s;font-family:inherit;letter-spacing:0.02em;}
        .action-tag:hover:not(.done):not(:disabled){background:#0d1117;color:#71717a;border-color:#2a2f3e;}
        .action-tag.done{background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.2);color:#10b981;}
        .action-tag.loading{opacity:0.4;}
        .action-tag:disabled{cursor:not-allowed;}

        /* Buttons */
        .btn-row{display:flex;gap:6px;width:100%;}
        .btn-all{flex:1;background:#0d1117;border:1px solid #1a1f2e;color:#a1a1aa;padding:8px;border-radius:9px;font-size:11px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;}
        .btn-all:hover:not(:disabled){background:#1a1f2e;color:#fff;}
        .btn-all:disabled{opacity:0.3;cursor:not-allowed;}
        .btn-gm{flex:1;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);color:#818cf8;padding:8px;border-radius:9px;font-size:11px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;}
        .btn-gm:hover:not(:disabled){background:rgba(99,102,241,0.2);border-color:rgba(99,102,241,0.4);}
        .btn-gm:disabled{opacity:0.3;cursor:not-allowed;}

        /* Sidebar */
        .sidebar{padding:20px 20px;display:flex;flex-direction:column;gap:12px;position:sticky;top:62px;height:fit-content;}
        .side-card{background:#0d1117;border:1px solid #1a1f2e;border-radius:14px;padding:16px;}
        .side-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#3f3f46;margin-bottom:12px;}

        /* Streak */
        .streak-card{background:linear-gradient(135deg,#0d1117,#0f1520);border:1px solid rgba(99,102,241,0.15);border-radius:14px;padding:16px;}
        .streak-num{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-0.03em;}
        .streak-num span{font-size:14px;color:#3f3f46;font-weight:600;letter-spacing:0;}

        /* Stats grid */
        .stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
        .stat-box{background:#060910;border:1px solid #1a1f2e;border-radius:10px;padding:10px;text-align:center;}
        .stat-val{font-size:20px;font-weight:900;color:#6366f1;}
        .stat-lbl{font-size:8px;color:#3f3f46;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-top:2px;}

        /* Activity */
        .activity-area{padding:20px 28px;}
        .act-item{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #0d1117;}
        .act-item:last-child{border-bottom:none;}
        .act-dot{width:8px;height:8px;background:#6366f1;border-radius:50%;flex-shrink:0;}
        .empty-state{text-align:center;padding:60px 24px;color:#3f3f46;}

        @media(max-width:1100px){.chains-grid{grid-template-columns:repeat(3,1fr);}.main-layout{grid-template-columns:1fr;}.sidebar{display:none;}}
        @media(max-width:700px){.chains-grid{grid-template-columns:repeat(2,1fr);}.gm-title{font-size:18px;}.controls-bar{gap:8px;}.search-input{width:100%;}}
        @media(max-width:440px){.chains-grid{grid-template-columns:1fr;}}
      `}</style>

      <div className="gm-root">

        {/* Header */}
        <div className="gm-header">
          <div className="gm-topbar">
            <div>
              <p style={{fontSize:'10px',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',color:'#3f3f46',margin:'0 0 4px'}}>Daily Activity</p>
              <h1 className="gm-title">GM Station <span>·</span> <span style={{color:'#6366f1'}}>One-click onchain</span></h1>
            </div>
            <ConnectButton />
          </div>

          {/* Tabs */}
          <div className="tab-row">
            <button className={`tab-btn ${tab==='gm'?'active':''}`} onClick={()=>setTab('gm')}>Say GM</button>
            <button className={`tab-btn ${tab==='activity'?'active':''}`} onClick={()=>setTab('activity')}>My Activity {myActivity.length > 0 && `(${myActivity.length})`}</button>
          </div>
        </div>

        {/* Controls */}
        <div className="controls-bar">
          <input className="search-input" placeholder="Search chains..." value={search} onChange={e=>setSearch(e.target.value)} />
          <div className="seg-group">
            <button className={`seg-btn ${network==='mainnet'?'active':''}`} onClick={()=>setNetwork('mainnet')}>Mainnet</button>
            <button className={`seg-btn ${network==='testnet'?'active':''}`} onClick={()=>setNetwork('testnet')}>Testnet</button>
          </div>
          <button className={`filter-pill ${filter==='all'?'active':''}`} onClick={()=>setFilter('all')}>All</button>
          <button className={`filter-pill ${filter==='new'?'active':''}`} onClick={()=>setFilter('new')}>New</button>
          <button className={`filter-pill ${filter==='hot'?'active':''}`} onClick={()=>setFilter('hot')}>Hot</button>
        </div>

        {/* Countdown */}
        <div className="countdown-strip">
          <div className="cd-left">
            <div className="cd-dot" />
            <span className="cd-label">Daily reset in</span>
          </div>
          <span className="cd-timer">{countdown}</span>
        </div>

        {tab === 'gm' ? (
          <div className="main-layout">
            {/* Chains */}
            <div className="chains-area">
              <div className="chains-grid">
                {filtered.map(chain => (
                  <div key={chain.id} className="chain-card">
                    <div className="card-top-row">
                      <div className="card-badges">
                        {chain.isNew && <span className="b-new">NEW</span>}
                        {chain.hot && <span className="b-hot">HOT</span>}
                      </div>
                      <button className={`fav-btn ${favs.includes(chain.id)?'active':''}`} onClick={()=>toggleFav(chain.id)}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill={favs.includes(chain.id)?'currentColor':'none'} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      </button>
                    </div>

                    <ChainLogo icon={chain.icon} name={chain.name} color={chain.color} />
                    <div className="chain-name">{chain.name}</div>

                    <div className="action-row">
                      {(['gm','gn','nft','counter','token'] as Action[]).map(a => (
                        <button
                          key={a}
                          className={`action-tag ${gs(chain.id,a)==='done'?'done':''} ${gs(chain.id,a)==='loading'?'loading':''}`}
                          onClick={()=>doAction(chain,a)}
                          disabled={!isConnected||gs(chain.id,a)==='done'||gs(chain.id,a)==='loading'}
                        >
                          {gs(chain.id,a)==='done'?'✓ ':''}{actionLabels[a]}
                        </button>
                      ))}
                    </div>

                    <div className="btn-row">
                      <button className="btn-all" onClick={()=>doAll(chain)} disabled={!isConnected}>All</button>
                      <button className="btn-gm" onClick={()=>doAction(chain,'gm')} disabled={!isConnected}>GM</button>
                    </div>
                  </div>
                ))}
                {filtered.length===0 && <div style={{gridColumn:'1/-1',textAlign:'center',padding:'60px',color:'#3f3f46',fontSize:'14px'}}>No chains found</div>}
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar">

              {/* Streak */}
              <div className="streak-card">
                <div className="side-label">GM Streak</div>
                <div className="streak-num">{streak} <span>days</span></div>
                <div style={{fontSize:'11px',color:'#3f3f46',marginTop:'6px'}}>{streakChain} · Keep it going</div>
              </div>

              {/* Stats */}
              <div className="side-card">
                <div className="side-label">My Stats</div>
                {isConnected ? (
                  <div className="stats-grid">
                    {[
                      {val:totalGM, lbl:'GMs Sent'},
                      {val:myActivity.length, lbl:'Total Txs'},
                      {val:streak, lbl:'Streak'},
                      {val:favs.length, lbl:'Saved'},
                    ].map(s=>(
                      <div key={s.lbl} className="stat-box">
                        <div className="stat-val">{s.val}</div>
                        <div className="stat-lbl">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{textAlign:'center',color:'#3f3f46',fontSize:'12px',padding:'8px 0'}}>Connect wallet to track stats</div>
                )}
              </div>

              {/* ZNS */}
              <div className="side-card" style={{background:'linear-gradient(135deg,#0a120a,#0d1117)',borderColor:'rgba(163,230,53,0.15)'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'12px'}}>
                  <div style={{width:'32px',height:'32px',background:'#c8ff00',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px',fontWeight:900,color:'#000',flexShrink:0}}>Z</div>
                  <div>
                    <div style={{fontSize:'12px',fontWeight:800,color:'#fff'}}>ZNS Connect</div>
                    <div style={{fontSize:'10px',color:'#3a5a3a'}}>Web3 Domain Registration</div>
                  </div>
                </div>
                <p style={{fontSize:'11px',color:'#3a5a3a',marginBottom:'10px',lineHeight:1.6}}>Register your Web3 domain on <b style={{color:'#a3e635'}}>100+ chains</b>. From <b style={{color:'#a3e635'}}>$8</b>.</p>
                <a href="https://zns.bio?ref=OTNiMTlhZT" target="_blank" rel="noopener noreferrer"
                  style={{display:'block',textAlign:'center',background:'#c8ff00',color:'#000',padding:'9px',borderRadius:'9px',textDecoration:'none',fontSize:'11px',fontWeight:900}}>
                  Register Domain →
                </a>
              </div>

              {/* Airdrop tracker */}
              <div className="side-card">
                <div className="side-label">Airdrop Tracker</div>
                <p style={{fontSize:'11px',color:'#3f3f46',marginBottom:'10px',lineHeight:1.6}}>GM daily = on-chain activity = better airdrop eligibility.</p>
                <Link href="/airdrops" style={{display:'block',textAlign:'center',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.2)',color:'#818cf8',padding:'9px',borderRadius:'9px',textDecoration:'none',fontSize:'11px',fontWeight:800}}>
                  Browse Airdrops →
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="activity-area">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:800,color:'#e4e4e7'}}>Transaction History</div>
              <div style={{fontSize:'11px',color:'#3f3f46',background:'#0d1117',border:'1px solid #1a1f2e',padding:'4px 12px',borderRadius:'99px'}}>{myActivity.length} txs</div>
            </div>
            {!isConnected ? (
              <div className="empty-state"><p>Connect your wallet to see your activity</p></div>
            ) : myActivity.length===0 ? (
              <div className="empty-state">
                <p>No activity yet — go say GM on some chains!</p>
                <button style={{background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.2)',color:'#818cf8',padding:'10px 24px',borderRadius:'10px',fontSize:'13px',fontWeight:700,cursor:'pointer',fontFamily:'inherit'}} onClick={()=>setTab('gm')}>Say GM Now →</button>
              </div>
            ) : (
              <div style={{background:'#0d1117',border:'1px solid #1a1f2e',borderRadius:'14px',padding:'8px 20px'}}>
                {myActivity.map((a,i) => (
                  <div key={i} className="act-item">
                    <div className="act-dot" />
                    <div style={{flex:1}}>
                      <div style={{fontSize:'13px',fontWeight:700,color:'#e4e4e7'}}>{a.action} <span style={{color:'#52525b'}}>on</span> {a.chain}</div>
                      <div style={{fontSize:'11px',color:'#3f3f46',fontFamily:'monospace',marginTop:'2px'}}>{a.tx.slice(0,18)}...{a.tx.slice(-6)}</div>
                    </div>
                    <div style={{textAlign:'right',flexShrink:0}}>
                      <div style={{color:'#52525b',fontSize:'11px'}}>{a.time}</div>
                      <div style={{color:'#3f3f46',fontSize:'10px'}}>{a.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
