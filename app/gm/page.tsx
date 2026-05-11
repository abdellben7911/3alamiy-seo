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
    <div style={{ width:72, height:72, borderRadius:20, background:color+'33', border:`2px solid ${color}44`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, fontWeight:900, color }}>
      {name[0]}
    </div>
  );
  return <img src={icon} alt={name} onError={() => setErr(true)} style={{ width:72, height:72, borderRadius:20, objectFit:'cover' }} />;
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

  return (
    <>
      <style>{`
        *{box-sizing:border-box;}
        .gm-root{min-height:100vh;background:#0a0a0f;color:#fff;font-family:system-ui,-apple-system,sans-serif;padding-bottom:80px;}
        .gm-header{padding:28px 28px 0;}
        .gm-title{font-size:26px;font-weight:900;margin:0 0 20px;letter-spacing:-0.02em;}
        .gm-title span{color:#00e5c0;}
        .search-full{width:100%;background:#13131a;border:1px solid #1e1e2e;color:#fff;padding:12px 16px;border-radius:12px;font-size:14px;outline:none;font-family:inherit;margin-bottom:12px;}
        .search-full::placeholder{color:#3f3f52;}
        .filter-row{display:flex;gap:8px;margin-bottom:16px;}
        .filter-tag{background:#13131a;border:1px solid #1e1e2e;color:#6b6b8a;padding:7px 16px;border-radius:99px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.2s;}
        .filter-tag.active{background:#1e1e2e;border-color:#3b3b52;color:#fff;}
        .countdown-bar{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,#111118,#0d0d16);border:1px solid #1e1e2e;border-radius:14px;padding:14px 20px;margin-bottom:20px;}
        .cd-left{display:flex;align-items:center;gap:10px;}
        .cd-dot{width:8px;height:8px;background:#00e5c0;border-radius:50%;animation:pulse 1.5s infinite;box-shadow:0 0 8px #00e5c0;}
        .cd-title{font-size:13px;font-weight:700;color:#e4e4e7;}
        .cd-sub{font-size:11px;color:#3f3f52;margin-top:1px;}
        .cd-timer{font-size:20px;font-weight:900;color:#00e5c0;font-family:monospace;background:#0d1f1c;border:1px solid #00e5c044;padding:8px 16px;border-radius:10px;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
        .main-layout{display:grid;grid-template-columns:1fr 300px;gap:20px;padding:0 28px;}
        .chains-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
        .chain-card{background:#13131a;border:1px solid #1e1e2e;border-radius:16px;padding:20px 16px;transition:all 0.2s;position:relative;display:flex;flex-direction:column;align-items:center;gap:12px;}
        .chain-card:hover{border-color:#2e2e42;transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,0.4);}
        .card-top-row{width:100%;display:flex;align-items:flex-start;justify-content:space-between;}
        .card-badges{display:flex;gap:4px;flex-wrap:wrap;}
        .b-new{background:rgba(0,229,192,0.12);border:1px solid rgba(0,229,192,0.25);color:#00e5c0;font-size:9px;font-weight:800;padding:2px 7px;border-radius:99px;}
        .b-hot{background:rgba(255,107,0,0.12);border:1px solid rgba(255,107,0,0.25);color:#ff6b00;font-size:9px;font-weight:800;padding:2px 7px;border-radius:99px;}
        .fav-btn{background:none;border:none;cursor:pointer;color:#2e2e42;font-size:18px;padding:0;line-height:1;transition:color 0.2s;}
        .fav-btn.active{color:#ff4466;}
        .chain-name{font-size:15px;font-weight:800;color:#e4e4e7;text-align:center;}
        .action-row{display:flex;gap:5px;flex-wrap:wrap;justify-content:center;width:100%;}
        .action-tag{background:#0d0d16;border:1px solid #1e1e2e;color:#4a4a6a;padding:4px 8px;border-radius:7px;font-size:10px;font-weight:700;cursor:pointer;transition:all 0.15s;font-family:inherit;}
        .action-tag:hover:not(.done){background:#1a1a28;color:#8888aa;}
        .action-tag.done{background:rgba(0,229,192,0.08);border-color:rgba(0,229,192,0.2);color:#00e5c0;}
        .action-tag.loading{opacity:0.5;}
        .btn-row{display:flex;gap:6px;width:100%;}
        .btn-all{flex:1;background:#1e1e2e;border:1px solid #2e2e42;color:#fff;padding:9px;border-radius:10px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:4px;}
        .btn-all:hover:not(:disabled){background:#2e2e42;}
        .btn-all:disabled{opacity:0.4;cursor:not-allowed;}
        .btn-bridge{flex:1;background:#0d1f1c;border:1px solid #00e5c033;color:#00e5c0;padding:9px;border-radius:10px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:4px;}
        .btn-bridge:hover{background:#0f2820;border-color:#00e5c055;}
        .sidebar{display:flex;flex-direction:column;gap:14px;position:sticky;top:80px;}
        .side-card{background:#13131a;border:1px solid #1e1e2e;border-radius:16px;padding:18px;}
        .streak-card{background:linear-gradient(135deg,#0d1f1c,#111118);border:1px solid rgba(0,229,192,0.15);border-radius:16px;padding:18px;}
        .streak-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
        .streak-label{font-size:11px;font-weight:800;color:#3f5f5a;text-transform:uppercase;letter-spacing:0.1em;}
        .streak-chain{display:flex;align-items:center;gap:6px;background:#0a1a17;border:1px solid rgba(0,229,192,0.2);padding:4px 10px;border-radius:99px;font-size:11px;color:#00e5c0;font-weight:700;}
        .streak-num{font-size:36px;font-weight:900;color:#fff;line-height:1;}
        .streak-num span{font-size:15px;color:#3f5f5a;font-weight:600;}
        .streak-sub{font-size:11px;color:#3f5f5a;margin-top:4px;}
        .ref-card{background:linear-gradient(135deg,#0f0f1f,#13131a);border:1px solid #2e2e42;border-radius:16px;padding:18px;}
        .ref-icon{width:40px;height:40px;background:#1e1e3a;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:12px;}
        .ref-title{font-size:14px;font-weight:800;color:#fff;margin-bottom:4px;}
        .ref-sub{font-size:12px;color:#4a4a6a;margin-bottom:12px;line-height:1.5;}
        .ref-box{background:#0d0d16;border:1px solid #1e1e2e;border-radius:10px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;font-size:11px;color:#4a4a6a;font-family:monospace;}
        .copy-btn{background:#1e1e2e;border:none;color:#8888aa;padding:4px 10px;border-radius:7px;cursor:pointer;font-size:11px;font-weight:700;font-family:inherit;}
        .copy-btn.copied{background:rgba(0,229,192,0.15);color:#00e5c0;}
        .net-tabs{display:flex;gap:8px;margin-bottom:16px;}
        .net-tab{background:#13131a;border:1px solid #1e1e2e;color:#4a4a6a;padding:7px 18px;border-radius:99px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;}
        .net-tab.active{background:#1e1e2e;border-color:#3b3b52;color:#fff;}
        .activity-wrap{background:#13131a;border:1px solid #1e1e2e;border-radius:16px;padding:24px;}
        .act-item{display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid #0d0d16;}
        .act-item:last-child{border-bottom:none;}
        .act-icon{width:40px;height:40px;background:#0d0d16;border:1px solid #1e1e2e;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
        .empty-state{text-align:center;padding:60px 24px;}
        .empty-state p{color:#3f3f52;font-size:14px;margin-bottom:20px;}
        .go-btn{background:#1e1e2e;border:1px solid #3b3b52;color:#fff;padding:10px 24px;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;}
        .side-title{font-size:11px;font-weight:800;color:#3f3f52;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:14px;}
        .connect-row{padding:0 28px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
        @media(max-width:1100px){.chains-grid{grid-template-columns:repeat(3,1fr);}.main-layout{grid-template-columns:1fr;}.sidebar{display:none;}}
        @media(max-width:700px){.chains-grid{grid-template-columns:repeat(2,1fr);}.gm-title{font-size:20px;}}
        @media(max-width:440px){.chains-grid{grid-template-columns:1fr;}}
      `}</style>

      <div className="gm-root">
        <div className="gm-header">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px',flexWrap:'wrap',gap:'12px'}}>
            <h1 className="gm-title">Say GM & Deploy Contracts <span>in one-click!</span></h1>
            <ConnectButton />
          </div>

          <input className="search-full" placeholder="Search networks..." value={search} onChange={e=>setSearch(e.target.value)} />

          <div className="filter-row">
            <div className="net-tabs" style={{margin:0}}>
              <button className={`net-tab ${network==='mainnet'?'active':''}`} onClick={()=>setNetwork('mainnet')}>🌐 Mainnet</button>
              <button className={`net-tab ${network==='testnet'?'active':''}`} onClick={()=>setNetwork('testnet')}>⚗️ Testnet</button>
            </div>
            <button className={`filter-tag ${filter==='all'?'active':''}`} onClick={()=>setFilter('all')}>All</button>
            <button className={`filter-tag ${filter==='new'?'active':''}`} onClick={()=>setFilter('new')}>✨ New Networks</button>
            <button className={`filter-tag ${filter==='hot'?'active':''}`} onClick={()=>setFilter('hot')}>🔥 Hot Networks</button>
          </div>

          <div className="countdown-bar">
            <div className="cd-left">
              <div className="cd-dot" />
              <div>
                <div className="cd-title">Daily Tasks Reset</div>
                <div className="cd-sub">All completed actions reset in</div>
              </div>
            </div>
            <div className="cd-timer">{countdown}</div>
          </div>

          {/* Tab switcher */}
          <div style={{display:'flex',gap:'8px',marginBottom:'20px'}}>
            <button className={`filter-tag ${tab==='gm'?'active':''}`} onClick={()=>setTab('gm')}>☀️ Say GM</button>
            <button className={`filter-tag ${tab==='activity'?'active':''}`} onClick={()=>setTab('activity')}>📋 My Activity ({myActivity.length})</button>
          </div>
        </div>

        {tab === 'gm' ? (
          <div className="main-layout">
            <div className="chains-grid">
              {filtered.map(chain => (
                <div key={chain.id} className="chain-card">
                  <div className="card-top-row">
                    <div className="card-badges">
                      {chain.isNew && <span className="b-new">✨ New</span>}
                      {chain.hot && <span className="b-hot">🔥 Hot</span>}
                    </div>
                    <button className={`fav-btn ${favs.includes(chain.id)?'active':''}`} onClick={()=>toggleFav(chain.id)}>
                      {favs.includes(chain.id)?'♥':'♡'}
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
                        {gs(chain.id,a)==='loading'?'⏳':gs(chain.id,a)==='done'?'✓ ':''}{a==='gm'?'GM':a==='gn'?'GN':a==='nft'?'Deploy NFT':a==='counter'?'Deploy Counter':'Deploy Token'}
                      </button>
                    ))}
                  </div>

                  <div className="btn-row">
                    <button className="btn-all" onClick={()=>doAll(chain)} disabled={!isConnected}>
                      ⚡ All
                    </button>
                    <button className="btn-bridge" onClick={()=>doAction(chain,'gm')} disabled={!isConnected}>
                      ☀️ GM
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length===0 && <div style={{gridColumn:'1/-1',textAlign:'center',padding:'60px',color:'#3f3f52'}}>No chains found</div>}
            </div>

            <div className="sidebar">
              {/* GM Streak */}
              <div className="streak-card">
                <div className="streak-top">
                  <div className="streak-label">GM Streak</div>
                  <div className="streak-chain">🔥 {streakChain}</div>
                </div>
                <div className="streak-num">{streak} <span>days</span></div>
                <div className="streak-sub">Keep your streak alive!</div>
              </div>

              {/* Stats */}
              <div className="side-card">
                <div className="side-title">📊 My Stats</div>
                {isConnected ? (
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px'}}>
                    {[
                      {val:totalGM, lbl:'GMs Sent'},
                      {val:myActivity.length, lbl:'Total Txs'},
                      {val:streak, lbl:'Streak'},
                      {val:favs.length, lbl:'Saved'},
                    ].map(s=>(
                      <div key={s.lbl} style={{background:'#0d0d16',border:'1px solid #1e1e2e',borderRadius:'10px',padding:'12px',textAlign:'center'}}>
                        <div style={{fontSize:'22px',fontWeight:900,color:'#00e5c0'}}>{s.val}</div>
                        <div style={{fontSize:'9px',color:'#3f3f52',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.06em',marginTop:3}}>{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{textAlign:'center',color:'#3f3f52',fontSize:'12px',padding:'12px'}}>Connect wallet to track stats 🔒</div>
                )}
              </div>

              {/* ZNS Referral */}
              <div className="side-card" style={{background:'linear-gradient(135deg,#0a1a0a,#111118)',borderColor:'rgba(163,230,53,0.2)'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'12px'}}>
                  <div style={{width:'36px',height:'36px',background:'#c8ff00',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',fontWeight:900,color:'#000',flexShrink:0}}>Z</div>
                  <div>
                    <div style={{fontSize:'13px',fontWeight:800,color:'#fff'}}>ZNS Connect</div>
                    <div style={{fontSize:'10px',color:'#4a6a4a',fontWeight:600}}>Web3 Domain Registration</div>
                  </div>
                </div>
                <p style={{fontSize:'12px',color:'#4a6a4a',marginBottom:'4px',lineHeight:1.6}}>Register your Web3 domain on <b style={{color:'#c8ff00'}}>100+ chains</b>. Build your on-chain identity.</p>
                <div style={{fontSize:'11px',color:'#3a5a3a',marginBottom:'12px'}}>From <b style={{color:'#a3e635'}}>$8</b> · .id · .ink · .boss · .hype · .defi</div>
                <a href="https://zns.bio?ref=OTNiMTlhZT" target="_blank" rel="noopener noreferrer"
                  style={{display:'block',textAlign:'center',background:'#c8ff00',color:'#000',padding:'10px',borderRadius:'10px',textDecoration:'none',fontSize:'12px',fontWeight:900,transition:'all 0.2s'}}>
                  🌐 Register Domain →
                </a>
              </div>

              {/* Airdrop tracker */}
              <div className="side-card" style={{borderColor:'rgba(99,102,241,0.15)'}}>
                <div className="side-title">🪂 Airdrop Tracker</div>
                <p style={{fontSize:'12px',color:'#4a4a6a',marginBottom:'12px',lineHeight:1.7}}>GM daily = on-chain activity = better airdrop eligibility!</p>
                <Link href="/airdrops" style={{display:'block',textAlign:'center',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.2)',color:'#818cf8',padding:'10px',borderRadius:'10px',textDecoration:'none',fontSize:'12px',fontWeight:800}}>
                  Browse Airdrops →
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div style={{padding:'0 28px'}}>
            <div className="activity-wrap">
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
                <div style={{fontSize:'16px',fontWeight:800,color:'#e4e4e7'}}>📋 My Activity</div>
                <div style={{fontSize:'12px',color:'#3f3f52',background:'#0d0d16',border:'1px solid #1e1e2e',padding:'4px 12px',borderRadius:'99px'}}>{myActivity.length} transactions</div>
              </div>
              {!isConnected ? (
                <div className="empty-state"><div style={{fontSize:'48px',marginBottom:'16px'}}>🔒</div><p>Connect your wallet to see your activity</p></div>
              ) : myActivity.length===0 ? (
                <div className="empty-state">
                  <div style={{fontSize:'48px',marginBottom:'16px'}}>☀️</div>
                  <p>No actions yet — go say GM on some chains!</p>
                  <button className="go-btn" onClick={()=>setTab('gm')}>Say GM Now →</button>
                </div>
              ) : (
                myActivity.map((a,i) => (
                  <div key={i} className="act-item">
                    <div className="act-icon">⚡</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:'14px',fontWeight:700,color:'#e4e4e7',marginBottom:3}}>{a.action} on {a.chain}</div>
                      <div style={{fontSize:'11px',color:'#3f3f52',fontFamily:'monospace'}}>{a.tx.slice(0,20)}...{a.tx.slice(-8)}</div>
                    </div>
                    <div style={{textAlign:'right',flexShrink:0}}>
                      <div style={{color:'#4a4a6a',fontSize:'12px'}}>{a.time}</div>
                      <div style={{color:'#27272a',fontSize:'10px'}}>{a.date}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
