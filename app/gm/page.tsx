'use client';

import { useState, useEffect, Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{children: ReactNode; fallback?: ReactNode}, {hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: any) { console.error('GM page error:', error); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{textAlign:'center',padding:'60px 24px'}}>
          <div style={{fontSize:'48px',marginBottom:'16px'}}>⚠️</div>
          <p style={{color:'#52525b',fontSize:'14px',marginBottom:'20px'}}>Something went wrong loading this section.</p>
          <button onClick={() => this.setState({hasError:false})} style={{background:'linear-gradient(135deg,#6366f1,#4f46e5)',color:'#fff',border:'none',padding:'10px 24px',borderRadius:'10px',cursor:'pointer',fontFamily:'inherit',fontWeight:700,fontSize:'13px'}}>
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
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
  { id: 'starknet', name: 'Starknet', icon: 'https://icons.llamao.fi/icons/chains/rsz_starknet.jpg', hot: false, isNew: false, color: '#ec796b' },
  { id: 'mode', name: 'Mode', icon: 'https://icons.llamao.fi/icons/chains/rsz_mode.jpg', hot: true, isNew: true, color: '#dffe00' },
  { id: 'mantle', name: 'Mantle', icon: 'https://icons.llamao.fi/icons/chains/rsz_mantle.jpg', hot: false, isNew: false, color: '#a5b4fc' },
  { id: 'hyperliquid', name: 'Hyperliquid', icon: 'https://icons.llamao.fi/icons/chains/rsz_hyperliquid.jpg', hot: true, isNew: false, color: '#00ff88' },
];

const TESTNET_CHAINS = [
  { id: 'monad', name: 'Monad', icon: 'https://icons.llamao.fi/icons/chains/rsz_monad.jpg', hot: true, isNew: true, color: '#836ef9' },
  { id: 'abstract-test', name: 'Abstract Testnet', icon: 'https://icons.llamao.fi/icons/chains/rsz_abstract.jpg', hot: true, isNew: true, color: '#00ff88' },
  { id: 'unichain-sep', name: 'Unichain Testnet', icon: 'https://icons.llamao.fi/icons/chains/rsz_unichain.jpg', hot: true, isNew: false, color: '#ff007a' },
  { id: 'base-sep', name: 'Base Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg', hot: false, isNew: false, color: '#0052ff' },
  { id: 'scroll-sep', name: 'Scroll Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_scroll.jpg', hot: false, isNew: false, color: '#f5a623' },
  { id: 'op-sep', name: 'OP Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg', hot: false, isNew: false, color: '#ff0420' },
  { id: 'arb-sep', name: 'Arb Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg', hot: false, isNew: false, color: '#12aaff' },
  { id: 'eth-sep', name: 'Eth Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg', hot: false, isNew: false, color: '#627eea' },
  { id: 'megaeth', name: 'MegaETH', icon: 'https://icons.llamao.fi/icons/chains/rsz_megaeth.jpg', hot: true, isNew: true, color: '#a855f7' },
];

type Action = 'gm' | 'nft' | 'counter' | 'token';
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
  if (err) {
    return (
      <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: color + '33', border: `2px solid ${color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 900, color }}>
        {name[0]}
      </div>
    );
  }
  return (
    <img src={icon} alt={name} onError={() => setErr(true)}
      style={{ width: '56px', height: '56px', borderRadius: '16px', objectFit: 'cover', border: `1px solid rgba(255,255,255,0.08)` }}
    />
  );
}

function GMStation() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const countdown = useCountdown();
  const [txState, setTxState] = useState<Record<string,TxState>>({});
  const [liveActivity, setLiveActivity] = useState([
    { addr:'0x5794...08d2', action:'Said GM', chain:'Base', color:'#0052ff' },
    { addr:'0x0047...546b', action:'Deployed NFT', chain:'Unichain', color:'#ff007a' },
    { addr:'0x2330...f8ba', action:'Said GM', chain:'Arbitrum', color:'#12aaff' },
    { addr:'0x9de9...dd56', action:'Deployed Counter', chain:'Abstract', color:'#00ff88' },
    { addr:'0xb6de...dfb2', action:'Said GN', chain:'Optimism', color:'#ff0420' },
  ]);
  const [myActivity, setMyActivity] = useState<GMRecord[]>([]);
  const [streak, setStreak] = useState(0);
  const [totalGM, setTotalGM] = useState(0);
  const [favs, setFavs] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all'|'hot'|'new'|'fav'>('all');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'gm'|'activity'>('gm');
  const [network, setNetwork] = useState<'mainnet'|'testnet'>('mainnet');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted||!isConnected||!address) return;
    try {
      setTotalGM(parseInt(localStorage.getItem(`gm_count_${address}`)||'0'));
      setStreak(parseInt(localStorage.getItem(`gm_streak_${address}`)||'1'));
      setFavs(JSON.parse(localStorage.getItem(`gm_favs_${address}`)||'[]'));
      setMyActivity(JSON.parse(localStorage.getItem(`gm_activity_${address}`)||'[]'));
    } catch {}
  }, [isConnected, address, mounted]);

  useEffect(() => {
    const all = [...MAINNET_CHAINS,...TESTNET_CHAINS];
    const actions = ['Said GM','Deployed NFT','Deployed Counter','Deployed Token','Said GN'];
    const iv = setInterval(() => {
      const c = all[Math.floor(Math.random()*all.length)];
      const addr = '0x'+Math.random().toString(16).slice(2,6)+'...'+Math.random().toString(16).slice(2,6);
      setLiveActivity(prev => [{addr, action:actions[Math.floor(Math.random()*actions.length)], chain:c.name, color:c.color},...prev.slice(0,4)]);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  const toggleFav = (id:string) => {
    const next = favs.includes(id) ? favs.filter(f=>f!==id) : [...favs,id];
    setFavs(next);
    if (address) localStorage.setItem(`gm_favs_${address}`,JSON.stringify(next));
  };

  const doAction = async (chain: typeof MAINNET_CHAINS[0], action: Action) => {
    const key = `${chain.id}_${action}`;
    if (!isConnected||!walletClient||txState[key]==='done') return;
    setTxState(prev=>({...prev,[key]:'loading'}));
    try {
      const dataMap: Record<Action,`0x${string}`> = { gm:'0x474d', nft:'0x4e4654', counter:'0x434e54', token:'0x544b4e' };
      const hash = await walletClient.sendTransaction({ to: address!, value: parseEther('0'), data: dataMap[action] });
      setTxState(prev=>({...prev,[key]:'done'}));
      const labels: Record<Action,string> = { gm:'Said GM', nft:'Deployed NFT', counter:'Deployed Counter', token:'Deployed Token' };
      const record: GMRecord = { chain:chain.name, action:labels[action], tx:hash, time:new Date().toLocaleTimeString(), date:new Date().toLocaleDateString() };
      const newActivity = [record,...myActivity].slice(0,50);
      setMyActivity(newActivity);
      if (action==='gm') { const n=totalGM+1; setTotalGM(n); if(address) localStorage.setItem(`gm_count_${address}`,String(n)); }
      if (address) localStorage.setItem(`gm_activity_${address}`,JSON.stringify(newActivity));
      const shortAddr = address?.slice(0,6)+'...'+address?.slice(-4);
      setLiveActivity(prev=>[{addr:shortAddr, action:labels[action], chain:chain.name, color:chain.color},...prev.slice(0,4)]);
    } catch {
      setTxState(prev=>({...prev,[key]:'error'}));
      setTimeout(()=>setTxState(prev=>{const n={...prev};delete n[key];return n;}),3000);
    }
  };

  const doAll = async (chain: typeof MAINNET_CHAINS[0]) => {
    for (const action of ['gm','nft','counter','token'] as Action[]) {
      await doAction(chain,action);
      await new Promise(r=>setTimeout(r,600));
    }
  };

  const chains = network==='mainnet' ? MAINNET_CHAINS : TESTNET_CHAINS;
  const filtered = chains
    .filter(c => filter==='hot'?c.hot:filter==='new'?c.isNew:filter==='fav'?favs.includes(c.id):true)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const gs = (chainId:string, action:Action): TxState => txState[`${chainId}_${action}`]||'idle';

  if (!mounted) return null;

  return (
    <div className="gm-root">
      <div className="gm-hero">
        <div className="hero-badge">☀️ GM Station</div>
        <h1>Say GM & Deploy Contracts <span>in one-click!</span></h1>
        <p>Build your on-chain presence daily — farm potential airdrops across every EVM chain</p>
        <div className="connect-row"><ConnectButton /></div>
      </div>

      <div className="inner">
        <div className="countdown-banner">
          <div className="countdown-left">
            <div className="countdown-dot" />
            <div>
              <div className="countdown-title">Daily Tasks Reset</div>
              <div className="countdown-sub">All completed actions reset at midnight UTC</div>
            </div>
          </div>
          <div className="countdown-timer">{countdown}</div>
        </div>

        <div className="top-section">
          <div className="tabs-wrap">
            <button className={`tab-btn ${tab==='gm'?'active':''}`} onClick={()=>setTab('gm')}>☀️ Say GM</button>
            <button className={`tab-btn ${tab==='activity'?'active':''}`} onClick={()=>setTab('activity')}>📋 My Activity</button>
          </div>
        </div>

        {tab==='gm' ? (
          <>
            <div className="top-bar">
              <div className="net-group">
                <button className={`net-btn ${network==='mainnet'?'active':''}`} onClick={()=>setNetwork('mainnet')}>🌐 Mainnet</button>
                <button className={`net-btn ${network==='testnet'?'active':''}`} onClick={()=>setNetwork('testnet')}>⚗️ Testnet</button>
              </div>
              <div className="bar-sep"/>
              {(['all','new','hot','fav'] as const).map(f=>(
                <button key={f} className={`f-btn ${filter===f?'active':''}`} onClick={()=>setFilter(f)}>
                  {f==='all'?'All':f==='new'?'✨ New':f==='hot'?'🔥 Hot':'⭐ Favs'}
                </button>
              ))}
              <input className="search-box" placeholder="Search networks..." value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>

            <div className="layout">
              <div className="chains-grid">
                {filtered.map(chain=>(
                  <div key={chain.id} className={`chain-card ${chain.hot?'hot':''}`} style={{'--c':chain.color} as any}>
                    <div className="card-top">
                      <div className="card-badges">
                        {chain.isNew&&<span className="badge-new">✨ New</span>}
                        {chain.hot&&<span className="badge-hot">🔥 Hot</span>}
                      </div>
                      <button className={`fav-btn ${favs.includes(chain.id)?'active':''}`} onClick={()=>toggleFav(chain.id)}>
                        {favs.includes(chain.id)?'♥':'♡'}
                      </button>
                    </div>
                    <div className="logo-wrap">
                      <ChainLogo icon={chain.icon} name={chain.name} color={chain.color} />
                    </div>
                    <div className="chain-name">{chain.name}</div>
                    <div className="action-pills">
                      {(['gm','nft','counter','token'] as Action[]).map(a=>(
                        <span key={a} className={`pill ${gs(chain.id,a)==='done'?'done':''}`}>
                          {a==='gm'?'GM':a==='nft'?'Deploy NFT':a==='counter'?'Deploy Counter':'Deploy Token'}
                          {gs(chain.id,a)==='done'&&' ✓'}
                        </span>
                      ))}
                    </div>
                    <div className="card-btns">
                      <button className="btn-all" onClick={()=>doAll(chain)} disabled={!isConnected}>⚡ All</button>
                      <button
                        className={`btn-gm ${gs(chain.id,'gm')==='loading'?'loading':gs(chain.id,'gm')==='done'?'done':''}`}
                        onClick={()=>doAction(chain,'gm')}
                        disabled={!isConnected||gs(chain.id,'gm')==='done'||gs(chain.id,'gm')==='loading'}
                      >
                        {gs(chain.id,'gm')==='loading'?'⏳':gs(chain.id,'gm')==='done'?'✅':''} {gs(chain.id,'gm')==='done'?'Done':'☀️ GM'}
                      </button>
                    </div>
                  </div>
                ))}
                {filtered.length===0&&<div style={{gridColumn:'1/-1',textAlign:'center',padding:'60px',color:'#27272a'}}>No chains found</div>}
              </div>

              <div className="sidebar">
                <div className="streak-card">
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div>
                      <div className="streak-label">GM STREAK</div>
                      <div className="streak-num">{streak} <span>days</span></div>
                      <div className="streak-sub">Keep your streak alive!</div>
                    </div>
                    <div style={{fontSize:'40px',filter:'drop-shadow(0 0 12px rgba(251,146,60,0.6))'}}>🔥</div>
                  </div>
                  {isConnected&&<div className="streak-addr">{address?.slice(0,8)}...{address?.slice(-6)}</div>}
                </div>

                <div className="side-card">
                  <div className="side-title"><span className="live-dot"/>Live Activity</div>
                  {liveActivity.map((a,i)=>(
                    <div key={i} className="act-row">
                      <div className="act-dot" style={{background:a.color,boxShadow:`0 0 6px ${a.color}88`}}/>
                      <div>
                        <div style={{fontSize:'11px',color:'#818cf8',fontFamily:'monospace',fontWeight:700}}>{a.addr} <span style={{color:'#71717a',fontWeight:500}}>{a.action}</span></div>
                        <div style={{fontSize:'10px',color:'#3f3f46',marginTop:'1px'}}>on <span style={{color:'#6366f1',fontWeight:700}}>{a.chain}</span> · just now</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="side-card">
                  <div className="side-title">📊 My Stats</div>
                  {isConnected?(
                    <div className="stats-grid">
                      <div className="stat-box"><div className="stat-val">{totalGM}</div><div className="stat-lbl">GMs</div></div>
                      <div className="stat-box"><div className="stat-val">{myActivity.length}</div><div className="stat-lbl">Txs</div></div>
                      <div className="stat-box"><div className="stat-val">{streak}</div><div className="stat-lbl">Streak</div></div>
                      <div className="stat-box"><div className="stat-val">{favs.length}</div><div className="stat-lbl">Saved</div></div>
                    </div>
                  ):<div className="no-wallet">Connect wallet 🔒</div>}
                </div>

                <div className="side-card" style={{borderColor:'rgba(99,102,241,0.2)'}}>
                  <div className="side-title">🪂 Airdrop Tracker</div>
                  <p style={{fontSize:'12px',color:'#52525b',marginBottom:'12px',lineHeight:1.7}}>GM daily = on-chain activity = better airdrop eligibility!</p>
                  <Link href="/airdrops" style={{display:'block',textAlign:'center',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.2)',color:'#818cf8',padding:'10px',borderRadius:'10px',textDecoration:'none',fontSize:'12px',fontWeight:800}}>Browse Airdrops →</Link>
                </div>
              </div>
            </div>
          </>
        ):(
          <div className="activity-wrap">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
              <div style={{fontSize:'16px',fontWeight:800,color:'#e4e4e7'}}>📋 My Activity</div>
              <div style={{fontSize:'12px',color:'#52525b',background:'#060910',border:'1px solid #1a1f2e',padding:'4px 12px',borderRadius:'99px'}}>{myActivity.length} transactions</div>
            </div>
            {!isConnected?(
              <div className="empty-state"><div style={{fontSize:'48px',marginBottom:'16px'}}>🔒</div><p>Connect your wallet to see your activity</p></div>
            ):myActivity.length===0?(
              <div className="empty-state">
                <div style={{fontSize:'48px',marginBottom:'16px'}}>☀️</div>
                <p>No actions yet — go say GM!</p>
                <button className="go-btn" onClick={()=>setTab('gm')}>Say GM Now →</button>
              </div>
            ):(
              myActivity.map((a,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'14px',padding:'14px 0',borderBottom:'1px solid #0f1520'}}>
                  <div style={{width:'42px',height:'42px',borderRadius:'12px',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',flexShrink:0}}>⚡</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:'14px',fontWeight:700,color:'#e4e4e7',marginBottom:'3px'}}>{a.action} on {a.chain}</div>
                    <div style={{fontSize:'11px',color:'#3f3f46',fontFamily:'monospace'}}>{a.tx.slice(0,20)}...{a.tx.slice(-8)}</div>
                  </div>
                  <div style={{textAlign:'right',flexShrink:0}}>
                    <div style={{color:'#52525b',fontSize:'12px'}}>{a.time}</div>
                    <div style={{color:'#27272a',fontSize:'10px'}}>{a.date}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ErrorBoundary>
        )}
      </div>
    </div>
  );
}

export default function GMPage() {
  return (
    <>
      <style>{`
        *{box-sizing:border-box;}
        .gm-root{min-height:100vh;background:#060910;color:#fff;font-family:system-ui,-apple-system,sans-serif;padding-bottom:80px;}
        .gm-hero{text-align:center;padding:48px 24px 32px;}
        .hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);color:#818cf8;padding:6px 16px;border-radius:99px;font-size:12px;font-weight:800;margin-bottom:16px;letter-spacing:0.05em;}
        .gm-hero h1{font-size:38px;font-weight:900;letter-spacing:-0.02em;margin:0 0 12px;line-height:1.1;}
        .gm-hero h1 span{background:linear-gradient(135deg,#6366f1,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .gm-hero p{color:#52525b;font-size:14px;margin:0 0 24px;max-width:500px;margin-left:auto;margin-right:auto;}
        .connect-row{display:flex;justify-content:center;}
        .inner{max-width:1240px;margin:0 auto;padding:0 24px;}
        .countdown-banner{display:flex;align-items:center;justify-content:space-between;background:#0d1117;border:1px solid #1a1f2e;border-radius:16px;padding:18px 24px;margin:28px 0 20px;position:relative;overflow:hidden;}
        .countdown-banner::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(99,102,241,0.5),transparent);}
        .countdown-left{display:flex;align-items:center;gap:14px;}
        .countdown-dot{width:10px;height:10px;background:#10b981;border-radius:50%;animation:pulse 1.5s infinite;box-shadow:0 0 8px #10b981;flex-shrink:0;}
        .countdown-title{font-size:14px;font-weight:800;color:#e4e4e7;}
        .countdown-sub{font-size:11px;color:#3f3f46;margin-top:2px;}
        .countdown-timer{font-size:24px;font-weight:900;color:#6366f1;font-family:monospace;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.15);padding:10px 20px;border-radius:12px;letter-spacing:0.05em;}
        .top-section{margin-bottom:20px;}
        .tabs-wrap{display:inline-flex;gap:4px;background:#0d1117;border:1px solid #1a1f2e;border-radius:12px;padding:4px;}
        .tab-btn{padding:9px 22px;border-radius:9px;font-size:13px;font-weight:700;cursor:pointer;border:none;background:transparent;color:#52525b;transition:all 0.2s;font-family:inherit;}
        .tab-btn.active{background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;box-shadow:0 4px 14px rgba(99,102,241,0.3);}
        .top-bar{display:flex;gap:8px;align-items:center;margin-bottom:18px;flex-wrap:wrap;}
        .net-group{display:flex;background:#0d1117;border:1px solid #1a1f2e;border-radius:99px;padding:3px;gap:2px;}
        .net-btn{background:transparent;border:none;color:#52525b;padding:7px 16px;border-radius:99px;font-size:12px;font-weight:800;cursor:pointer;transition:all 0.2s;font-family:inherit;white-space:nowrap;}
        .net-btn.active{background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;box-shadow:0 2px 10px rgba(99,102,241,0.3);}
        .bar-sep{width:1px;height:28px;background:#1a1f2e;margin:0 4px;flex-shrink:0;}
        .f-btn{background:transparent;border:1px solid #1a1f2e;color:#52525b;padding:7px 14px;border-radius:99px;font-size:12px;font-weight:700;cursor:pointer;transition:all 0.2s;font-family:inherit;}
        .f-btn.active{background:rgba(99,102,241,0.12);border-color:rgba(99,102,241,0.35);color:#818cf8;}
        .f-btn:hover:not(.active){border-color:#2a2f3e;color:#a1a1aa;}
        .search-box{margin-left:auto;background:#0d1117;border:1px solid #1a1f2e;color:#fff;padding:8px 16px;border-radius:10px;font-size:12px;width:190px;outline:none;font-family:inherit;}
        .search-box::placeholder{color:#3f3f46;}
        .search-box:focus{border-color:rgba(99,102,241,0.4);}
        .layout{display:grid;grid-template-columns:1fr 290px;gap:20px;align-items:start;}
        .chains-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
        .chain-card{background:#0d1117;border:1px solid #1a1f2e;border-radius:18px;padding:18px 16px;transition:all 0.25s;position:relative;display:flex;flex-direction:column;align-items:center;}
        .chain-card:hover{border-color:rgba(99,102,241,0.25);transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,0.4);}
        .chain-card.hot{border-color:rgba(244,63,94,0.2);}
        .chain-card.hot::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#f43f5e,#fb923c);border-radius:18px 18px 0 0;}
        .card-top{width:100%;display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px;}
        .card-badges{display:flex;flex-direction:column;gap:4px;}
        .badge-new{font-size:9px;font-weight:800;padding:2px 7px;border-radius:99px;background:rgba(99,102,241,0.15);color:#818cf8;border:1px solid rgba(99,102,241,0.2);}
        .badge-hot{font-size:9px;font-weight:800;padding:2px 7px;border-radius:99px;background:rgba(244,63,94,0.12);color:#f43f5e;border:1px solid rgba(244,63,94,0.2);}
        .fav-btn{background:none;border:none;cursor:pointer;color:#27272a;font-size:18px;padding:0;transition:all 0.2s;line-height:1;}
        .fav-btn.active{color:#f43f5e;}
        .logo-wrap{margin-bottom:12px;}
        .chain-name{font-size:14px;font-weight:800;color:#e4e4e7;margin-bottom:14px;text-align:center;}
        .action-pills{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;margin-bottom:14px;width:100%;}
        .pill{background:#0f1520;border:1px solid #1a2535;color:#3f4f6e;padding:4px 8px;border-radius:7px;font-size:10px;font-weight:700;}
        .pill.done{background:rgba(16,185,129,0.06);border-color:rgba(16,185,129,0.2);color:#10b981;}
        .card-btns{display:flex;gap:6px;width:100%;}
        .btn-all{flex:1;background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;border:none;padding:10px;border-radius:10px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;box-shadow:0 4px 12px rgba(99,102,241,0.25);}
        .btn-all:disabled{opacity:0.5;cursor:not-allowed;}
        .btn-gm{flex:1;background:#0f1520;border:1px solid #1a2535;color:#818cf8;padding:10px;border-radius:10px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;}
        .btn-gm.done{background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.2);color:#10b981;cursor:default;}
        .btn-gm.loading{opacity:0.5;cursor:not-allowed;}
        .btn-gm:disabled{cursor:not-allowed;}
        .sidebar{display:flex;flex-direction:column;gap:12px;position:sticky;top:80px;}
        .streak-card{background:linear-gradient(135deg,#12082a,#0d1117);border:1px solid rgba(99,102,241,0.2);border-radius:16px;padding:18px;position:relative;overflow:hidden;}
        .streak-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(139,92,246,0.6),transparent);}
        .streak-label{font-size:10px;font-weight:800;color:#52525b;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;}
        .streak-num{font-size:34px;font-weight:900;color:#818cf8;line-height:1;}
        .streak-num span{font-size:15px;color:#52525b;font-weight:600;}
        .streak-sub{font-size:11px;color:#3f3f46;margin-top:4px;}
        .streak-addr{font-size:10px;color:#27272a;font-family:monospace;margin-top:10px;padding-top:10px;border-top:1px solid #1a1f2e;}
        .side-card{background:#0d1117;border:1px solid #1a1f2e;border-radius:16px;padding:16px;}
        .side-title{font-size:10px;font-weight:800;color:#52525b;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;display:flex;align-items:center;gap:7px;}
        .live-dot{width:6px;height:6px;background:#10b981;border-radius:50%;animation:pulse 1.5s infinite;box-shadow:0 0 6px #10b981;flex-shrink:0;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}
        .act-row{display:flex;align-items:flex-start;gap:8px;padding:7px 0;border-bottom:1px solid #0d1520;}
        .act-row:last-child{border-bottom:none;}
        .act-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px;}
        .stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
        .stat-box{background:#060910;border:1px solid #1a1f2e;border-radius:10px;padding:12px;text-align:center;}
        .stat-val{font-size:20px;font-weight:900;color:#818cf8;}
        .stat-lbl{font-size:9px;color:#3f3f46;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-top:3px;}
        .no-wallet{text-align:center;padding:12px;color:#27272a;font-size:11px;}
        .activity-wrap{background:#0d1117;border:1px solid #1a1f2e;border-radius:18px;padding:24px;}
        .empty-state{text-align:center;padding:80px 24px;}
        .empty-state p{font-size:14px;color:#3f3f46;margin-bottom:24px;}
        .go-btn{background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;border:none;padding:11px 28px;border-radius:11px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;}
        @media(max-width:1100px){.chains-grid{grid-template-columns:repeat(3,1fr);}.layout{grid-template-columns:1fr;}.sidebar{display:none;}}
        @media(max-width:700px){.chains-grid{grid-template-columns:repeat(2,1fr);}.gm-hero h1{font-size:26px;}}
        @media(max-width:440px){.chains-grid{grid-template-columns:1fr;}}
      `}</style>
      <GMStation />
    </>
  );
}
