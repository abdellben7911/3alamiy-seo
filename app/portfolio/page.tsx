'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { createClient } from '../auth/supabase';

type Wallet = { id: string; wallet_address: string; nickname: string | null; chain: string; created_at: string };
type Token = { chain: string; chainColor: string; symbol: string; name: string; balanceFormatted: number; logoUrl: string | null; quoteRate: number; valueUsd: number; change24h: number | null; isNative: boolean; contractAddress: string };
type BalanceData = { tokens: Token[]; totalUsd: number; byChain: Record<string, number>; tokenCount: number };

const fmt = (n: number) => n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `$${(n / 1e3).toFixed(2)}K` : `$${n.toFixed(2)}`;
const fmtBal = (n: number) => n >= 1e6 ? `${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(2)}K` : n >= 1 ? n.toFixed(4) : n.toPrecision(3);
const shortAddr = (a: string) => `${a.slice(0, 6)}…${a.slice(-4)}`;

const CHAIN_ICONS: Record<string, string> = {
  'Ethereum': '⟠', 'Arbitrum': '🔵', 'Base': '🔷', 'Optimism': '🔴',
  'Polygon': '🟣', 'BNB Chain': '🟡', 'zkSync': '🔹', 'Linea': '🔷', 'Solana': '◎',
};

function ProGate() {
  return (
    <div style={{ minHeight: '100vh', background: '#060A12', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg,rgba(124,245,192,0.12),rgba(124,245,192,0.04))', border: '1px solid rgba(124,245,192,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 32 }}>📊</div>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 12px' }}>Portfolio Tracker</h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, margin: '0 0 28px' }}>Track your crypto portfolio across 9 chains + check airdrop eligibility. Pro feature — $5/month.</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/pro" style={{ background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', fontWeight: 800, fontSize: 14, padding: '13px 28px', borderRadius: 12, textDecoration: 'none' }}>Upgrade to Pro →</Link>
          <Link href="/login" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: 14, padding: '13px 24px', borderRadius: 12, textDecoration: 'none' }}>Log In</Link>
        </div>
      </div>
    </div>
  );
}

function AddWalletModal({ onAdd, onClose }: { onAdd: (addr: string, nick: string) => Promise<string | null>; onClose: () => void }) {
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
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '32px', width: '100%', maxWidth: 460 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>Add Wallet</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 20, lineHeight: 1 }}>✕</button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Wallet Address</label>
          <input value={addr} onChange={e => setAddr(e.target.value)} placeholder="0x... or Solana address" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 16px', color: '#fff', fontSize: 13, fontFamily: 'monospace', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Nickname (optional)</label>
          <input value={nick} onChange={e => setNick(e.target.value)} placeholder="e.g. Main wallet, Farming wallet" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 16px', color: '#fff', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
        </div>
        {err && <p style={{ fontSize: 13, color: '#f87171', margin: '0 0 16px', background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.18)', borderRadius: 8, padding: '8px 12px' }}>{err}</p>}
        <button onClick={submit} disabled={loading || !addr.trim()} style={{ width: '100%', background: loading || !addr.trim() ? 'rgba(124,245,192,0.2)' : 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', fontWeight: 800, fontSize: 14, padding: '13px', borderRadius: 12, border: 'none', cursor: loading || !addr.trim() ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Adding…' : 'Add Wallet'}
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
  const [activeWallet, setActiveWallet] = useState<string | null>(null);
  const [balances, setBalances] = useState<Record<string, BalanceData>>({});
  const [loadingBalances, setLoadingBalances] = useState<Record<string, boolean>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (!user) { setLoading(false); return; }
      const { data: sub } = await supabase.from('subscriptions').select('status').eq('user_id', user.id).in('status', ['active', 'trialing']).maybeSingle();
      setIsPro(!!sub);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!isPro) return;
    fetch('/api/portfolio/wallets')
      .then(r => r.json())
      .then(d => {
        if (d.wallets?.length) {
          setWallets(d.wallets);
          setActiveWallet(d.wallets[0].wallet_address);
        }
      });
  }, [isPro]);

  const loadBalances = useCallback(async (address: string) => {
    if (balances[address]) return;
    setLoadingBalances(prev => ({ ...prev, [address]: true }));
    try {
      const res = await fetch(`/api/portfolio/balances?address=${address}`);
      const data = await res.json();
      setBalances(prev => ({ ...prev, [address]: data }));
    } catch { /* silent */ }
    setLoadingBalances(prev => ({ ...prev, [address]: false }));
  }, [balances]);

  useEffect(() => {
    if (activeWallet) loadBalances(activeWallet);
  }, [activeWallet]);

  async function addWallet(address: string, nickname: string): Promise<string | null> {
    const res = await fetch('/api/portfolio/wallets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    await fetch('/api/portfolio/wallets', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setWallets(prev => prev.filter(w => w.id !== id));
    if (activeWallet === address) setActiveWallet(wallets.find(w => w.id !== id)?.wallet_address ?? null);
    setDeletingId(null);
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#060A12', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid rgba(124,245,192,0.2)', borderTopColor: '#7CF5C0', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  );

  if (!user || !isPro) return <ProGate />;

  const active = wallets.find(w => w.wallet_address === activeWallet);
  const bd: BalanceData | null = activeWallet ? (balances[activeWallet] ?? null) : null;
  const isLoadingBal = activeWallet ? (loadingBalances[activeWallet] ?? false) : false;

  // Top chain for active wallet
  const topChains = bd ? Object.entries(bd.byChain).sort((a, b) => b[1] - a[1]).slice(0, 5) : [];

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
        .pf-wrap { min-height:100vh; background:#060A12; font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif; }
        .pf-header { padding:40px 24px 32px; border-bottom:1px solid rgba(255,255,255,0.06); }
        .pf-inner { max-width:1000px; margin:0 auto; }
        .pf-title-row { display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; margin-bottom:20px; }
        .pf-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(124,245,192,0.06); border:1px solid rgba(124,245,192,0.18); color:#7CF5C0; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; }
        .pf-h1 { font-size:clamp(22px,3vw,32px); font-weight:900; color:#fff; letter-spacing:-0.03em; margin:8px 0 0; }
        .pf-wallet-tabs { display:flex; gap:8px; flex-wrap:wrap; align-items:center; }
        .pf-wallet-tab { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:10px; padding:8px 14px; cursor:pointer; transition:all 0.15s; }
        .pf-wallet-tab.active { background:rgba(124,245,192,0.06); border-color:rgba(124,245,192,0.25); }
        .pf-wallet-tab-addr { font-size:12px; font-weight:700; color:rgba(255,255,255,0.5); font-family:monospace; }
        .pf-wallet-tab.active .pf-wallet-tab-addr { color:#7CF5C0; }
        .pf-wallet-nick { font-size:10px; color:rgba(255,255,255,0.25); font-weight:600; }
        .pf-add-btn { display:flex; align-items:center; gap:6px; background:rgba(124,245,192,0.06); border:1px dashed rgba(124,245,192,0.25); border-radius:10px; padding:8px 14px; cursor:pointer; font-size:12px; font-weight:700; color:#7CF5C0; transition:all 0.15s; }
        .pf-body { max-width:1000px; margin:0 auto; padding:32px 24px 80px; }
        .pf-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:32px; }
        .pf-stat { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:14px; padding:18px 20px; }
        .pf-stat-label { font-size:10px; font-weight:700; color:rgba(255,255,255,0.25); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px; }
        .pf-stat-val { font-size:24px; font-weight:900; color:#fff; letter-spacing:-0.04em; line-height:1; }
        .pf-stat-sub { font-size:11px; color:rgba(255,255,255,0.25); margin-top:4px; }
        .pf-section-title { font-size:14px; font-weight:800; color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:0.08em; margin:0 0 14px; }
        .pf-token-table { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; overflow:hidden; margin-bottom:32px; }
        .pf-token-head { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 80px; gap:12px; padding:10px 20px; border-bottom:1px solid rgba(255,255,255,0.05); }
        .pf-token-head span { font-size:10px; font-weight:700; color:rgba(255,255,255,0.2); text-transform:uppercase; letter-spacing:0.07em; }
        .pf-token-row { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 80px; gap:12px; padding:13px 20px; border-bottom:1px solid rgba(255,255,255,0.04); align-items:center; animation:fadeIn 0.3s ease; }
        .pf-token-row:last-child { border-bottom:none; }
        .pf-token-logo { width:32px; height:32px; border-radius:8px; object-fit:cover; }
        .pf-token-logo-placeholder { width:32px; height:32px; border-radius:8px; background:rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:800; color:rgba(255,255,255,0.3); }
        .pf-chain-bars { display:flex; flex-direction:column; gap:8px; margin-bottom:32px; }
        .pf-chain-bar-row { display:flex; align-items:center; gap:10px; }
        .pf-chain-bar-label { width:90px; font-size:11px; font-weight:700; color:rgba(255,255,255,0.4); flex-shrink:0; }
        .pf-chain-bar-track { flex:1; height:6px; background:rgba(255,255,255,0.05); border-radius:99px; overflow:hidden; }
        .pf-chain-bar-fill { height:100%; border-radius:99px; background:#7CF5C0; transition:width 0.8s cubic-bezier(0.4,0,0.2,1); }
        .pf-chain-bar-val { font-size:11px; font-weight:700; color:#7CF5C0; width:80px; text-align:right; flex-shrink:0; }
        .pf-empty { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:64px 24px; text-align:center; }
        .pf-check-cta { background:linear-gradient(135deg,rgba(124,245,192,0.07),rgba(124,245,192,0.03)); border:1px solid rgba(124,245,192,0.15); border-radius:20px; padding:28px 32px; display:flex; align-items:center; gap:24px; }
        .pf-del-btn { background:none; border:none; color:rgba(255,255,255,0.15); cursor:pointer; font-size:14px; padding:4px 8px; border-radius:6px; transition:all 0.15s; }
        .pf-del-btn:hover { color:#f87171; background:rgba(248,113,113,0.08); }
        @media(max-width:640px){
          .pf-stats{grid-template-columns:1fr 1fr;}
          .pf-token-head,.pf-token-row{grid-template-columns:2fr 1fr 1fr;}
          .pf-token-head span:nth-child(4),.pf-token-head span:nth-child(5),.pf-token-row>*:nth-child(4),.pf-token-row>*:nth-child(5){display:none;}
        }
      `}</style>

      {showAdd && <AddWalletModal onAdd={addWallet} onClose={() => setShowAdd(false)} />}

      <div className="pf-wrap">
        <div className="pf-header">
          <div className="pf-inner">
            <div className="pf-title-row">
              <div>
                <div className="pf-badge"><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7CF5C0', display: 'inline-block' }} />Pro Feature</div>
                <h1 className="pf-h1">My Portfolio</h1>
              </div>
              <button onClick={() => setShowAdd(true)} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', fontWeight: 800, fontSize: 13, padding: '10px 20px', borderRadius: 10, border: 'none', cursor: 'pointer' }}>
                + Add Wallet
              </button>
            </div>

            {wallets.length === 0 ? null : (
              <div className="pf-wallet-tabs">
                {wallets.map(w => (
                  <div key={w.id} className={`pf-wallet-tab${activeWallet === w.wallet_address ? ' active' : ''}`} onClick={() => setActiveWallet(w.wallet_address)}>
                    <div>
                      {w.nickname && <div className="pf-wallet-nick">{w.nickname}</div>}
                      <div className="pf-wallet-tab-addr">{shortAddr(w.wallet_address)}</div>
                    </div>
                    <button className="pf-del-btn" disabled={deletingId === w.id} onClick={e => { e.stopPropagation(); deleteWallet(w.id, w.wallet_address); }} title="Remove wallet">✕</button>
                  </div>
                ))}
                {wallets.length < 5 && (
                  <button className="pf-add-btn" onClick={() => setShowAdd(true)}>+ Add wallet</button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="pf-body">
          {wallets.length === 0 ? (
            <div className="pf-empty">
              <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 10px' }}>Add your first wallet</h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', maxWidth: 380, lineHeight: 1.75, margin: '0 0 24px' }}>Paste any EVM or Solana address to track your portfolio across 9 chains and check airdrop eligibility.</p>
              <button onClick={() => setShowAdd(true)} style={{ background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', fontWeight: 800, fontSize: 14, padding: '13px 28px', borderRadius: 12, border: 'none', cursor: 'pointer' }}>Add Wallet →</button>
            </div>
          ) : (
            <>
              {/* Stats bar */}
              <div className="pf-stats">
                <div className="pf-stat">
                  <div className="pf-stat-label">Total Value</div>
                  <div className="pf-stat-val" style={{ color: '#7CF5C0' }}>{isLoadingBal ? '…' : bd ? fmt(bd.totalUsd) : '—'}</div>
                  <div className="pf-stat-sub">{active?.nickname ?? shortAddr(activeWallet ?? '')}</div>
                </div>
                <div className="pf-stat">
                  <div className="pf-stat-label">Tokens</div>
                  <div className="pf-stat-val">{isLoadingBal ? '…' : bd?.tokenCount ?? '—'}</div>
                  <div className="pf-stat-sub">with value &gt; $0.01</div>
                </div>
                <div className="pf-stat">
                  <div className="pf-stat-label">Active Chains</div>
                  <div className="pf-stat-val">{isLoadingBal ? '…' : bd ? Object.keys(bd.byChain).length : '—'}</div>
                  <div className="pf-stat-sub">chains with balance</div>
                </div>
                <div className="pf-stat">
                  <div className="pf-stat-label">Wallets Tracked</div>
                  <div className="pf-stat-val">{wallets.length}<span style={{ fontSize: 14, color: 'rgba(255,255,255,0.2)', fontWeight: 600 }}>/5</span></div>
                  <div className="pf-stat-sub">Pro limit</div>
                </div>
              </div>

              {/* Chain breakdown */}
              {!isLoadingBal && topChains.length > 0 && (
                <div style={{ marginBottom: 32 }}>
                  <p className="pf-section-title">Chain Breakdown</p>
                  <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '20px 24px' }}>
                    <div className="pf-chain-bars">
                      {topChains.map(([chain, val]) => (
                        <div key={chain} className="pf-chain-bar-row">
                          <span className="pf-chain-bar-label">{CHAIN_ICONS[chain] ?? '⬡'} {chain}</span>
                          <div className="pf-chain-bar-track">
                            <div className="pf-chain-bar-fill" style={{ width: `${(val / (bd?.totalUsd || 1)) * 100}%` }} />
                          </div>
                          <span className="pf-chain-bar-val">{fmt(val)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Token table */}
              <div style={{ marginBottom: 32 }}>
                <p className="pf-section-title">Holdings</p>
                {isLoadingBal ? (
                  <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '48px', textAlign: 'center' }}>
                    <div style={{ width: 28, height: 28, border: '3px solid rgba(124,245,192,0.2)', borderTopColor: '#7CF5C0', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 12px' }} />
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', margin: 0 }}>Scanning {Object.keys({Ethereum:1,Arbitrum:1,Base:1,Optimism:1,Polygon:1,'BNB Chain':1,zkSync:1,Linea:1}).length} chains…</p>
                  </div>
                ) : bd && bd.tokens.length > 0 ? (
                  <div className="pf-token-table">
                    <div className="pf-token-head">
                      <span>Token</span>
                      <span>Balance</span>
                      <span>Price</span>
                      <span>Value</span>
                      <span>24h</span>
                    </div>
                    {bd.tokens.map((t, i) => (
                      <div key={`${t.chain}-${t.contractAddress}-${i}`} className="pf-token-row">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          {t.logoUrl
                            ? <img src={t.logoUrl} alt={t.symbol} className="pf-token-logo" onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                            : <div className="pf-token-logo-placeholder">{t.symbol?.[0]}</div>
                          }
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.symbol}</div>
                            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontWeight: 600 }}>
                              <span style={{ color: t.chainColor, marginRight: 4 }}>●</span>{t.chain}
                              {t.isNative && <span style={{ marginLeft: 6, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '1px 5px', fontSize: 9 }}>NATIVE</span>}
                            </div>
                          </div>
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>{fmtBal(t.balanceFormatted)}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>{t.quoteRate > 0 ? `$${t.quoteRate < 0.01 ? t.quoteRate.toPrecision(3) : t.quoteRate.toLocaleString(undefined, { maximumFractionDigits: 4 })}` : '—'}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{fmt(t.valueUsd)}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: t.change24h == null ? 'rgba(255,255,255,0.2)' : t.change24h >= 0 ? '#7CF5C0' : '#f87171' }}>
                          {t.change24h == null ? '—' : `${t.change24h >= 0 ? '+' : ''}${t.change24h.toFixed(2)}%`}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : bd ? (
                  <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '48px', textAlign: 'center' }}>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', margin: 0 }}>No token balances found for this address.</p>
                  </div>
                ) : null}
              </div>

              {/* Airdrop Checker CTA */}
              {activeWallet && (
                <div className="pf-check-cta">
                  <div style={{ fontSize: 36, flexShrink: 0 }}>🎯</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#fff', margin: '0 0 6px', letterSpacing: '-0.02em' }}>Check Airdrop Eligibility</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.7 }}>See which of our 125+ tracked airdrops this wallet qualifies for based on on-chain activity.</p>
                  </div>
                  <Link href={`/wallet-checker?address=${activeWallet}`} style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', fontWeight: 800, fontSize: 13, padding: '11px 20px', borderRadius: 10, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    Check Eligibility →
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
