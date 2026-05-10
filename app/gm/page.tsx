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
  { id: 'zksync', name: 'ZKSync', icon: 'https://cryptologos.cc/logos/zksync-zk-logo.svg', hot: true, color: '#4e529a', chainId: 324 },
  { id: 'linea', name: 'Linea', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27657.png', hot: false, chainId: 59144, color: '#61dfff' },
];

const MOCK_ACTIVITY = [
  { addr: '0x5794...08d2', action: 'Said GM', chain: 'Base', time: '3s ago' },
  { addr: '0x0047...546b', action: 'Said GN', chain: 'Ethereum', time: '8s ago' },
  { addr: '0x2330...f8ba', action: 'Said GM', chain: 'Arbitrum', time: '15s ago' },
  { addr: '0x9de9...dd56', action: 'Said GM', chain: 'ZKSync', time: '22s ago' },
  { addr: '0xb6de...dfb2', action: 'Said GN', chain: 'Optimism', time: '31s ago' },
];

export default function GMPage() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [gmDone, setGmDone] = useState<Record<string, 'loading' | 'done' | 'error'>>({});
  const [activity, setActivity] = useState(MOCK_ACTIVITY);
  const [totalGM, setTotalGM] = useState(0);
  const [streak, setStreak] = useState(0);
  const [filter, setFilter] = useState<'all' | 'hot' | 'fav'>('all');
  const [favs, setFavs] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'mainnet' | 'testnet'>('mainnet');

  useEffect(() => {
    if (isConnected && address) {
      const count = localStorage.getItem(`gm_count_${address}`);
      setTotalGM(count ? parseInt(count) : 0);
      const s = localStorage.getItem(`gm_streak_${address}`);
      setStreak(s ? parseInt(s) : 1);
      const f = localStorage.getItem(`gm_favs_${address}`);
      setFavs(f ? JSON.parse(f) : []);
    }
  }, [isConnected, address]);

  useEffect(() => {
    const interval = setInterval(() => {
      const c = CHAINS[Math.floor(Math.random() * CHAINS.length)];
      const addr = '0x' + Math.random().toString(16).slice(2, 6) + '...' + Math.random().toString(16).slice(2, 6);
      setActivity(prev => [{ addr, action: Math.random() > 0.3 ? 'Said GM' : 'Said GN', chain: c.name, time: 'just now' }, ...prev.slice(0, 4)]);
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
      await walletClient.sendTransaction({
        to: address!,
        value: parseEther('0'),
        data: '0x474d' as `0x${string}`,
      });
      setGmDone(prev => ({ ...prev, [chain.id]: 'done' }));
      const newTotal = totalGM + 1;
      setTotalGM(newTotal);
      if (address) localStorage.setItem(`gm_count_${address}`, String(newTotal));
      const shortAddr = address ? address.slice(0, 6) + '...' + address.slice(-4) : '0x???';
      setActivity(prev => [{ addr: shortAddr, action: 'Said GM', chain: chain.name, time: 'just now' }, ...prev.slice(0, 4)]);
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
        .gm-root {
          min-height: 100vh;
          background: #0a0a0a;
          background-image: radial-gradient(ellipse 80% 50% at 10% 0%, rgba(0,180,80,0.08) 0%, transparent 60%),
                            radial-gradient(ellipse 60% 40% at 90% 10%, rgba(200,255,0,0.06) 0%, transparent 50%);
          color: #fff;
          font-family: system-ui, -apple-system, sans-serif;
          padding: 0 0 80px;
        }
        .gm-hero { text-align: center; padding: 48px 24px 32px; }
        .gm-hero h1 { font-size: 48px; font-weight: 900; letter-spacing: -0.03em; margin: 0 0 10px; }
        .gm-hero h1 span { color: #c8ff00; }
        .gm-hero p { color: #555; font-size: 15px; margin: 0 0 28px; }
        .connect-row { display: flex; justify-content: center; margin-bottom: 28px; }
        .tabs-wrap { display: flex; justify-content: center; gap: 8px; margin-bottom: 28px; }
        .tab-pill { background: #141414; border: 1px solid #222; color: #666; padding: 8px 20px; border-radius: 99px; font-size: 13px; font-weight: 800; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
        .tab-pill.active { background: #c8ff00; color: #000; border-color: #c8ff00; }
        .tab-pill:hover:not(.active) { border-color: #333; color: #aaa; }
        .inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .top-bar { display: flex; gap: 8px; align-items: center; margin-bottom: 20px; flex-wrap: wrap; }
        .net-btn { background: #141414; border: 1px solid #222; color: #666; padding: 7px 16px; border-radius: 99px; font-size: 12px; font-weight: 800; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 5px; }
        .net-btn.active { background: #c8ff00; color: #000; border-color: #c8ff00; }
        .filter-sep { width: 1px; height: 24px; background: #222; margin: 0 4px; }
        .f-btn { background: transparent; border: 1px solid #1e1e1e; color: #555; padding: 7px 14px; border-radius: 99px; font-size: 12px; font-weight: 800; cursor: pointer; transition: all 0.2s; }
        .f-btn.active { color: #c8ff00; border-color: #c8ff0066; }
        .f-btn:hover:not(.active) { color: #aaa; border-color: #333; }
        .search-box { margin-left: auto; background: #111; border: 1px solid #222; color: #fff; padding: 8px 16px; border-radius: 12px; font-size: 13px; width: 200px; outline: none; }
        .search-box::placeholder { color: #444; }
        .layout { display: grid; grid-template-columns: 1fr 300px; gap: 20px; }
        .chains-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .chain-card { background: #0f0f0f; border: 1px solid #1e1e1e; border-radius: 16px; padding: 18px; transition: all 0.2s; cursor: pointer; position: relative; overflow: hidden; }
        .chain-card::before { content: ''; position: absolute; inset: 0; opacity: 0; transition: opacity 0.2s; pointer-events: none; }
        .chain-card:hover { border-color: #333; transform: translateY(-2px); }
        .chain-card.hot { border-color: rgba(255,107,0,0.3); }
        .chain-card.hot::before { background: radial-gradient(ellipse at top, rgba(255,107,0,0.06) 0%, transparent 70%); opacity: 1; }
        .chain-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .chain-left { display: flex; align-items: center; gap: 10px; }
        .chain-logo { width: 38px; height: 38px; border-radius: 10px; object-fit: contain; background: #1a1a1a; padding: 4px; }
        .chain-logo-fallback { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
        .chain-name { font-size: 14px; font-weight: 800; color: #fff; }
        .chain-right { display: flex; align-items: center; gap: 6px; }
        .hot-flame { font-size: 16px; }
        .fav-btn { background: none; border: none; cursor: pointer; color: #333; font-size: 16px; padding: 0; transition: color 0.2s; }
        .fav-btn.active { color: #f59e0b; }
        .fav-btn:hover { color: #888; }
        .gm-gn-row { display: flex; gap: 6px; margin-bottom: 12px; }
        .badge { flex: 1; background: #1a1a1a; border: 1px solid #252525; color: #444; padding: 5px; border-radius: 8px; font-size: 11px; font-weight: 800; text-align: center; letter-spacing: 0.05em; }
        .say-btn { width: 100%; border: none; padding: 12px; border-radius: 12px; font-size: 13px; font-weight: 900; cursor: pointer; transition: all 0.18s; font-family: inherit; display: flex; align-items: center; justify-content: center; gap: 6px; }
        .say-btn.idle { background: #c8ff00; color: #000; }
        .say-btn.idle:hover { background: #d4ff33; box-shadow: 0 4px 20px rgba(200,255,0,0.25); }
        .say-btn.loading { background: #1a1a1a; color: #555; cursor: not-allowed; }
        .say-btn.done { background: #0c2200; color: #c8ff00; border: 1px solid #c8ff0033; cursor: default; }
        .say-btn.error { background: #220000; color: #ff4444; }
        .say-btn:disabled { cursor: not-allowed; opacity: 0.7; }
        .sidebar { display: flex; flex-direction: column; gap: 14px; }
        .side-card { background: #0f0f0f; border: 1px solid #1e1e1e; border-radius: 16px; padding: 18px; }
        .side-title { font-size: 12px; font-weight: 800; color: #888; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 14px; display: flex; align-items: center; gap: 7px; }
        .live-dot { width: 7px; height: 7px; background: #00ff88; border-radius: 50%; animation: pulse 1.5s infinite; flex-shrink: 0; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.8)} }
        .act-item { display: flex; align-items: center; gap: 8px; padding: 8px 0; border-bottom: 1px solid #141414; }
        .act-item:last-child { border-bottom: none; }
        .act-icon { width: 28px; height: 28px; border-radius: 8px; background: #1a1a1a; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
        .act-body { flex: 1; min-width: 0; }
        .act-addr { font-size: 11px; color: #c8ff00; font-family: monospace; font-weight: 700; }
        .act-info { font-size: 10px; color: #444; margin-top: 1px; }
        .act-time { font-size: 10px; color: #333; white-space: nowrap; }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
        .stat-box { background: #141414; border-radius: 10px; padding: 14px; text-align: center; }
        .stat-val { font-size: 24px; font-weight: 900; color: #c8ff00; line-height: 1; }
        .stat-lbl { font-size: 10px; color: #444; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; }
        .no-wallet { text-align: center; padding: 16px; color: #333; font-size: 12px; }
        .back-link { display: inline-flex; align-items: center; gap: 6px; color: #444; text-decoration: none; font-size: 13px; font-weight: 700; padding: 24px 24px 0; transition: color 0.2s; }
        .back-link:hover { color: #888; }
        @media (max-width: 1024px) { .chains-grid { grid-template-columns: repeat(3, 1fr); } .layout { grid-template-columns: 1fr; } .sidebar { display: none; } }
        @media (max-width: 700px) { .chains-grid { grid-template-columns: repeat(2, 1fr); } .gm-hero h1 { font-size: 32px; } }
        @media (max-width: 480px) { .chains-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="gm-root">
        <Link href="/" className="back-link">← Back to Airdrops</Link>

        <div className="gm-hero">
          <h1>Good Morning, <span>Blockchain</span> ☀️</h1>
          <p>Build your on-chain presence — say GM & GN daily on every chain</p>
          <div className="connect-row">
            <ConnectButton />
          </div>
        </div>

        <div className="tabs-wrap">
          {[
            { key: 'all', label: '☀️ Say GM' },
            { key: 'activity', label: '📊 My Activity' },
          ].map(t => (
            <button key={t.key} className={`tab-pill ${tab === t.key || (t.key === 'all') ? (t.key === 'all' ? 'active' : '') : ''}`}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="inner">
          <div className="top-bar">
            <button className={`net-btn ${tab === 'mainnet' ? 'active' : ''}`} onClick={() => setTab('mainnet')}>
              🌐 Mainnet
            </button>
            <div className="filter-sep" />
            {(['all', 'hot', 'fav'] as const).map(f => (
              <button key={f} className={`f-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : f === 'hot' ? '🔥 Hot' : '⭐ Favourites'}
              </button>
            ))}
            <input
              className="search-box"
              placeholder="Search chains..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
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
                        <img
                          src={chain.icon}
                          alt={chain.name}
                          className="chain-logo"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <div className="chain-name">{chain.name}</div>
                      </div>
                      <div className="chain-right">
                        {chain.hot && <span className="hot-flame">🔥</span>}
                        <button className={`fav-btn ${isFav ? 'active' : ''}`} onClick={() => toggleFav(chain.id)}>
                          {isFav ? '★' : '☆'}
                        </button>
                      </div>
                    </div>

                    <div className="gm-gn-row">
                      <div className="badge">GM</div>
                      <div className="badge">GN</div>
                    </div>

                    <button
                      className={`say-btn ${state === 'loading' ? 'loading' : state === 'done' ? 'done' : state === 'error' ? 'error' : 'idle'}`}
                      onClick={() => sayGM(chain)}
                      disabled={!isConnected || state === 'loading' || state === 'done'}
                    >
                      {state === 'loading' ? '⏳ Sending...' :
                       state === 'done' ? '✅ GM Sent!' :
                       state === 'error' ? '❌ Failed — Retry' :
                       !isConnected ? '🔒 Connect Wallet' :
                       '☀️ Say GM & GN'}
                    </button>
                  </div>
                );
              })}
              {filtered.length === 0 && (
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px', color: '#333' }}>
                  No chains found
                </div>
              )}
            </div>

            <div className="sidebar">
              <div className="side-card">
                <div className="side-title"><span className="live-dot" /> Live Activity</div>
                {activity.map((a, i) => (
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
                      <div className="stat-box">
                        <div className="stat-val">{totalGM}</div>
                        <div className="stat-lbl">GMs Sent</div>
                      </div>
                      <div className="stat-box">
                        <div className="stat-val">{streak}</div>
                        <div className="stat-lbl">Day Streak</div>
                      </div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#333', textAlign: 'center', fontFamily: 'monospace' }}>
                      {address?.slice(0, 8)}...{address?.slice(-6)}
                    </div>
                  </>
                ) : (
                  <div className="no-wallet">Connect wallet to track your GM streak 🔒</div>
                )}
              </div>

              <div className="side-card" style={{ borderColor: '#c8ff0020' }}>
                <div className="side-title">🪂 3alamiy Web3</div>
                <p style={{ fontSize: '12px', color: '#444', marginBottom: '12px', lineHeight: 1.7 }}>
                  Track crypto airdrops with step-by-step guides. Daily GM = airdrop farming!
                </p>
                <Link href="/airdrops" style={{ display: 'block', textAlign: 'center', background: '#141414', border: '1px solid #c8ff0033', color: '#c8ff00', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: '800', transition: 'all 0.2s' }}>
                  Browse Airdrops →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
