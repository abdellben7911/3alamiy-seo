'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type ActivityResult = { firstTxTimestamp: number; txCount: number; active: boolean };

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
  const r = 42;
  const c = 2 * Math.PI * r;
  const filled = (score / 100) * c;
  const color = score >= 70 ? '#7CF5C0' : score >= 40 ? '#f59e0b' : '#f87171';
  const trackColor = score >= 70 ? 'rgba(124,245,192,0.1)' : score >= 40 ? 'rgba(245,158,11,0.1)' : 'rgba(248,113,113,0.1)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke={trackColor} strokeWidth="7" />
        <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="7"
          strokeDasharray={`${filled} ${c}`} strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
        <text x="50" y="46" textAnchor="middle" fill={color} fontSize="20" fontWeight="800"
          fontFamily="Space Grotesk,system-ui">{score}</text>
        <text x="50" y="60" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="9"
          fontWeight="600" fontFamily="Space Grotesk,system-ui" letterSpacing="1">SCORE</text>
      </svg>
    </div>
  );
}

const eligibilityConfig = {
  eligible: { bg: 'rgba(124,245,192,0.06)', border: 'rgba(124,245,192,0.18)', color: '#7CF5C0',  pill: 'rgba(124,245,192,0.1)',  label: 'Eligible' },
  missed:   { bg: 'rgba(248,113,113,0.06)', border: 'rgba(248,113,113,0.18)', color: '#f87171',  pill: 'rgba(248,113,113,0.1)',  label: 'Missed' },
  active:   { bg: 'rgba(99,102,241,0.06)',  border: 'rgba(99,102,241,0.18)',  color: '#818cf8',  pill: 'rgba(99,102,241,0.1)',   label: 'Not on chain' },
  unknown:  { bg: 'rgba(255,255,255,0.02)', border: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.3)', pill: 'rgba(255,255,255,0.06)', label: 'Unknown' },
};

function AirdropCard({ a, blurred = false }: { a: AirdropResult; blurred?: boolean }) {
  const cfg = eligibilityConfig[a.eligibility] || eligibilityConfig.unknown;

  return (
    <Link
      href={blurred ? '#' : `/airdrops/${a.slug}`}
      onClick={blurred ? (e) => e.preventDefault() : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        background: cfg.bg, border: `1px solid ${cfg.border}`,
        borderRadius: 13, padding: '14px 18px',
        textDecoration: 'none', color: '#fff',
        filter: blurred ? 'blur(5px)' : 'none',
        userSelect: blurred ? 'none' : 'auto',
        pointerEvents: blurred ? 'none' : 'auto',
        transition: 'transform 0.15s, border-color 0.15s',
      }}
    >
      {a.logo
        ? <img src={a.logo} alt={a.name} width={38} height={38} style={{ borderRadius: 9, border: '1px solid rgba(255,255,255,0.07)', objectFit: 'cover', flexShrink: 0 }} />
        : <div style={{ width: 38, height: 38, borderRadius: 9, background: '#1a2540', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{a.name?.[0]}</div>
      }
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.name}</div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600 }}>{a.blockchain}</div>
      </div>
      <span style={{ fontSize: 10, fontWeight: 700, color: cfg.color, background: cfg.pill, border: `1px solid ${cfg.border}`, padding: '3px 10px', borderRadius: 99, whiteSpace: 'nowrap', flexShrink: 0 }}>
        {cfg.label}
      </span>
    </Link>
  );
}

function SkeletonCard() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 13, padding: '14px 18px' }}>
      <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(255,255,255,0.05)', flexShrink: 0 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ width: '55%', height: 11, background: 'rgba(255,255,255,0.06)', borderRadius: 4 }} />
        <div style={{ width: '35%', height: 8, background: 'rgba(255,255,255,0.04)', borderRadius: 4 }} />
      </div>
      <div style={{ width: 62, height: 22, background: 'rgba(255,255,255,0.04)', borderRadius: 99 }} />
    </div>
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
  const [successBanner, setSuccessBanner] = useState('');

  useEffect(() => {
    const wallet = searchParams.get('wallet');
    const success = searchParams.get('success');
    if (success === 'true' && wallet) {
      setSuccessBanner('Payment confirmed — full results unlocked.');
      setInput(wallet);
      setTimeout(() => runCheck(wallet), 600);
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
      setError(e.message || 'Something went wrong. Check the address and try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleCheckout() {
    if (!result) return;
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/create-crypto-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet: result.summary.address }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else throw new Error(data.error || 'Failed to create payment');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setCheckoutLoading(false);
    }
  }

  const tabAirdrops = result?.isPro
    ? (activeTab === 'eligible' ? result.results!.eligible : activeTab === 'missed' ? result.results!.missed : result.results!.active)
    : result?.preview?.eligible || [];

  const eligibleCount = result?.isPro ? result.stats!.eligibleCount : result?.preview?.eligibleCount ?? 0;
  const missedCount  = result?.isPro ? result.stats!.missedCount  : result?.preview?.missedCount  ?? 0;
  const activeCount  = result?.isPro ? result.stats!.activeCount  : result?.preview?.activeCount  ?? 0;

  return (
    <div style={{ background: '#060A12', minHeight: '100vh', color: '#fff', fontFamily: "var(--font-space),'Space Grotesk',system-ui,sans-serif" }}>
      <style>{`
        .wc * { box-sizing: border-box; }
        .wc-wrap { max-width: 860px; margin: 0 auto; padding: 52px 24px 100px; }

        .wc-input { width: 100%; background: transparent; border: none; color: #fff; font-size: 14px; outline: none; font-family: inherit; }
        .wc-input::placeholder { color: rgba(255,255,255,0.2); }

        .wc-check-btn { background: linear-gradient(135deg,#7CF5C0,#4ade80); color: #060A12; border: none; padding: 0 28px; height: 48px; border-radius: 11px; font-size: 13px; font-weight: 800; cursor: pointer; font-family: inherit; white-space: nowrap; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 20px rgba(124,245,192,0.2); letter-spacing: -0.01em; flex-shrink: 0; }
        .wc-check-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(124,245,192,0.32); }
        .wc-check-btn:disabled { opacity: 0.55; cursor: not-allowed; }

        .wc-tab { background: transparent; border: 1px solid rgba(255,255,255,0.08); border-radius: 99px; padding: 6px 16px; cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.35); transition: all 0.15s; display: inline-flex; align-items: center; gap: 7px; }
        .wc-tab:hover { color: rgba(255,255,255,0.65); border-color: rgba(255,255,255,0.14); }
        .wc-tab.on-green  { background: rgba(124,245,192,0.07); border-color: rgba(124,245,192,0.22); color: #7CF5C0; }
        .wc-tab.on-red    { background: rgba(248,113,113,0.07); border-color: rgba(248,113,113,0.22); color: #f87171; }
        .wc-tab.on-purple { background: rgba(99,102,241,0.07);  border-color: rgba(99,102,241,0.22);  color: #818cf8; }

        .wc-cnt { font-size: 10px; padding: 1px 7px; border-radius: 99px; font-weight: 700; }

        .wc-stat-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px 18px; text-align: center; }
        .wc-stat-val { font-size: 24px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; margin-bottom: 4px; }
        .wc-stat-lbl { font-size: 9px; color: rgba(255,255,255,0.22); font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; }

        .wc-chain-tag { display: inline-flex; align-items: center; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); padding: 3px 11px; border-radius: 99px; font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.4); }

        .wc-unlock-btn { background: linear-gradient(135deg,#7CF5C0,#4ade80); color: #060A12; border: none; padding: 16px 36px; border-radius: 13px; font-size: 15px; font-weight: 900; cursor: pointer; font-family: inherit; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 8px 32px rgba(124,245,192,0.28); letter-spacing: -0.02em; width: 100%; max-width: 320px; }
        .wc-unlock-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(124,245,192,0.38); }
        .wc-unlock-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        @media (max-width: 640px) {
          .wc-wrap { padding: 32px 16px 72px; }
          .wc-summary-grid { flex-direction: column !important; }
          .wc-stats-col { flex-direction: row !important; }
        }
      `}</style>

      <div className="wc wc-wrap">

        {/* Breadcrumb */}
        <nav style={{ fontSize: 12, color: 'rgba(255,255,255,0.22)', marginBottom: 36, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span style={{ opacity: 0.5 }}>›</span>
          <span>Wallet Checker</span>
        </nav>

        {/* Hero */}
        <div style={{ marginBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.16)', color: '#7CF5C0', fontSize: 10, fontWeight: 800, padding: '5px 14px', borderRadius: 99, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 22 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7CF5C0', display: 'inline-block', boxShadow: '0 0 6px rgba(124,245,192,0.7)' }} />
            Multi-chain Wallet Analysis
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,46px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 14, color: '#fff' }}>
            Did you miss any<br />
            <span style={{ background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>crypto airdrops?</span>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, maxWidth: 500, margin: 0 }}>
            Paste any EVM or Solana wallet. We scan your on-chain history against our verified airdrop database and show you exactly what you qualified for — and what you missed.
          </p>
        </div>

        {/* Success banner */}
        {successBanner && (
          <div style={{ background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.18)', borderRadius: 12, padding: '13px 18px', marginBottom: 24, fontSize: 13, color: '#7CF5C0', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            {successBanner}
          </div>
        )}

        {/* Input box */}
        <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 22px', marginBottom: 28 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Wallet Address</div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '0 0 0 16px', transition: 'border-color 0.15s' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" style={{ flexShrink: 0 }}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/></svg>
            <input
              className="wc-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && runCheck()}
              placeholder="0x... or Solana address"
              spellCheck={false}
              style={{ height: 48 }}
            />
            <button className="wc-check-btn" onClick={() => runCheck()} disabled={loading || !input.trim()}>
              {loading ? 'Scanning...' : 'Check Wallet'}
            </button>
          </div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', marginTop: 10, letterSpacing: '0.01em' }}>
            Ethereum · Arbitrum · Base · Optimism · Polygon · BNB Chain · zkSync · Linea · Solana
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.18)', borderRadius: 12, padding: '13px 18px', marginBottom: 24, color: '#f87171', fontSize: 13, display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {error}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Summary */}
            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: '24px 26px' }}>
              <div className="wc-summary-grid" style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>

                {/* Score */}
                <div style={{ flexShrink: 0 }}>
                  <ScoreRing score={result.summary.score} />
                  <div style={{ textAlign: 'center', fontSize: 9, color: 'rgba(255,255,255,0.2)', marginTop: 4, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em' }}>Airdrop Score</div>
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 5 }}>Wallet</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>
                        {result.summary.address.slice(0, 10)}...{result.summary.address.slice(-8)}
                      </span>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#7CF5C0', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.18)', padding: '2px 8px', borderRadius: 99, letterSpacing: '0.06em' }}>
                        {result.summary.addressType}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                    {[
                      { label: 'Wallet Age',    val: result.summary.walletAge || 'New' },
                      { label: 'Total TXs',     val: result.summary.totalTxs > 0 ? result.summary.totalTxs.toLocaleString() : '0' },
                      { label: 'First Active',  val: result.summary.firstActivity || '—' },
                    ].map(({ label, val }) => (
                      <div key={label}>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 700, marginBottom: 4 }}>{label}</div>
                        <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  {result.summary.activeChains.length > 0 && (
                    <div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 700, marginBottom: 8 }}>Active Chains</div>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {result.summary.activeChains.map(c => <span key={c} className="wc-chain-tag">{c}</span>)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Stats col */}
                <div className="wc-stats-col" style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 130 }}>
                  <div className="wc-stat-box">
                    <div className="wc-stat-val" style={{ color: '#7CF5C0' }}>{eligibleCount}</div>
                    <div className="wc-stat-lbl">Eligible</div>
                  </div>
                  <div className="wc-stat-box">
                    <div className="wc-stat-val" style={{ color: '#f87171' }}>{missedCount}</div>
                    <div className="wc-stat-lbl">Missed</div>
                  </div>
                  <div className="wc-stat-box">
                    <div className="wc-stat-val" style={{ color: '#818cf8' }}>{activeCount}</div>
                    <div className="wc-stat-lbl">Can Join</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro badge */}
            {result.isPro && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(124,245,192,0.04)', border: '1px solid rgba(124,245,192,0.14)', borderRadius: 12, padding: '11px 18px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#7CF5C0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#7CF5C0' }}>Pro — Full Results Unlocked</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto' }}>{result.stats!.totalChecked} airdrops checked</span>
              </div>
            )}

            {/* Airdrop list */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>
                {result.isPro ? 'Airdrop Eligibility' : 'Preview'}
              </div>

              {/* Tabs — pro only */}
              {result.isPro && (
                <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
                  <button className={`wc-tab${activeTab === 'eligible' ? ' on-green' : ''}`} onClick={() => setActiveTab('eligible')}>
                    Eligible
                    <span className="wc-cnt" style={{ background: activeTab === 'eligible' ? 'rgba(124,245,192,0.15)' : 'rgba(255,255,255,0.05)', color: activeTab === 'eligible' ? '#7CF5C0' : 'rgba(255,255,255,0.3)' }}>{result.stats!.eligibleCount}</span>
                  </button>
                  <button className={`wc-tab${activeTab === 'missed' ? ' on-red' : ''}`} onClick={() => setActiveTab('missed')}>
                    Missed
                    <span className="wc-cnt" style={{ background: activeTab === 'missed' ? 'rgba(248,113,113,0.15)' : 'rgba(255,255,255,0.05)', color: activeTab === 'missed' ? '#f87171' : 'rgba(255,255,255,0.3)' }}>{result.stats!.missedCount}</span>
                  </button>
                  <button className={`wc-tab${activeTab === 'active' ? ' on-purple' : ''}`} onClick={() => setActiveTab('active')}>
                    Can Join
                    <span className="wc-cnt" style={{ background: activeTab === 'active' ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.05)', color: activeTab === 'active' ? '#818cf8' : 'rgba(255,255,255,0.3)' }}>{result.stats!.activeCount}</span>
                  </button>
                </div>
              )}

              {/* Cards + paywall */}
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {tabAirdrops.length > 0
                    ? tabAirdrops.map((a, i) => <AirdropCard key={a.slug} a={a} blurred={!result.isPro && i > 0} />)
                    : !result.isPro
                      ? null
                      : <div style={{ textAlign: 'center', padding: '40px 24px', color: 'rgba(255,255,255,0.22)', fontSize: 13 }}>No {activeTab} airdrops found for detected chains.</div>
                  }

                  {/* Blur placeholders for free tier */}
                  {!result.isPro && [0, 1, 2, 3].map(i => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(124,245,192,0.04)', border: '1px solid rgba(124,245,192,0.1)', borderRadius: 13, padding: '14px 18px', filter: 'blur(5px)', userSelect: 'none' }}>
                      <div style={{ width: 38, height: 38, borderRadius: 9, background: '#1a2540', flexShrink: 0 }} />
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <div style={{ width: '50%', height: 11, background: 'rgba(255,255,255,0.07)', borderRadius: 4 }} />
                        <div style={{ width: '32%', height: 8, background: 'rgba(255,255,255,0.04)', borderRadius: 4 }} />
                      </div>
                      <div style={{ width: 64, height: 22, background: 'rgba(124,245,192,0.08)', borderRadius: 99 }} />
                    </div>
                  ))}
                </div>

                {/* Paywall overlay */}
                {!result.isPro && (
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to bottom, transparent, rgba(6,10,18,0.92) 28%, #060A12 55%)', borderRadius: '0 0 16px 16px', padding: '80px 24px 32px', textAlign: 'center' }}>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 700, padding: '5px 14px', borderRadius: 99, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
                      Full Results Locked
                    </div>

                    <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginBottom: 8, lineHeight: 1.2 }}>
                      {missedCount} missed · {eligibleCount} eligible · {activeCount} can join
                    </h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)', marginBottom: 28, maxWidth: 340, margin: '0 auto 28px', lineHeight: 1.7 }}>
                      Unlock the complete eligibility report for this wallet across all chains — including every airdrop you missed and all active ones you can still claim.
                    </p>

                    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
                      {['Full eligibility report', 'All chains + Solana', 'Missed airdrop history', 'Monthly re-scans'].map(f => (
                        <span key={f} style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          {f}
                        </span>
                      ))}
                    </div>

                    <button className="wc-unlock-btn" onClick={handleCheckout} disabled={checkoutLoading}>
                      {checkoutLoading ? 'Redirecting...' : 'Unlock for 3 USDC / month'}
                    </button>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)', marginTop: 12 }}>
                      Pay with crypto · Cancel anytime
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Missed CTA — pro only */}
            {result.isPro && activeTab === 'missed' && result.stats!.missedCount > 0 && (
              <div style={{ background: 'rgba(248,113,113,0.04)', border: '1px solid rgba(248,113,113,0.13)', borderRadius: 14, padding: '20px 24px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f87171', marginBottom: 6 }}>
                  You missed {result.stats!.missedCount} airdrops
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)', lineHeight: 1.65, marginBottom: 16 }}>
                  Get instant alerts the moment high-value airdrops go live — before they hit Crypto Twitter.
                </div>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,245,192,0.07)', border: '1px solid rgba(124,245,192,0.18)', color: '#7CF5C0', fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                  Join Telegram Alerts
                </a>
              </div>
            )}

            {/* How we check */}
            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '22px 26px' }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>How Eligibility Is Determined</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 20 }}>
                {[
                  { title: 'Chain Detection', desc: 'We query Etherscan, Arbiscan, Basescan, and other block explorers to map which chains your wallet has been active on.' },
                  { title: 'Airdrop Matching', desc: 'We cross-reference your active chains against our database of 125+ manually verified airdrop opportunities.' },
                  { title: 'Timeline Check', desc: 'We compare your first transaction date to each airdrop window to determine if you were on-chain at the right time.' },
                  { title: 'Live Results', desc: 'Active airdrops are flagged in real-time — eligible ones can still be claimed directly from the results.' },
                ].map(({ title, desc }) => (
                  <div key={title}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 6, letterSpacing: '-0.01em' }}>{title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', lineHeight: 1.7 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Empty state */}
        {!result && !loading && !error && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14, marginTop: 8 }}>
            {[
              { title: 'Find missed airdrops',    desc: 'See every airdrop you were eligible for but didn\'t claim — across all EVM chains and Solana.',    color: '#7CF5C0' },
              { title: '125+ airdrops scanned',   desc: 'Every check runs against our full verified database, updated daily.',                               color: '#818cf8' },
              { title: 'Multi-chain in seconds',  desc: 'ETH, Arbitrum, Base, Optimism, Polygon, BNB, zkSync, Linea, and Solana — all at once.',            color: '#f59e0b' },
              { title: '3 USDC / month',          desc: 'Free tier shows a preview. Pro unlocks the complete report, missed history, and monthly re-scans.', color: '#f87171' },
            ].map(({ title, desc, color }) => (
              <div key={title} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 15, padding: '22px 20px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, marginBottom: 14, boxShadow: `0 0 8px ${color}80` }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 7, letterSpacing: '-0.02em', lineHeight: 1.35 }}>{title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', lineHeight: 1.7 }}>{desc}</div>
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
