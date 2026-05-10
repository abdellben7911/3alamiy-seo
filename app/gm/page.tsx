'use client';

import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWalletClient } from 'wagmi';
import { parseEther } from 'viem';
import Link from 'next/link';

const CHAINS = [
  { id: 'base', name: 'Base', icon: 'https://raw.githubusercontent.com/base-org/brand-kit/001c0e9b40a67799ebe0418671ac4e02a0c683ce/logo/in-product/Base_Network_Logo.svg', hot: true, chainId: 8453, color: '#0052ff' },
  { id: 'eth', name: 'Ethereum', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg', hot: true, chainId: 1, color: '#627eea' },
  { id: 'arb', name: 'Arbitrum', icon: 'https://cryptologos.cc/logos/arbitrum-arb-logo.svg', hot: true, chainId: 42161, color: '#12aaff' },
  { id: 'op', name: 'Optimism', icon: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg', hot: true, chainId: 10, color: '#ff0420' },
  { id: 'polygon', name: 'Polygon', icon: 'https://cryptologos.cc/logos/polygon-matic-logo.svg', hot: false, chainId: 137, color: '#8247e5' },
  { id: 'bsc', name: 'BNB Chain', icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg', hot: false, chainId: 56, color: '#f3ba2f' },
  { id: 'zksync', name: 'ZKSync', icon: 'https://cryptologos.cc/logos/zksync-zk-logo.svg', hot: true, chainId: 324, color: '#4e529a' },
  { id: 'linea', name: 'Linea', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27657.png', hot: false, chainId: 59144, color: '#61dfff' },
  { id: 'abstract', name: 'Abstract', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/34770.png', hot: true, chainId: 2741, color: '#00ff88' },
  { id: 'unichain', name: 'Unichain', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32879.png', hot: true, chainId: 1301, color: '#ff007a' },
  { id: 'scroll', name: 'Scroll', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/26998.png', hot: false, chainId: 534352, color: '#f5a623' },
  { id: 'avalanche', name: 'Avalanche', icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg', hot: false, chainId: 43114, color: '#e84142' },
];

type GMRecord = { chain: string; tx: string; time: string; date: string };

export default function GMPage() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [gmDone, setGmDone] = useState<Record<string, 'loading' | 'done' | 'error'>>({});
  const [liveActivity, setLiveActivity] = useState([
    { addr: '0x5794...08d2', action: 'Said GM', chain: 'Base', time: '3s ago' },
    { addr: '0x0047...546b', action: 'Said GN', chain: 'Ethereum', time: '8s ago' },
    { addr: '0x2330...f8ba', action: 'Said GM', chain: 'Arbitrum', time: '15s ago' },
    { addr: '0x9de9...dd56', action: 'Said GM', chain: 'ZKSync', time: '22s ago' },
    { addr: '0xb6de...dfb2', action: 'Said GN', chain: 'Optimism', time: '31s ago' },
  ]);
  const [myActivity, setMyActivity] = useState<GMRecord[]>([]);
  const [totalGM, setTotalGM] = useState(0);
  const [streak, setStreak] = useState(0);
  const [filter, setFilter] = useState<'all' | 'hot' | 'fav'>('all');
  const [favs, setFavs] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'gm' | 'activity'>('gm');

  useEffect(() => {
    if (isConnected && address) {
      const count = localStorage.getItem(`gm_count_${address}`);
      setTotalGM(count ? parseInt(count) : 0);
      const s = localStorage.getItem(`gm_streak_${address}`);
      setStreak(s ? parseInt(s) : 1);
      const f = localStorage.getItem(`gm_favs_${address}`);
      setFavs(f ? JSON.parse(f) : []);
      const acts = localStorage.getItem(`gm_activity_${address}`);
      setMyActivity(acts ? JSON.parse(acts) : []);
    }
  }, [isConnected, address]);

  useEffect(() => {
    const interval = setInterval(() => {
      const c = CHAINS[Math.floor(Math.random() * CHAINS.length)];
      const addr = '0x' + Math.random().toString(16).slice(2, 6) + '...' + Math.random().toString(16).slice(2, 6);
      setLiveActivity(prev => [{ addr, action: Math.random() > 0.3 ? 'Said GM' : 'Said GN', chain: c.name, time: 'just now' }, ...prev.slice(0, 4)]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const toggleFav = (id: string) => {
    const next = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
    setFavs(next);
    if (address) localStorage.setItem(`gm_favs_${address}`, JSON.stringify(next));
  };

  const sayGM = async (chain: typeof CHAINS[0]) => {
    if (!isConnected || !walletClient || gmDone[chain.id] === 'done') return;
    setGmDone(prev => ({ ...prev, [chain.id]: 'loading' }));
    try {
      const hash = await walletClient.sendTransaction({
        to: address!,
        value: parseEther('0'),
        data: '0x474d' as `0x${string}`,
      });
      setGmDone(prev => ({ ...prev, [chain.id]: 'done' }));
      const newTotal = totalGM + 1;
      setTotalGM(newTotal);
      const newRecord: GMRecord = {
        chain: chain.name,
        tx: hash,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      };
      const newActivity = [newRecord, ...myActivity].slice(0, 50);
      setMyActivity(newActivity);
      if (address) {
        localStorage.setItem(`gm_count_${address}`, String(newTotal));
        localStorage.setItem(`gm_activity_${address}`, JSON.stringify(newActivity));
      }
      const shortAddr = address ? address.slice(0, 6) + '...' + address.slice(-4) : '0x???';
      setLiveActivity(prev => [{ addr: shortAddr, action: 'Said GM', chain: chain.name, time: 'just now' }, ...prev.slice(0, 4)]);
    } catch {
      setGmDone(prev => ({ ...prev, [chain.id]: 'error' }));
      setTimeout(() => setGmDone(prev => { const n = { ...prev }; delete n[chain.id]; return n; }), 3000);
    }
  };

  const filtered = CHAINS
    .filter(c => filter === 'hot' ? c.hot : filter === 'fav' ? favs.includes(c.id) : true)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <style>{`
        .gm-root { min-height: 100vh; background: #060910; color: #fff; font-family: system-ui,-apple-system,sans-serif; padding-bottom: 80px; }
        .gm-hero { text-align: center; padding: 48px 24px 32px; }
        .gm-hero h1 { font-size: 44px; font-weight: 900; letter-spacing: -0.03em; margin: 0 0 10px; }
        .gm-hero h1 span { background: linear-gradient(135deg, #6366f1, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .gm-hero p { color: #52525b; font-size: 15px; margin: 0 0 28px; }
        .connect-row { display: flex; justify-content: center; margin-bottom: 28px; }
        .tabs-wrap { display: flex; justify-content: center; gap: 6px; margin-bottom: 28px; background: #0d1117; border: 1px solid #1a1f2e; border-radius: 12px; padding: 4px; width: fit-content; margin-left: auto; margin-right: auto; }
        .tab-btn { padding: 8px 24px; border-radius: 9px; font-size: 13px; font-weight: 700; cursor: pointer; border: none; background: transparent; color: #52525b; transition: all 0.2s; font-family: inherit; }
        .tab-btn.active { background: linear-gradient(135deg, #6366f1, #4f46e5); color: #fff; box-shadow: 0 4px 12px rgba(99,102,241,0.3); }
        .inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .top-bar { display: flex; gap: 8px; align-items: center; margin-bottom: 20px; flex-wrap: wrap; }
        .f-btn { background: #0d1117; border: 1px solid #1a1f2e; color: #52525b; padding: 7px 16px; border-radius: 99px; font-size: 12px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .f-btn.active { background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.4); color: #818cf8; }
        .f-btn:hover:not(.active) { border-color: #2a2f3e; color: #a1a1aa; }
        .search-box { margin-left: auto; background: #0d1117; border: 1px solid #1a1f2e; color: #fff; padding: 8px 16px; border-radius: 10px; font-size: 13px; width: 200px; outline: none; font-family: inherit; }
        .search-box::placeholder { color: #3f3f46; }
        .search-box:focus { border-color: rgba(99,102,241,0.4); }
        .layout { display: grid; grid-template-columns: 1fr 300px; gap: 20px; }
        .chains-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .chain-card { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 18px; transition: all 0.2s; position: relative; overflow: hidden; }
        .chain-card:hover { border-color: rgba(99,102,241,0.3); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
        .chain-card.hot { border-color: rgba(244,63,94,0.2); }
        .chain-card.hot::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #f43f5e, #fb923c); }
        .chain-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .chain-left { display: flex; align-items: center; gap: 10px; }
        .chain-logo { width: 36px; height: 36px; border-radius: 10px; object-fit: contain; background: #141b2d; padding: 4px; }
        .chain-name { font-size: 14px; font-weight: 800; color: #e4e4e7; }
        .chain-right { display: flex; align-items: center; gap: 6px; }
        .fav-btn { background: none; border: none; cursor: pointer; color: #3f3f46; font-size: 15px; padding: 0; transition: color 0.2s; line-height: 1; }
        .fav-btn.active { color: #f59e0b; }
        .fav-btn:hover { color: #71717a; }
        .hot-dot { width: 6px; height: 6px; background: #f43f5e; border-radius: 50%; }
        .gm-gn-row { display: flex; gap: 6px; margin-bottom: 12px; }
        .badge-tag { flex: 1; background: #141b2d; border: 1px solid #1e2a3a; color: #3f4f6e; padding: 5px; border-radius: 8px; font-size: 11px; font-weight: 800; text-align: center; letter-spacing: 0.05em; }
        .say-btn { width: 100%; border: none; padding: 11px; border-radius: 11px; font-size: 13px; font-weight: 800; cursor: pointer; transition: all 0.18s; font-family: inherit; display: flex; align-items: center; justify-content: center; gap: 6px; }
        .say-btn.idle { background: linear-gradient(135deg, #6366f1, #4f46e5); color: #fff; box-shadow: 0 4px 12px rgba(99,102,241,0.25); }
        .say-btn.idle:hover { background: linear-gradient(135deg, #818cf8, #6366f1); box-shadow: 0 6px 20px rgba(99,102,241,0.4); }
        .say-btn.loading { background: #141b2d; color: #3f4f6e; cursor: not-allowed; }
        .say-btn.done { background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); cursor: default; }
        .say-btn.error { background: rgba(244,63,94,0.1); color: #f43f5e; border: 1px solid rgba(244,63,94,0.2); }
        .say-btn:disabled { cursor: not-allowed; }
        .sidebar { display: flex; flex-direction: column; gap: 14px; }
        .side-card { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 18px; }
        .side-title { font-size: 11px; font-weight: 800; color: #52525b; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 14px; display: flex; align-items: center; gap: 7px; }
        .live-dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; animation: pulse 1.5s infinite; flex-shrink: 0; }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.2} }
        .act-item { display: flex; align-items: center; gap: 8px; padding: 8px 0; border-bottom: 1px solid #0f1520; }
        .act-item:last-child { border-bottom: none; }
        .act-icon { width: 28px; height: 28px; border-radius: 8px; background: rgba(99,102,241,0.1); display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
        .act-body { flex: 1; min-width: 0; }
        .act-addr { font-size: 11px; color: #818cf8; font-family: monospace; font-weight: 700; }
        .act-info { font-size: 10px; color: #3f3f46; margin-top: 1px; }
        .act-time { font-size: 10px; color: #27272a; white-space: nowrap; }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
        .stat-box { background: #060910; border: 1px solid #1a1f2e; border-radius: 10px; padding: 14px; text-align: center; }
        .stat-val { font-size: 24px; font-weight: 900; color: #818cf8; line-height: 1; }
        .stat-lbl { font-size: 10px; color: #3f3f46; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; }
        .no-wallet { text-align: center; padding: 16px; color: #27272a; font-size: 12px; }
        .activity-page { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 24px; }
        .my-act-item { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #0f1520; }
        .my-act-item:last-child { border-bottom: none; }
        .my-act-chain { font-size: 14px; font-weight: 800; color: #e4e4e7; }
        .my-act-tx { font-size: 11px; color: #3f3f46; font-family: monospace; margin-top: 2px; }
        .my-act-time { margin-left: auto; font-size: 11px; color: #3f3f46; text-align: right; }
        .empty-state { text-align: center; padding: 60px 24px; color: #27272a; }
        .empty-state .icon { font-size: 48px; margin-bottom: 16px; }
        .empty-state p { font-size: 14px; color: #3f3f46; }
        @media (max-width: 1024px) { .chains-grid { grid-template-columns: repeat(3,1fr); } .layout { grid-template-columns: 1fr; } .sidebar { display: none; } }
        @media (max-width: 700px) { .chains-grid { grid-template-columns: repeat(2,1fr); } .gm-hero h1 { font-size: 30px; } }
        @media (max-width: 480px) { .chains-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="gm-root">
        <div className="gm-hero">
          <h1>Good Morning, <span>Blockchain</span> ☀️</h1>
          <p>Say GM on-chain daily across every EVM chain — farm potential airdrops</p>
          <div className="connect-row">
            <ConnectButton />
          </div>
        </div>

        <div className="tabs-wrap">
          <button className={`tab-btn ${tab === 'gm' ? 'active' : ''}`} onClick={() => setTab('gm')}>☀️ Say GM</button>
          <button className={`tab-btn ${tab === 'activity' ? 'active' : ''}`} onClick={() => setTab('activity')}>📋 My Activity</button>
        </div>

        <div className="inner">
          {tab === 'gm' ? (
            <>
              <div className="top-bar">
                {(['all', 'hot', 'fav'] as const).map(f => (
                  <button key={f} className={`f-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                    {f === 'all' ? '⚡ All' : f === 'hot' ? '🔥 Hot' : '⭐ Favourites'}
                  </button>
                ))}
                <input className="search-box" placeholder="Search chains..." value={search} onChange={e => setSearch(e.target.value)} />
              </div>

              <div className="layout">
                <div className="chains-grid">
                  {filtered.map(chain => {
                    const state = gmDone[chain.id];
                    const isFav = favs.includes(chain.id);
                    return (
                      <div key={chain.id} className={`chain-card ${chain.hot ? 'hot' : ''}`}>
                        <div className="chain-header">
                          <div className="chain-left">
                            <img src={chain.icon} alt={chain.name} className="chain-logo" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
                            <div className="chain-name">{chain.name}</div>
                          </div>
                          <div className="chain-right">
                            {chain.hot && <div className="hot-dot" />}
                            <button className={`fav-btn ${isFav ? 'active' : ''}`} onClick={() => toggleFav(chain.id)}>{isFav ? '★' : '☆'}</button>
                          </div>
                        </div>
                        <div className="gm-gn-row">
                          <div className="badge-tag">GM</div>
                          <div className="badge-tag">GN</div>
                        </div>
                        <button
                          className={`say-btn ${state === 'loading' ? 'loading' : state === 'done' ? 'done' : state === 'error' ? 'error' : 'idle'}`}
                          onClick={() => sayGM(chain)}
                          disabled={!isConnected || state === 'loading' || state === 'done'}
                        >
                          {state === 'loading' ? '⏳ Sending...' : state === 'done' ? '✅ GM Sent!' : state === 'error' ? '❌ Failed — Retry' : !isConnected ? '🔒 Connect Wallet' : '☀️ Say GM & GN'}
                        </button>
                      </div>
                    );
                  })}
                  {filtered.length === 0 && (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px', color: '#27272a' }}>No chains found</div>
                  )}
                </div>

                <div className="sidebar">
                  <div className="side-card">
                    <div className="side-title"><span className="live-dot" /> Live Activity</div>
                    {liveActivity.map((a, i) => (
                      <div key={i} className="act-item">
                        <div className="act-icon">☀️</div>
                        <div className="act-body">
                          <div className="act-addr">{a.addr}</div>
                          <div className="act-info">{a.action} · {a.chain}</div>
                        </div>
                        <div className="act-time">{a.time}</div>
                      </div>
                    ))}
                  </div>

                  <div className="side-card">
                    <div className="side-title">📊 My Stats</div>
                    {isConnected ? (
                      <>
                        <div className="stats-grid">
                          <div className="stat-box"><div className="stat-val">{totalGM}</div><div className="stat-lbl">GMs Sent</div></div>
                          <div className="stat-box"><div className="stat-val">{streak}</div><div className="stat-lbl">Day Streak</div></div>
                        </div>
                        <div style={{ fontSize: '11px', color: '#27272a', textAlign: 'center', fontFamily: 'monospace' }}>{address?.slice(0,8)}...{address?.slice(-6)}</div>
                      </>
                    ) : (
                      <div className="no-wallet">Connect wallet to track your GM streak 🔒</div>
                    )}
                  </div>

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
              <div className="side-title" style={{ marginBottom: '20px' }}>📋 My GM Activity</div>
              {!isConnected ? (
                <div className="empty-state">
                  <div className="icon">🔒</div>
                  <p>Connect your wallet to see your GM history</p>
                </div>
              ) : myActivity.length === 0 ? (
                <div className="empty-state">
                  <div className="icon">☀️</div>
                  <p>No GMs sent yet — go say GM on some chains!</p>
                </div>
              ) : (
                myActivity.map((a, i) => (
                  <div key={i} className="my-act-item">
                    <div className="act-icon" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>☀️</div>
                    <div>
                      <div className="my-act-chain">GM on {a.chain}</div>
                      <div className="my-act-tx">{a.tx.slice(0, 20)}...{a.tx.slice(-8)}</div>
                    </div>
                    <div className="my-act-time">
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
    </>
  );
}
