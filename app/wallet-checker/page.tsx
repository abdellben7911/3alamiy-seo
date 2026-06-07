'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type WalletSummary = {
  address: string;
  addressType: string;
  activeChains: string[];
  totalTxs: number;
  walletAge: string;
  ageDays: number | null;
  firstActivity: string;
  score: number;
};

type AirdropResult = {
  slug: string;
  name: string;
  logo: string;
  blockchain: string;
  status: string;
  difficulty: string;
  cost: string;
  description: string;
  eligibility: 'eligible' | 'missed' | 'active' | 'unknown';
};

type CheckResult = {
  isPro: boolean;
  summary: WalletSummary;
  preview?: {
    eligible: AirdropResult[];
    eligibleCount: number;
    missedCount: number;
    activeCount: number;
  };
  results?: {
    eligible: AirdropResult[];
    missed: AirdropResult[];
    active: AirdropResult[];
    all: AirdropResult[];
  };
  stats?: {
    eligibleCount: number;
    missedCount: number;
    activeCount: number;
    totalChecked: number;
  };
};

function ScoreRing({ score }: { score: number }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const filled = (score / 100) * c;
  const color = score >= 70 ? '#7CF5C0' : score >= 40 ? '#f59e0b' : '#f87171';

  return (
    <svg width="110" height="110" viewBox="0 0 110 110">
      <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
      <circle cx="55" cy="55" r={r} fill="none" stroke={color} strokeWidth="8"
        strokeDasharray={`${filled} ${c}`} strokeLinecap="round"
        transform="rotate(-90 55 55)" style={{ transition: 'stroke-dasharray 1s ease' }} />
      <text x="55" y="51" textAnchor="middle" fill={color} fontSize="22" fontWeight="900" fontFamily="Space Grotesk,system-ui">{score}</text>
      <text x="55" y="66" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Space Grotesk,system-ui">/ 100</text>
    </svg>
  );
}

function AirdropCard({ a, blurred = false }: { a: AirdropResult; blurred?: boolean }) {
  const statusColors: Record<string, { bg: string; border: string; color: string; label: string }> = {
    eligible: { bg: 'rgba(124,245,192,0.07)', border: 'rgba(124,245,192,0.2)', color: '#7CF5C0', label: '✓ Eligible' },
    missed:   { bg: 'rgba(248,113,113,0.07)', border: 'rgba(248,113,113,0.2)', color: '#f87171', label: '✗ Missed' },
    active:   { bg: 'rgba(99,102,241,0.07)',  border: 'rgba(99,102,241,0.2)',  color: '#818cf8', label: '→ Not on chain' },
    unknown:  { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)', label: '? Unknown' },
  };
  const s = statusColors[a.eligibility] || statusColors.unknown;

  return (
    <Link
      href={blurred ? '#' : `/airdrops/${a.slug}`}
      onClick={blurred ? (e) => e.preventDefault() : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: '14px',
        background: s.bg, border: `1px solid ${s.border}`,
        borderRadius: '14px', padding: '16px 18px',
        textDecoration: 'none', color: '#fff',
        transition: 'transform 0.15s, box-shadow 0.15s',
        filter: blurred ? 'blur(4px)' : 'none',
        userSelect: blurred ? 'none' : 'auto',
        pointerEvents: blurred ? 'none' : 'auto',
        position: 'relative',
      }}
    >
      {a.logo
        ? <img src={a.logo} alt={a.name} width={40} height={40} style={{ borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)', objectFit: 'cover', flexShrink: 0 }} />
        : <div style={{ width: 40, height: 40, borderRadius: '10px', background: '#1a2540', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{a.name?.[0]}</div>
      }
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.name}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{a.blockchain}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: s.color, background: `${s.color}14`, border: `1px solid ${s.border}`, padding: '2px 8px', borderRadius: '99px', whiteSpace: 'nowrap' }}>{s.label}</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontWeight: 600 }}>{a.status}</span>
      </div>
    </Link>
  );
}

function WalletCheckerInner() {
  const searchParams = useSearchParams();
  const [input, setInput] = useState(searchParams.get('wallet') || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'eligible' | 'missed' | 'active'>('eligible');
  const [successMessage, setSuccessMessage] = useState('');

  // Auto-check if wallet in URL params
  useEffect(() => {
    const wallet = searchParams.get('wallet');
    const success = searchParams.get('success');
    if (success === 'true' && wallet) {
      setSuccessMessage('🎉 Subscription active! Full results unlocked.');
      setInput(wallet);
      setTimeout(() => runCheck(wallet), 500);
    } else if (wallet) {
      runCheck(wallet);
    }
  }, []);

  async function runCheck(addr?: string) {
    const address = (addr || input).trim();
    if (!address) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch(`/api/wallet-check?address=${encodeURIComponent(address)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Check failed');
      setResult(data);
    } catch (e: any) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  async function handleCheckout() {
    if (!result) return;
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet: result.summary.address }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else throw new Error(data.error || 'Failed');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setCheckoutLoading(false);
    }
  }

  const tabAirdrops = result?.isPro
    ? (activeTab === 'eligible' ? result.results!.eligible : activeTab === 'missed' ? result.results!.missed : result.results!.active)
    : result?.preview?.eligible || [];

  return (
    <div style={{ background: '#060A12', minHeight: '100vh', color: '#fff', fontFamily: "var(--font-space), 'Space Grotesk', system-ui, sans-serif" }}>
      <style>{`
        .wc-wrap { max-width: 900px; margin: 0 auto; padding: 56px 20px 80px; }
        .wc-input-row { display: flex; gap: 10px; }
        .wc-input { flex: 1; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 16px 20px; color: #fff; font-size: 14px; outline: none; font-family: inherit; transition: border-color 0.15s; }
        .wc-input::placeholder { color: rgba(255,255,255,0.2); }
        .wc-input:focus { border-color: rgba(124,245,192,0.35); }
        .wc-btn { background: linear-gradient(135deg, #7CF5C0, #4ade80); color: #060A12; border: none; padding: 16px 28px; border-radius: 14px; font-size: 14px; font-weight: 800; cursor: pointer; font-family: inherit; white-space: nowrap; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 20px rgba(124,245,192,0.25); letter-spacing: -0.01em; }
        .wc-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 32px rgba(124,245,192,0.35); }
        .wc-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .wc-tabs { display: flex; gap: 6px; margin-bottom: 20px; }
        .wc-tab { background: transparent; border: 1px solid rgba(255,255,255,0.08); border-radius: 99px; padding: 7px 16px; cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.4); transition: all 0.15s; display: flex; align-items: center; gap: 7px; }
        .wc-tab:hover { border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); }
        .wc-tab.on { background: rgba(124,245,192,0.08); border-color: rgba(124,245,192,0.25); color: #7CF5C0; }
        .wc-tab.missed.on { background: rgba(248,113,113,0.08); border-color: rgba(248,113,113,0.25); color: #f87171; }
        .wc-tab.active.on { background: rgba(99,102,241,0.08); border-color: rgba(99,102,241,0.25); color: #818cf8; }
        .wc-cnt { font-size: 10px; padding: 1px 6px; border-radius: 99px; font-weight: 700; }
        .wc-grid { display: flex; flex-direction: column; gap: 10px; }
        .wc-chain-tag { display: inline-flex; align-items: center; gap: 5px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 4px 12px; border-radius: 99px; font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.5); }
        .wc-paywall { position: relative; }
        .wc-paywall-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(to bottom, transparent 0%, rgba(6,10,18,0.85) 30%, rgba(6,10,18,0.98) 60%); border-radius: 0 0 16px 16px; z-index: 2; padding: 32px 24px; text-align: center; }
        .wc-upgrade-btn { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #7CF5C0, #4ade80); color: #060A12; border: none; padding: 15px 32px; border-radius: 14px; font-size: 15px; font-weight: 900; cursor: pointer; font-family: inherit; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 8px 32px rgba(124,245,192,0.3); letter-spacing: -0.02em; }
        .wc-upgrade-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(124,245,192,0.4); }
        .wc-upgrade-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        @media (max-width: 600px) {
          .wc-wrap { padding: 32px 16px 64px; }
          .wc-input-row { flex-direction: column; }
          .wc-btn { width: 100%; }
        }
      `}</style>

      <div className="wc-wrap">

        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <span>Wallet Checker</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: 48, maxWidth: 680 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.18)', color: '#7CF5C0', fontSize: 10, fontWeight: 800, padding: '5px 14px', borderRadius: 99, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7CF5C0', display: 'inline-block', boxShadow: '0 0 6px rgba(124,245,192,0.6)' }} />
            Multi-chain Wallet Analysis
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 14, color: '#fff' }}>
            Did you miss any<br />
            <span style={{ background: 'linear-gradient(135deg, #7CF5C0, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>crypto airdrops?</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 520 }}>
            Paste any EVM or Solana wallet. We scan your on-chain history against our verified airdrop database and tell you exactly what you qualified for — and what you missed.
          </p>
        </div>

        {/* Success banner */}
        {successMessage && (
          <div style={{ background: 'rgba(124,245,192,0.07)', border: '1px solid rgba(124,245,192,0.2)', borderRadius: 14, padding: '14px 20px', marginBottom: 24, fontSize: 14, color: '#7CF5C0', fontWeight: 600 }}>
            {successMessage}
          </div>
        )}

        {/* Input */}
        <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: 20, marginBottom: 32 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 10 }}>
            Wallet Address
          </label>
          <div className="wc-input-row">
            <input
              className="wc-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && runCheck()}
              placeholder="0x... or Solana address"
              spellCheck={false}
            />
            <button className="wc-btn" onClick={() => runCheck()} disabled={loading || !input.trim()}>
              {loading ? 'Scanning...' : 'Check Wallet →'}
            </button>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)', marginTop: 10 }}>
            Supports: Ethereum · Arbitrum · Base · Optimism · Polygon · BNB Chain · zkSync · Linea · Solana
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.18)', borderRadius: 12, padding: '14px 18px', marginBottom: 24, color: '#f87171', fontSize: 14 }}>
            {error}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '20px 24px', opacity: 1 - i * 0.2 }}>
                <div style={{ width: '60%', height: 14, background: 'rgba(255,255,255,0.06)', borderRadius: 6, marginBottom: 10 }} />
                <div style={{ width: '40%', height: 10, background: 'rgba(255,255,255,0.04)', borderRadius: 6 }} />
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            {/* Summary card */}
            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: '28px 28px', display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flexShrink: 0 }}>
                <ScoreRing score={result.summary.score} />
                <div style={{ textAlign: 'center', fontSize: 10, color: 'rgba(255,255,255,0.25)', marginTop: 6, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Airdrop Score</div>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, minWidth: 200 }}>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Wallet</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', wordBreak: 'break-all' }}>
                    {result.summary.address.slice(0, 12)}...{result.summary.address.slice(-8)}
                    <span style={{ marginLeft: 8, fontSize: 10, color: '#7CF5C0', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.18)', padding: '1px 7px', borderRadius: 99 }}>{result.summary.addressType}</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {[
                    { label: 'Wallet Age', val: result.summary.walletAge },
                    { label: 'Total TXs', val: result.summary.totalTxs.toLocaleString() },
                    { label: 'First Active', val: result.summary.firstActivity },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{val || '—'}</div>
                    </div>
                  ))}
                </div>

                {result.summary.activeChains.length > 0 && (
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: 8 }}>Active Chains</div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {result.summary.activeChains.map(c => (
                        <span key={c} className="wc-chain-tag">{c}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0, minWidth: 140 }}>
                {[
                  { label: 'Eligible', val: result.isPro ? result.stats!.eligibleCount : result.preview!.eligibleCount, color: '#7CF5C0' },
                  { label: 'Missed', val: result.isPro ? result.stats!.missedCount : result.preview!.missedCount, color: '#f87171' },
                  { label: 'Could Join', val: result.isPro ? result.stats!.activeCount : result.preview!.activeCount, color: '#818cf8' },
                ].map(({ label, val, color }) => (
                  <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '10px 16px', textAlign: 'center' }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color, letterSpacing: '-0.04em' }}>{val}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro badge */}
            {result.isPro && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(124,245,192,0.05)', border: '1px solid rgba(124,245,192,0.15)', borderRadius: 12, padding: '10px 18px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#7CF5C0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#7CF5C0' }}>Pro — Full Results Unlocked</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginLeft: 'auto' }}>Checked {result.stats!.totalChecked} airdrops</span>
              </div>
            )}

            {/* Airdrop results */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>
                {result.isPro ? 'Airdrop Eligibility' : 'Preview — 3 Results'}
              </div>

              {/* Tabs (pro only) */}
              {result.isPro && (
                <div className="wc-tabs">
                  <button className={`wc-tab${activeTab === 'eligible' ? ' on' : ''}`} onClick={() => setActiveTab('eligible')}>
                    Eligible
                    <span className="wc-cnt" style={{ background: 'rgba(124,245,192,0.12)', color: '#7CF5C0' }}>{result.stats!.eligibleCount}</span>
                  </button>
                  <button className={`wc-tab missed${activeTab === 'missed' ? ' on' : ''}`} onClick={() => setActiveTab('missed')}>
                    Missed
                    <span className="wc-cnt" style={{ background: 'rgba(248,113,113,0.12)', color: '#f87171' }}>{result.stats!.missedCount}</span>
                  </button>
                  <button className={`wc-tab active${activeTab === 'active' ? ' on' : ''}`} onClick={() => setActiveTab('active')}>
                    Can Join
                    <span className="wc-cnt" style={{ background: 'rgba(99,102,241,0.12)', color: '#818cf8' }}>{result.stats!.activeCount}</span>
                  </button>
                </div>
              )}

              {/* Airdrop cards */}
              <div className="wc-paywall">
                <div className="wc-grid">
                  {tabAirdrops.length > 0
                    ? tabAirdrops.map((a, i) => <AirdropCard key={a.slug} a={a} blurred={!result.isPro && i > 0} />)
                    : <div style={{ textAlign: 'center', padding: '40px 24px', color: 'rgba(255,255,255,0.25)', fontSize: 14 }}>
                        No {activeTab} airdrops found for this wallet on detected chains.
                      </div>
                  }

                  {/* Blurred placeholder cards for free tier */}
                  {!result.isPro && [1, 2, 3, 4].map(i => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(124,245,192,0.04)', border: '1px solid rgba(124,245,192,0.12)', borderRadius: 14, padding: '16px 18px', filter: 'blur(5px)', userSelect: 'none' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1a2540', flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ width: 120, height: 12, background: 'rgba(255,255,255,0.08)', borderRadius: 4, marginBottom: 8 }} />
                        <div style={{ width: 80, height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4 }} />
                      </div>
                      <div style={{ width: 70, height: 22, background: 'rgba(124,245,192,0.1)', borderRadius: 99 }} />
                    </div>
                  ))}
                </div>

                {/* Paywall overlay for free tier */}
                {!result.isPro && (
                  <div className="wc-paywall-overlay">
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#7CF5C0', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                      🔒 Unlock Full Results
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8, color: '#fff' }}>
                      {result.preview!.missedCount} missed. {result.preview!.eligibleCount} eligible.
                    </h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 24, maxWidth: 360, lineHeight: 1.6 }}>
                      See every airdrop you qualified for, every one you missed, and all active ones you can still join — across all your chains.
                    </p>

                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 18 }}>
                      {['Full eligibility report', 'All chains + Solana', 'Missed airdrops list', 'Monthly updates'].map(f => (
                        <span key={f} style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <span style={{ color: '#7CF5C0' }}>✓</span> {f}
                        </span>
                      ))}
                    </div>

                    <button className="wc-upgrade-btn" onClick={handleCheckout} disabled={checkoutLoading}>
                      {checkoutLoading ? 'Redirecting...' : 'Unlock for $3 / month →'}
                    </button>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 12 }}>Cancel anytime · Secure payment via Stripe</p>
                  </div>
                )}
              </div>
            </div>

            {/* Pro: missed airdrops CTA */}
            {result.isPro && activeTab === 'missed' && result.stats!.missedCount > 0 && (
              <div style={{ background: 'rgba(248,113,113,0.04)', border: '1px solid rgba(248,113,113,0.15)', borderRadius: 14, padding: '20px 24px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f87171', marginBottom: 6 }}>
                  😔 You missed {result.stats!.missedCount} airdrops
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                  Don't miss the next one. Join our Telegram for instant alerts when high-value airdrops go live — before CT finds out.
                </div>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 14, background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.2)', color: '#7CF5C0', fontSize: 13, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                  Join Telegram Alerts
                </a>
              </div>
            )}

            {/* How it works */}
            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: '24px 28px' }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>How We Check Eligibility</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16 }}>
                {[
                  { icon: '🔗', title: 'Chain Detection', desc: 'We scan Etherscan, Arbiscan, Basescan, and more to find which chains your wallet is active on.' },
                  { icon: '📊', title: 'Airdrop Matching', desc: 'We cross-reference your active chains against our database of 125+ verified airdrops.' },
                  { icon: '📅', title: 'Timeline Check', desc: 'We check if your wallet was active before each airdrop\'s snapshot window.' },
                  { icon: '⚡', title: 'Live Results', desc: 'Results reflect airdrops currently live — so you can still claim eligible ones right now.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title}>
                    <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 5 }}>{title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.65 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty state / first load */}
        {!result && !loading && !error && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 16 }}>
            {[
              { icon: '🔍', title: 'Find missed airdrops', desc: 'See every airdrop you were eligible for but didn\'t claim across all chains.', color: '#7CF5C0' },
              { icon: '📋', title: '125+ airdrops checked', desc: 'We check against our entire verified database — updated daily.', color: '#818cf8' },
              { icon: '⚡', title: 'Multi-chain in seconds', desc: 'ETH, ARB, Base, OP, Polygon, BNB, zkSync, Linea, Solana — all at once.', color: '#f59e0b' },
              { icon: '🔒', title: '$3/month for full access', desc: 'Free tier shows a preview. Pro unlocks the complete report + missed airdrop history.', color: '#f87171' },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '22px 22px' }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 7, letterSpacing: '-0.02em' }}>{title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default function WalletCheckerPage() {
  return (
    <Suspense fallback={<div style={{ background: '#060A12', minHeight: '100vh' }} />}>
      <WalletCheckerInner />
    </Suspense>
  );
}
