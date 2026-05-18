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
  const costColor = a.cost === 'Paid' ? '#f43f5e' : a.cost === 'Low' ? '#f59e0b' : '#7CF5C0';
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

  const difficultyColor = a.difficulty === 'Easy' ? '#7CF5C0' : a.difficulty === 'Medium' ? '#FFD264' : '#f43f5e';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        * { box-sizing: border-box; }

        .dp-root {
          min-height: 100vh;
          background: #080C14;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #E2E4EC;
        }

        /* ── Topbar breadcrumb ── */
        .dp-topbar {
          background: rgba(8,12,20,0.95);
          border-bottom: 0.5px solid rgba(255,255,255,0.06);
          padding: 13px 28px;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
        }
        .dp-topbar a { color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.15s; }
        .dp-topbar a:hover { color: rgba(255,255,255,0.7); }
        .dp-topbar .bc-cur { color: #7CF5C0; }
        .dp-topbar .bc-sep { font-size: 10px; }

        /* ── Hero ── */
        .dp-hero {
          position: relative;
          padding: 36px 28px 0;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
        }
        .dp-hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -80px;
          width: 480px; height: 360px;
          background: radial-gradient(ellipse, rgba(124,245,192,0.055) 0%, transparent 70%);
          pointer-events: none;
        }
        .dp-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: -60px;
          width: 340px; height: 280px;
          background: radial-gradient(ellipse, rgba(99,130,255,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Badges */
        .dp-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
        .dp-badge {
          font-size: 10px; font-weight: 500; letter-spacing: 0.07em;
          text-transform: uppercase; padding: 5px 13px; border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
        }
        .badge-chain  { background: rgba(99,130,255,0.1);  color: #90AAFF; border: 0.5px solid rgba(99,130,255,0.22); }
        .badge-active { background: rgba(124,245,192,0.09); color: #7CF5C0; border: 0.5px solid rgba(124,245,192,0.22); }
        .badge-ended  { background: rgba(113,113,122,0.1);  color: #71717a; border: 0.5px solid rgba(113,113,122,0.2); }
        .badge-free   { background: rgba(255,210,100,0.09); color: #FFD264; border: 0.5px solid rgba(255,210,100,0.2); }
        .badge-paid   { background: rgba(244,63,94,0.09);   color: #f87171; border: 0.5px solid rgba(244,63,94,0.2); }

        /* Identity row */
        .dp-identity { display: flex; gap: 22px; align-items: flex-start; margin-bottom: 26px; }
        .dp-logo {
          width: 76px; height: 76px; border-radius: 20px;
          object-fit: cover; flex-shrink: 0;
          border: 0.5px solid rgba(255,255,255,0.1);
        }
        .dp-logo-fb {
          width: 76px; height: 76px; border-radius: 20px;
          background: linear-gradient(135deg, #131C2E, #1A2540);
          flex-shrink: 0; display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 28px; color: #3B4A6B;
          border: 0.5px solid rgba(255,255,255,0.06);
        }
        .dp-title {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 30px;
          color: #fff; line-height: 1.1; margin: 0 0 11px; letter-spacing: -0.02em;
        }
        .dp-desc { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.75; margin: 0 0 20px; max-width: 580px; }

        /* CTA row */
        .dp-cta-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .btn-start {
          display: inline-flex; align-items: center; gap: 8px;
          background: #7CF5C0; color: #061710;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
          padding: 12px 26px; border-radius: 12px; border: none;
          text-decoration: none; cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
        }
        .btn-start:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.55);
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
          padding: 10px 18px; border-radius: 10px;
          border: 0.5px solid rgba(255,255,255,0.1);
          text-decoration: none; cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.16); }

        /* Stats strip */
        .dp-stats-strip {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(255,255,255,0.05);
          border-radius: 16px; overflow: hidden;
          margin: 0 28px; max-width: calc(1200px - 56px);
          /* center inside max-width container */
          position: relative; left: 50%; transform: translateX(-50%);
          width: calc(100% - 56px);
        }
        .dp-stat-cell {
          background: #0C1120; padding: 20px 24px; text-align: center;
        }
        .dp-stat-val {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: 20px;
          color: #fff; margin-bottom: 4px;
        }
        .dp-stat-lbl {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.09em;
          color: rgba(255,255,255,0.28); font-weight: 500;
        }

        /* ── Body grid ── */
        .dp-body {
          display: grid; grid-template-columns: 1fr 308px; gap: 24px;
          max-width: 1200px; margin: 0 auto;
          padding: 28px 28px 80px; align-items: start;
        }
        .dp-main { display: flex; flex-direction: column; gap: 16px; }

        /* Cards */
        .dp-card {
          background: #0C1120;
          border: 0.5px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
        }
        .dp-card-inner { padding: 22px; }
        .dp-sec-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.28); font-weight: 500; margin-bottom: 8px;
        }
        .dp-card-title {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: 18px;
          color: #fff; margin: 0 0 16px;
        }

        /* Quick Answer */
        .dp-quick-answer {
          background: linear-gradient(135deg, rgba(124,245,192,0.04), rgba(99,130,255,0.04));
          border: 0.5px solid rgba(124,245,192,0.14);
          border-radius: 16px; padding: 20px 22px;
          display: flex; gap: 14px; align-items: flex-start;
        }
        .qa-icon-wrap {
          width: 38px; height: 38px; border-radius: 11px; flex-shrink: 0;
          background: rgba(124,245,192,0.1);
          display: flex; align-items: center; justify-content: center;
        }
        .qa-icon-wrap svg { width: 16px; height: 16px; color: #7CF5C0; }
        .qa-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #7CF5C0; font-weight: 500; margin-bottom: 7px; }
        .qa-text { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; margin: 0; }
        .qa-text strong { color: #fff; font-weight: 500; }

        /* Overview tags */
        .ov-body { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.8; margin: 0 0 14px; }
        .ov-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .ov-tag {
          font-size: 12px; background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.45);
          padding: 5px 13px; border-radius: 8px;
        }
        .ov-tag span { color: rgba(255,255,255,0.8); margin-left: 4px; }

        /* CTA banner */
        .dp-cta-banner {
          background: linear-gradient(135deg, #0C1120, #0D1628);
          border: 0.5px solid rgba(124,245,192,0.12);
          border-radius: 16px; padding: 22px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .cta-pulse {
          display: flex; align-items: center; gap: 8px; margin-bottom: 5px;
        }
        .cta-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #7CF5C0;
          box-shadow: 0 0 7px rgba(124,245,192,0.6);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .cta-eyebrow { font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: #7CF5C0; }
        .cta-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; color: #fff; margin: 0 0 4px; }
        .cta-sub { font-size: 12px; color: rgba(255,255,255,0.3); margin: 0; }
        .btn-tg {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #7CF5C0, #4ECDA4);
          color: #061710; font-weight: 600; font-size: 13px;
          padding: 11px 20px; border-radius: 11px;
          text-decoration: none; white-space: nowrap;
          transition: opacity 0.15s, transform 0.15s;
        }
        .btn-tg:hover { opacity: 0.88; transform: translateY(-1px); }

        /* FAQ */
        .faq-item {
          background: rgba(255,255,255,0.02);
          border: 0.5px solid rgba(255,255,255,0.06);
          border-radius: 12px; padding: 16px 18px; margin-bottom: 8px;
        }
        .faq-item:last-child { margin-bottom: 0; }
        .faq-q { font-size: 14px; font-weight: 500; color: #E2E4EC; margin: 0 0 8px; }
        .faq-a { font-size: 13px; color: rgba(255,255,255,0.42); margin: 0; line-height: 1.75; }

        /* Tags */
        .dp-tag {
          background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.4); padding: 5px 13px; border-radius: 8px;
          font-size: 11px; font-weight: 500;
        }

        /* Learn links */
        .learn-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 16px; background: rgba(255,255,255,0.02);
          border: 0.5px solid rgba(255,255,255,0.06); border-radius: 11px;
          text-decoration: none; color: rgba(255,255,255,0.45); font-size: 13px; font-weight: 500;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
          margin-bottom: 7px;
        }
        .learn-link:last-child { margin-bottom: 0; }
        .learn-link:hover { background: rgba(255,255,255,0.04); border-color: rgba(124,245,192,0.15); color: rgba(255,255,255,0.7); }
        .learn-link svg { flex-shrink: 0; opacity: 0.4; transition: opacity 0.15s, transform 0.15s; }
        .learn-link:hover svg { opacity: 0.7; transform: translateX(2px); }

        /* Related */
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .related-card {
          background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 14px; text-decoration: none; color: #fff;
          display: flex; flex-direction: column; gap: 8px;
          transition: border-color 0.15s, background 0.15s;
        }
        .related-card:hover { border-color: rgba(124,245,192,0.18); background: rgba(124,245,192,0.02); }

        /* ── Sidebar ── */
        .dp-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 12px; }

        .reward-card {
          background: linear-gradient(135deg, #0B1B14, #0C1A1E);
          border: 0.5px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 22px;
        }
        .reward-eyebrow {
          display: flex; align-items: center; gap: 7px; margin-bottom: 11px;
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.09em;
          color: rgba(124,245,192,0.55); font-weight: 500;
        }
        .reward-eyebrow svg { width: 13px; height: 13px; }
        .reward-val {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 28px;
          color: #7CF5C0; line-height: 1; margin-bottom: 6px; letter-spacing: -0.02em;
        }
        .reward-sub { font-size: 11px; color: rgba(255,255,255,0.25); }

        .side-card {
          background: #0C1120; border: 0.5px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 18px;
        }
        .side-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.09em;
          color: rgba(255,255,255,0.27); font-weight: 500; margin: 0 0 14px;
        }
        .stat-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 9px 0; border-bottom: 0.5px solid rgba(255,255,255,0.04);
        }
        .stat-row:last-child { border-bottom: none; }
        .stat-row-label {
          display: flex; align-items: center; gap: 7px;
          font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em;
          color: rgba(255,255,255,0.28); font-weight: 500;
        }
        .stat-row-label svg { width: 13px; height: 13px; opacity: 0.5; }
        .stat-row-value { font-size: 13px; font-weight: 500; }

        .link-btn {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 14px; background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(255,255,255,0.07); border-radius: 11px;
          text-decoration: none; color: rgba(255,255,255,0.55); font-size: 13px; font-weight: 500;
          transition: background 0.15s, border-color 0.15s; margin-bottom: 7px;
        }
        .link-btn:last-child { margin-bottom: 0; }
        .link-btn:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); }
        .link-btn-icon {
          width: 28px; height: 28px; border-radius: 8px; background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .link-btn-icon svg { width: 13px; height: 13px; }

        .tg-card {
          background: linear-gradient(135deg, rgba(99,130,255,0.07), rgba(124,245,192,0.04));
          border: 0.5px solid rgba(99,130,255,0.18); border-radius: 16px; padding: 20px; text-align: center;
        }
        .tg-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; color: #fff; margin: 0 0 6px; }
        .tg-sub { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.6; margin: 0 0 16px; }
        .btn-tg-card {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: rgba(99,130,255,0.12); color: #90AAFF;
          border: 0.5px solid rgba(99,130,255,0.22); border-radius: 11px;
          padding: 11px; font-size: 13px; font-weight: 500;
          text-decoration: none; transition: background 0.15s;
        }
        .btn-tg-card:hover { background: rgba(99,130,255,0.18); }
        .btn-tg-card svg { width: 14px; height: 14px; }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .dp-topbar { padding: 12px 16px; }
          .dp-hero { padding: 24px 16px 0; }
          .dp-title { font-size: 22px; }
          .dp-logo, .dp-logo-fb { width: 60px; height: 60px; border-radius: 15px; }
          .dp-logo-fb { font-size: 22px; }
          .dp-stats-strip { margin: 0 16px; width: calc(100% - 32px); }
          .dp-body { grid-template-columns: 1fr; padding: 20px 16px 60px; gap: 16px; }
          .dp-sidebar { position: static; }
          .related-grid { grid-template-columns: 1fr 1fr; }
          .dp-cta-banner { flex-direction: column; }
        }
      `}</style>

      <div className="dp-root">

        {/* ── Breadcrumb ── */}
        <div className="dp-topbar">
          <a href="https://seo.3alamiyweb3.online">Home</a>
          <span className="bc-sep">›</span>
          <a href="https://seo.3alamiyweb3.online/airdrops">Airdrops</a>
          <span className="bc-sep">›</span>
          <span className="bc-cur">{a.name}</span>
        </div>

        {/* ── Hero ── */}
        <div className="dp-hero">
          <div className="dp-badges">
            <span className="dp-badge badge-chain">{a.blockchain}</span>
            <span className={`dp-badge ${a.status === 'Active' ? 'badge-active' : 'badge-ended'}`}>{a.status}</span>
            <span className={`dp-badge ${a.cost === 'Paid' ? 'badge-paid' : 'badge-free'}`}>{costLabel}</span>
          </div>

          <div className="dp-identity">
            {a.logo
              ? <img className="dp-logo" src={a.logo} alt={`${a.name} logo`} width={76} height={76} />
              : <div className="dp-logo-fb">{a.name?.[0]}</div>
            }
            <div style={{ flex: 1 }}>
              <h1 className="dp-title">{a.name.replace(/\s*airdrop\s*/gi, ' ').trim()} Airdrop Guide {year}</h1>
              <p className="dp-desc">{a.description}</p>
              <div className="dp-cta-row">
                <a href="#guide" className="btn-start">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Start Guide
                </a>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Get Alerts
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="dp-stats-strip">
          <div className="dp-stat-cell">
            <div className="dp-stat-val" style={{ color: '#7CF5C0' }}>{reward}</div>
            <div className="dp-stat-lbl">Est. Reward</div>
          </div>
          <div className="dp-stat-cell">
            <div className="dp-stat-val" style={{ color: difficultyColor }}>{a.difficulty}</div>
            <div className="dp-stat-lbl">Difficulty</div>
          </div>
          <div className="dp-stat-cell">
            <div className="dp-stat-val" style={{ color: costColor }}>{a.cost}</div>
            <div className="dp-stat-lbl">Cost</div>
          </div>
        </div>

        {/* ── Body grid ── */}
        <div className="dp-body">

          {/* LEFT */}
          <div className="dp-main">

            {/* Quick Answer */}
            <div className="dp-quick-answer">
              <div className="qa-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <p className="qa-label">Quick Answer</p>
                <p className="qa-text">
                  <strong>{a.name}</strong> is a {a.status === 'Active' ? 'live' : a.status.toLowerCase()} crypto airdrop on{' '}
                  <strong>{a.blockchain}</strong>. It costs{' '}
                  <strong style={{ color: costColor }}>{a.cost}</strong> to participate, rated{' '}
                  <strong style={{ color: difficultyColor }}>{a.difficulty}</strong> difficulty with {steps.length} steps to complete.{' '}
                  {a.reward_min ? `Estimated reward: ${reward}.` : 'Reward TBA.'}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="dp-card">
              <div className="dp-card-inner">
                <p className="dp-sec-label">Overview</p>
                <h2 className="dp-card-title">What is {a.name} Airdrop?</h2>
                <p className="ov-body">{a.description}</p>
                <p className="ov-body" style={{ marginBottom: 0 }}>
                  Currently <strong style={{ color: '#7CF5C0' }}>{a.status}</strong> on {a.blockchain}.
                  Difficulty: <strong style={{ color: difficultyColor }}>{a.difficulty}</strong>.
                  Cost: <strong style={{ color: costColor }}>{a.cost}</strong>.
                  {reward !== 'TBA' ? <> Estimated reward: <strong style={{ color: '#7CF5C0' }}>{reward}</strong>.</> : ''}
                </p>
                <div className="ov-tags">
                  <span className="ov-tag">Status<span>{a.status}</span></span>
                  <span className="ov-tag">Chain<span>{a.blockchain}</span></span>
                  <span className="ov-tag">Time<span>{Math.max(15, steps.length * 3)} mins</span></span>
                  <span className="ov-tag">Steps<span>{steps.length}</span></span>
                  {a.category && <span className="ov-tag">Category<span>{a.category}</span></span>}
                </div>
              </div>
            </div>

            {/* Guide */}
            <div id="guide" className="dp-card" style={{ overflow: 'visible' }}>
              <ParticipationGuide steps={steps} airdropName={a.name} />
            </div>

            {/* CTA Banner */}
            <div className="dp-cta-banner">
              <div>
                <div className="cta-pulse">
                  <div className="cta-dot" />
                  <span className="cta-eyebrow">All steps done?</span>
                </div>
                <p className="cta-title">Don't miss the next airdrop</p>
                <p className="cta-sub">Get instant alerts when new airdrops drop. Free, no spam.</p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-tg">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Join Telegram
                </a>
                <a href="/airdrops" className="btn-ghost" style={{ whiteSpace: 'nowrap' }}>
                  More Airdrops →
                </a>
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="dp-card">
                <div className="dp-card-inner">
                  <p className="dp-sec-label">Categories</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {tags.map((tag: string) => <span key={tag} className="dp-tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            )}

            {/* FAQ */}
            <div className="dp-card">
              <div className="dp-card-inner">
                <p className="dp-sec-label">FAQ</p>
                <h2 className="dp-card-title">Frequently Asked Questions</h2>
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

            {/* Learn */}
            <div className="dp-card">
              <div className="dp-card-inner">
                <p className="dp-sec-label">Learn More</p>
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
              <div className="dp-card">
                <div className="dp-card-inner">
                  <p className="dp-sec-label">More {a.blockchain} Airdrops</p>
                  <div className="related-grid">
                    {relatedAirdrops.map((r: any) => (
                      <a key={r.slug} href={`/airdrops/${r.slug}`} className="related-card">
                        {r.logo && <img src={r.logo} alt={r.name} width={32} height={32} style={{ borderRadius: '9px', border: '0.5px solid rgba(255,255,255,0.07)' }} />}
                        <div style={{ fontSize: '13px', fontWeight: 500, color: '#E2E4EC' }}>{r.name}</div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{r.difficulty} · {r.blockchain}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="dp-sidebar">

            {/* Reward */}
            <div className="reward-card">
              <div className="reward-eyebrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Est. Reward Range
              </div>
              <div className="reward-val">{rewardDisplay}</div>
              <div className="reward-sub">based on similar projects</div>
            </div>

            {/* Quick stats */}
            <div className="side-card">
              <p className="side-label">Quick Stats</p>
              <div>
                {[
                  { icon: <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2"/>, label: 'Est. Time', value: `${Math.max(15, steps.length * 3)} Mins`, color: '#fff' },
                  { icon: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></>, label: 'Reward', value: reward, color: '#7CF5C0' },
                  { icon: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></>, label: 'Gas', value: costLabel, color: costColor },
                  { icon: <><path d="M18 20V10M12 20V4M6 20v-6"/></>, label: 'Difficulty', value: a.difficulty, color: difficultyColor },
                  { icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>, label: 'Blockchain', value: a.blockchain, color: '#90AAFF' },
                  { icon: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>, label: 'Steps', value: `${steps.length} steps`, color: '#fff' },
                ].map(({ icon, label, value, color }) => (
                  <div key={label} className="stat-row">
                    <span className="stat-row-label">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{icon}</svg>
                      {label}
                    </span>
                    <span className="stat-row-value" style={{ color }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Official links */}
              {Object.keys(links).length > 0 && (
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
                  <p className="side-label" style={{ marginBottom: '10px' }}>Official Links</p>
                  {Object.entries(links).map(([key, url]) => (
                    <a key={key} href={url as string} target="_blank" rel="noopener noreferrer" className="link-btn">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="link-btn-icon">
                          {key === 'X' || key === 'twitter'
                            ? <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: 'rgba(255,255,255,0.6)' }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#90AAFF' }}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                          }
                        </div>
                        <span>{key === 'X' || key === 'twitter' ? 'X (Twitter)' : key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      </div>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.3 }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Telegram */}
            <div className="tg-card">
              <p className="tg-title">Need Help?</p>
              <p className="tg-sub">Join our community for real-time airdrop alerts and step-by-step guides.</p>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-tg-card">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join Telegram Channel
              </a>
            </div>

            {/* Browse all */}
            <div className="side-card" style={{ textAlign: 'center' }}>
              <a href="/airdrops" style={{ color: '#90AAFF', textDecoration: 'none', fontWeight: 500, fontSize: '13px', display: 'block', marginBottom: '4px' }}>Browse All Airdrops →</a>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>{allAirdrops.length}+ guides available</p>
            </div>

            {/* Last updated */}
            <div style={{ textAlign: 'center', padding: '2px 0' }}>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>
                Last updated: <span style={{ color: 'rgba(255,255,255,0.35)' }}>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </p>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
}
