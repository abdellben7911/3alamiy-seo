'use client';

import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWalletClient } from 'wagmi';
import { parseEther, encodeFunctionData } from 'viem';
import Link from 'next/link';

const MAINNET_CHAINS = [
  { id: 'base', name: 'Base', icon: 'https://assets.coingecko.com/asset_platforms/images/131/small/base-network.png', hot: true, isNew: true, color: '#0052ff' },
  { id: 'eth', name: 'Ethereum', icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png', hot: true, isNew: false, color: '#627eea' },
  { id: 'arb', name: 'Arbitrum', icon: 'https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg', hot: true, isNew: false, color: '#12aaff' },
  { id: 'op', name: 'Optimism', icon: 'https://assets.coingecko.com/coins/images/25244/small/Optimism.png', hot: false, isNew: false, color: '#ff0420' },
  { id: 'unichain', name: 'Unichain', icon: 'https://assets.coingecko.com/asset_platforms/images/264/small/unichain.png', hot: true, isNew: true, color: '#ff007a' },
  { id: 'abstract', name: 'Abstract', icon: 'https://assets.coingecko.com/asset_platforms/images/261/small/abstract.png', hot: true, isNew: true, color: '#00ff88' },
  { id: 'zksync', name: 'ZKSync', icon: 'https://assets.coingecko.com/coins/images/38043/small/ZKTokenBlack.png', hot: true, isNew: false, color: '#4e529a' },
  { id: 'scroll', name: 'Scroll', icon: 'https://assets.coingecko.com/coins/images/32437/small/scroll.png', hot: false, isNew: false, color: '#f5a623' },
  { id: 'polygon', name: 'Polygon', icon: 'https://assets.coingecko.com/coins/images/4713/small/polygon.png', hot: false, isNew: false, color: '#8247e5' },
  { id: 'linea', name: 'Linea', icon: 'https://assets.coingecko.com/asset_platforms/images/135/small/linea.png', hot: false, isNew: false, color: '#61dfff' },
  { id: 'avalanche', name: 'Avalanche', icon: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png', hot: false, isNew: false, color: '#e84142' },
  { id: 'bsc', name: 'BNB Chain', icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png', hot: false, isNew: false, color: '#f3ba2f' },
];

const TESTNET_CHAINS = [
  { id: 'monad', name: 'Monad', icon: 'https://assets.coingecko.com/coins/images/36986/small/monad.png', hot: true, isNew: true, color: '#836ef9' },
  { id: 'abstract-test', name: 'Abstract Testnet', icon: 'https://assets.coingecko.com/asset_platforms/images/261/small/abstract.png', hot: true, isNew: true, color: '#00ff88' },
  { id: 'unichain-sep', name: 'Unichain Testnet', icon: 'https://assets.coingecko.com/asset_platforms/images/264/small/unichain.png', hot: true, isNew: false, color: '#ff007a' },
  { id: 'base-sep', name: 'Base Sepolia', icon: 'https://assets.coingecko.com/asset_platforms/images/131/small/base-network.png', hot: false, isNew: false, color: '#0052ff' },
  { id: 'scroll-sep', name: 'Scroll Sepolia', icon: 'https://assets.coingecko.com/coins/images/32437/small/scroll.png', hot: false, isNew: false, color: '#f5a623' },
  { id: 'op-sep', name: 'OP Sepolia', icon: 'https://assets.coingecko.com/coins/images/25244/small/Optimism.png', hot: false, isNew: false, color: '#ff0420' },
  { id: 'arb-sep', name: 'Arb Sepolia', icon: 'https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg', hot: false, isNew: false, color: '#12aaff' },
  { id: 'eth-sep', name: 'Eth Sepolia', icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png', hot: false, isNew: false, color: '#627eea' },
];

type Action = 'gm' | 'nft' | 'counter' | 'token';
type TxState = 'idle' | 'loading' | 'done' | 'error';
type GMRecord = { chain: string; action: string; tx: string; time: string; date: string };

function useCountdown() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const calcNext = () => {
      const now = new Date();
      const next = new Date();
      next.setUTCHours(24, 0, 0, 0);
      return Math.floor((next.getTime() - now.getTime()) / 1000);
    };
    setSeconds(calcNext());
    const interval = setInterval(() => setSeconds(s => s <= 0 ? calcNext() : s - 1), 1000);
    return () => clearInterval(interval);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function GMStation() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const countdown = useCountdown();
  const [txState, setTxState] = useState<Record<string, TxState>>({});
  const [liveActivity, setLiveActivity] = useState([
    { addr: '0x5794...08d2', action: 'Said GM', chain: 'Base', time: '3s ago' },
    { addr: '0x0047...546b', action: 'Deployed NFT', chain: 'Unichain', time: '8s ago' },
    { addr: '0x2330...f8ba', action: 'Said GM', chain: 'Arbitrum', time: '15s ago' },
    { addr: '0x9de9...dd56', action: 'Deployed Counter', chain: 'Abstract', time: '22s ago' },
    { addr: '0xb6de...dfb2', action: 'Said GN', chain: 'Optimism', time: '31s ago' },
  ]);
  const [myActivity, setMyActivity] = useState<GMRecord[]>([]);
  const [streak, setStreak] = useState(0);
  const [totalGM, setTotalGM] = useState(0);
  const [favs, setFavs] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all' | 'hot' | 'new' | 'fav'>('all');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'gm' | 'activity'>('gm');
  const [network, setNetwork] = useState<'mainnet' | 'testnet'>('mainnet');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !isConnected || !address) return;
    try {
      setTotalGM(parseInt(localStorage.getItem(`gm_count_${address}`) || '0'));
      setStreak(parseInt(localStorage.getItem(`gm_streak_${address}`) || '1'));
      setFavs(JSON.parse(localStorage.getItem(`gm_favs_${address}`) || '[]'));
      setMyActivity(JSON.parse(localStorage.getItem(`gm_activity_${address}`) || '[]'));
    } catch {}
  }, [isConnected, address, mounted]);

  useEffect(() => {
    const all = [...MAINNET_CHAINS, ...TESTNET_CHAINS];
    const actions = ['Said GM', 'Deployed NFT', 'Deployed Counter', 'Deployed Token', 'Said GN'];
    const interval = setInterval(() => {
      const c = all[Math.floor(Math.random() * all.length)];
      const addr = '0x' + Math.random().toString(16).slice(2, 6) + '...' + Math.random().toString(16).slice(2, 6);
      setLiveActivity(prev => [{ addr, action: actions[Math.floor(Math.random() * actions.length)], chain: c.name, time: 'just now' }, ...prev.slice(0, 4)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleFav = (id: string) => {
    const next = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
    setFavs(next);
    if (address) localStorage.setItem(`gm_favs_${address}`, JSON.stringify(next));
  };

  const doAction = async (chain: typeof MAINNET_CHAINS[0], action: Action) => {
    const key = `${chain.id}_${action}`;
    if (!isConnected || !walletClient || txState[key] === 'done') return;
    setTxState(prev => ({ ...prev, [key]: 'loading' }));
    try {
      let data: `0x${string}` = '0x474d';
      if (action === 'gm') data = '0x474d';
      else if (action === 'nft') data = '0x4e4654';
      else if (action === 'counter') data = '0x434e54';
      else if (action === 'token') data = '0x544b4e';

      const hash = await walletClient.sendTransaction({ to: address!, value: parseEther('0'), data });
      setTxState(prev => ({ ...prev, [key]: 'done' }));

      const actionLabels: Record<Action, string> = { gm: 'Said GM', nft: 'Deployed NFT', counter: 'Deployed Counter', token: 'Deployed Token' };
      const record: GMRecord = { chain: chain.name, action: actionLabels[action], tx: hash, time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString() };
      const newActivity = [record, ...myActivity].slice(0, 50);
      setMyActivity(newActivity);

      if (action === 'gm') {
        const n = totalGM + 1;
        setTotalGM(n);
        if (address) localStorage.setItem(`gm_count_${address}`, String(n));
      }
      if (address) localStorage.setItem(`gm_activity_${address}`, JSON.stringify(newActivity));

      const shortAddr = address?.slice(0, 6) + '...' + address?.slice(-4);
      setLiveActivity(prev => [{ addr: shortAddr, action: actionLabels[action], chain: chain.name, time: 'just now' }, ...prev.slice(0, 4)]);
    } catch {
      setTxState(prev => ({ ...prev, [key]: 'error' }));
      setTimeout(() => setTxState(prev => { const n = { ...prev }; delete n[key]; return n; }), 3000);
    }
  };

  const doAll = async (chain: typeof MAINNET_CHAINS[0]) => {
    for (const action of ['gm', 'nft', 'counter', 'token'] as Action[]) {
      await doAction(chain, action);
      await new Promise(r => setTimeout(r, 500));
    }
  };

  const chains = network === 'mainnet' ? MAINNET_CHAINS : TESTNET_CHAINS;
  const filtered = chains
    .filter(c => filter === 'hot' ? c.hot : filter === 'new' ? c.isNew : filter === 'fav' ? favs.includes(c.id) : true)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const getBtnState = (chainId: string, action: Action): TxState => txState[`${chainId}_${action}`] || 'idle';

  if (!mounted) return null;

  return (
    <div className="gm-root">
      <div className="gm-hero">
        <h1>Say GM & Deploy Contracts <span>in one-click!</span></h1>
        <p>Build your on-chain presence daily across every EVM chain — farm potential airdrops</p>
        <div className="connect-row"><ConnectButton /></div>
      </div>

      <div className="inner">
        {/* Countdown banner */}
        <div className="countdown-banner">
          <div className="countdown-left">
            <div className="countdown-dot" />
            <div>
              <div className="countdown-title">Daily Tasks Reset</div>
              <div className="countdown-sub">All completed actions reset in</div>
            </div>
          </div>
          <div className="countdown-timer">{countdown}</div>
        </div>

        {/* Tabs */}
        <div className="tabs-wrap">
          <button className={`tab-btn ${tab === 'gm' ? 'active' : ''}`} onClick={() => setTab('gm')}>☀️ Say GM</button>
          <button className={`tab-btn ${tab === 'activity' ? 'active' : ''}`} onClick={() => setTab('activity')}>📋 My Activity</button>
        </div>

        {tab === 'gm' ? (
          <>
            <div className="top-bar">
              <div className="net-group">
                <button className={`net-btn ${network === 'mainnet' ? 'active' : ''}`} onClick={() => setNetwork('mainnet')}>🌐 Mainnet</button>
                <button className={`net-btn ${network === 'testnet' ? 'active' : ''}`} onClick={() => setNetwork('testnet')}>⚗️ Testnet</button>
              </div>
              <div className="bar-sep" />
              {(['all', 'new', 'hot', 'fav'] as const).map(f => (
                <button key={f} className={`f-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                  {f === 'all' ? 'All' : f === 'new' ? '✨ New' : f === 'hot' ? '🔥 Hot' : '⭐ Favourites'}
                </button>
              ))}
              <input className="search-box" placeholder="Search networks..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>

            <div className="layout">
              <div className="chains-grid">
                {filtered.map(chain => (
                  <div key={chain.id} className="chain-card">
                    {/* Badges */}
                    <div className="card-badges">
                      {chain.isNew && <span className="card-badge new">✨ New</span>}
                      {chain.hot && <span className="card-badge hot">🔥 Hot</span>}
                    </div>
                    {/* Fav */}
                    <button className={`fav-btn ${favs.includes(chain.id) ? 'active' : ''}`} onClick={() => toggleFav(chain.id)}>
                      {favs.includes(chain.id) ? '♥' : '♡'}
                    </button>
                    {/* Logo */}
                    <div className="chain-logo-wrap" style={{ background: chain.color + '22' }}>
                      <img src={chain.icon} alt={chain.name} className="chain-logo"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                    <div className="chain-name">{chain.name}</div>
                    {/* Action tags */}
                    <div className="action-tags">
                      {(['gm', 'nft', 'counter', 'token'] as Action[]).map(a => (
                        <div key={a} className={`action-tag ${getBtnState(chain.id, a) === 'done' ? 'done' : ''}`}>
                          {a === 'gm' ? 'GM' : a === 'nft' ? 'Deploy NFT' : a === 'counter' ? 'Deploy Counter' : 'Deploy Token'}
                          {getBtnState(chain.id, a) === 'done' && <span className="done-tick">✓</span>}
                        </div>
                      ))}
                    </div>
                    {/* Action buttons */}
                    <div className="action-btns">
                      <button className={`action-main-btn ${getBtnState(chain.id, 'gm') === 'loading' ? 'loading' : getBtnState(chain.id, 'gm') === 'done' ? 'done' : ''}`}
                        onClick={() => doAll(chain)} disabled={!isConnected}>
                        {!isConnected ? '🔒 Connect' : '⚡ All'}
                      </button>
                      <button className={`action-main-btn secondary ${getBtnState(chain.id, 'gm') === 'done' ? 'done' : ''}`}
                        onClick={() => doAction(chain, 'gm')} disabled={!isConnected || getBtnState(chain.id, 'gm') === 'done'}>
                        {getBtnState(chain.id, 'gm') === 'loading' ? '⏳' : getBtnState(chain.id, 'gm') === 'done' ? '✅ GM' : '☀️ GM'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar">
                {/* Streak */}
                <div className="side-card streak-card">
                  <div className="streak-header">
                    <div>
                      <div className="side-title">GM Streak</div>
                      <div className="streak-val">{streak} <span>days</span></div>
                      <div className="streak-sub">Keep your streak alive!</div>
                    </div>
                    <div className="streak-icon">🔥</div>
                  </div>
                </div>

                {/* Live Activity */}
                <div className="side-card">
                  <div className="side-title"><span className="live-dot" /> Live Activity</div>
                  {liveActivity.map((a, i) => (
                    <div key={i} className="act-item">
                      <div className="act-icon">⚡</div>
                      <div className="act-body">
                        <div className="act-addr">{a.addr}</div>
                        <div className="act-info">{a.action} on <b style={{ color: '#818cf8' }}>{a.chain}</b></div>
                      </div>
                      <div className="act-time">{a.time}</div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="side-card">
                  <div className="side-title">📊 My Stats</div>
                  {isConnected ? (
                    <>
                      <div className="stats-grid">
                        <div className="stat-box"><div className="stat-val">{totalGM}</div><div className="stat-lbl">GMs Sent</div></div>
                        <div className="stat-box"><div className="stat-val">{myActivity.length}</div><div className="stat-lbl">Total Txs</div></div>
                      </div>
                      <div style={{ fontSize: '11px', color: '#27272a', textAlign: 'center', fontFamily: 'monospace' }}>{address?.slice(0, 8)}...{address?.slice(-6)}</div>
                    </>
                  ) : (
                    <div className="no-wallet">Connect wallet to track stats 🔒</div>
                  )}
                </div>

                {/* 3alamiy */}
                <div className="side-card" style={{ borderColor: 'rgba(99,102,241,0.2)' }}>
                  <div className="side-title">🪂 3alamiy Web3</div>
                  <p style={{ fontSize: '12px', color: '#3f3f46', marginBottom: '12px', lineHeight: 1.7 }}>Track crypto airdrops with step-by-step guides. Daily GM = airdrop farming!</p>
                  <Link href="/airdrops" style={{ display: 'block', textAlign: 'center', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: '800' }}>
                    Browse Airdrops →
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="activity-page">
            <div className="side-title" style={{ marginBottom: '20px', fontSize: '13px' }}>📋 My Activity</div>
            {!isConnected ? (
              <div className="empty-state"><div className="empty-icon">🔒</div><p>Connect your wallet to see your activity</p></div>
            ) : myActivity.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">☀️</div>
                <p>No actions yet — go say GM!</p>
                <button className="go-gm-btn" onClick={() => setTab('gm')}>Say GM Now →</button>
              </div>
            ) : (
              myActivity.map((a, i) => (
                <div key={i} className="my-act-item">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>⚡</div>
                  <div style={{ flex: 1 }}>
                    <div className="my-act-chain">{a.action} on {a.chain}</div>
                    <div className="my-act-tx">{a.tx.slice(0, 18)}...{a.tx.slice(-8)}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ color: '#52525b', fontSize: '12px' }}>{a.time}</div>
                    <div style={{ color: '#27272a', fontSize: '11px' }}>{a.date}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function GMPage() {
  return (
    <>
      <style>{`
        .gm-root { min-height:100vh; background:#060910; color:#fff; font-family:system-ui,-apple-system,sans-serif; padding-bottom:80px; }
        .gm-hero { text-align:center; padding:40px 24px 24px; }
        .gm-hero h1 { font-size:36px; font-weight:900; letter-spacing:-0.02em; margin:0 0 8px; }
        .gm-hero h1 span { background:linear-gradient(135deg,#6366f1,#818cf8); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .gm-hero p { color:#52525b; font-size:14px; margin:0 0 20px; }
        .connect-row { display:flex; justify-content:center; margin-bottom:0; }
        .inner { max-width:1200px; margin:0 auto; padding:0 24px; }
        .countdown-banner { display:flex; align-items:center; justify-content:space-between; background:#0d1117; border:1px solid #1a1f2e; border-radius:14px; padding:16px 20px; margin:24px 0 20px; }
        .countdown-left { display:flex; align-items:center; gap:12px; }
        .countdown-dot { width:10px; height:10px; background:#10b981; border-radius:50%; animation:pulse 1.5s infinite; flex-shrink:0; }
        .countdown-title { font-size:14px; font-weight:800; color:#e4e4e7; }
        .countdown-sub { font-size:11px; color:#52525b; margin-top:2px; }
        .countdown-timer { font-size:22px; font-weight:900; color:#6366f1; font-family:monospace; background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.2); padding:8px 16px; border-radius:10px; }
        .tabs-wrap { display:flex; gap:6px; margin-bottom:20px; background:#0d1117; border:1px solid #1a1f2e; border-radius:12px; padding:4px; width:fit-content; }
        .tab-btn { padding:8px 20px; border-radius:9px; font-size:13px; font-weight:700; cursor:pointer; border:none; background:transparent; color:#52525b; transition:all 0.2s; font-family:inherit; }
        .tab-btn.active { background:linear-gradient(135deg,#6366f1,#4f46e5); color:#fff; box-shadow:0 4px 12px rgba(99,102,241,0.3); }
        .top-bar { display:flex; gap:8px; align-items:center; margin-bottom:16px; flex-wrap:wrap; }
        .net-group { display:flex; background:#0d1117; border:1px solid #1a1f2e; border-radius:99px; padding:3px; gap:2px; }
        .net-btn { background:transparent; border:none; color:#52525b; padding:6px 14px; border-radius:99px; font-size:12px; font-weight:800; cursor:pointer; transition:all 0.2s; font-family:inherit; white-space:nowrap; }
        .net-btn.active { background:linear-gradient(135deg,#6366f1,#4f46e5); color:#fff; }
        .bar-sep { width:1px; height:24px; background:#1a1f2e; margin:0 2px; }
        .f-btn { background:transparent; border:1px solid #1a1f2e; color:#52525b; padding:6px 14px; border-radius:99px; font-size:12px; font-weight:700; cursor:pointer; transition:all 0.2s; font-family:inherit; }
        .f-btn.active { background:rgba(99,102,241,0.15); border-color:rgba(99,102,241,0.4); color:#818cf8; }
        .f-btn:hover:not(.active) { border-color:#2a2f3e; color:#a1a1aa; }
        .search-box { margin-left:auto; background:#0d1117; border:1px solid #1a1f2e; color:#fff; padding:7px 14px; border-radius:10px; font-size:12px; width:180px; outline:none; font-family:inherit; }
        .search-box::placeholder { color:#3f3f46; }
        .layout { display:grid; grid-template-columns:1fr 280px; gap:16px; }
        .chains-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
        .chain-card { background:#0d1117; border:1px solid #1a1f2e; border-radius:16px; padding:16px; transition:all 0.2s; position:relative; }
        .chain-card:hover { border-color:rgba(99,102,241,0.3); transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,0.3); }
        .card-badges { display:flex; gap:5px; margin-bottom:10px; min-height:20px; }
        .card-badge { font-size:9px; font-weight:800; padding:2px 7px; border-radius:99px; }
        .card-badge.new { background:rgba(99,102,241,0.15); color:#818cf8; border:1px solid rgba(99,102,241,0.2); }
        .card-badge.hot { background:rgba(244,63,94,0.15); color:#f43f5e; border:1px solid rgba(244,63,94,0.2); }
        .fav-btn { position:absolute; top:14px; right:14px; background:none; border:none; cursor:pointer; color:#3f3f46; font-size:16px; padding:0; transition:color 0.2s; line-height:1; }
        .fav-btn.active { color:#f43f5e; }
        .chain-logo-wrap { width:56px; height:56px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 10px; }
        .chain-logo { width:40px; height:40px; object-fit:contain; }
        .chain-name { font-size:14px; font-weight:800; color:#e4e4e7; text-align:center; margin-bottom:12px; }
        .action-tags { display:flex; gap:4px; flex-wrap:wrap; margin-bottom:10px; justify-content:center; }
        .action-tag { background:#141b2d; border:1px solid #1e2a3a; color:#3f4f6e; padding:3px 8px; border-radius:6px; font-size:10px; font-weight:700; display:flex; align-items:center; gap:3px; }
        .action-tag.done { border-color:rgba(16,185,129,0.2); color:#10b981; background:rgba(16,185,129,0.05); }
        .done-tick { font-size:8px; }
        .action-btns { display:flex; gap:6px; }
        .action-main-btn { flex:1; border:none; padding:9px 6px; border-radius:9px; font-size:12px; font-weight:800; cursor:pointer; transition:all 0.18s; font-family:inherit; display:flex; align-items:center; justify-content:center; gap:4px; }
        .action-main-btn:not(.secondary) { background:linear-gradient(135deg,#6366f1,#4f46e5); color:#fff; }
        .action-main-btn.secondary { background:#141b2d; border:1px solid #1e2a3a; color:#818cf8; }
        .action-main-btn.done { background:rgba(16,185,129,0.1); color:#10b981; border:1px solid rgba(16,185,129,0.2); cursor:default; }
        .action-main-btn.loading { background:#141b2d; color:#3f4f6e; cursor:not-allowed; }
        .action-main-btn:disabled { cursor:not-allowed; opacity:0.6; }
        .sidebar { display:flex; flex-direction:column; gap:12px; }
        .side-card { background:#0d1117; border:1px solid #1a1f2e; border-radius:14px; padding:16px; }
        .streak-card { background:linear-gradient(135deg,#1a0a2e,#0d1117); border-color:rgba(99,102,241,0.2); }
        .streak-header { display:flex; align-items:center; justify-content:space-between; }
        .streak-val { font-size:28px; font-weight:900; color:#818cf8; margin:6px 0 2px; }
        .streak-val span { font-size:14px; color:#52525b; }
        .streak-sub { font-size:11px; color:#52525b; }
        .streak-icon { font-size:32px; }
        .side-title { font-size:11px; font-weight:800; color:#52525b; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:12px; display:flex; align-items:center; gap:7px; }
        .live-dot { width:6px; height:6px; background:#10b981; border-radius:50%; animation:pulse 1.5s infinite; flex-shrink:0; }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.2} }
        .act-item { display:flex; align-items:center; gap:8px; padding:6px 0; border-bottom:1px solid #0f1520; }
        .act-item:last-child { border-bottom:none; }
        .act-icon { width:26px; height:26px; border-radius:7px; background:rgba(99,102,241,0.1); display:flex; align-items:center; justify-content:center; font-size:12px; flex-shrink:0; }
        .act-body { flex:1; min-width:0; }
        .act-addr { font-size:10px; color:#818cf8; font-family:monospace; font-weight:700; }
        .act-info { font-size:10px; color:#3f3f46; margin-top:1px; }
        .act-time { font-size:9px; color:#27272a; white-space:nowrap; }
        .stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:10px; }
        .stat-box { background:#060910; border:1px solid #1a1f2e; border-radius:8px; padding:10px; text-align:center; }
        .stat-val { font-size:20px; font-weight:900; color:#818cf8; }
        .stat-lbl { font-size:9px; color:#3f3f46; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-top:2px; }
        .no-wallet { text-align:center; padding:12px; color:#27272a; font-size:11px; }
        .activity-page { background:#0d1117; border:1px solid #1a1f2e; border-radius:16px; padding:24px; }
        .my-act-item { display:flex; align-items:center; gap:12px; padding:12px 0; border-bottom:1px solid #0f1520; }
        .my-act-item:last-child { border-bottom:none; }
        .my-act-chain { font-size:13px; font-weight:800; color:#e4e4e7; margin-bottom:3px; }
        .my-act-tx { font-size:10px; color:#3f3f46; font-family:monospace; }
        .empty-state { text-align:center; padding:60px 24px; }
        .empty-icon { font-size:48px; margin-bottom:16px; }
        .empty-state p { font-size:14px; color:#3f3f46; margin-bottom:20px; }
        .go-gm-btn { background:linear-gradient(135deg,#6366f1,#4f46e5); color:#fff; border:none; padding:10px 24px; border-radius:10px; font-size:13px; font-weight:700; cursor:pointer; font-family:inherit; }
        @media (max-width:1024px) { .chains-grid { grid-template-columns:repeat(3,1fr); } .layout { grid-template-columns:1fr; } .sidebar { display:none; } }
        @media (max-width:700px) { .chains-grid { grid-template-columns:repeat(2,1fr); } .gm-hero h1 { font-size:26px; } }
        @media (max-width:480px) { .chains-grid { grid-template-columns:1fr; } }
      `}</style>
      <GMStation />
    </>
  );
}
