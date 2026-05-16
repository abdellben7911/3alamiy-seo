import { notFound } from 'next/navigation';
import ParticipationGuide from './ParticipationGuide';

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

async function getAirdropBySlug(slug: string) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?slug=eq.${slug}&select=*`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
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
  const year = new Date().getFullYear();
  const reward = a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : a.value || '';
  const rewardText = reward ? `Earn ${reward}.` : 'High reward potential.';
  const costText = a.cost === 'Free' ? 'Free to join.' : 'Low cost.';
  const desc = `${costText} ${a.difficulty} difficulty. ${rewardText} Step-by-step guide to qualify for the ${a.name} airdrop on ${a.blockchain}. Updated ${year}.`.slice(0, 160);
  return {
    title: `${a.name} Airdrop — ${a.cost === 'Free' ? 'Free' : 'Low Cost'}, ${a.difficulty} Difficulty | How to Qualify ${year}`,
    description: desc,
    keywords: `${a.name} airdrop, ${a.name} airdrop guide, how to get ${a.name} airdrop, ${a.blockchain} airdrop ${year}, free crypto airdrop`,
    openGraph: {
      title: `${a.name} Airdrop Guide ${year}`,
      description: desc,
      url: `https://seo.3alamiyweb3.online/airdrops/${slug}`,
      siteName: '3alamiy Web3',
      images: a.logo ? [{ url: a.logo, width: 400, height: 400, alt: `${a.name} airdrop logo` }] : [],
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title: `${a.name} Airdrop — Free Guide ${year}`, description: desc },
    alternates: { canonical: `https://seo.3alamiyweb3.online/airdrops/${slug}` },
  };
}

export default async function AirdropPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [a, allAirdrops] = await Promise.all([getAirdropBySlug(slug), getAllAirdrops()]);
  if (!a) notFound();

  const steps: string[] = Array.isArray(a.guide_steps) ? a.guide_steps : Array.isArray(a.guideSteps) ? a.guideSteps : [];
  const tags: string[] = Array.isArray(a.tags) ? a.tags : [];
  const links: Record<string, string> = (a.links && typeof a.links === 'object' && !Array.isArray(a.links)) ? a.links : {};
  const costLabel = a.cost === 'Paid' ? 'Mainnet (Paid)' : a.cost === 'Low' ? 'Mainnet (Low)' : 'Testnet (Free)';
  const costColor = a.cost === 'Paid' ? '#f43f5e' : a.cost === 'Low' ? '#f59e0b' : '#10b981';
  const reward = a.reward_min && a.reward_max ? `$${a.reward_min}–$${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'TBA';
  const relatedAirdrops = allAirdrops.filter((x: any) => x.slug !== slug && x.blockchain === a.blockchain).slice(0, 3);
  const year = new Date().getFullYear();

  const howToSchema = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: `How to Participate in ${a.name} Airdrop`,
    description: `Step-by-step guide to participate in the ${a.name} airdrop on ${a.blockchain}.`,
    image: a.logo ? { '@type': 'ImageObject', url: a.logo } : undefined,
    totalTime: `PT${Math.max(15, steps.length * 3)}M`,
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: a.cost === 'Free' ? '0' : '10' },
    step: steps.map((s: string, i: number) => ({ '@type': 'HowToStep', position: i + 1, name: s, text: s, url: `https://seo.3alamiyweb3.online/airdrops/${a.slug}#guide` })),
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Is ${a.name} airdrop legit?`, acceptedAnswer: { '@type': 'Answer', text: `Yes, ${a.name} is a verified ${a.blockchain} project tracked by 3alamiy Web3. Always use official links and never share your seed phrase.` } },
      { '@type': 'Question', name: `How much can I earn from ${a.name} airdrop?`, acceptedAnswer: { '@type': 'Answer', text: `The estimated reward is ${reward}. Actual rewards depend on your activity level and eligibility.` } },
      { '@type': 'Question', name: `Is the ${a.name} airdrop free?`, acceptedAnswer: { '@type': 'Answer', text: a.cost === 'Free' ? `Yes, completely free — no investment required.` : `Small gas fees may apply.` } },
      { '@type': 'Question', name: `How long does it take?`, acceptedAnswer: { '@type': 'Answer', text: `Approximately ${Math.max(15, steps.length * 3)} minutes. Difficulty is rated ${a.difficulty}.` } },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo.3alamiyweb3.online' },
      { '@type': 'ListItem', position: 2, name: 'Airdrops', item: 'https://seo.3alamiyweb3.online/airdrops' },
      { '@type': 'ListItem', position: 3, name: `${a.name} Airdrop`, item: `https://seo.3alamiyweb3.online/airdrops/${a.slug}` },
    ],
  };

  const rewardDisplay = a.reward_min && a.reward_max
    ? `$${a.reward_min >= 1000 ? (a.reward_min/1000).toFixed(0)+'K' : a.reward_min}–$${a.reward_max >= 1000 ? (a.reward_max/1000).toFixed(0)+'K' : a.reward_max}`
    : a.reward_min ? `$${a.reward_min >= 1000 ? (a.reward_min/1000).toFixed(0)+'K' : a.reward_min}+`
    : a.difficulty === 'Easy' ? '$50–$500' : a.difficulty === 'Medium' ? '$200–$2K' : '$500–$5K';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        * { box-sizing: border-box; }
        .detail-root { min-height: 100vh; background: #060910; font-family: system-ui, -apple-system, sans-serif; color: #fff; }

        /* Hero band */
        .hero-band { background: #060910; border-bottom: 1px solid #1a1f2e; padding: 24px 24px 0; }
        .hero-band-inner { max-width: 1200px; margin: 0 auto; }

        /* Page grid */
        .page-grid { display: grid; grid-template-columns: 1fr 320px; gap: 28px; max-width: 1200px; margin: 0 auto; padding: 28px 24px 80px; align-items: start; }

        /* Left content */
        .content-section { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 24px; margin-bottom: 12px; }
        .section-label { font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: #3f3f46; margin: 0 0 14px; }

        /* Quick answer */
        .quick-answer { background: rgba(99,102,241,0.04); border: 1px solid rgba(99,102,241,0.15); border-left: 3px solid #6366f1; border-radius: 12px; padding: 16px 20px; margin-bottom: 12px; }

        /* Hero content */
        .hero-identity { display: flex; gap: 18px; align-items: flex-start; margin-bottom: 20px; }
        .hero-logo { width: 72px; height: 72px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); object-fit: cover; flex-shrink: 0; }
        .hero-logo-fallback { width: 72px; height: 72px; border-radius: 16px; background: #1a1f2e; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 900; color: #52525b; }
        .badge-row { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
        .badge { padding: 3px 10px; border-radius: 99px; font-size: 10px; font-weight: 700; letter-spacing: 0.02em; }
        .hero-title { font-size: 26px; font-weight: 900; margin: 0 0 10px; letter-spacing: -0.02em; line-height: 1.15; color: #fff; }
        .hero-desc { font-size: 14px; color: #71717a; line-height: 1.75; margin: 0 0 18px; }
        .start-btn { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #6366f1, #4f46e5); color: #fff; padding: 11px 22px; border-radius: 12px; text-decoration: none; font-weight: 800; font-size: 13px; box-shadow: 0 4px 16px rgba(99,102,241,0.3); transition: all 0.2s; }
        .start-btn:hover { box-shadow: 0 6px 24px rgba(99,102,241,0.4); transform: translateY(-1px); }

        /* Stat row inside content */
        .inline-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 18px; }
        .inline-stat { background: #060910; border: 1px solid #1a1f2e; border-radius: 10px; padding: 12px; text-align: center; }
        .inline-stat-val { font-size: 15px; font-weight: 900; margin-bottom: 3px; }
        .inline-stat-lbl { font-size: 9px; color: #3f3f46; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }

        /* FAQ */
        .faq-item { background: #060910; border: 1px solid #1a1f2e; border-radius: 12px; padding: 16px; }
        .faq-q { font-size: 14px; font-weight: 700; color: #f4f4f5; margin: 0 0 8px; }
        .faq-a { font-size: 13px; color: #71717a; margin: 0; line-height: 1.7; }

        /* Tags */
        .tag { background: #060910; border: 1px solid #1a1f2e; color: #52525b; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 600; }

        /* Related */
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .related-card { background: #060910; border: 1px solid #1a1f2e; border-radius: 12px; padding: 14px; text-decoration: none; color: #fff; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s; }
        .related-card:hover { border-color: rgba(99,102,241,0.25); }

        /* Learn articles */
        .learn-link { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: #060910; border: 1px solid #1a1f2e; border-radius: 10px; text-decoration: none; color: #71717a; font-size: 12px; font-weight: 600; transition: all 0.2s; }
        .learn-link:hover { border-color: rgba(99,102,241,0.2); color: #a1a1aa; }

        /* CTA banner */
        .cta-banner { background: linear-gradient(135deg, #0d1117, #0f1520); border: 1px solid rgba(99,102,241,0.2); border-radius: 16px; padding: 22px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }

        /* Sidebar */
        .sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 10px; }
        .side-card { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 18px; }
        .side-label { font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: #3f3f46; margin: 0 0 14px; }
        .stat-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #0d1117; }
        .stat-row:last-child { border-bottom: none; }
        .stat-row-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #3f3f46; }
        .stat-row-value { font-size: 12px; font-weight: 800; }
        .link-btn { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: #060910; border: 1px solid #1a1f2e; border-radius: 10px; text-decoration: none; color: #a1a1aa; font-size: 12px; font-weight: 700; transition: all 0.2s; margin-bottom: 6px; }
        .link-btn:hover { border-color: rgba(99,102,241,0.2); color: #fff; }
        .reward-card { background: linear-gradient(135deg, #0d1117, #0f1a0f); border: 1px solid rgba(16,185,129,0.15); border-radius: 16px; padding: 18px; text-align: center; }
        .tg-card { background: linear-gradient(135deg, #0f0f1f, #131320); border: 1px solid rgba(99,102,241,0.2); border-radius: 16px; padding: 18px; }

        @media (max-width: 768px) {
          .page-grid { grid-template-columns: 1fr; padding: 16px 16px 60px; }
          .sidebar { position: static; }
          .hero-band { padding: 16px 16px 0; }
          .hero-title { font-size: 20px; }
          .hero-logo { width: 56px; height: 56px; }
          .related-grid { grid-template-columns: 1fr 1fr; }
          .inline-stats { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div className="detail-root">

        {/* Hero band */}
        <div className="hero-band">
          <div className="hero-band-inner">
            {/* Breadcrumb */}
            <nav style={{ fontSize: '11px', color: '#3f3f46', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <a href="https://seo.3alamiyweb3.online" style={{ color: '#52525b', textDecoration: 'none' }}>Home</a>
              <span>›</span>
              <a href="https://seo.3alamiyweb3.online/airdrops" style={{ color: '#52525b', textDecoration: 'none' }}>Airdrops</a>
              <span>›</span>
              <span style={{ color: '#818cf8' }}>{a.name}</span>
            </nav>

            {/* Hero identity */}
            <div className="hero-identity">
              {a.logo
                ? <img className="hero-logo" src={a.logo} alt={`${a.name} logo`} width={72} height={72} />
                : <div className="hero-logo-fallback">{a.name?.[0]}</div>
              }
              <div style={{ flex: 1 }}>
                <div className="badge-row">
                  <span className="badge" style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)' }}>{a.blockchain}</span>
                  <span className="badge" style={{ background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)', color: a.status === 'Active' ? '#10b981' : '#71717a', border: `1px solid ${a.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(113,113,122,0.2)'}` }}>{a.status}</span>
                  <span className="badge" style={{ background: `${costColor}12`, color: costColor, border: `1px solid ${costColor}25` }}>{costLabel}</span>
                </div>
                <h1 className="hero-title">{a.name.replace(/\s*airdrop\s*/gi, ' ').trim()} Airdrop Guide {year}</h1>
                <p className="hero-desc">{a.description}</p>
                <a href="#guide" className="start-btn">
                  Start Guide
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Inline stats bar */}
            <div className="inline-stats" style={{ marginBottom: '0', paddingBottom: '20px' }}>
              <div className="inline-stat">
                <div className="inline-stat-val" style={{ color: '#10b981' }}>{reward}</div>
                <div className="inline-stat-lbl">Est. Reward</div>
              </div>
              <div className="inline-stat">
                <div className="inline-stat-val" style={{ color: '#818cf8' }}>{a.difficulty}</div>
                <div className="inline-stat-lbl">Difficulty</div>
              </div>
              <div className="inline-stat">
                <div className="inline-stat-val" style={{ color: costColor }}>{a.cost}</div>
                <div className="inline-stat-lbl">Cost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Page grid */}
        <div className="page-grid">

          {/* LEFT COLUMN */}
          <div>

            {/* Quick Answer */}
            <div className="quick-answer" style={{ marginBottom: '12px' }}>
              <p style={{ fontSize: '9px', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 6px' }}>Quick Answer</p>
              <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#fff' }}>{a.name}</strong> is a {a.status === 'Active' ? 'live' : a.status.toLowerCase()} crypto airdrop on <strong style={{ color: '#fff' }}>{a.blockchain}</strong>. It is <strong style={{ color: costColor }}>{a.cost}</strong> to participate, rated <strong style={{ color: '#fff' }}>{a.difficulty}</strong> difficulty, with {steps.length} steps to complete. {a.reward_min ? `Estimated reward: ${reward}.` : 'Reward TBA.'}
              </p>
            </div>

            {/* What is section */}
            <div className="content-section" style={{ marginBottom: '12px' }}>
              <p className="section-label">Overview</p>
              <h2 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.01em' }}>What is {a.name} Airdrop?</h2>
              <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.8, margin: '0 0 12px' }}>{a.description}</p>
              <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.8, margin: 0 }}>
                Currently <strong style={{ color: '#10b981' }}>{a.status}</strong> on {a.blockchain}.
                Difficulty: <strong style={{ color: '#fff' }}>{a.difficulty}</strong>.
                Cost: <strong style={{ color: costColor }}>{a.cost}</strong>.
                {reward !== 'TBA' ? ` Estimated reward: ${reward}.` : ''}
              </p>
            </div>

            {/* Guide */}
            <div id="guide">
              <ParticipationGuide steps={steps} airdropName={a.name} />
            </div>

            {/* CTA Banner */}
            <div className="cta-banner" style={{ marginBottom: '12px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '5px' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                  <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>All steps done?</span>
                </div>
                <p style={{ fontSize: '15px', fontWeight: 800, color: '#fff', margin: '0 0 3px' }}>Don't miss the next airdrop</p>
                <p style={{ fontSize: '12px', color: '#52525b', margin: 0 }}>Get instant alerts when new airdrops drop. Free, no spam.</p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '10px 18px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: 800, whiteSpace: 'nowrap' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Join Telegram
                </a>
                <a href="/airdrops" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'transparent', color: '#71717a', padding: '10px 18px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, border: '1px solid #1a1f2e', whiteSpace: 'nowrap' }}>
                  More Airdrops →
                </a>
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="content-section" style={{ marginBottom: '12px' }}>
                <p className="section-label">Categories</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {tags.map((tag: string) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div className="content-section" style={{ marginBottom: '12px' }}>
              <p className="section-label">FAQ</p>
              <h2 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.01em' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { q: `Is ${a.name} airdrop legit?`, a: `Yes, ${a.name} is a verified ${a.blockchain} project. Always use official links and never share your private keys.` },
                  { q: `How much can I earn from the ${a.name} airdrop?`, a: `The estimated reward is ${reward}. Actual rewards depend on your on-chain activity and eligibility.` },
                  { q: `Is the ${a.name} airdrop free?`, a: a.cost === 'Free' ? `Yes, completely free — no investment required.` : `Small gas fees may apply for on-chain transactions.` },
                  { q: `How long does it take to complete?`, a: `Approximately ${Math.max(15, steps.length * 3)} minutes. Difficulty is rated ${a.difficulty}.` },
                ].map((faq, i) => (
                  <div key={i} className="faq-item">
                    <p className="faq-q">{faq.q}</p>
                    <p className="faq-a">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learn articles */}
            <div className="content-section" style={{ marginBottom: '12px' }}>
              <p className="section-label">Learn More</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams' },
                  { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'Build Onchain Activity That Matters' },
                  { slug: 'best-crypto-airdrops-2026', title: 'Best Crypto Airdrops 2026' },
                  ...(a.cost === 'Free' ? [{ slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026' }] : []),
                ].slice(0, 4).map((article) => (
                  <a key={article.slug} href={`/learn/${article.slug}`} className="learn-link">
                    <span>{article.title}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Related */}
            {relatedAirdrops.length > 0 && (
              <div className="content-section">
                <p className="section-label">More {a.blockchain} Airdrops</p>
                <div className="related-grid">
                  {relatedAirdrops.map((r: any) => (
                    <a key={r.slug} href={`/airdrops/${r.slug}`} className="related-card">
                      {r.logo && <img src={r.logo} alt={r.name} width={32} height={32} style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }} />}
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#f4f4f5' }}>{r.name}</div>
                      <div style={{ fontSize: '10px', color: '#52525b', fontWeight: 600 }}>{r.difficulty} · {r.blockchain}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">

            {/* Reward estimate */}
            <div className="reward-card">
              <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 8px' }}>Est. Reward Range</p>
              <p style={{ fontSize: '30px', fontWeight: 900, color: '#10b981', margin: '0 0 4px', letterSpacing: '-0.02em' }}>{rewardDisplay}</p>
              <p style={{ fontSize: '11px', color: '#3f3f46', margin: 0 }}>based on similar projects</p>
            </div>

            {/* Quick stats */}
            <div className="side-card">
              <p className="side-label">Quick Stats</p>
              <div>
                {[
                  { label: 'Est. Time', value: `${Math.max(15, steps.length * 3)} Mins`, color: '#fff' },
                  { label: 'Reward', value: reward, color: '#10b981' },
                  { label: 'Gas', value: costLabel, color: costColor },
                  { label: 'Difficulty', value: a.difficulty, color: '#fff' },
                  { label: 'Blockchain', value: a.blockchain, color: '#818cf8' },
                  { label: 'Steps', value: `${steps.length} steps`, color: '#fff' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="stat-row">
                    <span className="stat-row-label">{label}</span>
                    <span className="stat-row-value" style={{ color }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Official links */}
              {Object.keys(links).length > 0 && (
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #1a1f2e' }}>
                  <p className="side-label" style={{ marginBottom: '10px' }}>Official Links</p>
                  {Object.entries(links).map(([key, url]) => (
                    <a key={key} href={url as string} target="_blank" rel="noopener noreferrer" className="link-btn">
                      <span style={{ textTransform: 'capitalize' }}>{key === 'X' || key === 'twitter' ? 'X (Twitter)' : key}</span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Telegram */}
            <div className="tg-card">
              <p style={{ fontSize: '13px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Need Help?</p>
              <p style={{ color: '#52525b', fontSize: '12px', lineHeight: 1.6, margin: '0 0 14px' }}>Join our community for real-time airdrop alerts and guides.</p>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '11px', borderRadius: '10px', textDecoration: 'none', fontWeight: 800, fontSize: '13px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join Telegram
              </a>
            </div>

            {/* Browse all */}
            <div className="side-card" style={{ textAlign: 'center' }}>
              <a href="/airdrops" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 700, fontSize: '13px', display: 'block', marginBottom: '4px' }}>Browse All Airdrops →</a>
              <p style={{ fontSize: '11px', color: '#3f3f46', margin: 0 }}>{allAirdrops.length}+ guides available</p>
            </div>

            {/* Last updated */}
            <div style={{ textAlign: 'center', padding: '4px 0' }}>
              <p style={{ fontSize: '10px', color: '#3f3f46', margin: 0 }}>Last updated: <span style={{ color: '#52525b' }}>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span></p>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
}
