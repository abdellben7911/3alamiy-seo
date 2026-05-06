import Link from "next/link";

const SUPABASE_URL = 'https://aahxneihytiogjvcznir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o';

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export const metadata = {
  title: 'Crypto Airdrop Tracker 2026 | Free Airdrop Guides | 3alamiy Web3',
  description: 'Find and track the best crypto airdrops in 2026. Step-by-step guides for free and paid airdrops on Ethereum, Solana, Arbitrum and more.',
  keywords: 'crypto airdrop, free airdrop 2026, airdrop tracker, Web3 airdrop, DeFi airdrop guide',
};

export default async function Home() {
  const airdrops = await getAllAirdrops();
  const year = new Date().getFullYear();

  const difficultyColor = (d: string) =>
    d === 'Easy' ? '#10b981' : d === 'Hard' ? '#f43f5e' : '#f59e0b';
  const costColor = (c: string) =>
    c === 'Free' ? '#10b981' : c === 'Paid' ? '#f43f5e' : '#f59e0b';

  return (
    <div style={{ minHeight: '100vh', background: '#030712', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>

      {/* Header */}
      <header style={{ borderBottom: '1px solid #18181b', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#0a0a0f', zIndex: 50, height: '64px' }}>
        <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🪂</div>
          <span style={{ fontWeight: '800', fontSize: '16px' }}>3alamiy Web3</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['Discover', 'Market', 'Community', 'Learn'].map((label) => (
            <a key={label} href="https://3alamiyweb3.online" style={{ color: '#71717a', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>{label}</a>
          ))}
        </nav>
        <a href="https://3alamiyweb3.online/profile" style={{ background: '#6366f1', color: '#fff', padding: '10px 22px', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>Sign Up</a>
      </header>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '80px 24px 60px', background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #030712 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '99px', padding: '6px 16px', fontSize: '13px', color: '#818cf8', marginBottom: '24px' }}>
          🔥 {airdrops.length}+ Active Airdrops Tracked
        </div>
        <h1 style={{ fontSize: '52px', fontWeight: '900', margin: '0 0 20px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Best Crypto Airdrops<br />
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Guide {year}</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 36px', lineHeight: 1.7 }}>
          Step-by-step guides for the most profitable crypto airdrops. Track, participate, and earn free crypto in {year}.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://3alamiyweb3.online" style={{ background: '#6366f1', color: '#fff', padding: '14px 28px', borderRadius: '14px', textDecoration: 'none', fontWeight: '800', fontSize: '15px' }}>
            🚀 Open Dashboard
          </a>
          <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ background: '#18181b', color: '#fff', padding: '14px 28px', borderRadius: '14px', textDecoration: 'none', fontWeight: '800', fontSize: '15px', border: '1px solid #27272a' }}>
            ✈️ Join Telegram
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '40px 24px', borderBottom: '1px solid #18181b', flexWrap: 'wrap' }}>
        {[
          ['🪂', `${airdrops.length}+`, 'Airdrops Tracked'],
          ['✅', `${airdrops.filter((a: any) => a.status === 'Active').length}`, 'Active Now'],
          ['🆓', `${airdrops.filter((a: any) => a.cost === 'Free').length}`, 'Free Airdrops'],
          ['📈', 'Daily', 'Updated'],
        ].map(([icon, value, label]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', color: '#fff' }}>{icon} {value}</div>
            <div style={{ fontSize: '13px', color: '#71717a', marginTop: '4px' }}>{label}</div>
          </div>
        ))}
      </section>

      {/* Airdrops Grid */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 8px' }}>All Crypto Airdrops {year}</h2>
            <p style={{ fontSize: '14px', color: '#71717a', margin: 0 }}>Updated daily — {airdrops.length} airdrops with step-by-step guides</p>
          </div>
          <a href="https://3alamiyweb3.online" style={{ background: '#18181b', color: '#a1a1aa', padding: '10px 18px', borderRadius: '12px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', border: '1px solid #27272a' }}>
            View Full Dashboard →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {airdrops.map((a: any) => (
            <Link key={a.slug} href={`/airdrops/${a.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '20px', padding: '20px', cursor: 'pointer', transition: 'border-color 0.2s' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  {a.logo && (
                    <img src={a.logo} alt={a.name} width={52} height={52} style={{ borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', flexShrink: 0, objectFit: 'cover' }} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '800', margin: 0, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</h3>
                      <span style={{ background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)', color: a.status === 'Active' ? '#10b981' : '#71717a', padding: '2px 8px', borderRadius: '99px', fontSize: '10px', fontWeight: '700', flexShrink: 0, marginLeft: '8px' }}>{a.status}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#71717a', margin: '0 0 10px', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{a.description}</p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: costColor(a.cost), background: `${costColor(a.cost)}15`, padding: '3px 8px', borderRadius: '6px' }}>{a.cost}</span>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: difficultyColor(a.difficulty), background: `${difficultyColor(a.difficulty)}15`, padding: '3px 8px', borderRadius: '6px' }}>{a.difficulty}</span>
                      {a.blockchain && <span style={{ fontSize: '11px', fontWeight: '700', color: '#818cf8', background: 'rgba(99,102,241,0.1)', padding: '3px 8px', borderRadius: '6px' }}>{a.blockchain}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Learn Section */}
      <section style={{ background: '#0a0a0f', borderTop: '1px solid #18181b', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 8px' }}>Learn About Crypto Airdrops</h2>
          <p style={{ fontSize: '14px', color: '#71717a', margin: '0 0 32px' }}>Everything you need to know to qualify for the best airdrops</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
            {[
              { slug: 'why-crypto-airdrops-are-becoming-harder-to-qualify-for', title: 'Why Crypto Airdrops Are Harder in 2026', desc: 'The golden era of easy airdrops is over. Learn how to adapt.' },
              { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'How to Build Onchain Activity That Matters', desc: 'Quality over quantity — build a wallet narrative that wins airdrops.' },
              { slug: 'news-report-the-2-trillion-wipeout', title: 'The $2 Trillion Crypto Wipeout', desc: 'What happened and what it means for airdrop hunters.' },
              { slug: 'solanas-institutional-firedancer-era', title: "Solana's Firedancer Era", desc: 'How Firedancer changed Solana and what it means for you.' },
              { slug: 'crypto-airdrops-in-2026-what-to-expect-and-how-they-will-evolve', title: 'Crypto Airdrops in 2026', desc: 'What to expect and how airdrops will evolve this year.' },
              { slug: 'how-a-100-domain-became-70-million', title: 'How a $100 Domain Became $70M', desc: 'Lessons for Web3 investors from the AI.com story.' },
            ].map((article) => (
              <Link key={article.slug} href={`/learn/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '16px', padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 8px', color: '#fff' }}>{article.title}</h3>
                  <p style={{ fontSize: '13px', color: '#71717a', margin: 0, lineHeight: 1.5 }}>{article.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #18181b', padding: '32px 24px', textAlign: 'center', color: '#52525b', fontSize: '13px' }}>
        <p style={{ margin: '0 0 8px' }}>© {year} <a href="https://3alamiyweb3.online" style={{ color: '#6366f1', textDecoration: 'none' }}>3alamiy Web3</a> — Crypto Airdrop Tracker</p>
        <p style={{ margin: 0 }}>
          <a href="https://seo.3alamiyweb3.online" style={{ color: '#52525b', textDecoration: 'none', marginRight: '16px' }}>All Airdrops</a>
          <a href="https://3alamiyweb3.online" style={{ color: '#52525b', textDecoration: 'none', marginRight: '16px' }}>Dashboard</a>
          <a href="https://t.me/web33alamiy" style={{ color: '#52525b', textDecoration: 'none' }}>Telegram</a>
        </p>
      </footer>
    </div>
  );
}
