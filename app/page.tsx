import Link from "next/link";
import EmailSignup from "./EmailSignup";
import FilterBar from "./FilterBar";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export const metadata = {
  title: 'Best Crypto Airdrops 2026 — Free Step-by-Step Guides | 3alamiy Web3',
  description: 'Find and track the best free crypto airdrops in 2026. Step-by-step guides for Ethereum, Solana, Arbitrum airdrops. Updated daily.',
  keywords: 'best crypto airdrops 2026, free crypto airdrop, airdrop tracker, ethereum airdrop, solana airdrop',
};

const articles = [
  { slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026', desc: 'ZNS vs Galxe vs Layer3 vs 3alamiy — honest comparison.', cat: 'Comparison', emoji: '⚔️' },
  { slug: 'discord-role-airdrops-guide-2026', title: 'Discord Role Airdrops 2026', desc: 'Plasma OG = $20K. Boundless = $10K+. How to grind roles.', cat: 'Strategy', emoji: '💬' },
  { slug: 'how-to-find-airdrops-before-everyone-else', title: 'Find Airdrops Before Everyone Else', desc: 'The exact system top hunters use to find airdrops early.', cat: 'Strategy', emoji: '🎯' },
  { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'Build Onchain Activity That Matters', desc: 'Quality over quantity — build a real wallet narrative.', cat: 'Onchain', emoji: '⛓️' },
  { slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026', desc: 'Discover the best free airdrops with no investment.', cat: 'Airdrops', emoji: '🆓' },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while hunting for legitimate airdrops.', cat: 'Beginners', emoji: '🛡️' },
];

export default async function Home() {
  const airdrops = await getAllAirdrops();
  const year = new Date().getFullYear();
  const activeCount = airdrops.filter((a: any) => a.status === 'Active').length;
  const freeCount = airdrops.filter((a: any) => a.cost === 'Free').length;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Hero */
        .hero { padding: 72px 24px 56px; position: relative; overflow: hidden; }
        .hero-glow { position: absolute; top: -120px; left: 50%; transform: translateX(-50%); width: 800px; height: 500px; background: radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 65%); pointer-events: none; }
        .hero-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); border-radius: 99px; padding: 5px 14px 5px 8px; font-size: 12px; color: #818cf8; margin-bottom: 20px; font-weight: 700; }
        .live-dot { background: #10b981; width: 6px; height: 6px; border-radius: 50%; display: inline-block; box-shadow: 0 0 6px #10b981; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.3} }
        .hero-title { font-size: 48px; font-weight: 900; margin: 0 0 16px; letter-spacing: -0.03em; line-height: 1.05; }
        .hero-title span { background: linear-gradient(135deg, #818cf8, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-sub { font-size: 16px; color: #71717a; max-width: 440px; margin: 0 0 32px; line-height: 1.7; }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-primary { background: linear-gradient(135deg, #6366f1, #4f46e5); color: #fff; padding: 13px 26px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 14px; box-shadow: 0 8px 24px rgba(99,102,241,0.3); transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary:hover { box-shadow: 0 12px 32px rgba(99,102,241,0.4); transform: translateY(-1px); }
        .btn-secondary { background: transparent; color: #e4e4e7; padding: 13px 26px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 14px; border: 1px solid #1a1f2e; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-secondary:hover { border-color: #2a2f3e; background: #0d1117; }

        /* Stats cards */
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .stat-card { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 20px; position: relative; overflow: hidden; }
        .stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; }
        .stat-card.green::before { background: linear-gradient(90deg, #10b981, #34d399); }
        .stat-card.purple::before { background: linear-gradient(90deg, #6366f1, #818cf8); }
        .stat-card.orange::before { background: linear-gradient(90deg, #f59e0b, #fb923c); }
        .stat-val { font-size: 32px; font-weight: 900; margin: 0 0 4px; }
        .stat-lbl { font-size: 11px; font-weight: 700; color: #52525b; text-transform: uppercase; letter-spacing: 0.06em; }

        /* Main content */
        .content { max-width: 1200px; margin: 0 auto; padding: 0 24px 80px; }
        .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
        .section-title { font-size: 20px; font-weight: 800; color: #fff; }
        .section-sub { font-size: 13px; color: #52525b; margin-top: 3px; }
        .view-all { background: #0d1117; color: #818cf8; padding: 7px 14px; border-radius: 9px; text-decoration: none; font-size: 12px; font-weight: 700; border: 1px solid rgba(99,102,241,0.2); transition: all 0.2s; }
        .view-all:hover { background: rgba(99,102,241,0.1); }

        /* Learn cards */
        .learn-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .learn-card { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 14px; padding: 18px; text-decoration: none; color: #fff; display: block; transition: all 0.2s; }
        .learn-card:hover { border-color: rgba(99,102,241,0.3); background: #0f1520; transform: translateY(-1px); }
        .learn-emoji { font-size: 20px; margin-bottom: 10px; display: block; }
        .learn-cat { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
        .learn-title { font-size: 13px; font-weight: 700; margin: 0 0 5px; color: #f4f4f5; line-height: 1.4; }
        .learn-desc { font-size: 12px; color: '#52525b'; margin: 0; line-height: 1.5; }

        /* Newsletter */
        .newsletter { padding: 80px 24px; background: #060910; position: relative; overflow: hidden; }
        .newsletter-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 300px; background: radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%); pointer-events: none; }
        .newsletter-inner { max-width: 560px; margin: 0 auto; text-align: center; position: relative; }



        /* Divider */
        .divider { height: 1px; background: linear-gradient(90deg, transparent, #1a1f2e 20%, #1a1f2e 80%, transparent); margin: 0; }

        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
          .learn-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .hero { padding: 48px 16px 36px; }
          .hero-title { font-size: 32px; }
          .stats-grid { grid-template-columns: 1fr; }
          .hero-btns { flex-direction: column; }
          .content { padding: 0 16px 60px; }
          .learn-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#060910', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>

        {/* Hero */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-inner">
            {/* Left */}
            <div>
              <div className="hero-badge">
                <span className="live-dot" />
                🔥 {airdrops.length}+ Active Airdrops Tracked
              </div>
              <h1 className="hero-title">
                Find Legit Airdrops<br />
                <span>Before Everyone Else</span>
              </h1>
              <p className="hero-sub">
                Track, analyze, and qualify for high-potential Web3 airdrops before they go mainstream. Free step-by-step guides updated daily.
              </p>
              <div className="hero-btns">
                <Link href="/airdrops" className="btn-primary">🪂 Browse Airdrops</Link>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-secondary">✈️ Join Telegram</a>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="stats-grid">
              <div className="stat-card green">
                <div className="stat-val" style={{ color: '#10b981' }}>{activeCount}</div>
                <div className="stat-lbl">Active Now</div>
              </div>
              <div className="stat-card purple">
                <div className="stat-val" style={{ color: '#818cf8' }}>{airdrops.length}+</div>
                <div className="stat-lbl">Total Guides</div>
              </div>
              <div className="stat-card orange">
                <div className="stat-val" style={{ color: '#f59e0b' }}>{freeCount}</div>
                <div className="stat-lbl">Free Airdrops</div>
              </div>
              <div className="stat-card purple" style={{ gridColumn: 'span 3' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#818cf8', marginBottom: '4px' }}>☀️ GM Station — Farm Airdrops Daily</div>
                    <div style={{ fontSize: '12px', color: '#52525b' }}>Say GM on 16+ EVM chains in one click. Build your on-chain history.</div>
                  </div>
                  <Link href="/gm" style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8', padding: '8px 16px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: 800, whiteSpace: 'nowrap' }}>
                    Open GM Station →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Airdrops */}
        <div className="content" style={{ paddingTop: '48px' }}>
          <div className="section-header">
            <div>
              <div className="section-title">🪂 Latest Airdrops</div>
              <div className="section-sub">Verified guides updated daily · {airdrops.length} total</div>
            </div>
            <Link href="/airdrops" className="view-all">View All →</Link>
          </div>
          <FilterBar airdrops={airdrops} />
        </div>

        <div className="divider" />

        {/* Learn Section */}
        <section style={{ background: '#080b12', padding: '56px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="section-header">
              <div>
                <div className="section-title">📚 Learn & Level Up</div>
                <div className="section-sub">Everything you need to qualify for the best airdrops</div>
              </div>
              <Link href="/learn/how-to-find-airdrops-before-everyone-else" className="view-all">All Articles →</Link>
            </div>
            <div className="learn-grid">
              {articles.map((a) => {
                const catColors: Record<string, string> = { Comparison: '#f43f5e', Strategy: '#818cf8', Onchain: '#34d399', Airdrops: '#f59e0b', Beginners: '#60a5fa', Ecosystems: '#c084fc' };
                return (
                  <Link key={a.slug} href={`/learn/${a.slug}`} className="learn-card">
                    <span className="learn-emoji">{a.emoji}</span>
                    <span className="learn-cat" style={{ color: catColors[a.cat] || '#818cf8' }}>{a.cat}</span>
                    <h3 className="learn-title">{a.title}</h3>
                    <p style={{ fontSize: '12px', color: '#52525b', margin: 0, lineHeight: 1.5 }}>{a.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Newsletter */}
        <section className="newsletter">
          <div className="newsletter-glow" />
          <div className="newsletter-inner">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '6px 16px', borderRadius: '99px', fontSize: '12px', fontWeight: 800, marginBottom: '20px', letterSpacing: '0.05em' }}>
              📧 FREE DAILY ALERTS
            </div>
            <h2 style={{ fontSize: '34px', fontWeight: 900, margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Never Miss a New Airdrop
            </h2>
            <p style={{ fontSize: '15px', color: '#71717a', margin: '0 0 32px', lineHeight: 1.7 }}>
              Get the best new airdrops delivered to your inbox every day. Free, no spam.
            </p>
            <EmailSignup />
            <p style={{ fontSize: '12px', color: '#3f3f46', margin: '16px 0 0' }}>
              Join 500+ Web3 farmers · No spam · Unsubscribe anytime
            </p>
          </div>
        </section>


      </div>
    </>
  );
}
