'use client';

import { useState } from 'react';
import Link from 'next/link';

const STATS = [
  { value: '125+', label: 'Airdrops Tracked' },
  { value: '9',    label: 'Chains Scanned' },
  { value: '$4.2K', label: 'Avg User Earnings' },
  { value: '3 USDC', label: 'Per Month' },
];

const FEATURES = [
  { title: 'Full Wallet Eligibility Report',      desc: 'See every airdrop you qualified for across ETH, Arbitrum, Base, Optimism, Polygon, BNB, zkSync, Linea, and Solana.' },
  { title: 'Missed Airdrop History',              desc: 'Know exactly which airdrops you missed and why — so you never repeat the same mistake.' },
  { title: 'Active Airdrop Alerts',               desc: 'Real-time list of live airdrops you can still claim right now, filtered to your active chains.' },
  { title: 'Monthly Re-Scans',                    desc: 'Your wallet is re-checked every 30 days automatically as new airdrops launch.' },
  { title: '125+ Verified Opportunities',         desc: 'Every airdrop in our database is manually researched and vetted — no scams, no noise.' },
  { title: 'Pay with Crypto',                     desc: 'No credit card, no KYC. Pay 3 USDC from any wallet. Cancel any time.' },
];

const PAST_WINS = [
  { name: 'Arbitrum (ARB)',   chain: 'Arbitrum',  value: '$2,000+',  year: '2023', hunters: '8,700' },
  { name: 'zkSync (ZK)',      chain: 'zkSync',    value: '$800+',    year: '2024', hunters: '5,693' },
  { name: 'Scroll (SCR)',     chain: 'Scroll',    value: '$600+',    year: '2024', hunters: '1,702' },
  { name: 'Starknet (STRK)',  chain: 'Starknet',  value: '$1,500+',  year: '2024', hunters: '1,266' },
  { name: 'EigenLayer (EIGEN)',chain: 'Ethereum', value: '$1,200+',  year: '2024', hunters: '1,534' },
  { name: 'Jito (JTO)',       chain: 'Solana',    value: '$3,000+',  year: '2023', hunters: '320' },
];

const TESTIMONIALS = [
  { name: 'CryptoRaider',  period: '6 months',  text: 'Caught Scroll and zkSync from this tracker. Both dropped while I was active on-chain. This thing paid for itself 200×.' },
  { name: 'web3_amara',    period: '3 months',  text: 'The wallet checker told me I missed 4 airdrops. Fixed my on-chain habits immediately. Already qualified for 3 new ones.' },
  { name: 'onchain_abdou', period: '1 year',    text: 'Best 3 USDC I spend every month. The airdrop database alone is worth it — everything is verified and updated constantly.' },
];

const FAQS = [
  {
    q: 'How does the wallet checker work?',
    a: 'Paste any EVM or Solana address. We query 9 chain explorers, map your activity history, and cross-reference it against our airdrop database to determine eligibility.',
  },
  {
    q: 'What chains are supported?',
    a: 'Ethereum, Arbitrum, Base, Optimism, Polygon, BNB Chain, zkSync, Linea, and Solana — all scanned simultaneously.',
  },
  {
    q: 'Is my wallet data stored?',
    a: 'No. We read public on-chain data from block explorers. Your wallet address is only used to query public APIs — nothing is stored beyond your subscription status.',
  },
  {
    q: 'How do I pay?',
    a: 'You pay 3 USDC per month via NOWPayments — a crypto payment gateway that accepts 300+ coins. No credit card or KYC required.',
  },
  {
    q: 'Can I check multiple wallets?',
    a: 'Your subscription unlocks full results for any wallet address — paste a different one any time and run a fresh scan.',
  },
  {
    q: 'How do I cancel?',
    a: 'Subscriptions run for 30 days per payment. Simply don\'t renew — there\'s no contract or recurring charge.',
  },
];

export default function ProPageClient() {
  const [wallet, setWallet] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleCheckout() {
    const addr = wallet.trim();
    if (!addr) { setError('Enter your wallet address first'); return; }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/create-crypto-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet: addr }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else throw new Error(data.error || 'Failed to create payment');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ background: '#060A12', minHeight: '100vh', color: '#fff', fontFamily: "var(--font-space),'Space Grotesk',system-ui,sans-serif" }}>
      <style>{`
        .pro * { box-sizing: border-box; }
        .pro-wrap { max-width: 900px; margin: 0 auto; padding: 0 22px; }
        .pro-btn-green { background: linear-gradient(135deg,#7CF5C0,#4ade80); color: #060A12; border: none; font-family: inherit; font-weight: 900; cursor: pointer; border-radius: 12px; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 6px 24px rgba(124,245,192,0.25); letter-spacing: -0.02em; }
        .pro-btn-green:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(124,245,192,0.38); }
        .pro-btn-green:disabled { opacity: 0.6; cursor: not-allowed; }
        .pro-wallet-input { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 12px; padding: 14px 18px; color: #fff; font-size: 14px; font-family: monospace; outline: none; width: 100%; transition: border-color 0.15s; }
        .pro-wallet-input:focus { border-color: rgba(124,245,192,0.3); }
        .pro-wallet-input::placeholder { color: rgba(255,255,255,0.18); font-family: var(--font-space),system-ui,sans-serif; }
        .pro-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.07); border-radius: 18px; }
        .pro-feature-row { display: flex; gap: 14px; padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .pro-feature-row:last-child { border-bottom: none; }
        .pro-faq-btn { width: 100%; text-align: left; background: none; border: none; color: #fff; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; padding: 20px 22px; display: flex; justify-content: space-between; align-items: center; letter-spacing: -0.02em; }
        .pro-testimonial { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 22px 24px; }
        @media (max-width: 640px) {
          .pro-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .pro-wins-grid { grid-template-columns: 1fr !important; }
          .pro-testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="pro">

        {/* ── HERO ── */}
        <div style={{ background: 'linear-gradient(180deg,rgba(124,245,192,0.04) 0%,transparent 100%)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 80, paddingTop: 72 }}>
          <div className="pro-wrap" style={{ textAlign: 'center' }}>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,245,192,0.07)', border: '1px solid rgba(124,245,192,0.18)', color: '#7CF5C0', fontSize: 11, fontWeight: 800, padding: '5px 16px', borderRadius: 99, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7CF5C0', display: 'inline-block', boxShadow: '0 0 8px rgba(124,245,192,0.7)' }} />
              3alamiy Web3 Pro
            </div>

            <h1 style={{ fontSize: 'clamp(34px,6vw,62px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.05, marginBottom: 22 }}>
              Never miss an<br />
              <span style={{ background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>airdrop again</span>
            </h1>

            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 48px' }}>
              Scan any wallet across 9 chains, see every airdrop you qualified for, and get instant alerts on live drops — for 3 USDC a month.
            </p>

            {/* Stats */}
            <div className="pro-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, maxWidth: 680, margin: '0 auto 56px' }}>
              {STATS.map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 12px' }}>
                  <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.04em', color: '#7CF5C0', marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                className="pro-wallet-input"
                value={wallet}
                onChange={e => setWallet(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCheckout()}
                placeholder="Paste your wallet address (EVM or Solana)"
              />
              {error && <div style={{ fontSize: 12, color: '#f87171' }}>{error}</div>}
              <button className="pro-btn-green" onClick={handleCheckout} disabled={loading} style={{ padding: '17px 24px', fontSize: 16, width: '100%' }}>
                {loading ? 'Redirecting to payment...' : 'Unlock Pro — 3 USDC / month'}
              </button>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)', margin: 0 }}>
                Crypto only · No credit card · No KYC · Cancel any time
              </p>
            </div>

          </div>
        </div>

        {/* ── WHAT YOU GET ── */}
        <div className="pro-wrap" style={{ padding: '80px 22px' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Everything Included</div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>
              What Pro unlocks
            </h2>
          </div>

          <div className="pro-card" style={{ padding: '6px 28px 12px' }}>
            {FEATURES.map(f => (
              <div key={f.title} className="pro-feature-row">
                <div style={{ marginTop: 2, flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4, letterSpacing: '-0.02em' }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)', lineHeight: 1.7 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PAST WINS ── */}
        <div style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '80px 0' }}>
          <div className="pro-wrap">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Track Record</div>
              <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 12 }}>
                Airdrops we called early
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
                These are the major airdrops our database tracked before they dropped. Users who were active on the right chains claimed them.
              </p>
            </div>

            <div className="pro-wins-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
              {PAST_WINS.map(w => (
                <div key={w.name} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#7CF5C0', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.16)', padding: '2px 9px', borderRadius: 99 }}>{w.chain}</span>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontWeight: 600 }}>{w.year}</span>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 6 }}>{w.name}</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#7CF5C0', letterSpacing: '-0.04em', marginBottom: 10 }}>{w.value}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', fontWeight: 600 }}>{w.hunters} hunters</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="pro-wrap" style={{ padding: '80px 22px' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Community</div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>
              From Pro members
            </h2>
          </div>

          <div className="pro-testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="pro-testimonial">
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[0,1,2,3,4].map(i => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.name}</span>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontWeight: 600 }}>Pro for {t.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PRICING CARD ── */}
        <div style={{ background: 'rgba(124,245,192,0.02)', borderTop: '1px solid rgba(124,245,192,0.08)', borderBottom: '1px solid rgba(124,245,192,0.08)', padding: '80px 0' }}>
          <div className="pro-wrap">
            <div style={{ maxWidth: 520, margin: '0 auto' }}>

              <div className="pro-card" style={{ border: '1px solid rgba(124,245,192,0.18)', padding: '40px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

                {/* Glow */}
                <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 320, height: 160, background: 'radial-gradient(ellipse,rgba(124,245,192,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ fontSize: 10, fontWeight: 800, color: '#7CF5C0', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>3alamiy Web3 Pro</div>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 4, marginBottom: 6 }}>
                  <span style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', lineHeight: 1 }}>3</span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: '#7CF5C0', marginBottom: 8 }}>USDC</span>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginBottom: 36 }}>per month · pay with any crypto</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 36, textAlign: 'left' }}>
                  {['Full wallet eligibility report', 'Missed airdrop history', 'Active airdrop alerts', 'All 9 chains + Solana', '125+ verified airdrops', 'Monthly re-scans'].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <input
                    className="pro-wallet-input"
                    value={wallet}
                    onChange={e => setWallet(e.target.value)}
                    placeholder="Your wallet address"
                    style={{ textAlign: 'center' }}
                  />
                  {error && <div style={{ fontSize: 12, color: '#f87171' }}>{error}</div>}
                  <button className="pro-btn-green" onClick={handleCheckout} disabled={loading} style={{ padding: '17px 24px', fontSize: 15, width: '100%' }}>
                    {loading ? 'Redirecting...' : 'Unlock Pro — 3 USDC / month'}
                  </button>
                </div>

                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)', marginTop: 16, marginBottom: 0 }}>
                  Pay once, active for 30 days · BTC, ETH, USDT, SOL accepted · No recurring charge
                </p>
              </div>

              {/* Already subscribed link */}
              <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.22)', marginTop: 20 }}>
                Already subscribed?{' '}
                <Link href="/wallet-checker" style={{ color: '#7CF5C0', textDecoration: 'none', fontWeight: 600 }}>
                  Check your wallet →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div className="pro-wrap" style={{ padding: '80px 22px' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Process</div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>How it works</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
            {[
              { step: '01', title: 'Paste your wallet',       desc: 'Enter any EVM address or Solana wallet. No sign-up or KYC.' },
              { step: '02', title: 'Pay 3 USDC',              desc: 'Choose your crypto — BTC, ETH, USDT, USDC, SOL. Instant confirmation.' },
              { step: '03', title: 'Get the full report',     desc: 'Your complete airdrop eligibility history unlocks immediately after payment.' },
              { step: '04', title: 'Stay updated monthly',    desc: 'Your wallet is re-scanned automatically every 30 days as new airdrops go live.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="pro-card" style={{ padding: '26px 24px' }}>
                <div style={{ fontSize: 11, fontWeight: 900, color: '#7CF5C0', letterSpacing: '0.04em', marginBottom: 14, opacity: 0.6 }}>{step}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 10 }}>{title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', lineHeight: 1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 0' }}>
          <div className="pro-wrap">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>Common questions</h2>
            </div>

            <div className="pro-card" style={{ padding: '6px 0' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderBottom: i < FAQS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <button className="pro-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 22px 20px', fontSize: 14, color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div style={{ padding: '60px 22px 100px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 16 }}>
            Start hunting today
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.32)', marginBottom: 36, maxWidth: 420, margin: '0 auto 36px' }}>
            3 USDC. No account. No KYC. Full wallet report in seconds.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="pro-btn-green" onClick={() => document.querySelector<HTMLInputElement>('.pro-wallet-input')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '15px 32px', fontSize: 15 }}>
              Get Started
            </button>
            <Link href="/airdrops" style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.55)', fontSize: 14, fontWeight: 600, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', transition: 'background 0.15s' }}>
              Browse Airdrops Free
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
