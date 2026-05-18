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
  title: 'Best Crypto Airdrops 2026 — Free Guides | 3alamiy Web3',
  description: 'Track and participate in the best free crypto airdrops of 2026. Step-by-step guides for Ethereum, Solana, Arbitrum, Base, Monad and more. Updated daily.',
  keywords: 'best crypto airdrops 2026, free crypto airdrop, airdrop tracker, ethereum airdrop, solana airdrop',
};

const articles = [
  { slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026', desc: 'ZNS vs Galxe vs Layer3 — honest comparison.', cat: 'Comparison' },
  { slug: 'discord-role-airdrops-guide-2026', title: 'Discord Role Airdrops 2026', desc: 'Plasma OG = $20K. How to grind roles.', cat: 'Strategy' },
  { slug: 'how-to-find-airdrops-before-everyone-else', title: 'Find Airdrops Before Everyone Else', desc: 'The exact system top hunters use.', cat: 'Strategy' },
  { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'Build Onchain Activity That Matters', desc: 'Quality over quantity.', cat: 'Onchain' },
  { slug: 'upcoming-crypto-airdrops-2026', title: 'Upcoming Crypto Airdrops 2026', desc: 'Don\'t miss these high-potential drops.', cat: 'Airdrops' },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while farming.', cat: 'Beginners' },
];

const catColors: Record<string, string> = {
  Comparison: '#f43f5e', Strategy: '#818cf8', Onchain: '#34d399',
  Airdrops: '#f59e0b', Beginners: '#60a5fa', Ecosystems: '#c084fc',
};

export default async function Home() {
  const airdrops = await getAllAirdrops();
  const activeCount = airdrops.filter((a: any) => a.status === 'Active').length;
  const freeCount = airdrops.filter((a: any) => a.cost === 'Free').length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        *{box-sizing:border-box;margin:0;padding:0;}

        .page{min-height:100vh;background:#020617;font-family:'Inter',system-ui,sans-serif;color:#fff;}

        /* ── HERO ── */
        .hero{position:relative;overflow:hidden;padding:80px 24px 72px;}
        .hero-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;}
        .hero-radial{position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:900px;height:700px;background:radial-gradient(ellipse,rgba(99,102,241,0.14) 0%,rgba(99,102,241,0.04) 40%,transparent 70%);pointer-events:none;}
        .hero-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;position:relative;}

        /* Eyebrow */
        .eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.18);border-radius:99px;padding:6px 14px 6px 10px;margin-bottom:24px;}
        .eyebrow-dot{width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;animation:pulse 1.8s infinite;}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.85)}}
        .eyebrow-text{font-size:12px;font-weight:700;color:#818cf8;letter-spacing:0.02em;}

        /* Heading */
        .hero-h1{font-family:'Space Grotesk',sans-serif;font-size:52px;font-weight:800;line-height:1.08;letter-spacing:-0.03em;margin-bottom:20px;color:#fff;}
        .hero-h1 .grad{background:linear-gradient(135deg,#818cf8 0%,#6366f1 40%,#a78bfa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .hero-sub{font-size:17px;color:#94a3b8;line-height:1.75;max-width:460px;margin-bottom:36px;}

        /* CTA */
        .cta-row{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:48px;}
        .btn-primary{background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;padding:14px 28px;border-radius:14px;text-decoration:none;font-weight:700;font-size:14px;box-shadow:0 8px 28px rgba(99,102,241,0.35);transition:all 0.2s;display:inline-flex;align-items:center;gap:8px;letter-spacing:-0.01em;}
        .btn-primary:hover{box-shadow:0 12px 36px rgba(99,102,241,0.5);transform:translateY(-2px);}
        .btn-ghost{background:transparent;color:#e2e8f0;padding:14px 28px;border-radius:14px;text-decoration:none;font-weight:600;font-size:14px;border:1px solid rgba(255,255,255,0.1);transition:all 0.2s;display:inline-flex;align-items:center;gap:8px;}
        .btn-ghost:hover{border-color:rgba(255,255,255,0.2);background:rgba(255,255,255,0.04);}

        /* Social proof */
        .social-proof{display:flex;align-items:center;gap:16px;flex-wrap:wrap;}
        .proof-stat{display:flex;flex-direction:column;}
        .proof-val{font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:800;color:#fff;letter-spacing:-0.02em;}
        .proof-lbl{font-size:10px;color:#475569;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;}
        .proof-div{width:1px;height:32px;background:#1e293b;}

        /* Right — feature cards grid */
        .hero-right{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        .feat-card{background:rgba(15,23,42,0.8);border:1px solid #1e293b;border-radius:16px;padding:18px;backdrop-filter:blur(8px);transition:all 0.2s;position:relative;overflow:hidden;}
        .feat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(99,102,241,0.3),transparent);opacity:0;}
        .feat-card:hover{border-color:rgba(99,102,241,0.25);transform:translateY(-2px);}
        .feat-card:hover::before{opacity:1;}
        .feat-card.wide{grid-column:span 2;}
        .feat-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;flex-shrink:0;}
        .feat-title{font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:700;color:#f1f5f9;margin-bottom:4px;}
        .feat-desc{font-size:12px;color:#64748b;line-height:1.5;}
        .feat-metric{font-family:'Space Grotesk',sans-serif;font-size:26px;font-weight:800;margin-bottom:2px;}

        /* ── DIVIDER ── */
        .divider{height:1px;background:linear-gradient(90deg,transparent,#1e293b 20%,#1e293b 80%,transparent);}

        /* ── STARTER BANNER ── */
        .starter{padding:28px 24px;background:linear-gradient(135deg,rgba(16,185,129,0.04),rgba(99,102,241,0.04));border-bottom:1px solid #0f172a;}
        .starter-inner{max-width:1200px;margin:0 auto;}
        .starter-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px;}
        .starter-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .sc-card{background:#0e1223;border:1px solid #1e293b;border-radius:14px;padding:16px;text-decoration:none;color:#fff;display:flex;align-items:center;gap:14px;transition:all 0.2s;}
        .sc-card:hover{border-color:rgba(16,185,129,0.3);transform:translateY(-1px);}

        /* ── CONTENT ── */
        .content{max-width:1200px;margin:0 auto;padding:0 24px 80px;}
        .sec-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px;}
        .sec-title{font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:800;color:#f1f5f9;letter-spacing:-0.01em;}
        .sec-sub{font-size:12px;color:#475569;margin-top:3px;}
        .view-all{background:#0f172a;color:#818cf8;padding:7px 14px;border-radius:9px;text-decoration:none;font-size:12px;font-weight:700;border:1px solid rgba(99,102,241,0.2);transition:all 0.2s;}
        .view-all:hover{background:rgba(99,102,241,0.1);}

        /* ── LEARN ── */
        .learn-section{background:#080d1a;padding:56px 24px;}
        .learn-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .learn-card{background:#0e1223;border:1px solid #1e293b;border-radius:14px;padding:20px;text-decoration:none;color:#fff;display:block;transition:all 0.2s;position:relative;overflow:hidden;}
        .learn-card::after{content:'→';position:absolute;right:18px;top:50%;transform:translateY(-50%);font-size:16px;color:#2d3748;transition:all 0.2s;}
        .learn-card:hover{border-color:rgba(99,102,241,0.25);background:#101828;}
        .learn-card:hover::after{color:#818cf8;right:14px;}
        .learn-cat{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;}
        .learn-title{font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:700;color:#f1f5f9;margin-bottom:5px;line-height:1.4;padding-right:24px;}
        .learn-desc{font-size:12px;color:#475569;line-height:1.5;}

        /* ── NEWSLETTER ── */
        .newsletter{padding:80px 24px;background:#020617;position:relative;overflow:hidden;}
        .nl-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:400px;background:radial-gradient(ellipse,rgba(99,102,241,0.07) 0%,transparent 65%);pointer-events:none;}
        .nl-inner{max-width:560px;margin:0 auto;text-align:center;position:relative;}
        .nl-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.18);color:#818cf8;padding:5px 14px;border-radius:99px;font-size:11px;font-weight:700;margin-bottom:20px;letter-spacing:0.04em;text-transform:uppercase;}
        .nl-h2{font-family:'Space Grotesk',sans-serif;font-size:34px;font-weight:800;margin-bottom:12px;letter-spacing:-0.02em;line-height:1.15;}

        /* ── RESPONSIVE ── */
        @media(max-width:1024px){
          .hero-inner{grid-template-columns:1fr;gap:48px;}
          .hero-h1{font-size:40px;}
          .learn-grid{grid-template-columns:repeat(2,1fr);}
          .starter-cards{grid-template-columns:1fr;}
        }
        @media(max-width:640px){
          .hero{padding:56px 16px 48px;}
          .hero-h1{font-size:32px;}
          .cta-row{flex-direction:column;}
          .hero-right{grid-template-columns:1fr;}
          .feat-card.wide{grid-column:span 1;}
          .content{padding:0 16px 60px;}
          .learn-grid{grid-template-columns:1fr;}
          .starter-cards{grid-template-columns:1fr;}
          .social-proof{gap:12px;}
        }
      `}</style>

      <div className="page">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-grid-bg" />
          <div className="hero-radial" />
          <div className="hero-inner">

            {/* Left */}
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span className="eyebrow-text">{airdrops.length}+ Verified Airdrops Tracked</span>
              </div>

              <h1 className="hero-h1">
                Find Crypto Airdrops<br />
                <span className="grad">Before Everyone Else</span>
              </h1>

              <p className="hero-sub">
                Free step-by-step guides for every airdrop. Track, participate, and earn — no paywalls, no fluff. Updated daily.
              </p>

              <div className="cta-row">
                <Link href="/airdrops" className="btn-primary">
                  Browse Airdrops
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Join Telegram
                </a>
              </div>

              {/* Social proof */}
              <div className="social-proof">
                {[
                  { val: `${airdrops.length}+`, lbl: 'Verified Guides' },
                  null,
                  { val: `${activeCount}`, lbl: 'Active Now' },
                  null,
                  { val: `${freeCount}`, lbl: 'Free Airdrops' },
                  null,
                  { val: '16+', lbl: 'EVM Chains' },
                ].map((item, i) =>
                  item === null
                    ? <div key={i} className="proof-div" />
                    : <div key={i} className="proof-stat">
                        <span className="proof-val">{item.val}</span>
                        <span className="proof-lbl">{item.lbl}</span>
                      </div>
                )}
              </div>
            </div>

            {/* Right — feature grid */}
            <div className="hero-right">
              {/* Card 1 — Airdrop count */}
              <div className="feat-card">
                <div className="feat-icon" style={{ background: 'rgba(99,102,241,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><path d="M12 2l9 4.9V17L12 22l-9-5.1V7z"/></svg>
                </div>
                <div className="feat-metric" style={{ color: '#818cf8' }}>{airdrops.length}+</div>
                <div className="feat-title">Verified Airdrops</div>
                <div className="feat-desc">Step-by-step guides for every project</div>
              </div>

              {/* Card 2 — Free */}
              <div className="feat-card">
                <div className="feat-icon" style={{ background: 'rgba(16,185,129,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className="feat-metric" style={{ color: '#10b981' }}>100%</div>
                <div className="feat-title">Always Free</div>
                <div className="feat-desc">No paywalls, no subscriptions ever</div>
              </div>

              {/* Card 3 — GM Station wide */}
              <div className="feat-card wide" style={{ background: 'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(99,102,241,0.04))' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div className="feat-icon" style={{ background: 'rgba(99,102,241,0.15)', marginBottom: '10px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
                    </div>
                    <div className="feat-title">GM Station</div>
                    <div className="feat-desc">Daily on-chain activity across 16+ EVM chains in one click. Build your wallet history.</div>
                  </div>
                  <Link href="/gm" style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8', padding: '9px 18px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: 800, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Open GM Station
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>

              {/* Card 4 — Daily */}
              <div className="feat-card">
                <div className="feat-icon" style={{ background: 'rgba(245,158,11,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div className="feat-metric" style={{ color: '#f59e0b' }}>Daily</div>
                <div className="feat-title">Always Updated</div>
                <div className="feat-desc">New airdrops added every day</div>
              </div>

              {/* Card 5 — Telegram */}
              <div className="feat-card">
                <div className="feat-icon" style={{ background: 'rgba(96,165,250,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#60a5fa' }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </div>
                <div className="feat-metric" style={{ color: '#60a5fa' }}>500+</div>
                <div className="feat-title">Community</div>
                <div className="feat-desc">Join our Telegram for alerts</div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── STARTER BANNER ── */}
        <section className="starter">
          <div className="starter-inner">
            <div className="starter-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em' }}>New to airdrops?</span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#f1f5f9', marginLeft: '4px' }}>Start with these 3 — free, under 10 minutes each</span>
              </div>
              <Link href="/learn/how-to-get-crypto-airdrops-2026" style={{ fontSize: '12px', color: '#10b981', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Full beginner guide
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="starter-cards">
              {[
                { name: 'nof1 Waitlist', chain: 'Sui', time: '1 min', slug: 'nof1-early-waitlist', desc: 'Email signup only. AI + financial markets.', color: '#818cf8' },
                { name: 'xStocksFi OG Role', chain: 'Multi-chain', time: '2 min', slug: 'xstocksfi-og-role', desc: 'Suggest a stock in Discord. $25B+ volume.', color: '#10b981' },
                { name: 'Beep AI Galxe', chain: 'Sui', time: '5 min', slug: 'beep-ai-galxe-campaign', desc: '3 Galxe quests. Quiz: BACB. Confirmed rewards.', color: '#f59e0b' },
              ].map((a, i) => (
                <Link key={a.slug} href={`/airdrops/${a.slug}`} className="sc-card">
                  <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: `${a.color}15`, border: `1px solid ${a.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 900, color: a.color, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9' }}>{a.name}</span>
                      <span style={{ fontSize: '9px', fontWeight: 700, color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', padding: '1px 6px', borderRadius: '99px' }}>FREE</span>
                    </div>
                    <p style={{ fontSize: '11px', color: '#475569', margin: 0 }}>{a.desc}</p>
                  </div>
                  <div style={{ fontSize: '10px', color: a.color, fontWeight: 700, flexShrink: 0 }}>{a.time}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── AIRDROPS ── */}
        <div className="content" style={{ paddingTop: '48px' }}>
          <div className="sec-hdr">
            <div>
              <div className="sec-title">Latest Airdrops</div>
              <div className="sec-sub">Verified guides updated daily · {airdrops.length} total</div>
            </div>
            <Link href="/airdrops" className="view-all">View All →</Link>
          </div>
          <FilterBar airdrops={airdrops} />
        </div>

        <div className="divider" />

        {/* ── LEARN ── */}
        <section className="learn-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="sec-hdr">
              <div>
                <div className="sec-title">Learn & Level Up</div>
                <div className="sec-sub">Everything you need to qualify for the best airdrops</div>
              </div>
              <Link href="/learn" className="view-all">All Articles →</Link>
            </div>
            <div className="learn-grid">
              {articles.map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="learn-card">
                  <div className="learn-cat" style={{ color: catColors[a.cat] || '#818cf8' }}>{a.cat}</div>
                  <h3 className="learn-title">{a.title}</h3>
                  <p className="learn-desc">{a.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── NEWSLETTER ── */}
        <section className="newsletter">
          <div className="nl-glow" />
          <div className="nl-inner">
            <div className="nl-badge">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Free Daily Alerts
            </div>
            <h2 className="nl-h2">Never Miss a New Airdrop</h2>
            <p style={{ fontSize: '15px', color: '#64748b', margin: '0 0 32px', lineHeight: 1.7 }}>
              Get the best new airdrops delivered to your inbox every day. Free, no spam.
            </p>
            <EmailSignup />
          </div>
        </section>

      </div>
    </>
  );
}
