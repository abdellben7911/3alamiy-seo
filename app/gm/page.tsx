'use client';

import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWalletClient, useSwitchChain } from 'wagmi';
import { parseEther } from 'viem';
import Link from 'next/link';

const MAINNET_CHAINS = [
  { id: 'base', name: 'Base', icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg', hot: true, isNew: true, color: '#0052ff', chainId: 8453 },
  { id: 'eth', name: 'Ethereum', icon: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg', hot: true, isNew: false, color: '#627eea', chainId: 1 },
  { id: 'arb', name: 'Arbitrum', icon: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg', hot: true, isNew: false, color: '#12aaff', chainId: 42161 },
  { id: 'op', name: 'Optimism', icon: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg', hot: false, isNew: false, color: '#ff0420', chainId: 10 },
  { id: 'unichain', name: 'Unichain', icon: 'https://icons.llamao.fi/icons/chains/rsz_unichain.jpg', hot: true, isNew: true, color: '#ff007a', chainId: 130 },
  { id: 'abstract', name: 'Abstract', icon: 'https://icons.llamao.fi/icons/chains/rsz_abstract.jpg', hot: true, isNew: true, color: '#00ff88', chainId: 2741 },
  { id: 'zksync', name: 'ZKSync', icon: 'https://icons.llamao.fi/icons/chains/rsz_zksync%20era.jpg', hot: true, isNew: false, color: '#8b5cf6', chainId: 324 },
  { id: 'scroll', name: 'Scroll', icon: 'https://icons.llamao.fi/icons/chains/rsz_scroll.jpg', hot: false, isNew: false, color: '#f5a623', chainId: 534352 },
  { id: 'polygon', name: 'Polygon', icon: 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg', hot: false, isNew: false, color: '#8247e5', chainId: 137 },
  { id: 'linea', name: 'Linea', icon: 'https://icons.llamao.fi/icons/chains/rsz_linea.jpg', hot: false, isNew: false, color: '#61dfff', chainId: 59144 },
  { id: 'avalanche', name: 'Avalanche', icon: 'https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg', hot: false, isNew: false, color: '#e84142', chainId: 43114 },
  { id: 'bsc', name: 'BNB Chain', icon: 'https://icons.llamao.fi/icons/chains/rsz_binance.jpg', hot: false, isNew: false, color: '#f3ba2f', chainId: 56 },
  { id: 'mode', name: 'Mode', icon: 'https://icons.llamao.fi/icons/chains/rsz_mode.jpg', hot: true, isNew: true, color: '#dffe00', chainId: 34443 },
  { id: 'mantle', name: 'Mantle', icon: 'https://icons.llamao.fi/icons/chains/rsz_mantle.jpg', hot: false, isNew: false, color: '#a5b4fc', chainId: 5000 },
  { id: 'starknet', name: 'Starknet', icon: 'https://icons.llamao.fi/icons/chains/rsz_starknet.jpg', hot: false, isNew: false, color: '#ec796b', chainId: 0 },
  { id: 'hyperliquid', name: 'Hyperliquid', icon: 'https://icons.llamao.fi/icons/chains/rsz_hyperliquid.jpg', hot: true, isNew: false, color: '#00ff88', chainId: 998 },
];

const TESTNET_CHAINS = [
  { id: 'monad', name: 'Monad', icon: 'https://icons.llamao.fi/icons/chains/rsz_monad.jpg', hot: true, isNew: true, color: '#836ef9', chainId: 10143 },
  { id: 'abstract-test', name: 'Abstract', icon: 'https://icons.llamao.fi/icons/chains/rsz_abstract.jpg', hot: true, isNew: true, color: '#00ff88', chainId: 11124 },
  { id: 'unichain-sep', name: 'Unichain', icon: 'https://icons.llamao.fi/icons/chains/rsz_unichain.jpg', hot: true, isNew: false, color: '#ff007a', chainId: 1301 },
  { id: 'base-sep', name: 'Base Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg', hot: false, isNew: false, color: '#0052ff', chainId: 84532 },
  { id: 'scroll-sep', name: 'Scroll Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_scroll.jpg', hot: false, isNew: false, color: '#f5a623', chainId: 534351 },
  { id: 'op-sep', name: 'OP Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg', hot: false, isNew: false, color: '#ff0420', chainId: 11155420 },
  { id: 'arb-sep', name: 'Arb Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg', hot: false, isNew: false, color: '#12aaff', chainId: 421614 },
  { id: 'megaeth', name: 'MegaETH', icon: 'https://icons.llamao.fi/icons/chains/rsz_megaeth.jpg', hot: true, isNew: true, color: '#a855f7', chainId: 6342 },
];

type Action = 'gm' | 'gn' | 'nft' | 'counter' | 'token';
type TxState = 'idle' | 'loading' | 'done' | 'error' | 'switching';
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
    <div style={{ width:56, height:56, borderRadius:14, background:color+'22', border:`1.5px solid ${color}44`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, fontWeight:900, color, flexShrink:0 }}>
      {name[0]}
    </div>
  );
  return <img src={icon} alt={name} onError={() => setErr(true)} style={{ width:56, height:56, borderRadius:14, objectFit:'cover', flexShrink:0 }} />;
}

export default function GMPage() {
  const { address, isConnected, chain: currentChain } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { switchChain } = useSwitchChain();
  const countdown = useCountdown();
  const [txState, setTxState] = useState<Record<string,TxState>>({});
  const [myActivity, setMyActivity] = useState<GMRecord[]>([]);
  const [streak, setStreak] = useState(0);
  const [streakChain, setStreakChain] = useState('Base');
  const [totalGM, setTotalGM] = useState(0);
  const [favs, setFavs] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all'|'hot'|'favs'>('all');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'gm'|'activity'>('gm');
  const [network, setNetwork] = useState<'mainnet'|'testnet'>('mainnet');
  const [mounted, setMounted] = useState(false);

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
    // Try switch network first
    if (chain.chainId && chain.chainId > 0 && currentChain?.id !== chain.chainId && switchChain) {
      setTxState(prev=>({...prev,[key]:'switching'}));
      try { await switchChain({ chainId: chain.chainId as any }); await new Promise(r=>setTimeout(r,1000)); } catch {}
    }
    setTxState(prev=>({...prev,[key]:'loading'}));
    try {
      const dataMap: Record<Action,`0x${string}`> = { gm:'0x474d', gn:'0x474e', nft:'0x4e4654', counter:'0x434e54', token:'0x544b4e' };
      const hash = await walletClient.sendTransaction({ to: address!, value: parseEther('0'), data: dataMap[action] });
      setTxState(prev=>({...prev,[key]:'done'}));
      const labels: Record<Action,string> = { gm:'GM', gn:'GN', nft:'Deploy NFT', counter:'Counter', token:'Token' };
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
      await new Promise(r=>setTimeout(r,600));
    }
  };

  const chains = network==='mainnet' ? MAINNET_CHAINS : TESTNET_CHAINS;
  const filtered = chains
    .filter(c => filter==='hot' ? c.hot : filter==='favs' ? favs.includes(c.id) : true)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const gs = (chainId: string, action: Action): TxState => txState[`${chainId}_${action}`]||'idle';

  const pillLabel = (state: TxState, label: string) => {
    if (state === 'switching') return 'Switching...'
    if (state === 'loading') return 'Sending...'
    if (state === 'done') return `✓ ${label}`
    if (state === 'error') return '✕ Failed'
    return label
  }

  if (!mounted) return null;

  return (
    <>
      <style>{`
        *{box-sizing:border-box;}
        .gm-root{min-height:100vh;background:#060910;color:#fff;font-family:system-ui,-apple-system,sans-serif;}
        .gm-hero{text-align:center;padding:44px 24px 28px;border-bottom:1px solid #1a1f2e;position:relative;overflow:hidden;}
        .hero-glow{position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:600px;height:350px;background:radial-gradient(ellipse,rgba(99,102,241,0.1) 0%,transparent 65%);pointer-events:none;}
        .gm-hero h1{font-size:30px;font-weight:900;margin:0 0 8px;letter-spacing:-0.02em;}
        .gm-hero h1 em{font-style:normal;color:#6366f1;}
        .gm-hero p{font-size:13px;color:#71717a;margin:0 0 20px;}
        .top-strip{display:flex;align-items:center;justify-content:space-between;max-width:1300px;margin:0 auto;padding:10px 24px;border-bottom:1px solid #1a1f2e;flex-wrap:wrap;gap:10px;}
        .tab-row{display:flex;gap:4px;background:#0d1117;border:1px solid #1a1f2e;border-radius:11px;padding:3px;}
        .tab-btn{background:transparent;border:none;color:#52525b;padding:7px 16px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;border-radius:8px;transition:all 0.15s;white-space:nowrap;}
        .tab-btn.active{background:#1a1f2e;color:#fff;}
        .controls-bar{display:flex;align-items:center;gap:8px;max-width:1300px;margin:0 auto;padding:12px 24px;border-bottom:1px solid #1a1f2e;flex-wrap:wrap;}
        .srch{background:#0d1117;border:1px solid #1a1f2e;color:#fff;padding:8px 14px;border-radius:10px;font-size:13px;outline:none;font-family:inherit;width:190px;}
        .srch::placeholder{color:#3f3f46;}
        .seg{display:flex;background:#0d1117;border:1px solid #1a1f2e;border-radius:10px;overflow:hidden;}
        .seg-btn{background:transparent;border:none;color:#52525b;padding:7px 16px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s;}
        .seg-btn.active{background:#1a1f2e;color:#fff;}
        .fpill{background:transparent;border:1px solid #1a1f2e;color:#52525b;padding:6px 13px;border-radius:99px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.2s;}
        .fpill.active{background:#1a1f2e;border-color:#2a2f3e;color:#fff;}
        .cd-bar{display:flex;align-items:center;justify-content:space-between;max-width:1300px;margin:0 auto;padding:9px 24px;border-bottom:1px solid #1a1f2e;}
        .cd-left{display:flex;align-items:center;gap:6px;font-size:12px;color:#52525b;}
        .cd-dot{width:6px;height:6px;background:#10b981;border-radius:50%;display:inline-block;animation:blink 1.5s infinite;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
        .cd-time{font-size:14px;font-weight:900;font-family:monospace;color:#fff;letter-spacing:0.05em;}
        .layout{display:grid;grid-template-columns:1fr 272px;max-width:1300px;margin:0 auto;}
        .chains-area{padding:18px 24px;border-right:1px solid #1a1f2e;}
        .cg{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}
        .cc{background:#0d1117;border:1px solid #1a1f2e;border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:11px;transition:border-color 0.2s,box-shadow 0.2s;}
        .cc:hover{border-color:rgba(99,102,241,0.2);box-shadow:0 4px 20px rgba(0,0,0,0.25);}
        .cc.done-all{border-color:rgba(16,185,129,0.2);background:rgba(16,185,129,0.02);}
        .cc-top{display:flex;align-items:center;justify-content:space-between;}
        .badges{display:flex;gap:3px;}
        .bhot{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#f87171;font-size:8px;font-weight:800;padding:2px 5px;border-radius:99px;}
        .bnew{background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);color:#818cf8;font-size:8px;font-weight:800;padding:2px 5px;border-radius:99px;}
        .fav{background:none;border:none;cursor:pointer;color:#2a2f3e;padding:0;line-height:1;transition:color 0.2s;}
        .fav.on{color:#f43f5e;}
        .ci{display:flex;align-items:center;gap:11px;}
        .cn{font-size:14px;font-weight:800;color:#f4f4f5;letter-spacing:-0.01em;}
        .cs{font-size:10px;color:#3f3f46;font-weight:600;margin-top:2px;}
        .pills{display:flex;gap:3px;flex-wrap:wrap;}
        .pill{background:#060910;border:1px solid #1a1f2e;color:#52525b;padding:3px 7px;border-radius:6px;font-size:9px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s;}
        .pill:hover:not(:disabled):not(.done){background:#0d1117;color:#a1a1aa;border-color:#2a2f3e;}
        .pill.done{background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.25);color:#10b981;}
        .pill.loading,.pill.switching{opacity:0.5;cursor:not-allowed;}
        .pill.error{background:rgba(244,63,94,0.08);border-color:rgba(244,63,94,0.25);color:#f43f5e;}
        .pill:disabled{cursor:not-allowed;}
        .cc-btns{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
        .ball-btn{background:#0d1117;border:1px solid #1a1f2e;color:#a1a1aa;padding:8px;border-radius:10px;font-size:10px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:4px;}
        .ball-btn:hover:not(:disabled){background:#1a1f2e;color:#fff;}
        .ball-btn:disabled{opacity:0.3;cursor:not-allowed;}
        .bgm-btn{background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);color:#818cf8;padding:8px;border-radius:10px;font-size:10px;font-weight:800;cursor:pointer;font-family:inherit;transition:all 0.2s;}
        .bgm-btn:hover:not(:disabled){background:rgba(99,102,241,0.2);color:#fff;}
        .bgm-btn:disabled{opacity:0.3;cursor:not-allowed;}
        .bgm-btn.done{background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.3);color:#10b981;}
        .sidebar{padding:18px;display:flex;flex-direction:column;gap:10px;position:sticky;top:62px;height:fit-content;}
        .sc{background:#0d1117;border:1px solid #1a1f2e;border-radius:14px;padding:16px;}
        .sl{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:#3f3f46;margin-bottom:11px;}
        .streak-n{font-size:42px;font-weight:900;color:#fff;line-height:1;letter-spacing:-0.03em;}
        .streak-n span{font-size:13px;color:#3f3f46;font-weight:600;letter-spacing:0;}
        .smg{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
        .sm{background:#060910;border:1px solid #1a1f2e;border-radius:10px;padding:10px;text-align:center;}
        .sm-v{font-size:19px;font-weight:900;color:#6366f1;}
        .sm-l{font-size:8px;color:#3f3f46;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-top:2px;}
        .aw{max-width:1300px;margin:0 auto;padding:24px;}
        .ai{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #0d1117;}
        .ai:last-child{border-bottom:none;}
        .ad{width:7px;height:7px;background:#6366f1;border-radius:50%;flex-shrink:0;}
        .empty{text-align:center;padding:56px 24px;color:#3f3f46;font-size:14px;}
        @media(max-width:1100px){.cg{grid-template-columns:repeat(3,1fr);}.layout{grid-template-columns:1fr;}.sidebar{display:none;}}
        @media(max-width:700px){.cg{grid-template-columns:repeat(2,1fr);}.gm-hero h1{font-size:22px;}}
        @media(max-width:440px){.cg{grid-template-columns:1fr;}}
      `}</style>

      <div className="gm-root">
        {/* Hero */}
        <div className="gm-hero">
          <div className="hero-glow" />
          <h1>Good Morning, <em>Blockchain</em></h1>
          <p>Build your on-chain presence — say GM & GN daily on every chain</p>
          <ConnectButton />
        </div>

        {/* Tabs */}
        <div className="top-strip">
          <div className="tab-row">
            <button className={`tab-btn ${tab==='gm'?'active':''}`} onClick={()=>setTab('gm')}>Say GM</button>
            <button className={`tab-btn ${tab==='activity'?'active':''}`} onClick={()=>setTab('activity')}>
              My Activity{myActivity.length > 0 ? ` (${myActivity.length})` : ''}
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="controls-bar">
          <input className="srch" placeholder="Search chains..." value={search} onChange={e=>setSearch(e.target.value)} />
          <div className="seg">
            <button className={`seg-btn ${network==='mainnet'?'active':''}`} onClick={()=>setNetwork('mainnet')}>Mainnet</button>
            <button className={`seg-btn ${network==='testnet'?'active':''}`} onClick={()=>setNetwork('testnet')}>Testnet</button>
          </div>
          <button className={`fpill ${filter==='all'?'active':''}`} onClick={()=>setFilter('all')}>All</button>
          <button className={`fpill ${filter==='hot'?'active':''}`} onClick={()=>setFilter('hot')}>Hot</button>
          <button className={`fpill ${filter==='favs'?'active':''}`} onClick={()=>setFilter('favs')}>Saved</button>
        </div>

        {/* Countdown */}
        <div className="cd-bar">
          <div className="cd-left"><span className="cd-dot" /> Daily reset in</div>
          <span className="cd-time">{countdown}</span>
        </div>

        {tab === 'gm' ? (
          <div className="layout">
            <div className="chains-area">
              <div className="cg">
                {filtered.map(chain => {
                  const allDone = (['gm','gn','nft','counter','token'] as Action[]).every(a => gs(chain.id,a)==='done');
                  const gmDone = gs(chain.id,'gm')==='done';
                  return (
                    <div key={chain.id} className={`cc ${allDone?'done-all':''}`}>
                      <div className="cc-top">
                        <div className="badges">
                          {chain.hot && <span className="bhot">HOT</span>}
                          {chain.isNew && <span className="bnew">NEW</span>}
                        </div>
                        <button className={`fav ${favs.includes(chain.id)?'on':''}`} onClick={()=>toggleFav(chain.id)}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill={favs.includes(chain.id)?'currentColor':'none'} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                      </div>

                      <div className="ci">
                        <ChainLogo icon={chain.icon} name={chain.name} color={chain.color} />
                        <div>
                          <div className="cn">{chain.name}</div>
                          <div className="cs" style={{color: allDone ? '#10b981' : '#3f3f46'}}>
                            {allDone ? '✓ All done' : network==='testnet' ? 'Testnet' : 'EVM'}
                          </div>
                        </div>
                      </div>

                      <div className="pills">
                        {(['gm','gn','nft','counter','token'] as Action[]).map(a => {
                          const st = gs(chain.id, a);
                          const lbl: Record<Action,string> = {gm:'GM',gn:'GN',nft:'NFT',counter:'Counter',token:'Token'};
                          return (
                            <button key={a} className={`pill ${st}`}
                              onClick={()=>doAction(chain,a)}
                              disabled={!isConnected||st==='done'||st==='loading'||st==='switching'}
                            >
                              {pillLabel(st, lbl[a])}
                            </button>
                          );
                        })}
                      </div>

                      <div className="cc-btns">
                        <button className="ball-btn" onClick={()=>doAll(chain)} disabled={!isConnected||allDone}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                          All Actions
                        </button>
                        <button className={`bgm-btn ${gmDone?'done':''}`} onClick={()=>doAction(chain,'gm')} disabled={!isConnected||gmDone}>
                          {gmDone ? '✓ GM Sent' : 'Say GM'}
                        </button>
                      </div>
                    </div>
                  );
                })}
                {filtered.length===0 && <div style={{gridColumn:'1/-1',textAlign:'center',padding:'56px',color:'#3f3f46',fontSize:'14px'}}>No chains found</div>}
              </div>
            </div>

            <div className="sidebar">
              <div className="sc" style={{background:'linear-gradient(135deg,#0d1117,#0f1520)',borderColor:'rgba(99,102,241,0.15)'}}>
                <div className="sl">GM Streak</div>
                <div className="streak-n">{streak} <span>days</span></div>
                <div style={{fontSize:'11px',color:'#3f3f46',marginTop:'6px'}}>{streakChain} · Keep it going</div>
                {streak>0 && <div style={{marginTop:'10px',height:'3px',background:'#1a1f2e',borderRadius:'99px',overflow:'hidden'}}><div style={{height:'100%',width:`${Math.min(streak*10,100)}%`,background:'linear-gradient(90deg,#6366f1,#818cf8)',borderRadius:'99px'}}/></div>}
              </div>

              <div className="sc">
                <div className="sl">My Stats</div>
                {isConnected ? (
                  <div className="smg">
                    {[{val:totalGM,lbl:'GMs Sent'},{val:myActivity.length,lbl:'Total Txs'},{val:streak,lbl:'Streak'},{val:favs.length,lbl:'Saved'}].map(s=>(
                      <div key={s.lbl} className="sm"><div className="sm-v">{s.val}</div><div className="sm-l">{s.lbl}</div></div>
                    ))}
                  </div>
                ) : <div style={{textAlign:'center',color:'#3f3f46',fontSize:'12px',padding:'8px 0'}}>Connect wallet to track</div>}
              </div>

              <div className="sc" style={{background:'linear-gradient(135deg,#0a120a,#0d1117)',borderColor:'rgba(163,230,53,0.15)'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'10px'}}>
                  <div style={{width:'30px',height:'30px',background:'#c8ff00',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'13px',fontWeight:900,color:'#000',flexShrink:0}}>Z</div>
                  <div><div style={{fontSize:'12px',fontWeight:800,color:'#fff'}}>ZNS Connect</div><div style={{fontSize:'10px',color:'#3a5a3a'}}>Web3 Domain</div></div>
                </div>
                <p style={{fontSize:'11px',color:'#3a5a3a',marginBottom:'10px',lineHeight:1.6}}>Register on <b style={{color:'#a3e635'}}>100+ chains</b>. From <b style={{color:'#a3e635'}}>$8</b>.</p>
                <a href="https://zns.bio?ref=OTNiMTlhZT" target="_blank" rel="noopener noreferrer" style={{display:'block',textAlign:'center',background:'#c8ff00',color:'#000',padding:'9px',borderRadius:'9px',textDecoration:'none',fontSize:'11px',fontWeight:900}}>Register Domain →</a>
              </div>

              <div className="sc">
                <div className="sl">Why GM Daily?</div>
                <p style={{fontSize:'11px',color:'#52525b',marginBottom:'10px',lineHeight:1.6}}>Daily on-chain activity = better airdrop eligibility. Snapshots reward consistent wallets.</p>
                <Link href="/airdrops" style={{display:'block',textAlign:'center',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.2)',color:'#818cf8',padding:'9px',borderRadius:'9px',textDecoration:'none',fontSize:'11px',fontWeight:800}}>Browse Airdrops →</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="aw">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
              <div style={{fontSize:'15px',fontWeight:800,color:'#e4e4e7'}}>Transaction History</div>
              <div style={{fontSize:'11px',color:'#3f3f46',background:'#0d1117',border:'1px solid #1a1f2e',padding:'4px 12px',borderRadius:'99px'}}>{myActivity.length} txs</div>
            </div>
            {!isConnected ? <div className="empty">Connect your wallet to see activity</div>
            : myActivity.length===0 ? (
              <div className="empty">
                <p style={{marginBottom:'16px'}}>No activity yet — go say GM!</p>
                <button style={{background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.2)',color:'#818cf8',padding:'10px 24px',borderRadius:'10px',fontSize:'13px',fontWeight:700,cursor:'pointer',fontFamily:'inherit'}} onClick={()=>setTab('gm')}>Say GM Now →</button>
              </div>
            ) : (
              <div style={{background:'#0d1117',border:'1px solid #1a1f2e',borderRadius:'14px',padding:'8px 20px'}}>
                {myActivity.map((a,i)=>(
                  <div key={i} className="ai">
                    <div className="ad"/>
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
