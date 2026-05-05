import { notFound } from 'next/navigation';

const SUPABASE_URL = 'https://aahxneihytiogjvcznir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o';

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

async function getAirdropBySlug(slug: string) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?slug=eq.${slug}&select=*`, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data[0] || null;
}

export async function generateStaticParams() {
  const airdrops = await getAllAirdrops();
  return airdrops.map((a: any) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await getAirdropBySlug(slug);
  if (!a) return { title: 'Airdrop Not Found | 3alamiy Web3' };
  return {
    title: `${a.name} Airdrop Guide 2026 | 3alamiy Web3`,
    description: `${a.description} Reward: ${a.value}. Difficulty: ${a.difficulty}. Full step-by-step guide.`,
  };
}

export default async function AirdropPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await getAirdropBySlug(slug);

  if (!a) notFound();

  const worthIt = Number(a.votes?.worthIt || 0);
  const notWorthIt = Number(a.votes?.notWorthIt || 0);
  const total = worthIt + notWorthIt;
  const worthPercent = total ? Math.round((worthIt / total) * 100) : 0;
  const costLabel = a.cost === 'Paid' ? 'Mainnet (Paid)' : a.cost === 'Low' ? 'Mainnet (Low)' : 'Testnet (Free)';
  const costColor = a.cost === 'Paid' ? '#f43f5e' : a.cost === 'Low' ? '#f59e0b' : '#10b981';
  const steps: string[] = Array.isArray(a.guide_steps) ? a.guide_steps : Array.isArray(a.guideSteps) ? a.guideSteps : [];
  const tags: string[] = Array.isArray(a.tags) ? a.tags : [];
  const links: Record<string, string> = (a.links && typeof a.links === 'object' && !Array.isArray(a.links)) ? a.links : {};

  return (
    <div style={{ minHeight: '100vh', background: '#030712', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #18181b', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#0a0a0f', zIndex: 50, height: '64px' }}>
        <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🪂</div>
          <span style={{ fontWeight: '800', fontSize: '16px', letterSpacing: '-0.01em' }}>3alamiy Web3</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['Discover', 'Market', 'Community', 'Learn'].map((label) => (
            <a key={label} href="https://3alamiyweb3.online" style={{ color: label === 'Discover' ? '#fff' : '#71717a', textDecoration: 'none', fontSize: '15px', fontWeight: label === 'Discover' ? '700' : '500' }}>{label}</a>
          ))}
        </nav>
        <a href="https://3alamiyweb3.online" style={{ background: '#6366f1', color: '#fff', padding: '10px 22px', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>Sign Up</a>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <a href="https://3alamiyweb3.online" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#71717a', textDecoration: 'none', fontSize: '14px', fontWeight: '700', marginBottom: '48px', padding: '8px 14px', background: '#18181b', borderRadius: '12px', border: '1px solid #27272a' }}>
          ← Dashboard
        </a>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>
          {/* LEFT */}
          <div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginBottom: '48px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
                <img src={a.logo} alt={a.name} width={128} height={128} style={{ borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} />
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '12px', width: '128px' }}>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: '#6366f1' }}>{worthPercent}%</div>
                  <div style={{ fontSize: '8px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#71717a', marginBottom: '10px' }}>Worth it</div>
                  <div style={{ height: '3px', background: '#27272a', borderRadius: '99px', overflow: 'hidden', marginBottom: '10px' }}>
                    <div style={{ height: '100%', width: `${worthPercent}%`, background: '#6366f1', borderRadius: '99px' }} />
                  </div>
                  <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', borderRadius: '8px', background: 'rgba(16,185,129,0.1)', color: '#10b981', textDecoration: 'none', fontSize: '9px', fontWeight: '900', marginBottom: '6px' }}>👍 Vote</a>
                  <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', borderRadius: '8px', background: 'rgba(244,63,94,0.1)', color: '#f43f5e', textDecoration: 'none', fontSize: '9px', fontWeight: '900' }}>👎 Skip</a>
                </div>
              </div>

              <div style={{ flex: 1, paddingTop: '4px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)', padding: '3px 10px', borderRadius: '99px', fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{a.blockchain}</span>
                  <span style={{ background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)', color: a.status === 'Active' ? '#10b981' : '#71717a', border: `1px solid ${a.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(113,113,122,0.2)'}`, padding: '3px 10px', borderRadius: '99px', fontSize: '9px', fontWeight: '900', textTransform: 'uppercase' }}>{a.status}</span>
                  <span style={{ background: `${costColor}15`, color: costColor, border: `1px solid ${costColor}30`, padding: '3px 10px', borderRadius: '99px', fontSize: '9px', fontWeight: '900', textTransform: 'uppercase' }}>{costLabel}</span>
                </div>
                <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{a.name}</h1>
                <p style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.7, margin: '0 0 24px', fontWeight: '500' }}>{a.description}</p>
                <a href="#guide" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#6366f1', color: '#fff', padding: '14px 28px', borderRadius: '16px', textDecoration: 'none', fontWeight: '900', fontSize: '14px', boxShadow: '0 20px 40px rgba(99,102,241,0.25)' }}>
                  Start Guide →
                </a>
              </div>
            </div>

            {/* Guide */}
            <div id="guide">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #18181b' }}>
                <div style={{ padding: '8px', background: 'rgba(16,185,129,0.1)', borderRadius: '12px', color: '#10b981', fontSize: '18px' }}>✓</div>
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>Participation Guide</h2>
                  <p style={{ fontSize: '10px', color: '#71717a', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0' }}>Step 0 of {steps.length} Finished</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {steps.map((step: string, idx: number) => (
                  <div key={idx} style={{ display: 'flex', gap: '20px', padding: '20px 24px', borderRadius: '24px', border: '1px solid #27272a', background: '#0d1117' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '900', fontSize: '16px', background: '#18181b', color: '#71717a', border: '1px solid #27272a' }}>{idx + 1}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 4px', color: '#fff', lineHeight: 1.4 }}>{step}</p>
                      <p style={{ fontSize: '12px', color: '#52525b', margin: 0, fontStyle: 'italic' }}>Crucial interaction for snapshot eligibility and wallet ranking.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside style={{ position: 'sticky', top: '80px' }}>
            <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '32px', padding: '32px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <div style={{ padding: '8px', background: 'rgba(99,102,241,0.1)', borderRadius: '12px', fontSize: '18px' }}>📊</div>
                <h3 style={{ fontSize: '20px', fontWeight: '900', margin: 0 }}>Quick Stats</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[['⏱ Est. Time', '15 - 20 Mins', '#fff'], ['⚡ Gas Profile', costLabel, costColor], ['🛡 Confidence', 'High Tier', '#10b981'], ['👥 Difficulty', a.difficulty, '#fff']].map(([label, value, color]) => (
                  <div key={label as string} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#52525b' }}>{label}</span>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: color as string }}>{value}</span>
                  </div>
                ))}
              </div>

              {Object.keys(links).length > 0 && (
                <div style={{ borderTop: '1px solid #18181b', marginTop: '28px', paddingTop: '28px' }}>
                  <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525b', marginBottom: '16px' }}>Official Channels</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Object.entries(links).map(([key, url]) => (
                      <a key={key} href={url as string} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: '#18181b', borderRadius: '16px', border: '1px solid #27272a', textDecoration: 'none', color: '#e4e4e7' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ padding: '6px', background: '#0d1117', borderRadius: '8px', fontSize: '12px' }}>{key === 'X' || key === 'twitter' ? '𝕏' : '🌐'}</div>
                          <span style={{ fontSize: '14px', fontWeight: '700', textTransform: 'capitalize' }}>{key}</span>
                        </div>
                        <span style={{ fontSize: '12px', color: '#52525b' }}>↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ background: 'linear-gradient(135deg, #4f46e5, #4338ca)', borderRadius: '32px', padding: '32px', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 8px' }}>Need Help?</h4>
              <p style={{ color: 'rgba(199,210,254,0.8)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 24px' }}>Join our inner circle for real-time alerts and community-driven guides.</p>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', color: '#4f46e5', padding: '14px', borderRadius: '16px', textDecoration: 'none', fontWeight: '900', fontSize: '14px' }}>
                ✈️ Join Telegram
              </a>
            </div>

            {tags.length > 0 && (
              <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '32px', padding: '32px' }}>
                <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525b', margin: '0 0 16px' }}>Tags</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {tags.map((tag: string) => (
                    <span key={tag} style={{ background: '#18181b', color: '#71717a', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', border: '1px solid #27272a' }}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
