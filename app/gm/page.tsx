'use client';

import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWalletClient } from 'wagmi';
import { parseEther } from 'viem';
import Link from 'next/link';

const CHAINS = [
  { id: 'base', name: 'Base', icon: '🔵', hot: true, chainId: 8453, color: '#0052ff', rpc: 'https://mainnet.base.org' },
  { id: 'eth', name: 'Ethereum', icon: '⟠', hot: true, chainId: 1, color: '#627eea', rpc: 'https://eth.llamarpc.com' },
  { id: 'arb', name: 'Arbitrum', icon: '🔷', hot: true, chainId: 42161, color: '#12aaff', rpc: 'https://arb1.arbitrum.io/rpc' },
  { id: 'op', name: 'Optimism', icon: '🔴', hot: false, chainId: 10, color: '#ff0420', rpc: 'https://mainnet.optimism.io' },
  { id: 'polygon', name: 'Polygon', icon: '🟣', hot: false, chainId: 137, color: '#8247e5', rpc: 'https://polygon-rpc.com' },
  { id: 'bsc', name: 'BNB Chain', icon: '🟡', hot: false, chainId: 56, color: '#f3ba2f', rpc: 'https://bsc-dataseed.binance.org' },
  { id: 'zksync', name: 'ZKSync', icon: '⚡', hot: true, color: '#4e529a', chainId: 324, rpc: 'https://mainnet.era.zksync.io' },
];

const MOCK_ACTIVITY = [
  { addr: '0x5794...08d2', action: 'Said GM', chain: 'Base', time: '3s ago' },
  { addr: '0x0047...546b', action: 'Said GM', chain: 'Ethereum', time: '8s ago' },
  { addr: '0x2330...f8ba', action: 'Said GN', chain: 'Arbitrum', time: '15s ago' },
  { addr: '0x9de9...dd56', action: 'Said GM', chain: 'ZKSync', time: '22s ago' },
  { addr: '0xb6de...dfb2', action: 'Said GM', chain: 'Optimism', time: '31s ago' },
];

export default function GMPage() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [gmDone, setGmDone] = useState<Record<string, 'loading' | 'done' | 'error'>>({});
  const [activity, setActivity] = useState(MOCK_ACTIVITY);
  const [totalGM, setTotalGM] = useState(0);
  const [streak, setStreak] = useState(0);
  const [filter, setFilter] = useState<'all' | 'hot'>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isConnected) {
      const saved = localStorage.getItem(`gm_streak_${address}`);
      setStreak(saved ? parseInt(saved) : 1);
      const count = localStorage.getItem(`gm_count_${address}`);
      setTotalGM(count ? parseInt(count) : 0);
    }
  }, [isConnected, address]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChain = CHAINS[Math.floor(Math.random() * CHAINS.length)];
      const addr = '0x' + Math.random().toString(16).slice(2, 6) + '...' + Math.random().toString(16).slice(2, 6);
      setActivity(prev => [{
        addr,
        action: Math.random() > 0.3 ? 'Said GM' : 'Said GN',
        chain: randomChain.name,
        time: 'just now',
      }, ...prev.slice(0, 4)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const sayGM = async (chain: typeof CHAINS[0]) => {
    if (!isConnected || !walletClient) return;
    if (gmDone[chain.id] === 'done') return;

    setGmDone(prev => ({ ...prev, [chain.id]: 'loading' }));

    try {
      const gmHex = '0x474d'; // "GM" in hex
      const hash = await walletClient.sendTransaction({
        to: address!,
        value: parseEther('0'),
        data: gmHex as `0x${string}`,
      });

      setGmDone(prev => ({ ...prev, [chain.id]: 'done' }));
      const newTotal = totalGM + 1;
      setTotalGM(newTotal);
      localStorage.setItem(`gm_count_${address}`, String(newTotal));

      const shortAddr = address ? address.slice(0, 6) + '...' + address.slice(-4) : '0x???';
      setActivity(prev => [{
        addr: shortAddr,
        action: 'Said GM',
        chain: chain.name,
        time: 'just now',
      }, ...prev.slice(0, 4)]);

    } catch (err) {
      setGmDone(prev => ({ ...prev, [chain.id]: 'error' }));
      setTimeout(() => setGmDone(prev => { const n = { ...prev }; delete n[chain.id]; return n; }), 3000);
    }
  };

  const filtered = CHAINS
    .filter(c => filter === 'hot' ? c.hot : true)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <style>{`
        .gm-page { min-height: 100vh; background: #070707; color: #fff; font-family: system-ui, sans-serif; padding: 40px 24px 80px; }
        .gm-title { text-align: center; font-size: 42px; font-weight: 900; margin-bottom: 8px; letter-spacing: -0.03em; }
        .gm-title span { color: #c8ff00; }
        .gm-sub { text-align: center; color: #555; font-size: 15px; margin-bottom: 32px; }
        .connect-wrap { display: flex; justify-content: center; margin-bottom: 32px; }
        .filters { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; align-items: center; max-width: 1100px; margin-left: auto; margin-right: auto; }
        .filter-btn { background: #111; border: 1px solid #222; color: #666; padding: 7px 18px; border-radius: 99px; font-size: 12px; font-weight: 800; cursor: pointer; transition: all 0.2s; }
        .filter-btn.active { background: #c8ff00; color: #000; border-color: #c8ff00; }
        .search { margin-left: auto; background: #111; border: 1px solid #222; color: #fff; padding: 8px 16px; border-radius: 99px; font-size: 13px; width: 200px; outline: none; }
        .search::placeholder { color: #444; }
        .layout { display: grid; grid-template-columns: 1fr 300px; gap: 20px; max-width: 1100px; margin: 0 auto; }
        .chains-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .chain-card { background: #0f0f0f; border: 1px solid #1e1e1e; border-radius: 16px; padding: 18px; transition: border-color 0.2s; }
        .chain-card:hover { border-color: #333; }
        .chain-card.hot { border-color: #ff6b0044; }
        .chain-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .chain-info { display: flex; align-items: center; gap: 10px; }
        .chain-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
        .chain-name { font-size: 15px; font-weight: 800; }
        .gm-gn-row { display: flex; gap: 6px; margin-bottom: 12px; }
        .gm-tag { flex: 1; background: #1a1a1a; border: 1px solid #2a2a2a; color: #555; padding: 5px; border-radius: 8px; font-size: 11px; font-weight: 800; text-align: center; }
        .say-btn { width: 100%; border: none; padding: 11px; border-radius: 11px; font-size: 13px; font-weight: 900; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px; font-family: inherit; }
        .say-btn.idle { background: #c8ff00; color: #000; }
        .say-btn.idle:hover { background: #d4ff33; transform: translateY(-1px); }
        .say-btn.loading { background: #1a1a1a; color: #555; cursor: not-allowed; }
        .say-btn.done { background: #0a2000; color: #c8ff00; cursor: default; }
        .say-btn.error { background: #200a00; color: #ff4444; }
        .say-btn:disabled { cursor: not-allowed; }
        .sidebar { display: flex; flex-direction: column; gap: 14px; }
        .side-card { background: #0f0f0f; border: 1px solid #1e1e1e; border-radius: 16px; padding: 18px; }
        .side-title { font-size: 13px; font-weight: 800; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .live-dot { width: 7px; height: 7px; background: #00ff88; border-radius: 50%; display: inline-block; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.2} }
        .act-item { display: flex; align-items: center; gap: 8px; padding: 7px 0; border-bottom: 1px solid #161616; }
        .act-item:last-child { border-bottom: none; }
        .act-icon { width: 26px; height: 26px; border-radius: 7px; background: #1a1a1a; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
        .act-addr { font-size: 11px; color: #c8ff00; font-family: monospace; font-weight: 700; }
        .act-chain { font-size: 10px; color: #444; }
        .act-time { font-size: 10px; color: #333; margin-left: auto; white-space: nowrap; }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
        .stat-box { background: #141414; border-radius: 10px; padding: 12px; text-align: center; }
        .stat-val { font-size: 22px; font-weight: 900; color: #c8ff00; }
        .stat-lbl { font-size: 10px; color: #444; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px; }
        .not-connected { text-align: center; padding: 20px; color: #444; font-size: 13px; }
        @media (max-width: 900px) { .layout { grid-template-columns: 1fr; } .chains-grid { grid-template-columns: repeat(2, 1fr); } .sidebar { display: none; } }
        @media (max-width: 600px) { .chains-grid { grid-template-columns: 1fr; } .gm-title { font-size: 28px; } }
      `}</style>

      <div className="gm-page">
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#555', textDecoration: 'none', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
          ← Back
        </Link>

        <h1 className="gm-title">Good Morning, <span>Blockchain</span> ☀️</h1>
        <p className="gm-sub">Say GM on-chain daily across every EVM chain — farm potential airdrops</p>

        <div className="connect-wrap">
          <ConnectButton />
        </div>

        <div className="filters">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Chains</button>
          <button className={`filter-btn ${filter === 'hot' ? 'active' : ''}`} onClick={() => setFilter('hot')}>🔥 Hot</button>
          <input className="search" placeholder="Search chains..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        <div className="layout">
          <div>
            <div className="chains-grid">
              {filtered.map(chain => {
                const state = gmDone[chain.id];
                return (
                  <div key={chain.id} className={`chain-card ${chain.hot ? 'hot' : ''}`}>
                    <div className="chain-header">
                      <div className="chain-info">
                        <div className="chain-icon" style={{ background: chain.color + '22' }}>
                          <span style={{ fontSize: '20px' }}>{chain.icon}</span>
                        </div>
                        <div className="chain-name">{chain.name}</div>
                      </div>
                      {chain.hot && <span style={{ fontSize: '16px' }}>🔥</span>}
                    </div>

                    <div className="gm-gn-row">
                      <div className="gm-tag">GM</div>
                      <div className="gm-tag">GN</div>
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
            </div>
          </div>

          <div className="sidebar">
            <div className="side-card">
              <div className="side-title"><span className="live-dot" /> Live Activity</div>
              {activity.map((a, i) => (
                <div key={i} className="act-item">
                  <div className="act-icon">☀️</div>
                  <div>
                    <div className="act-addr">{a.addr}</div>
                    <div className="act-chain">{a.action} · {a.chain}</div>
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
                  <div style={{ fontSize: '11px', color: '#444', textAlign: 'center' }}>
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </div>
                </>
              ) : (
                <div className="not-connected">Connect wallet to track your GM streak</div>
              )}
            </div>

            <div className="side-card" style={{ borderColor: '#c8ff0022' }}>
              <div className="side-title">🪂 3alamiy Web3</div>
              <p style={{ fontSize: '12px', color: '#444', marginBottom: '12px', lineHeight: 1.6 }}>
                Track all crypto airdrops with step-by-step guides. Updated daily.
              </p>
              <Link href="/airdrops" style={{ display: 'block', textAlign: 'center', background: '#141414', border: '1px solid #c8ff0033', color: '#c8ff00', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: '800' }}>
                Browse Airdrops →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
