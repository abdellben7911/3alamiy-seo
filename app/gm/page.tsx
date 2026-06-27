'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWalletClient, useSwitchChain } from 'wagmi';
import { parseEther } from 'viem';
import Link from 'next/link';

const MAINNET_CHAINS = [
  { id: 'eth', name: 'Ethereum', icon: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg', hot: true, isNew: false, color: '#627eea', chainId: 1 },
  { id: 'base', name: 'Base', icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg', hot: true, isNew: true, color: '#0052ff', chainId: 8453 },
  { id: 'arb', name: 'Arbitrum', icon: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg', hot: true, isNew: false, color: '#12aaff', chainId: 42161 },
  { id: 'op', name: 'Optimism', icon: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg', hot: false, isNew: false, color: '#ff0420', chainId: 10 },
  { id: 'unichain', name: 'Unichain', icon: 'https://icons.llamao.fi/icons/chains/rsz_unichain.jpg', hot: true, isNew: true, color: '#ff007a', chainId: 130 },
  { id: 'abstract', name: 'Abstract', icon: 'https://icons.llamao.fi/icons/chains/rsz_abstract.jpg', hot: true, isNew: true, color: '#00ff88', chainId: 2741 },
  { id: 'zksync', name: 'zkSync', icon: 'https://icons.llamao.fi/icons/chains/rsz_zksync%20era.jpg', hot: true, isNew: false, color: '#8b5cf6', chainId: 324 },
  { id: 'scroll', name: 'Scroll', icon: 'https://icons.llamao.fi/icons/chains/rsz_scroll.jpg', hot: false, isNew: false, color: '#f5a623', chainId: 534352 },
  { id: 'polygon', name: 'Polygon', icon: 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg', hot: false, isNew: false, color: '#8247e5', chainId: 137 },
  { id: 'linea', name: 'Linea', icon: 'https://icons.llamao.fi/icons/chains/rsz_linea.jpg', hot: false, isNew: false, color: '#61dfff', chainId: 59144 },
  { id: 'blast', name: 'Blast', icon: 'https://icons.llamao.fi/icons/chains/rsz_blast.jpg', hot: false, isNew: false, color: '#fcfc03', chainId: 81457 },
  { id: 'mantle', name: 'Mantle', icon: 'https://icons.llamao.fi/icons/chains/rsz_mantle.jpg', hot: false, isNew: false, color: '#a5b4fc', chainId: 5000 },
  { id: 'avalanche', name: 'Avalanche', icon: 'https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg', hot: false, isNew: false, color: '#e84142', chainId: 43114 },
  { id: 'bsc', name: 'BNB', icon: 'https://icons.llamao.fi/icons/chains/rsz_binance.jpg', hot: false, isNew: false, color: '#f3ba2f', chainId: 56 },
  { id: 'mode', name: 'Mode', icon: 'https://icons.llamao.fi/icons/chains/rsz_mode.jpg', hot: true, isNew: true, color: '#dffe00', chainId: 34443 },
  { id: 'hyperliquid', name: 'Hyperliquid', icon: 'https://icons.llamao.fi/icons/chains/rsz_hyperliquid.jpg', hot: true, isNew: false, color: '#00ff88', chainId: 998 },
];

const TESTNET_CHAINS = [
  { id: 'monad', name: 'Monad', icon: 'https://icons.llamao.fi/icons/chains/rsz_monad.jpg', hot: true, isNew: true, color: '#836ef9', chainId: 10143 },
  { id: 'megaeth', name: 'MegaETH', icon: 'https://icons.llamao.fi/icons/chains/rsz_megaeth.jpg', hot: true, isNew: true, color: '#a855f7', chainId: 6342 },
  { id: 'abstract-test', name: 'Abstract', icon: 'https://icons.llamao.fi/icons/chains/rsz_abstract.jpg', hot: true, isNew: true, color: '#00ff88', chainId: 11124 },
  { id: 'unichain-sep', name: 'Unichain', icon: 'https://icons.llamao.fi/icons/chains/rsz_unichain.jpg', hot: true, isNew: false, color: '#ff007a', chainId: 1301 },
  { id: 'base-sep', name: 'Base Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg', hot: false, isNew: false, color: '#0052ff', chainId: 84532 },
  { id: 'scroll-sep', name: 'Scroll Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_scroll.jpg', hot: false, isNew: false, color: '#f5a623', chainId: 534351 },
  { id: 'op-sep', name: 'OP Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg', hot: false, isNew: false, color: '#ff0420', chainId: 11155420 },
  { id: 'arb-sep', name: 'Arb Sepolia', icon: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg', hot: false, isNew: false, color: '#12aaff', chainId: 421614 },
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

function ChainDot({ color }: { color: string }) {
  return <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0, boxShadow: `0 0 6px ${color}88` }} />;
}

function ChainLogo({ icon, name, color, size = 32 }: { icon: string; name: string; color: string; size?: number }) {
  const [err, setErr] = useState(false);
  if (err) return (
    <div style={{ width: size, height: size, borderRadius: size * 0.3, background: color + '22', border: `1px solid ${color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.45, fontWeight: 900, color, flexShrink: 0 }}>
      {name[0]}
    </div>
  );
  return <img src={icon} alt={name} onError={() => setErr(true)} style={{ width: size, height: size, borderRadius: size * 0.3, objectFit: 'cover', flexShrink: 0 }} />;
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
    for (const a of ['gm','gn','nft','counter','token'] as Action[]) {
      await doAction(chain, a);
      await new Promise(r=>setTimeout(r,600));
    }
  };

  const chains = network==='mainnet' ? MAINNET_CHAINS : TESTNET_CHAINS;
  const filtered = chains
    .filter(c => filter==='hot' ? c.hot : filter==='favs' ? favs.includes(c.id) : true)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const gs = (chainId: string, action: Action): TxState => txState[`${chainId}_${action}`]||'idle';

  if (!mounted) return null;

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .gm-root {
          min-height: 100vh;
          background: #080C14;
          color: #fff;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }

        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        @keyframes gradShift { 0% { background-position:0% 50%; } 50% { background-position:100% 50%; } 100% { background-position:0% 50%; } }
        .afu { animation: fadeUp 0.6s ease both; }
        .afu1 { animation: fadeUp 0.6s 0.1s ease both; }
        .afu2 { animation: fadeUp 0.6s 0.2s ease both; }
        .afu3 { animation: fadeUp 0.6s 0.3s ease both; }

        /* HERO */
        .gm-hero {
          position: relative; overflow: hidden;
          padding: 72px 24px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .gm-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(131,110,249,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(131,110,249,0.04) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events: none;
        }
        .gm-hero-glow {
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 500px;
          background: radial-gradient(ellipse, rgba(131,110,249,0.1) 0%, rgba(99,102,241,0.04) 40%, transparent 70%);
          pointer-events: none;
        }
        .gm-hero-inner { position: relative; max-width: 1400px; margin: 0 auto; }
        .gm-label {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 10px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.12em; color: #836ef9; margin-bottom: 20px;
        }
        .gm-label svg { width: 12px; height: 12px; }
        .gm-h1 {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 900; line-height: 1.08;
          letter-spacing: -0.035em; color: #fff;
          margin-bottom: 16px;
        }
        .gm-h1-accent {
          background: linear-gradient(135deg, #836ef9, #6366f1, #836ef9);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 4s ease infinite;
          font-style: normal;
        }
        .gm-sub {
          font-size: 15px; color: rgba(255,255,255,0.4);
          line-height: 1.7; max-width: 480px; margin-bottom: 36px;
        }
        .gm-hero-connect { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .gm-countdown {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 10px 18px; border-radius: 12px;
          font-size: 13px; color: rgba(255,255,255,0.35);
        }
        .gm-countdown strong { color: #836ef9; font-variant-numeric: tabular-nums; font-weight: 800; }

        /* Override RainbowKit yellow button with brand colors */
        #rk-connect-button,
        .__rk-c-bVkRSy,
        [class*="ConnectButton"],
        [class*="connectButton"] {
          background: linear-gradient(135deg, #7CF5C0, #4ade80) !important;
          color: #080C14 !important;
        }
        /* Override RainbowKit yellow button with brand colors */
        [data-testid="rk-connect-button"],
        button[data-testid="rk-connect-button"] {
          background: linear-gradient(135deg, #7CF5C0, #4ade80) !important;
          color: #080C14 !important;
          font-weight: 800 !important;
          border-radius: 12px !important;
          box-shadow: 0 8px 24px rgba(124,245,192,0.25) !important;
          border: none !important;
        }
        /* RainbowKit connected state */
        [data-testid="rk-account-button"] {
          background: rgba(124,245,192,0.08) !important;
          border: 1px solid rgba(124,245,192,0.2) !important;
          color: #7CF5C0 !important;
          border-radius: 12px !important;
        }

        /* HOW IT WORKS + STAT */
        .gm-cards {
          display: grid; grid-template-columns: 1fr 280px; gap: 16px;
          max-width: 1400px; margin: 0 auto;
          padding: 40px 24px 0;
        }
        .gm-how {
          background: #0D1221;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; padding: 28px;
        }
        .gm-how-label {
          font-size: 9px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.12em; color: #836ef9; margin-bottom: 12px;
        }
        .gm-how-title {
          font-size: 18px; font-weight: 800; letter-spacing: -0.02em;
          color: #fff; margin-bottom: 20px; line-height: 1.35;
        }
        .gm-step {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 13px; color: rgba(255,255,255,0.45);
          margin-bottom: 12px; line-height: 1.5;
        }
        .gm-step-icon {
          width: 18px; height: 18px; border-radius: 50%;
          background: rgba(131,110,249,0.15);
          border: 1px solid rgba(131,110,249,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .gm-step-icon svg { width: 10px; height: 10px; color: #836ef9; }
        .gm-stat {
          background: #0D1221;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; padding: 28px;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .gm-stat-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(131,110,249,0.12);
          border: 1px solid rgba(131,110,249,0.2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .gm-stat-num {
          font-size: 52px; font-weight: 900; letter-spacing: -0.05em;
          color: #836ef9; line-height: 1; margin-bottom: 8px;
        }
        .gm-stat-label { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .gm-stat-sub { font-size: 12px; color: rgba(255,255,255,0.3); line-height: 1.5; }

        /* CHAINS SECTION */
        .gm-chains-wrap {
          max-width: 1400px; margin: 0 auto;
          padding: 40px 24px 0;
        }
        .gm-chains-label {
          font-size: 10px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.25);
          margin-bottom: 16px;
        }
        .gm-chains-grid {
          display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px;
          margin-bottom: 8px;
        }
        .gm-chain-tile {
          background: #0D1221;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 14px 8px;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          cursor: pointer; transition: border-color 0.15s, transform 0.15s, background 0.15s;
          position: relative;
        }
        .gm-chain-tile:hover { border-color: rgba(131,110,249,0.3); transform: translateY(-2px); background: #111827; }
        .gm-chain-tile.done { background: rgba(16,185,129,0.05); border-color: rgba(16,185,129,0.2); }
        .gm-chain-tile.loading { border-color: rgba(131,110,249,0.4); }
        .gm-chain-tile-name { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.5); text-align: center; }
        .gm-chain-tile.done .gm-chain-tile-name { color: #10b981; }
        .gm-chain-tile-done {
          position: absolute; top: 6px; right: 6px;
          width: 14px; height: 14px; border-radius: 50%;
          background: #10b981; display: flex; align-items: center; justify-content: center;
          font-size: 8px; font-weight: 900; color: #fff;
        }
        .gm-chain-tile-hot {
          position: absolute; top: 6px; left: 6px;
          font-size: 8px; font-weight: 800; color: #f59e0b;
          background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2);
          padding: 1px 5px; border-radius: 99px; text-transform: uppercase; letter-spacing: 0.04em;
        }

        /* CONTROLS */
        .gm-controls {
          max-width: 1400px; margin: 32px auto 0;
          padding: 0 24px;
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }
        .seg { display: flex; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; overflow: hidden; }
        .seg-btn { background: transparent; border: none; color: rgba(255,255,255,0.3); padding: 8px 18px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; transition: all 0.15s; }
        .seg-btn.active { background: rgba(131,110,249,0.15); color: #836ef9; }
        .gm-search { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); color: #fff; padding: 9px 16px; border-radius: 12px; font-size: 13px; outline: none; font-family: inherit; width: 180px; }
        .gm-search::placeholder { color: rgba(255,255,255,0.2); }
        .filter-btn { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.3); padding: 9px 16px; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; transition: all 0.15s; }
        .filter-btn.active { background: rgba(131,110,249,0.15); border-color: rgba(131,110,249,0.3); color: #836ef9; }

        /* CHAIN DETAIL PANEL */
        .gm-detail {
          max-width: 1400px; margin: 20px auto 0;
          padding: 0 24px;
        }
        .gm-detail-inner {
          background: #0D1221;
          border: 1px solid rgba(131,110,249,0.2);
          border-radius: 18px; padding: 24px;
          display: grid; grid-template-columns: auto 1fr auto; gap: 20px; align-items: center;
        }
        .gm-detail-info { display: flex; align-items: center; gap: 14px; }
        .gm-detail-name { font-size: 18px; font-weight: 900; letter-spacing: -0.02em; }
        .gm-detail-sub { font-size: 11px; color: rgba(255,255,255,0.3); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2px; }
        .gm-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .gm-pill {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4); font-size: 12px; font-weight: 700;
          padding: 8px 16px; border-radius: 99px; cursor: pointer;
          font-family: inherit; transition: all 0.15s;
        }
        .gm-pill:hover:not(:disabled) { background: rgba(131,110,249,0.1); border-color: rgba(131,110,249,0.3); color: #836ef9; }
        .gm-pill.done { background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.2); color: #10b981; cursor: default; }
        .gm-pill.loading, .gm-pill.switching { background: rgba(131,110,249,0.1); border-color: rgba(131,110,249,0.3); color: #836ef9; cursor: not-allowed; opacity: 0.7; }
        .gm-pill.error { background: rgba(244,63,94,0.08); border-color: rgba(244,63,94,0.2); color: #f43f5e; }
        .gm-pill:disabled { opacity: 0.5; cursor: not-allowed; }
        .gm-say-btn {
          background: linear-gradient(135deg, #836ef9, #6366f1);
          color: #fff; border: none; padding: 13px 28px; border-radius: 12px;
          font-size: 14px; font-weight: 800; cursor: pointer;
          font-family: inherit; transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 8px 24px rgba(131,110,249,0.3); white-space: nowrap;
        }
        .gm-say-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(131,110,249,0.4); }
        .gm-say-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .gm-say-btn.done { background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); color: #10b981; box-shadow: none; }

        /* BOTTOM CTA */
        .gm-bottom {
          max-width: 1400px; margin: 40px auto;
          padding: 0 24px 60px;
          text-align: center;
        }
        .gm-bottom-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #836ef9, #6366f1);
          color: #fff; font-size: 15px; font-weight: 800;
          padding: 15px 32px; border-radius: 14px;
          text-decoration: none; box-shadow: 0 8px 32px rgba(131,110,249,0.3);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .gm-bottom-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(131,110,249,0.4); }
        .gm-bottom-sub { font-size: 12px; color: rgba(255,255,255,0.25); margin-top: 12px; }

        /* ACTIVITY */
        .gm-activity {
          max-width: 1400px; margin: 0 auto;
          padding: 32px 24px 60px;
        }
        .act-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .act-dot { width: 8px; height: 8px; border-radius: 50%; background: #836ef9; flex-shrink: 0; }

        /* NAV TABS */
        .gm-tabs {
          max-width: 1400px; margin: 0 auto;
          padding: 24px 24px 0;
          display: flex; gap: 4px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .gm-tab {
          background: transparent; border: none; border-bottom: 2px solid transparent;
          color: rgba(255,255,255,0.3); font-size: 13px; font-weight: 700;
          padding: 10px 20px; cursor: pointer; font-family: inherit;
          transition: all 0.15s; margin-bottom: -1px;
        }
        .gm-tab.active { color: #836ef9; border-bottom-color: #836ef9; }
        .gm-tab:hover:not(.active) { color: rgba(255,255,255,0.6); }

        @media (max-width: 900px) {
          .gm-cards { grid-template-columns: 1fr; }
          .gm-chains-grid { grid-template-columns: repeat(4, 1fr); }
          .gm-detail-inner { grid-template-columns: 1fr; gap: 14px; }
        }
        @media (max-width: 600px) {
          .gm-hero { padding: 48px 16px 48px; }
          .gm-cards { padding: 24px 16px 0; }
          .gm-chains-wrap { padding: 24px 16px 0; }
          .gm-controls { padding: 0 16px; }
          .gm-detail { padding: 0 16px; }
          .gm-chains-grid { grid-template-columns: repeat(3, 1fr); }
          .gm-h1 { font-size: 32px; }
        }
      `}</style>

      <div className="gm-root">

        {/* HERO */}
        <section className="gm-hero">
          <div className="gm-hero-grid" />
          <div className="gm-hero-glow" />
          <div className="gm-hero-inner">
            <div className="gm-label afu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              GM Station
            </div>
            <h1 className="gm-h1 afu1">
              Stay on-chain.<br />
              Every day. <em className="gm-h1-accent">on autopilot.</em>
            </h1>
            <p className="gm-sub afu2">
              One click. {MAINNET_CHAINS.length}+ EVM chains. Daily activity that compounds into points across every protocol that's still allocating.
            </p>
            <div className="gm-hero-connect afu3">
              <ConnectButton.Custom>
                {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted: rbMounted }) => {
                  const ready = rbMounted;
                  const connected = ready && account && chain;
                  return (
                    <div {...(!ready && { 'aria-hidden': true, style: { opacity: 0, pointerEvents: 'none', userSelect: 'none' } })}>
                      {!connected ? (
                        <button
                          onClick={openConnectModal}
                          style={{
                            background: 'linear-gradient(135deg, #7CF5C0, #4ade80)',
                            color: '#080C14',
                            border: 'none',
                            padding: '13px 28px',
                            borderRadius: '12px',
                            fontSize: '14px',
                            fontWeight: 800,
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            boxShadow: '0 8px 24px rgba(124,245,192,0.25)',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          Connect Wallet
                        </button>
                      ) : chain.unsupported ? (
                        <button onClick={openChainModal} style={{ background: 'rgba(244,63,94,0.1)', border: '1px solid rgba(244,63,94,0.2)', color: '#f43f5e', padding: '13px 20px', borderRadius: '12px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                          Wrong network
                        </button>
                      ) : (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button onClick={openChainModal} style={{ background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.15)', color: '#7CF5C0', padding: '10px 14px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {chain.hasIcon && chain.iconUrl && <img src={chain.iconUrl} alt={chain.name} width={16} height={16} style={{ borderRadius: '50%' }} />}
                            {chain.name}
                          </button>
                          <button onClick={openAccountModal} style={{ background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.15)', color: '#7CF5C0', padding: '10px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                            {account.displayName}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
              {isConnected && (
                <div className="gm-countdown">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Resets in <strong>{countdown}</strong>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS + STAT */}
        <div className="gm-cards afu2">
          <div className="gm-how">
            <div className="gm-how-label">How it works</div>
            <div className="gm-how-title">A daily GM tx, batched across networks.</div>
            {[
              'Connect your wallet (or burner).',
              'Pick the chains you\'re farming.',
              'Sign once — we batch the GM calls.',
              'Come back tomorrow. Points compound.',
            ].map((step, i) => (
              <div key={i} className="gm-step">
                <div className="gm-step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                {step}
              </div>
            ))}
          </div>
          <div className="gm-stat">
            <div className="gm-stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#836ef9" strokeWidth="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div>
              <div className="gm-stat-num">{MAINNET_CHAINS.length}+</div>
              <div className="gm-stat-label">EVM chains supported</div>
              <div className="gm-stat-sub">From Base to Monad — and growing weekly.</div>
            </div>
          </div>
        </div>

        {/* SUPPORTED CHAINS GRID */}
        <div className="gm-chains-wrap afu3">
          <div className="gm-chains-label">Supported networks</div>

          {/* Mainnet/Testnet toggle */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <div className="seg">
              <button className={`seg-btn ${network==='mainnet'?'active':''}`} onClick={()=>setNetwork('mainnet')}>Mainnet</button>
              <button className={`seg-btn ${network==='testnet'?'active':''}`} onClick={()=>setNetwork('testnet')}>Testnet</button>
            </div>
          </div>

          <div className="gm-chains-grid">
            {(network==='mainnet' ? MAINNET_CHAINS : TESTNET_CHAINS).map(chain => {
              const gmDone = gs(chain.id, 'gm') === 'done';
              const gmLoading = gs(chain.id, 'gm') === 'loading' || gs(chain.id, 'gm') === 'switching';
              return (
                <div
                  key={chain.id}
                  className={`gm-chain-tile ${gmDone ? 'done' : gmLoading ? 'loading' : ''}`}
                  onClick={() => isConnected && doAction(chain, 'gm')}
                  title={`Say GM on ${chain.name}`}
                >
                  {chain.hot && !gmDone && <span className="gm-chain-tile-hot">HOT</span>}
                  {gmDone && <span className="gm-chain-tile-done">✓</span>}
                  <ChainDot color={chain.color} />
                  <span className="gm-chain-tile-name">
                    {gmLoading ? '...' : chain.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* TABS */}
        <div className="gm-tabs">
          <button className={`gm-tab ${tab==='gm'?'active':''}`} onClick={()=>setTab('gm')}>
            🌅 GM Station
          </button>
          <button className={`gm-tab ${tab==='activity'?'active':''}`} onClick={()=>setTab('activity')}>
            📋 My Activity {myActivity.length > 0 && `(${myActivity.length})`}
          </button>
        </div>

        {tab === 'gm' ? (
          <>
            {/* CONTROLS */}
            <div className="gm-controls">
              <input
                className="gm-search"
                placeholder="Search chain..."
                value={search}
                onChange={e=>setSearch(e.target.value)}
              />
              <button className={`filter-btn ${filter==='all'?'active':''}`} onClick={()=>setFilter('all')}>All</button>
              <button className={`filter-btn ${filter==='hot'?'active':''}`} onClick={()=>setFilter('hot')}>🔥 Hot</button>
              <button className={`filter-btn ${filter==='favs'?'active':''}`} onClick={()=>setFilter('favs')}>⭐ Saved</button>
            </div>

            {/* CHAIN LIST */}
            <div className="gm-detail">
              {filtered.map(chain => {
                const gmState = gs(chain.id, 'gm');
                const allDone = (['gm','gn','nft','counter','token'] as Action[]).every(a => gs(chain.id,a)==='done');
                return (
                  <div key={chain.id} className="gm-detail-inner" style={{ marginBottom: '10px' }}>
                    <div className="gm-detail-info">
                      <ChainLogo icon={chain.icon} name={chain.name} color={chain.color} size={44} />
                      <div>
                        <div className="gm-detail-name" style={{ color: allDone ? '#10b981' : '#fff' }}>
                          {chain.name}
                          {chain.isNew && <span style={{ marginLeft: '8px', fontSize: '9px', fontWeight: 800, color: '#7CF5C0', background: 'rgba(124,245,192,0.1)', border: '1px solid rgba(124,245,192,0.2)', padding: '2px 7px', borderRadius: '99px', letterSpacing: '0.06em' }}>NEW</span>}
                        </div>
                        <div className="gm-detail-sub">{allDone ? '✓ All done today' : network==='testnet' ? 'Testnet' : 'EVM Mainnet'}</div>
                      </div>
                    </div>

                    <div className="gm-pills">
                      {(['gm','gn','nft','counter','token'] as Action[]).map(a => {
                        const st = gs(chain.id, a);
                        const lbl: Record<Action,string> = {gm:'GM',gn:'GN',nft:'NFT',counter:'Counter',token:'Token'};
                        return (
                          <button
                            key={a}
                            className={`gm-pill ${st}`}
                            onClick={() => doAction(chain, a)}
                            disabled={!isConnected || st==='done' || st==='loading' || st==='switching'}
                          >
                            {st==='switching' ? 'Switching...' : st==='loading' ? 'Sending...' : st==='done' ? `✓ ${lbl[a]}` : st==='error' ? '✕ Failed' : lbl[a]}
                          </button>
                        );
                      })}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                      <button
                        className={`gm-say-btn ${allDone ? 'done' : ''}`}
                        onClick={() => allDone ? null : doAll(chain)}
                        disabled={!isConnected || allDone}
                      >
                        {allDone ? '✓ Done' : gmState==='loading'||gmState==='switching' ? 'Sending...' : 'Say GM'}
                      </button>
                      <button
                        onClick={() => toggleFav(chain.id)}
                        style={{ background: 'transparent', border: 'none', color: favs.includes(chain.id) ? '#f59e0b' : 'rgba(255,255,255,0.2)', cursor: 'pointer', fontSize: '18px', padding: '4px' }}
                      >
                        {favs.includes(chain.id) ? '★' : '☆'}
                      </button>
                    </div>
                  </div>
                );
              })}
              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '56px', color: 'rgba(255,255,255,0.2)', fontSize: '14px' }}>
                  No chains found
                </div>
              )}
            </div>

            {/* BOTTOM CTA */}
            <div className="gm-bottom">
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="gm-bottom-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                Get launch alert on Telegram
              </a>
              <div className="gm-bottom-sub">Early access opening soon.</div>
            </div>
          </>
        ) : (
          /* ACTIVITY */
          <div className="gm-activity">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.02em' }}>Transaction History</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', padding: '4px 14px', borderRadius: '99px' }}>{myActivity.length} txs</div>
            </div>
            {!isConnected ? (
              <div style={{ textAlign: 'center', padding: '56px', color: 'rgba(255,255,255,0.2)' }}>Connect your wallet to see activity</div>
            ) : myActivity.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '56px', color: 'rgba(255,255,255,0.2)' }}>
                <p style={{ marginBottom: '16px' }}>No activity yet — go say GM!</p>
                <button style={{ background: 'rgba(131,110,249,0.1)', border: '1px solid rgba(131,110,249,0.2)', color: '#836ef9', padding: '10px 24px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }} onClick={() => setTab('gm')}>Say GM Now →</button>
              </div>
            ) : (
              <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '8px 20px' }}>
                {myActivity.map((a, i) => (
                  <div key={i} className="act-item">
                    <div className="act-dot" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: 700 }}>{a.action} <span style={{ color: 'rgba(255,255,255,0.3)' }}>on</span> {a.chain}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', marginTop: '2px' }}>{a.tx.slice(0,20)}...{a.tx.slice(-6)}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>{a.time}</div>
                      <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px' }}>{a.date}</div>
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
