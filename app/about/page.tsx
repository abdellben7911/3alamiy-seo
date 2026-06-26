import type { Metadata } from 'next';
import EmailSignup from '../EmailSignup';

export const metadata: Metadata = {
  title: 'About 3alamiy Web3 — Crypto Airdrop Tracker & Guide Platform',
  description: '3alamiy Web3 is a leading crypto airdrop tracker helping 2,500+ Web3 users discover, track, and participate in the best crypto airdrops of 2026. Free step-by-step guides for every airdrop.',
  keywords: 'about 3alamiy web3, crypto airdrop tracker, airdrop guide platform, web3 community',
  alternates: { canonical: 'https://www.3alamiyweb3.com/about' },
  openGraph: {
    title: 'About 3alamiy Web3 — Crypto Airdrop Tracker',
    description: '3alamiy Web3 is a leading crypto airdrop tracker helping Web3 users discover and participate in the best airdrops of 2026.',
    url: 'https://www.3alamiyweb3.com/about',
    siteName: '3alamiy Web3',
    type: 'website',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '3alamiy Web3',
  url: 'https://www.3alamiyweb3.com',
  description: '3alamiy Web3 is a crypto airdrop tracker and guide platform helping Web3 users discover, track, and participate in the best crypto airdrops.',
  foundingDate: '2026',
  sameAs: ['https://www.3alamiyweb3.com', 'https://t.me/web33alamiy'],
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://t.me/web33alamiy' },
  areaServed: 'Worldwide',
};

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAirdropCount() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=id`, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return 102;
    const data = await res.json();
    return data.length;
  } catch { return 102; }
}

export default async function AboutPage() {
  const airdropCount = await getAirdropCount();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .about-root {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #fff;
        }

        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gradShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        .afu  { animation: fadeUp 0.6s ease both; }
        .afu1 { animation: fadeUp 0.6s 0.1s ease both; }
        .afu2 { animation: fadeUp 0.6s 0.2s ease both; }
        .afu3 { animation: fadeUp 0.6s 0.3s ease both; }
        .afu4 { animation: fadeUp 0.6s 0.4s ease both; }

        /* HERO */
        .about-hero {
          position: relative; overflow: hidden;
          padding: 80px 24px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .about-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px);
          background-size: 52px 52px; pointer-events: none;
        }
        .about-hero-glow {
          position: absolute; top: -80px; left: -80px;
          width: 600px; height: 500px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .about-hero-inner { position: relative; max-width: 1200px; margin: 0 auto; }
        .about-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(255,255,255,0.25);
          margin-bottom: 20px;
        }
        .about-h1 {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 900; line-height: 1.06;
          letter-spacing: -0.035em; color: #fff;
          margin-bottom: 0;
        }
        .about-h1-accent {
          display: block;
          background: linear-gradient(135deg, #6366f1, #818cf8, #6366f1);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 4s ease infinite;
        }
        .about-sub {
          font-size: 15px; color: rgba(255,255,255,0.38);
          line-height: 1.75; max-width: 500px; margin-top: 20px;
        }

        /* CARDS GRID */
        .about-grid {
          max-width: 1200px; margin: 0 auto;
          padding: 40px 24px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .about-card {
          background: #0D1221;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; padding: 28px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .about-card:hover { border-color: rgba(99,102,241,0.2); transform: translateY(-2px); }
        .about-card-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px; font-size: 18px;
        }
        .about-card-title {
          font-size: 17px; font-weight: 900; letter-spacing: -0.02em;
          color: #fff; margin-bottom: 12px;
        }
        .about-card-text {
          font-size: 13px; color: rgba(255,255,255,0.38);
          line-height: 1.75;
        }
        .about-card-list {
          list-style: none; display: flex; flex-direction: column; gap: 6px;
        }
        .about-card-list li {
          font-size: 13px; color: rgba(255,255,255,0.38);
          display: flex; align-items: flex-start; gap: 6px;
          line-height: 1.5;
        }
        .about-card-list li::before {
          content: '·'; color: rgba(255,255,255,0.2); flex-shrink: 0; margin-top: 1px;
        }

        /* TALK TO US CARD */
        .about-card-tg {
          background: linear-gradient(135deg, #0D1A2B, #080C14);
          border-color: rgba(99,102,241,0.15);
        }
        .about-tg-sub {
          font-size: 13px; color: rgba(255,255,255,0.3);
          margin-bottom: 22px; line-height: 1.6;
        }
        .about-tg-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #fff; font-size: 13px; font-weight: 700;
          padding: 12px 22px; border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(99,102,241,0.3);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .about-tg-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(99,102,241,0.4); }

        /* EMAIL STRIP */
        .about-email-strip {
          max-width: 1200px; margin: 12px auto 0;
          padding: 0 24px;
        }
        .about-email-card {
          background: linear-gradient(135deg, #0D1A2B, #0A1020);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 18px; padding: 32px 36px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: center;
          position: relative; overflow: hidden;
        }
        .about-email-card::before {
          content: ''; position: absolute; top: -80px; right: -80px;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%);
        }
        .about-email-label {
          font-size: 9px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.14em; color: #818cf8; margin-bottom: 10px;
        }
        .about-email-title {
          font-size: clamp(20px, 3vw, 28px); font-weight: 900;
          letter-spacing: -0.03em; color: #fff; margin-bottom: 8px; line-height: 1.2;
        }
        .about-email-sub {
          font-size: 13px; color: rgba(255,255,255,0.3); line-height: 1.6;
        }

        /* STATS ROW */
        .about-stats {
          max-width: 1200px; margin: 40px auto 0;
          padding: 0 24px;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
        }
        .about-stat {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 22px; text-align: center;
        }
        .about-stat-num {
          font-size: 32px; font-weight: 900; letter-spacing: -0.04em;
          margin-bottom: 4px;
        }
        .about-stat-label {
          font-size: 11px; color: rgba(255,255,255,0.3);
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;
        }

        /* BOTTOM PADDING */
        .about-bottom { padding-bottom: 80px; }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-email-card { grid-template-columns: 1fr; gap: 20px; }
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .about-hero { padding: 56px 16px 48px; }
          .about-grid { padding: 24px 16px 0; }
          .about-email-strip { padding: 0 16px; }
          .about-stats { padding: 0 16px; }
        }
      `}</style>

      <div className="about-root">

        {/* HERO */}
        <section className="about-hero">
          <div className="about-hero-grid" />
          <div className="about-hero-glow" />
          <div className="about-hero-inner">
            <div className="about-label afu">About</div>
            <h1 className="about-h1">
              <span className="afu1">Built by hunters.</span>
              <span className="about-h1-accent afu2">For every hunter.</span>
            </h1>
            <p className="about-sub afu3">
              We started 3alamiy Web3 because every airdrop site we trusted eventually put up a paywall. So we built one that never will.
            </p>
          </div>
        </section>

        {/* STATS */}
        <div className="about-stats afu2">
          {[
            { num: `${airdropCount}+`, label: 'Airdrops Tracked', color: '#7CF5C0' },
            { num: '2,500+', label: 'Monthly Users', color: '#818cf8' },
            { num: '40+', label: 'Countries', color: '#f59e0b' },
            { num: '100%', label: 'Always Free', color: '#f43f5e' },
          ].map(s => (
            <div key={s.label} className="about-stat">
              <div className="about-stat-num" style={{ color: s.color }}>{s.num}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CARDS GRID */}
        <div className="about-grid">

          {/* Mission */}
          <div className="about-card afu2">
            <div className="about-card-icon" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <div className="about-card-title">Our mission</div>
            <p className="about-card-text">
              Make every crypto airdrop accessible to anyone with a wallet and ten minutes a day. No gatekeeping, no premium tiers, no DM-for-alpha grift.
            </p>
          </div>

          {/* Always free */}
          <div className="about-card afu3">
            <div className="about-card-icon" style={{ background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
            </div>
            <div className="about-card-title">What's always free</div>
            <ul className="about-card-list">
              <li>Every airdrop guide, end-to-end</li>
              <li>Daily updates and new project alerts</li>
              <li>Beginner-to-expert learning hub</li>
              <li>GM Station daily activity tool</li>
            </ul>
          </div>

          {/* Team */}
          <div className="about-card afu3">
            <div className="about-card-icon" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div className="about-card-title">The team</div>
            <p className="about-card-text" style={{ marginBottom: '12px' }}>
              We're a small group of full-time airdrop farmers across MENA, EU, and SEA. Every guide is written by someone who actually completed the tasks — usually the same day the project went live.
            </p>
            <p className="about-card-text">
              If you want to contribute a guide or list your project, ping us on Telegram. We read every message.
            </p>
          </div>

          {/* Talk to us */}
          <div className="about-card about-card-tg afu4">
            <div className="about-card-icon" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
            <div className="about-card-title">Talk to us</div>
            <p className="about-tg-sub">Telegram is the fastest. Email if it's serious.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="https://t.me/web33alamiy"
                target="_blank"
                rel="noopener noreferrer"
                className="about-tg-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                Open Telegram channel
              </a>
              <a
                href="mailto:contact@3alamiyweb3.com"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 700, padding: '12px 22px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.15s' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                contact@3alamiyweb3.com
              </a>
            </div>
          </div>

        </div>

        {/* EMAIL STRIP */}
        <div className="about-email-strip" style={{ marginTop: '12px' }}>
          <div className="about-email-card afu4">
            <div style={{ position: 'relative' }}>
              <div className="about-email-label">Get the Friday Drop</div>
              <div className="about-email-title">One email. One opportunity.</div>
              <p className="about-email-sub">The single best airdrop of the week, delivered Friday morning. Unsubscribe anytime.</p>
            </div>
            <div style={{ position: 'relative' }}>
              <EmailSignup />
            </div>
          </div>
        </div>

        <div className="about-bottom" />

      </div>
    </>
  );
}
