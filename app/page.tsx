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

async function getRecentlyUpdated() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/airdrops?select=slug,name,logo,blockchain,status,difficulty,cost,updated_at&order=updated_at.desc&limit=4`,
      {
        headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        next: { revalidate: 600 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter((a: any) => a && a.slug && a.name);
  } catch { return []; }
}

async function getTestimonials() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/testimonials?select=*&order=created_at.desc&limit=3`,
      {
        headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter((t: any) => t && t.handle && t.claim);
  } catch { return []; }
}

export const metadata = {
  title: '3alamiy Web3 — Best Crypto Airdrop Tracker 2026 | 110+ Free Guides',
  description: 'The best free crypto airdrop tracker in 2026. 110+ verified step-by-step guides for Ethereum, Solana, Hyperliquid, Sui, Base, Arbitrum and more. Updated daily.',
  keywords: 'best crypto airdrops 2026, free crypto airdrop, airdrop tracker, ethereum airdrop, solana airdrop, hyperliquid airdrop, polymarket airdrop',
  openGraph: {
    title: '3alamiy Web3 — Best Crypto Airdrop Tracker 2026 | 110+ Free Guides',
    description: 'The best free crypto airdrop tracker in 2026. 110+ verified step-by-step guides for Ethereum, Solana, Hyperliquid, Sui, Base, Arbitrum and more. Updated daily.',
    url: 'https://www.3alamiyweb3.com',
    siteName: '3alamiy Web3',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3alamiy Web3 — Best Crypto Airdrop Tracker 2026',
    description: 'The best free crypto airdrop tracker in 2026. 110+ verified step-by-step guides. Updated daily.',
    site: '@3alamiyweb3',
  },
  alternates: {
    canonical: 'https://www.3alamiyweb3.com',
  },
};

const articles = [
  { slug: 'hyperliquid-guide', title: 'Hyperliquid Season 2 Full Guide', desc: 'HyperCore, HLP vault, HyperEVM — complete farming strategy.', cat: 'Hot' },
  { slug: 'polymarket-airdrop-guide-2026', title: 'Polymarket POLY Airdrop Guide', desc: 'How to qualify before the snapshot. Confirmed drop.', cat: 'Hot' },
  { slug: 'top-25-airdrop-picks-2026', title: 'Top 25 Airdrop Picks for 2026', desc: '25 early opportunities — testnets, points, confirmed drops.', cat: 'Strategy' },
  { slug: 'early-crypto-projects-2026', title: 'Best Early Crypto Projects 2026', desc: 'Farm before the announcement. a16z-backed projects.', cat: 'Strategy' },
  { slug: 'crypto-airdrop-eligibility-requirements-2026', title: 'Airdrop Eligibility Requirements', desc: 'What you need to qualify — checklist + common mistakes.', cat: 'Beginners' },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while farming in 2026.', cat: 'Beginners' },
];

const catColors: Record<string, string> = {
  Comparison: '#f43f5e', Strategy: '#818cf8', Onchain: '#34d399',
  Airdrops: '#f59e0b', Beginners: '#60a5fa', Ecosystems: '#c084fc',
};

function timeLabel(steps: any[]): string {
  const n = steps?.length || 0;
  if (n <= 3) return '5 min';
  if (n <= 6) return '10 min';
  if (n <= 10) return '15 min';
  if (n <= 15) return '20 min';
  return '30 min';
}

const faqs = [
  { q: 'Do I need crypto to start?', a: 'No. Most airdrops on our tracker are completely free. A wallet takes 2 minutes to set up and many airdrops require zero deposit — bridge $5 on cheap L2s for the paid ones.' },
  { q: 'Are these airdrops legit?', a: 'Every airdrop on 3alamiy is manually verified by our team before listing. We check the team, funding, and smart contracts. We skip anything that looks suspicious.' },
  { q: 'How much time does this take?', a: 'Easy airdrops take 5–10 minutes. Testnet farming takes 15–30 minutes per week. You can earn significant rewards with just 20 focused minutes per day.' },
  { q: 'How much can I earn?', a: 'It varies widely. Simple social airdrops pay $50–200. Testnet airdrops have historically paid $500–$5,000+. Discord role airdrops have paid up to $20,000 per wallet.' },
  { q: 'What about scams?', a: 'Never share your seed phrase. Legitimate airdrops never ask for it. Never pay to receive an airdrop. Use a separate wallet for farming. We cover this in our scam guide.' },
  { q: 'Where do I start?', a: 'Start with our 3 beginner-friendly picks below — all free, all under 10 minutes, all verified. Build confidence before moving to more complex strategies.' },
];

const socialProof = [
  { handle: 'Telegram member, Morocco 🇲🇦', avatar: 'M', claim: '$3,200', text: 'Followed the Monad testnet guide step by step. Got my allocation 6 weeks later. Zero cost in, just my time.', color: '#818cf8' },
  { handle: 'Telegram member, Nigeria 🇳🇬', avatar: 'N', claim: '$840', text: 'The daily on-chain routine actually works. 10 minutes a day consistently. Got the airdrop, no drama.', color: '#7CF5C0' },
  { handle: 'Telegram member, Poland 🇵🇱', avatar: 'P', claim: '$1,750', text: 'Telegram alert caught the snapshot window 4 hours before it went viral on CT. Would have missed it otherwise.', color: '#f59e0b' },
];

const chains = ['Ethereum', 'Solana', 'Arbitrum', 'Base', 'Monad', 'Sui', 'zkSync', 'Optimism'];

export default async function Home() {
  const [airdrops, recentlyUpdated, dbTestimonials] = await Promise.all([getAllAirdrops(), getRecentlyUpdated(), getTestimonials()]);
  const proofColors = ['#818cf8', '#7CF5C0', '#f59e0b'];
  const testimonials = dbTestimonials.length > 0 ? dbTestimonials : socialProof;
  const activeCount = airdrops.filter((a: any) => a.status === 'Active').length;
  const freeCount = airdrops.filter((a: any) => a.cost === 'Free').length;

  const starterAirdrops = airdrops
    .filter((a: any) => a.status === 'Active' && a.cost === 'Free' && a.difficulty === 'Easy')
    .slice(0, 3);

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Crypto Airdrops 2026 — Verified Database',
    description: `A verified database of ${airdrops.length}+ active and historical crypto airdrops in 2026.`,
    url: 'https://www.3alamiyweb3.com/airdrops',
    creator: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['crypto airdrops 2026', 'free airdrops', 'ethereum airdrop', 'solana airdrop'],
    variableMeasured: [
      { '@type': 'PropertyValue', name: 'Total Airdrops', value: airdrops.length },
      { '@type': 'PropertyValue', name: 'Active Airdrops', value: activeCount },
      { '@type': 'PropertyValue', name: 'Free Airdrops', value: freeCount },
      { '@type': 'PropertyValue', name: 'Blockchains Covered', value: 16 },
    ],
    isAccessibleForFree: true,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Best Crypto Airdrops ${new Date().getFullYear()}`,
    url: 'https://www.3alamiyweb3.com/airdrops',
    numberOfItems: airdrops.filter((a: any) => a.status === 'Active').slice(0, 10).length,
    itemListElement: airdrops.filter((a: any) => a.status === 'Active').slice(0, 10)
      .filter((a: any) => a?.slug && a?.name)
      .map((a: any, i: number) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${a.name} Airdrop`,
        url: `https://www.3alamiyweb3.com/airdrops/${a.slug}`,
        description: a.description?.slice(0, 150) || '',
      })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <style>{`
        html, body { overflow-x: hidden; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .page {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #fff; overflow-x: hidden; width: 100%;
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(124,245,192,0.6); } 50% { opacity: 0.5; box-shadow: 0 0 12px rgba(124,245,192,0.3); } }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes counterUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .anim-fade-up { animation: fadeUp 0.7s ease both; }
        .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .anim-fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }
        .anim-fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
        .anim-fade-up-4 { animation: fadeUp 0.7s 0.4s ease both; }

        /* HERO */
        .hero { position: relative; overflow: hidden; padding: 90px 24px 80px; width: 100%; }
        .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(124,245,192,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,245,192,0.03) 1px, transparent 1px); background-size: 56px 56px; pointer-events: none; }
        .hero-glow { position: absolute; top: -120px; left: 50%; transform: translateX(-50%); width: 800px; height: 600px; background: radial-gradient(ellipse at center, rgba(124,245,192,0.06) 0%, rgba(99,102,241,0.04) 40%, transparent 70%); pointer-events: none; }
        .hero-inner { position: relative; max-width: 820px; margin: 0 auto; text-align: center; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); color: #7CF5C0; font-size: 11px; font-weight: 700; padding: 6px 14px; border-radius: 99px; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 28px; }
        .hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #7CF5C0; animation: pulse 1.8s infinite; }
        .hero-h1 { font-size: clamp(38px, 6vw, 72px); font-weight: 900; line-height: 1.08; letter-spacing: -0.035em; color: #fff; margin-bottom: 12px; }
        .hero-h1-accent { background: linear-gradient(135deg, #7CF5C0, #6366f1, #7CF5C0); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradientShift 4s ease infinite; }
        .hero-sub { font-size: clamp(17px, 2.2vw, 22px); color: rgba(255,255,255,0.55); line-height: 1.7; max-width: 560px; margin: 0 auto 36px; font-weight: 400; }
        .hero-ctas { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #7CF5C0, #4ade80); color: #080C14; font-size: 14px; font-weight: 800; padding: 13px 26px; border-radius: 12px; text-decoration: none; box-shadow: 0 8px 32px rgba(124,245,192,0.25); transition: transform 0.15s, box-shadow 0.15s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(124,245,192,0.35); }
        .btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 600; padding: 13px 26px; border-radius: 12px; text-decoration: none; transition: background 0.15s, border-color 0.15s; }
        .btn-secondary:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.18); color: #fff; }
        .hero-proof { display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .hero-proof-item { display: flex; align-items: center; gap: 7px; font-size: 12px; color: rgba(255,255,255,0.35); font-weight: 500; }
        .hero-proof-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.15); }

        /* STATS */
        .stats-bar { border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02); padding: 0 24px; }
        .stats-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); }
        .stat-item { padding: 24px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.05); animation: counterUp 0.6s ease both; }
        .stat-item:last-child { border-right: none; }
        .stat-num { font-size: 32px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; margin-bottom: 4px; }
        .stat-label { font-size: 11px; color: rgba(255,255,255,0.3); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }

        /* CHAINS */
        .chains-strip { padding: 20px 24px; border-top: 1px solid rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.04); }
        .chains-label { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.2); text-transform: uppercase; letter-spacing: 0.1em; text-align: center; margin-bottom: 14px; }
        .chains-row { display: flex; align-items: center; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .chain-tag { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 5px 14px; border-radius: 99px; transition: color 0.15s, border-color 0.15s; }
        .chain-tag:hover { color: #7CF5C0; border-color: rgba(124,245,192,0.2); }

        /* SECTIONS */
        .section { padding: 72px 24px; }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .section-label { font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 8px; }
        .section-title { font-size: clamp(24px, 4vw, 36px); font-weight: 900; letter-spacing: -0.03em; color: #fff; margin-bottom: 6px; }
        .section-sub { font-size: 14px; color: rgba(255,255,255,0.35); font-weight: 400; }
        .sec-hdr { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 28px; gap: 16px; flex-wrap: wrap; }
        .view-all { font-size: 12px; font-weight: 700; color: #7CF5C0; text-decoration: none; display: flex; align-items: center; gap: 4px; transition: gap 0.15s; white-space: nowrap; }
        .view-all:hover { gap: 8px; }

        /* STARTER CARDS */
        .starter-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .starter-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; padding: 24px; text-decoration: none; color: #fff; display: flex; flex-direction: column; gap: 14px; transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; position: relative; overflow: hidden; }
        .starter-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(124,245,192,0.03) 0%, transparent 60%); opacity: 0; transition: opacity 0.2s; }
        .starter-card:hover { border-color: rgba(124,245,192,0.2); transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.3); }
        .starter-card:hover::before { opacity: 1; }
        .starter-num { width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; flex-shrink: 0; }
        .starter-name { font-size: 15px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 4px; }
        .starter-chain { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.08em; }
        .starter-desc { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.6; flex: 1; }
        .tag { display: inline-flex; align-items: center; font-size: 10px; font-weight: 700; padding: 3px 9px; border-radius: 99px; }
        .tag-free { background: rgba(124,245,192,0.08); border: 1px solid rgba(124,245,192,0.18); color: #7CF5C0; }
        .tag-easy { background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.18); color: #818cf8; }
        .starter-cta { font-size: 12px; font-weight: 700; color: #7CF5C0; display: flex; align-items: center; gap: 4px; transition: gap 0.15s; }
        .starter-card:hover .starter-cta { gap: 8px; }

        /* PROOF */
        .proof-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .proof-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 14px; animation: fadeUp 0.6s ease both; }
        .proof-avatar { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; flex-shrink: 0; }
        .proof-handle { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5); }
        .proof-claim { font-size: 22px; font-weight: 900; letter-spacing: -0.04em; color: #7CF5C0; }
        .proof-text { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.6; }
        .proof-on { font-size: 10px; color: rgba(255,255,255,0.2); font-weight: 600; }

        /* RECENTLY UPDATED */
        .ru-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .ru-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 16px; text-decoration: none; color: #fff; display: flex; flex-direction: column; gap: 10px; transition: border-color 0.15s, transform 0.15s; position: relative; overflow: hidden; }
        .ru-card:hover { border-color: rgba(124,245,192,0.2); transform: translateY(-2px); }

        /* LEARN */
        .learn-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .learn-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 22px; text-decoration: none; color: #fff; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.2s, transform 0.2s; }
        .learn-card:hover { border-color: rgba(99,102,241,0.25); transform: translateY(-2px); }
        .learn-cat { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; }
        .learn-title { font-size: 15px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.35; color: #f1f5f9; }
        .learn-desc { font-size: 12px; color: rgba(255,255,255,0.3); line-height: 1.6; }

        /* FAQ */
        .faq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .faq-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 22px; transition: border-color 0.15s; animation: fadeUp 0.6s ease both; }
        .faq-card:hover { border-color: rgba(124,245,192,0.12); }
        .faq-q { font-size: 15px; font-weight: 800; letter-spacing: -0.02em; color: #fff; margin-bottom: 10px; line-height: 1.4; display: flex; align-items: flex-start; gap: 10px; }
        .faq-q-icon { width: 22px; height: 22px; border-radius: 6px; flex-shrink: 0; background: rgba(124,245,192,0.08); border: 1px solid rgba(124,245,192,0.15); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; color: #7CF5C0; margin-top: 1px; }
        .faq-a { font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.7; padding-left: 32px; }

        /* CTA SPLIT */
        .cta-split { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .cta-email { background: rgba(124,245,192,0.03); border: 1px solid rgba(124,245,192,0.15); border-radius: 20px; padding: 36px; position: relative; overflow: hidden; }
        .cta-email::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%); }
        .cta-tg { background: linear-gradient(135deg, #0D1A1F, #080C14); border: 1px solid rgba(124,245,192,0.15); border-radius: 20px; padding: 36px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; }
        .cta-tg::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(124,245,192,0.08) 0%, transparent 70%); }
        .cta-label { font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
        .cta-h2 { font-size: clamp(20px, 3vw, 28px); font-weight: 900; letter-spacing: -0.03em; color: #fff; margin-bottom: 10px; line-height: 1.25; }
        .cta-desc { font-size: 13px; color: rgba(255,255,255,0.35); line-height: 1.6; margin-bottom: 24px; }
        .cta-tg-avatars { display: flex; align-items: center; margin-bottom: 16px; }
        .cta-tg-av { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #7CF5C0, #4ade80); border: 2px solid #080C14; margin-left: -8px; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; color: #080C14; }
        .cta-tg-av:first-child { margin-left: 0; }
        .cta-tg-count { font-size: 12px; color: rgba(255,255,255,0.35); margin-left: 10px; font-weight: 600; }
        .btn-tg { display: inline-flex; align-items: center; gap: 8px; background: rgba(124,245,192,0.1); border: 1px solid rgba(124,245,192,0.2); color: #7CF5C0; font-size: 13px; font-weight: 700; padding: 12px 20px; border-radius: 12px; text-decoration: none; transition: background 0.15s; width: fit-content; }
        .btn-tg:hover { background: rgba(124,245,192,0.16); }

        /* MISC */
        .content { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .divider { height: 1px; background: rgba(255,255,255,0.05); margin: 0 24px; }
        .sc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .sc-card { display: flex; align-items: center; gap: 12px; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px 16px; text-decoration: none; color: #fff; transition: border-color 0.15s, transform 0.15s; }
        .sc-card:hover { border-color: rgba(124,245,192,0.2); transform: translateY(-2px); }

        @media (max-width: 900px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .starter-grid { grid-template-columns: 1fr; }
          .proof-grid { grid-template-columns: 1fr; }
          .ru-grid { grid-template-columns: repeat(2, 1fr); }
          .learn-grid { grid-template-columns: 1fr; }
          .faq-grid { grid-template-columns: 1fr; }
          .cta-split { grid-template-columns: 1fr; }
          .sc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .hero { padding: 60px 16px 56px; }
          .section { padding: 48px 16px; }
          .ru-grid { grid-template-columns: 1fr; }
          .sc-grid { grid-template-columns: 1fr; }
          .hero-ctas { flex-direction: column; align-items: center; }
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="page">

        {/* HERO */}
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="hero-inner">
            <div className="hero-badge anim-fade-up">
              <span className="hero-badge-dot" />
              {activeCount}+ Verified Airdrops Tracked
            </div>
            <h1 className="hero-h1 anim-fade-up-1">
              Best crypto airdrops 2026<br />
              — guides, alerts,<br />
              <span className="hero-h1-accent">before CT notices.</span>
            </h1>
            <p className="hero-sub anim-fade-up-2">
              Free step-by-step guides for every crypto airdrop in 2026. Track, participate, and earn — updated daily by hunters who actually farm.
            </p>
            <div className="hero-ctas anim-fade-up-3">
              <Link href="/airdrops" className="btn-primary">
                Browse {activeCount} airdrops →
              </Link>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                Join 500+ in Telegram
              </a>
            </div>
            <div className="hero-proof anim-fade-up-4">
              <span className="hero-proof-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                40+ countries
              </span>
              <span className="hero-proof-dot" />
              <span className="hero-proof-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                {airdrops.length}+ guides
              </span>
              <span className="hero-proof-dot" />
              <span className="hero-proof-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Always free
              </span>
              <span className="hero-proof-dot" />
              <span className="hero-proof-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                Updated daily
              </span>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="stats-bar">
          <div className="stats-inner">
            {[
              { num: airdrops.length, suffix: '+', label: 'Total Airdrops', color: '#7CF5C0', delay: '0s' },
              { num: activeCount, suffix: '', label: 'Active Right Now', color: '#818cf8', delay: '0.1s' },
              { num: 100, suffix: '%', label: 'Free to Start', color: '#f59e0b', delay: '0.2s' },
              { num: 16, suffix: '+', label: 'EVM Networks', color: '#f43f5e', delay: '0.3s' },
            ].map((s) => (
              <div key={s.label} className="stat-item" style={{ animationDelay: s.delay }}>
                <div className="stat-num" style={{ color: s.color }}>{s.num}{s.suffix}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ECOSYSTEM TICKER */}
        <div style={{ padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'linear-gradient(135deg, #060A12 0%, #0D1A2E 40%, #0A1628 60%, #060A12 100%)', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '6px' }}>Ecosystem Coverage</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>Trusted across <span style={{ color: '#7CF5C0' }}>50+ Networks</span></div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', marginTop: '4px' }}>and many more across the ecosystem...</div>
          </div>
          <style>{`
            .tk-outer { overflow: hidden; position: relative; width: 100%; }
            .tk-outer::before, .tk-outer::after { content:''; position:absolute; top:0; width:80px; height:100%; z-index:2; pointer-events:none; }
            .tk-outer::before { left:0; background:linear-gradient(to right, #060A12, transparent); }
            .tk-outer::after { right:0; background:linear-gradient(to left, #060A12, transparent); }
            .tk-track { display:flex; gap:10px; width:max-content; animation: tkScroll 45s linear infinite; padding: 4px 0; }
            .tk-track:hover { animation-play-state: paused; }
            @keyframes tkScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
            .tk-card { display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px 18px; white-space:nowrap; flex-shrink:0; transition:border-color 0.15s,background 0.15s; cursor:default; }
            .tk-card:hover { border-color:rgba(124,245,192,0.25); background:rgba(124,245,192,0.04); }
            .tk-logo { width:32px; height:32px; border-radius:50%; object-fit:cover; flex-shrink:0; background:rgba(255,255,255,0.06); }
            .tk-logo-err { display:none; width:32px; height:32px; border-radius:50%; flex-shrink:0; background:rgba(124,245,192,0.1); border:1px solid rgba(124,245,192,0.2); color:#7CF5C0; font-size:12px; font-weight:700; align-items:center; justify-content:center; }
            .tk-name { font-size:13px; font-weight:600; color:rgba(255,255,255,0.7); }
            @media (max-width:560px) {
              .tk-card { padding:8px 12px; border-radius:10px; gap:8px; }
              .tk-logo, .tk-logo-err { width:24px; height:24px; font-size:10px; }
              .tk-name { font-size:12px; }
              .tk-track { gap:7px; }
            }
          `}</style>
          <div className="tk-outer">
            <div className="tk-track">
              {[
                { name: 'Ethereum', logo: '/chains/ethereum.png' },
                { name: 'Solana', logo: '/chains/solana.png' },
                { name: 'Arbitrum', logo: '/chains/arbitrum.png' },
                { name: 'Base', logo: '/chains/base.png' },
                { name: 'Hyperliquid', logo: '/chains/Hyperliquid.png' },
                { name: 'Sui', logo: '/chains/sui.png' },
                { name: 'Optimism', logo: '/chains/optimism.png' },
                { name: 'Polygon', logo: '/chains/polygon.png' },
                { name: 'Avalanche', logo: '/chains/avalanche.png' },
                { name: 'BNB Chain', logo: '/chains/bnb.png' },
                { name: 'Aptos', logo: '/chains/aptos.png' },
                { name: 'ZKSync', logo: '/chains/zksync.png' },
                { name: 'Monad', logo: '/chains/monad.png' },
                { name: 'Linea', logo: '/chains/linea.png' },
                { name: 'Starknet', logo: '/chains/Starknet.png' },
                { name: 'Pharos', logo: '/chains/Pharos.png' },
                { name: 'Mantle', logo: '/chains/mantle.png' },
                { name: 'Blast', logo: '/chains/blast.png' },
                { name: 'HyperEVM', logo: '/chains/Hyperliquid.png' },
                { name: 'Abstract', logo: '/chains/Abstract.png' },
                { name: 'Scroll', logo: '/chains/scroll.png' },
                { name: 'Taiko', logo: '/chains/Taiko.png' },
              ].concat([
                { name: 'Ethereum', logo: '/chains/ethereum.png' },
                { name: 'Solana', logo: '/chains/solana.png' },
                { name: 'Arbitrum', logo: '/chains/arbitrum.png' },
                { name: 'Base', logo: '/chains/base.png' },
                { name: 'Hyperliquid', logo: '/chains/Hyperliquid.png' },
                { name: 'Sui', logo: '/chains/sui.png' },
                { name: 'Optimism', logo: '/chains/optimism.png' },
                { name: 'Polygon', logo: '/chains/polygon.png' },
                { name: 'Avalanche', logo: '/chains/avalanche.png' },
                { name: 'BNB Chain', logo: '/chains/bnb.png' },
                { name: 'Aptos', logo: '/chains/aptos.png' },
                { name: 'ZKSync', logo: '/chains/zksync.png' },
                { name: 'Monad', logo: '/chains/monad.png' },
                { name: 'Linea', logo: '/chains/linea.png' },
                { name: 'Starknet', logo: '/chains/Starknet.png' },
                { name: 'Pharos', logo: '/chains/Pharos.png' },
                { name: 'Mantle', logo: '/chains/mantle.png' },
                { name: 'Blast', logo: '/chains/blast.png' },
                { name: 'HyperEVM', logo: '/chains/Hyperliquid.png' },
                { name: 'Abstract', logo: '/chains/Abstract.png' },
                { name: 'Scroll', logo: '/chains/scroll.png' },
                { name: 'Taiko', logo: '/chains/Taiko.png' },
              ]).map((c, i) => (
                <div key={i} className="tk-card">
                  <img src={c.logo} alt={c.name} width={32} height={32} className="tk-logo" />
                  <span className="tk-name">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* START WITH THESE THREE */}
        {starterAirdrops.length > 0 && (
          <section className="section">
            <div className="section-inner">
              <div className="sec-hdr">
                <div>
                  <div className="section-label">New to Airdrops?</div>
                  <div className="section-title">Start with these three.</div>
                  <div className="section-sub">Free, under 10 minutes each, verified by our team.</div>
                </div>
                <Link href="/airdrops" className="view-all">Full beginner guide →</Link>
              </div>
              <div className="starter-grid">
                {starterAirdrops.map((a: any, i: number) => {
                  const colors = ['#818cf8', '#7CF5C0', '#f59e0b'];
                  const color = colors[i];
                  const steps = Array.isArray(a.steps) ? a.steps : (typeof a.steps === 'string' ? JSON.parse(a.steps || '[]') : []);
                  return (
                    <Link key={a.slug} href={`/airdrops/${a.slug}`} className="starter-card">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="starter-num" style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}>{i + 1}</div>
                        <div>
                          <div className="starter-name">{a.name}</div>
                          <div className="starter-chain">{a.blockchain}</div>
                        </div>
                        {a.logo && <img src={a.logo} alt={a.name} width={32} height={32} style={{ borderRadius: '8px', marginLeft: 'auto', border: '1px solid rgba(255,255,255,0.07)', objectFit: 'cover' }} />}
                      </div>
                      <p className="starter-desc">{a.description?.slice(0, 90)}…</p>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span className="tag tag-free">Free</span>
                        <span className="tag tag-easy">Easy</span>
                        <span className="tag" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}>{timeLabel(steps)}</span>
                      </div>
                      <div className="starter-cta" style={{ color }}>
                        View guide
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <div className="divider" />

        {/* SOCIAL PROOF */}
        <section className="section">
          <div className="section-inner">
            <div className="sec-hdr">
              <div>
                <div className="section-label">Proof, not promises</div>
                <div className="section-title">From our Telegram community — real results, real people.</div>
                <div className="section-sub">Members sharing their wins in our Telegram. Join 500+ farmers tracking airdrops daily.</div>
              </div>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="view-all">Share yours →</a>
            </div>
            <div className="proof-grid">
              {testimonials.map((p: any, i: number) => {
                const color = proofColors[i % proofColors.length];
                const av = p.avatar || p.handle?.[1]?.toUpperCase() || '?';
                return (
                  <div key={p.handle} className="proof-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="proof-avatar" style={{ background: `${color}18`, border: `1px solid ${color}30`, color }}>{av}</div>
                      <div>
                        <div className="proof-handle">{p.handle}</div>
                        <div className="proof-on">on 3alamiy Web3</div>
                      </div>
                    </div>
                    <div className="proof-claim">Claimed {p.claim}</div>
                    <p className="proof-text">"{p.text}"</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* RECENTLY UPDATED */}
        {recentlyUpdated.length > 0 && (
          <section className="section" style={{ paddingBottom: 0 }}>
            <div className="section-inner">
              <div className="sec-hdr" style={{ marginBottom: '16px' }}>
                <div>
                  <div className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '22px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#7CF5C0', boxShadow: '0 0 6px rgba(124,245,192,0.6)', display: 'inline-block', animation: 'pulse 1.8s infinite', flexShrink: 0 }} />
                    Recently Updated
                  </div>
                  <div className="section-sub">Airdrops with fresh guides or new information</div>
                </div>
                <Link href="/airdrops" className="view-all">See all →</Link>
              </div>
              <div className="ru-grid">
                {recentlyUpdated.map((a: any) => {
                  const timeAgo = (date: string) => {
                    if (!date) return 'Recently';
                    const diff = Date.now() - new Date(date).getTime();
                    const mins = Math.floor(diff / 60000);
                    const hours = Math.floor(diff / 3600000);
                    const days = Math.floor(diff / 86400000);
                    if (mins < 60) return `${mins}m ago`;
                    if (hours < 24) return `${hours}h ago`;
                    return `${days}d ago`;
                  };
                  return (
                    <Link key={a.slug} href={`/airdrops/${a.slug}`} className="ru-card">
                      <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.18)', color: '#7CF5C0', fontSize: '9px', fontWeight: 700, padding: '2px 7px', borderRadius: '99px' }}>
                        {timeAgo(a.updated_at)}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingRight: '60px' }}>
                        {a.logo
                          ? <img src={a.logo} alt={a.name} width={36} height={36} style={{ borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)', objectFit: 'cover', flexShrink: 0 }} />
                          : <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#1a2540', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{a.name?.[0]}</div>
                        }
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: '13px', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.name}</div>
                          <div style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{a.blockchain}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <span className="tag" style={{ background: a.status === 'Active' ? 'rgba(124,245,192,0.08)' : 'rgba(100,100,120,0.08)', border: `1px solid ${a.status === 'Active' ? 'rgba(124,245,192,0.18)' : 'rgba(100,100,120,0.16)'}`, color: a.status === 'Active' ? '#7CF5C0' : '#6b7280' }}>{a.status}</span>
                        <span className="tag" style={{ background: a.cost === 'Free' ? 'rgba(124,245,192,0.08)' : 'rgba(245,158,11,0.08)', border: `1px solid ${a.cost === 'Free' ? 'rgba(124,245,192,0.18)' : 'rgba(245,158,11,0.18)'}`, color: a.cost === 'Free' ? '#7CF5C0' : '#f59e0b' }}>{a.cost}</span>
                      </div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#7CF5C0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        View Guide <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <div className="divider" />

        {/* ALL AIRDROPS */}
        <div className="content" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div style={{ marginBottom: '32px' }}>
            <div className="section-label">Full Database</div>
            <div className="section-title">All Airdrops</div>
            <div className="section-sub">{airdrops.length}+ verified airdrop opportunities — filter by chain, status, or cost.</div>
          </div>
          <FilterBar airdrops={airdrops} />
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href="/airdrops" className="btn-primary" style={{ display: 'inline-flex' }}>
              View all {airdrops.length} airdrops →
            </Link>
          </div>
        </div>

        <div className="divider" />

        {/* EMAIL CAPTURE BANNER */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '72px 24px' }}>
          {/* layered background */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #080C14 0%, #0B1220 40%, #0D1628 60%, #080C14 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,245,192,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(124,245,192,0.025) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '400px', background: 'radial-gradient(ellipse, rgba(124,245,192,0.07) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124,245,192,0.3) 30%, rgba(99,102,241,0.3) 70%, transparent)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124,245,192,0.15) 50%, transparent)' }} />

          <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>

            {/* badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.18)', color: '#7CF5C0', fontSize: '10px', fontWeight: 800, padding: '6px 16px', borderRadius: '99px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7CF5C0', display: 'inline-block', animation: 'pulse 1.8s infinite', boxShadow: '0 0 8px rgba(124,245,192,0.6)' }} />
              Free — No spam, ever
            </div>

            {/* headline */}
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '16px' }}>
              Get early airdrops<br />
              <span style={{ background: 'linear-gradient(135deg, #7CF5C0 0%, #4ade80 50%, #7CF5C0 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradientShift 4s ease infinite' }}>before everyone else.</span>
            </h2>

            {/* subtext */}
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.38)', marginBottom: '16px', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 16px' }}>
              We alert you the moment a high-value airdrop goes live —<br />
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>before it hits CT.</span>
            </p>

            {/* feature pills */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
              {[
                { icon: '⚡', text: 'Instant alerts' },
                { icon: '🎯', text: 'Verified only' },
                { icon: '💰', text: '$500–$10K picks' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '7px 14px', borderRadius: '99px', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>
                  <span style={{ fontSize: '13px' }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            {/* form */}
            <div style={{ maxWidth: '520px', margin: '0 auto' }}>
              <EmailSignup />
            </div>

            {/* trust row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '28px', flexWrap: 'wrap' }}>
              {[
                { val: '500+', label: 'subscribers' },
                { val: '40+', label: 'countries' },
                { val: '125+', label: 'airdrops tracked' },
              ].map(({ val, label }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#7CF5C0', letterSpacing: '-0.03em' }}>{val}</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <div className="divider" style={{ marginTop: '72px' }} />

      </div>
    </>
  );
}
