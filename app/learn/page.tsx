import type { Metadata } from 'next';
import Link from 'next/link';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAirdropCount() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=id`, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}`, 'Prefer': 'count=exact' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 100;
    const count = res.headers.get('content-range');
    if (count) return parseInt(count.split('/')[1]) || 100;
    const data = await res.json();
    return data.length || 100;
  } catch { return 100; }
}

export const metadata: Metadata = {
  title: 'Learn Crypto Airdrops 2026 — Free Guides & Strategies | 3alamiy Web3',
  description: 'Learn everything about crypto airdrops in 2026. Step-by-step guides, farming strategies, blockchain tutorials, and the best airdrop opportunities. All free.',
  keywords: 'learn crypto airdrops, airdrop guide 2026, how to farm airdrops, crypto airdrop strategy, free crypto guides',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn' },
  openGraph: {
    title: 'Learn Crypto Airdrops 2026 — Free Guides & Strategies',
    description: 'Everything you need to know about crypto airdrops in 2026. Free guides updated daily.',
    url: 'https://www.3alamiyweb3.com/learn',
    siteName: '3alamiy Web3',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: '@3alamiyweb3' },
};

const featuredArticles = [
  {
    slug: 'polymarket-2026-complete-guide',
    label: '🔥 Pinned', badge: 'Trending', desc: 'Polymarket hit $10.57B volume, US relaunch, MLS partnership, POLY token confirmed. Everything happening right now.',
  },
  {
    slug: 'best-crypto-airdrops-2026',
    title: 'Best Crypto Airdrops 2026',
    desc: 'The complete list of the best free crypto airdrops. Every airdrop verified with step-by-step guides.',
    cat: 'Airdrops', catColor: '#f59e0b', time: '8 min read', badge: 'Most Popular',
  },
  {
    slug: 'top-crypto-cards-by-volume-may-2026',
    label: '📊 Pinned', badge: 'Data',
    desc: '$750M record in May 2026. RedotPay leads at $445M. Tria fastest at +47.1%. Full breakdown with referral links.',
  },
  {
    slug: 'discord-role-airdrops-guide-2026',
    title: 'Discord Role Airdrops 2026',
    desc: 'Plasma OG holders earned $20K. How to grind Discord roles the right way.',
    cat: 'Strategy', catColor: '#818cf8', time: '9 min read', badge: 'High ROI',
  },
];

const allArticles = [
  // Static folder pages
  // Hot / Trending
  { slug: 'hyperliquid-guide', title: 'Hyperliquid Season 2 Full Guide', desc: 'HyperCore trading, HLP vault 3x multiplier, HyperEVM — complete farming strategy.', cat: 'Hot', catColor: '#7CF5C0', time: '10 min' },
  { slug: 'polymarket-airdrop-guide-2026', title: 'Polymarket POLY Airdrop Guide', desc: 'How to qualify before the snapshot. Confirmed drop — step-by-step farming strategy.', cat: 'Hot', catColor: '#f59e0b', time: '8 min' },
  { slug: 'polymarket-willo2-500k-loss', title: 'Did Polymarket Scam Willo2 — or Just Greed?', desc: 'Full breakdown of the $500K loss trending on X. What happened and what every trader needs to know.', cat: 'Analysis', catColor: '#f87171', time: '6 min' },
  { slug: 'top-25-airdrop-picks-2026', title: 'Top 25 Airdrop Picks for 2026', desc: '25 early opportunities — a16z-backed testnets, points programs, and confirmed drops.', cat: 'Strategy', catColor: '#818cf8', time: '10 min' },
  { slug: 'polymarket-2026-complete-guide', title: 'Polymarket in 2026 — Complete Guide', desc: '$10.57B volume, US relaunch, MLS partnership, POLY token confirmed. Full breakdown.', cat: 'Hot', catColor: '#f87171', time: '8 min' },
  { slug: 'bitmine-strategy-paper-losses-2026', title: 'Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC', desc: 'Combined $16.5B in unrealized losses. Full breakdown of the corporate crypto treasury crisis.', cat: 'Analysis', catColor: '#f87171', time: '7 min' },
  { slug: 'michael-saylor-2000-crash-bitcoin-history', title: 'Saylor Lost $6.8B in One Day in 2000 — Will History Repeat?', desc: 'SEC fraud, dot-com collapse, Bitcoin reversal. The full story behind crypto biggest corporate bet.', cat: 'History', catColor: '#f59e0b', time: '8 min' },
  { slug: 'top-crypto-cards-by-volume-may-2026', title: 'Top 10 Crypto Cards by Volume — May 2026', desc: '$750M record broken. RedotPay leads, Tria fastest at +47.1%. Full breakdown.', cat: 'Data', catColor: '#60a5fa', time: '6 min' },
  { slug: 'best-crypto-airdrops-nigeria-2026', title: 'Best Crypto Airdrops for Nigerians 2026', desc: 'Free airdrops fully accessible from Nigeria. Setup guide, scam warnings, and top picks.', cat: 'Geo', catColor: '#7CF5C0', time: '7 min' },
  // Weekly
  { slug: 'best-crypto-airdrops-this-week', title: 'Best Crypto Airdrops This Week', desc: 'Top picks ranked by reward potential and farming urgency. Updated every Monday.', cat: 'Weekly', catColor: '#10b981', time: '5 min' },
  // Guides
  { slug: 'best-crypto-airdrops-2026', title: 'Best Crypto Airdrops 2026', desc: 'Complete verified list with step-by-step guides. Updated daily.', cat: 'Airdrops', catColor: '#f59e0b', time: '8 min' },
  { slug: 'early-crypto-projects-2026', title: 'Best Early Crypto Projects 2026', desc: 'Farm before the announcement. a16z-backed projects across L1, DeFi, AI and DePIN.', cat: 'Alpha', catColor: '#7CF5C0', time: '9 min' },
  { slug: 'crypto-airdrop-eligibility-requirements-2026', title: 'Airdrop Eligibility Requirements 2026', desc: 'What you need to qualify — wallet, on-chain activity, checklist, and common disqualifiers.', cat: 'Beginners', catColor: '#60a5fa', time: '7 min' },
  { slug: 'best-crypto-airdrop-websites-2026', title: 'Best Crypto Airdrop Websites 2026', desc: '7 platforms ranked and compared — 3alamiy vs Airdrops.io vs CryptoRank vs Galxe.', cat: 'Comparison', catColor: '#818cf8', time: '8 min' },
  { slug: 'best-solana-airdrops-2026', title: 'Best Solana Airdrops 2026', desc: 'The top Solana ecosystem airdrops with full participation guides. Jupiter, Kamino, Drift and more.', cat: 'Ecosystems', catColor: '#9945FF', time: '9 min' },
  { slug: 'best-ai-crypto-airdrops-2026', title: 'Best AI Crypto Airdrops 2026', desc: 'Top AI projects backed by major VCs with confirmed reward campaigns.', cat: 'AI', catColor: '#c084fc', time: '10 min' },
  { slug: 'best-depin-airdrops-2026', title: 'Best DePIN Airdrops 2026', desc: 'Earn crypto passively by sharing your bandwidth and device resources.', cat: 'DePIN', catColor: '#06b6d4', time: '9 min' },
  { slug: 'discord-role-airdrops-guide-2026', title: 'Discord Role Airdrops 2026', desc: 'Plasma OG = $20K. How to grind Discord roles the right way.', cat: 'Strategy', catColor: '#818cf8', time: '9 min' },
  { slug: 'how-to-find-airdrops-before-everyone-else', title: 'Find Airdrops Before Everyone Else', desc: 'The exact system top hunters use to find airdrops early.', cat: 'Strategy', catColor: '#818cf8', time: '8 min' },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams 2026', desc: 'Stay safe while farming. Red flags and protection strategies.', cat: 'Security', catColor: '#f43f5e', time: '6 min' },
  { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'Build Onchain Activity That Matters', desc: 'Quality over quantity. What actually gets you airdrop allocations.', cat: 'Onchain', catColor: '#34d399', time: '7 min' },
  { slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026', desc: 'ZNS vs Galxe vs Layer3 vs 3alamiy Web3 — honest comparison.', cat: 'Comparison', catColor: '#f43f5e', time: '6 min' },
  { slug: 'best-crypto-airdrop-checker-tools-2026', title: 'Best Crypto Airdrop Checker Tools 2026', desc: 'Honest comparison of every major airdrop checker tool. 3alamiy, Galxe, Drops.bot, Layer3 and more.', cat: 'Comparison', catColor: '#818cf8', time: '7 min' },
  { slug: 'free-crypto-airdrops-no-investment-2026', title: 'Free Crypto Airdrops — No Investment', desc: 'The best airdrops you can farm with zero money. Just your time.', cat: 'Beginners', catColor: '#60a5fa', time: '6 min' },
  { slug: 'how-to-get-crypto-airdrops-2026', title: 'How to Get Crypto Airdrops 2026', desc: 'Complete beginner guide to qualifying for crypto airdrops.', cat: 'Beginners', catColor: '#60a5fa', time: '7 min' },
  { slug: 'what-are-crypto-airdrops', title: 'What Are Crypto Airdrops?', desc: 'Everything you need to know about airdrops explained simply.', cat: 'Beginners', catColor: '#60a5fa', time: '5 min' },
  { slug: 'upcoming-crypto-airdrops-2026', title: 'Upcoming Crypto Airdrops 2026', desc: 'Pre-TGE projects across AI, DeFi, DePIN, and Web3. Get in before they launch.', cat: 'Alpha', catColor: '#7CF5C0', time: '7 min' },
  { slug: '3alamiy-vs-galxe', title: '3alamiy Web3 vs Galxe 2026', desc: 'Which is better for airdrop farming? Honest feature-by-feature comparison.', cat: 'Comparison', catColor: '#818cf8', time: '6 min' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
  ],
};

export default async function LearnPage() {
  const airdropCount = await getAirdropCount();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .lp * { box-sizing: border-box; }
        .lp {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #D8DAE5;
        }
        .lp-hero {
          position: relative; overflow: hidden;
          padding: 56px 28px 48px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .lp-hero-glow {
          position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px; pointer-events: none;
          background: radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%);
        }
        .lp-inner { max-width: 1200px; margin: 0 auto; position: relative; }
        .lp-bc {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: rgba(255,255,255,0.3);
          margin-bottom: 24px; font-weight: 500;
        }
        .lp-bc a { color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.15s; }
        .lp-bc a:hover { color: rgba(255,255,255,0.7); }
        .lp-bc-cur { color: #7CF5C0; }
        .lp-eyebrow { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.25); margin: 0 0 10px; }
        .lp-h1 { font-weight: 700; font-size: 38px; letter-spacing: -0.03em; color: #fff; line-height: 1.1; margin: 0 0 14px; }
        .lp-h1 em { font-style: normal; color: #7CF5C0; }
        .lp-sub { font-size: 15px; color: rgba(255,255,255,0.38); line-height: 1.75; margin: 0 0 32px; max-width: 520px; font-weight: 400; }
        .lp-stats { display: flex; gap: 28px; flex-wrap: wrap; }
        .lp-stat-val { font-weight: 700; font-size: 20px; letter-spacing: -0.02em; color: #7CF5C0; line-height: 1; margin-bottom: 3px; }
        .lp-stat-lbl { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.25); }

        .lp-body { max-width: 1200px; margin: 0 auto; padding: 40px 28px 80px; }

        .lp-sec-hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
        .lp-sec-title { font-weight: 700; font-size: 18px; letter-spacing: -0.02em; color: #fff; }
        .lp-sec-sub { font-size: 12px; color: rgba(255,255,255,0.28); margin-top: 2px; }

        .lp-featured { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 48px; }
        .lp-feat {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 22px; text-decoration: none; color: #fff;
          display: flex; flex-direction: column; gap: 10px;
          transition: border-color 0.15s, transform 0.15s; position: relative; overflow: hidden;
        }
        .lp-feat::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,245,192,0) 50%, transparent);
          transition: background 0.3s;
        }
        .lp-feat:hover { border-color: rgba(124,245,192,0.15); transform: translateY(-2px); }
        .lp-feat:hover::before { background: linear-gradient(90deg, transparent, rgba(124,245,192,0.25) 50%, transparent); }
        .lp-feat-badge { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); padding: 3px 10px; border-radius: 99px; width: fit-content; }
        .lp-feat-cat { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px; }
        .lp-feat-title { font-weight: 700; font-size: 16px; letter-spacing: -0.015em; color: #fff; margin: 0; line-height: 1.35; }
        .lp-feat-desc { font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.65; margin: 0; }
        .lp-feat-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.05); margin-top: auto; }
        .lp-feat-time { font-size: 11px; color: rgba(255,255,255,0.25); font-weight: 500; }
        .lp-feat-arrow { font-size: 12px; color: #7CF5C0; font-weight: 600; }

        .lp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .lp-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 18px; text-decoration: none; color: #fff;
          display: flex; flex-direction: column; gap: 8px;
          transition: border-color 0.15s, background 0.15s;
        }
        .lp-card:hover { border-color: rgba(124,245,192,0.13); background: rgba(124,245,192,0.01); }
        .lp-card-cat { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
        .lp-card-title { font-weight: 600; font-size: 14px; letter-spacing: -0.01em; color: #fff; margin: 0; line-height: 1.4; }
        .lp-card-desc { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.6; margin: 0; }
        .lp-card-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.04); margin-top: auto; }
        .lp-card-time { font-size: 10px; color: rgba(255,255,255,0.22); font-weight: 500; }
        .lp-card-arr { font-size: 11px; color: rgba(255,255,255,0.3); transition: color 0.15s; }
        .lp-card:hover .lp-card-arr { color: #7CF5C0; }

        .lp-cta {
          background: linear-gradient(135deg, #0B1C15, #0C1728);
          border: 1px solid rgba(124,245,192,0.13); border-radius: 20px;
          padding: 44px 32px; text-align: center; margin-top: 48px;
          position: relative; overflow: hidden;
        }
        .lp-cta::before {
          content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 400px; height: 280px; pointer-events: none;
          background: radial-gradient(ellipse, rgba(124,245,192,0.05) 0%, transparent 65%);
        }
        .lp-cta-title { font-weight: 700; font-size: 24px; letter-spacing: -0.025em; color: #fff; margin: 0 0 10px; position: relative; }
        .lp-cta-sub { font-size: 14px; color: rgba(255,255,255,0.35); line-height: 1.7; margin: 0 auto 24px; max-width: 400px; position: relative; }
        .lp-cta-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative; }
        .btn-lp-p {
          display: inline-flex; align-items: center; gap: 7px;
          background: #7CF5C0; color: #04120A;
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px; letter-spacing: -0.01em;
          padding: 12px 24px; border-radius: 12px; text-decoration: none;
          transition: opacity 0.15s, transform 0.15s;
        }
        .btn-lp-p:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-lp-s {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5);
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px;
          padding: 12px 22px; border-radius: 12px; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.09); transition: background 0.15s;
        }
        .btn-lp-s:hover { background: rgba(255,255,255,0.07); }

        @media (max-width: 768px) {
          .lp-hero { padding: 40px 16px 36px; }
          .lp-h1 { font-size: 28px; }
          .lp-body { padding: 28px 16px 60px; }
          .lp-featured { grid-template-columns: 1fr; }
          .lp-grid { grid-template-columns: 1fr 1fr; }
          .lp-cta { padding: 32px 20px; }
          .lp-cta-title { font-size: 20px; }
        }
        @media (max-width: 480px) {
          .lp-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="lp">

        {/* Hero */}
        <div className="lp-hero">
          <div className="lp-hero-glow" />
          <div className="lp-inner">
            <nav className="lp-bc">
              <Link href="/">Home</Link>
              <span>›</span>
              <span className="lp-bc-cur">Learn</span>
            </nav>
            <p className="lp-eyebrow">Free Guides</p>
            <h1 className="lp-h1">Learn Crypto <em>Airdrops</em></h1>
            <p className="lp-sub">
              Everything you need to qualify for the best crypto airdrops in 2026. Step-by-step guides, farming strategies, and weekly picks — all free.
            </p>
            <div className="lp-stats">
              <div><div className="lp-stat-val">{allArticles.length}+</div><div className="lp-stat-lbl">Free Guides</div></div>
              <div><div className="lp-stat-val">Weekly</div><div className="lp-stat-lbl">Updated</div></div>
              <div><div className="lp-stat-val">{airdropCount}+</div><div className="lp-stat-lbl">Airdrops Tracked</div></div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="lp-body">

          {/* Featured */}
          <div className="lp-sec-hdr">
            <div>
              <div className="lp-sec-title">Featured Articles</div>
              <div className="lp-sec-sub">Most read guides this month</div>
            </div>
          </div>
          <div className="lp-featured">
            {featuredArticles.map(a => (
              <Link key={a.slug} href={`/learn/${a.slug}`} className="lp-feat">
                <span className="lp-feat-badge">{a.badge}</span>
                <div>
                  <div className="lp-feat-cat" style={{ color: a.catColor }}>{a.cat}</div>
                  <h2 className="lp-feat-title">{a.title}</h2>
                </div>
                <p className="lp-feat-desc">{a.desc}</p>
                <div className="lp-feat-foot">
                  <span className="lp-feat-time">{a.time}</span>
                  <span className="lp-feat-arrow">Read →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* All articles */}
          <div className="lp-sec-hdr">
            <div>
              <div className="lp-sec-title">All Guides</div>
              <div className="lp-sec-sub">{allArticles.length} articles covering airdrops, strategy, and Web3</div>
            </div>
          </div>
          <div className="lp-grid">
            {allArticles.map(a => (
              <Link key={a.slug} href={`/learn/${a.slug}`} className="lp-card">
                <div className="lp-card-cat" style={{ color: a.catColor }}>{a.cat}</div>
                <h3 className="lp-card-title">{a.title}</h3>
                <p className="lp-card-desc">{a.desc}</p>
                <div className="lp-card-foot">
                  <span className="lp-card-time">{a.time} read</span>
                  <span className="lp-card-arr">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="lp-cta">
            <h2 className="lp-cta-title">Ready to Start Farming?</h2>
            <p className="lp-cta-sub">Browse {airdropCount}+ verified airdrops with step-by-step guides. Free, no paywall.</p>
            <div className="lp-cta-btns">
              <Link href="/airdrops" className="btn-lp-p">Browse Airdrops →</Link>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-lp-s">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 13, height: 13 }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join Telegram
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
