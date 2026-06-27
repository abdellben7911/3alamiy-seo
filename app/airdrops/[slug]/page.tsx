import { notFound } from 'next/navigation';
import Image from 'next/image';
import ParticipationGuide from './ParticipationGuide';
import FavoriteButton from './FavoriteButton';
import EmailSignup from '../../EmailSignup';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 86400 },
  });
  if (!res.ok) return [];
  return res.json();
}

async function getAirdropBySlug(slug: string) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?slug=eq.${slug}&select=*`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 86400 },
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
      url: `https://www.3alamiyweb3.com/airdrops/${slug}`,
      siteName: '3alamiy Web3',
      images: a.logo ? [{ url: a.logo, width: 400, height: 400, alt: `${a.name} airdrop logo` }] : [],
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title: `${a.name} Airdrop — Free Guide ${year}`, description: desc },
    alternates: { canonical: `https://www.3alamiyweb3.com/airdrops/${slug}` },
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
  const relatedByChain = allAirdrops.filter((x: any) => x.slug !== slug && x.blockchain === a.blockchain);
  const relatedByCategory = allAirdrops.filter((x: any) => x.slug !== slug && x.category === a.category && x.blockchain !== a.blockchain);
  const relatedByDifficulty = allAirdrops.filter((x: any) => x.slug !== slug && x.difficulty === a.difficulty && x.blockchain !== a.blockchain && x.category !== a.category);
  const relatedAirdrops = [...relatedByChain, ...relatedByCategory, ...relatedByDifficulty]
    .filter((x: any, i: number, self: any[]) => self.findIndex((y: any) => y.slug === x.slug) === i)
    .slice(0, 4);
  const similarAirdrops = allAirdrops
    .filter((x: any) => x.slug !== slug && x.difficulty === a.difficulty && x.cost === a.cost && !relatedAirdrops.find((r: any) => r.slug === x.slug))
    .slice(0, 3);
  const year = new Date().getFullYear();
  const difficultyColor = a.difficulty === 'Easy' ? '#7CF5C0' : a.difficulty === 'Medium' ? '#FFD264' : '#f43f5e';

  const rewardDisplay = a.reward_min && a.reward_max
    ? `$${a.reward_min >= 1000 ? (a.reward_min / 1000).toFixed(0) + 'K' : a.reward_min}–$${a.reward_max >= 1000 ? (a.reward_max / 1000).toFixed(0) + 'K' : a.reward_max}`
    : a.reward_min ? `$${a.reward_min >= 1000 ? (a.reward_min / 1000).toFixed(0) + 'K' : a.reward_min}+`
    : a.difficulty === 'Easy' ? '$50–$500' : a.difficulty === 'Medium' ? '$200–$2K' : '$500–$5K';

  const howToSchema = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: `How to Participate in ${a.name} Airdrop`,
    description: `Step-by-step guide to participate in the ${a.name} airdrop on ${a.blockchain}.`,
    image: a.logo ? { '@type': 'ImageObject', url: a.logo } : undefined,
    totalTime: `PT${Math.max(15, steps.length * 3)}M`,
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: a.cost === 'Free' ? '0' : '10' },
    step: steps.map((s: string, i: number) => ({ '@type': 'HowToStep', position: i + 1, name: s, text: s, url: `https://www.3alamiyweb3.com/airdrops/${a.slug}#guide` })),
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Is ${a.name} airdrop legit?`, acceptedAnswer: { '@type': 'Answer', text: `Yes, ${a.name} is a verified ${a.blockchain} project tracked by 3alamiy Web3.` } },
      { '@type': 'Question', name: `How much can I earn from ${a.name} airdrop?`, acceptedAnswer: { '@type': 'Answer', text: `The estimated reward is ${reward}. Actual rewards depend on your activity level and eligibility.` } },
      { '@type': 'Question', name: `Is the ${a.name} airdrop free?`, acceptedAnswer: { '@type': 'Answer', text: a.cost === 'Free' ? `Yes, completely free.` : `Small gas fees may apply.` } },
      { '@type': 'Question', name: `How long does it take?`, acceptedAnswer: { '@type': 'Answer', text: `Approximately ${Math.max(15, steps.length * 3)} minutes. Difficulty is rated ${a.difficulty}.` } },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
      { '@type': 'ListItem', position: 2, name: 'Airdrops', item: 'https://www.3alamiyweb3.com/airdrops' },
      { '@type': 'ListItem', position: 3, name: `${a.name} Airdrop`, item: `https://www.3alamiyweb3.com/airdrops/${a.slug}` },
    ],
  };

  // Speakable — marks key content for voice/AI reading
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://www.3alamiyweb3.com/airdrops/${a.slug}`,
    name: `${a.name} Airdrop Guide ${year}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.dp-title', '.dp-desc', '.dp-qa-text', '.dp-quick-answer'],
    },
    url: `https://www.3alamiyweb3.com/airdrops/${a.slug}`,
  };

  // Dataset — structured airdrop data for AI engines
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${a.name} Airdrop Data`,
    description: `Structured data for the ${a.name} airdrop on ${a.blockchain}. Includes difficulty, cost, reward estimate, participation steps, and eligibility criteria.`,
    url: `https://www.3alamiyweb3.com/airdrops/${a.slug}`,
    creator: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
    keywords: [`${a.name} airdrop`, `${a.blockchain} airdrop`, 'crypto airdrop 2026', a.difficulty, a.cost],
    variableMeasured: [
      { '@type': 'PropertyValue', name: 'Blockchain', value: a.blockchain },
      { '@type': 'PropertyValue', name: 'Difficulty', value: a.difficulty },
      { '@type': 'PropertyValue', name: 'Cost', value: a.cost },
      { '@type': 'PropertyValue', name: 'Status', value: a.status },
      { '@type': 'PropertyValue', name: 'Estimated Reward', value: reward },
      { '@type': 'PropertyValue', name: 'Number of Steps', value: steps.length },
      { '@type': 'PropertyValue', name: 'Estimated Time', value: `${Math.max(15, steps.length * 3)} minutes` },
    ],
  };

  // ItemList — related airdrops for AI context
  const relatedSchema = relatedAirdrops.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `More ${a.blockchain} Airdrops`,
    description: `Other active airdrops on ${a.blockchain} tracked by 3alamiy Web3`,
    numberOfItems: relatedAirdrops.length,
    itemListElement: relatedAirdrops.map((r: any, i: number) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${r.name} Airdrop`,
      url: `https://www.3alamiyweb3.com/airdrops/${r.slug}`,
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      {relatedSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedSchema) }} />}

      <style>{`
        /* ── Base — uses Space Grotesk loaded in layout.tsx ── */
        .dp * { box-sizing: border-box; }
        .dp {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #D8DAE5;
        }

        /* Breadcrumb */
        .dp-bc {
          padding: 14px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500;
          color: rgba(255,255,255,0.3);
          max-width: 1600px; margin: 0 auto;
        }
        .dp-bc a { color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.15s; }
        .dp-bc a:hover { color: rgba(255,255,255,0.75); }
        .dp-bc-active { color: #7CF5C0; }

        /* Hero */
        .dp-hero {
          position: relative;
          max-width: 1600px; margin: 0 auto;
          padding: 40px 28px 32px;
        }
        .dp-hero-glow-r {
          position: absolute; top: -40px; right: 0;
          width: 500px; height: 400px; pointer-events: none;
          background: radial-gradient(ellipse at top right, rgba(124,245,192,0.06) 0%, transparent 65%);
        }
        .dp-hero-glow-l {
          position: absolute; bottom: 0; left: 0;
          width: 360px; height: 300px; pointer-events: none;
          background: radial-gradient(ellipse at bottom left, rgba(99,120,255,0.05) 0%, transparent 65%);
        }

        /* Badges */
        .dp-badges { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 24px; position: relative; }
        .dp-badge {
          font-size: 10px; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 4px 12px; border-radius: 100px;
          font-family: var(--font-space), system-ui, sans-serif;
        }
        .badge-chain  { background: rgba(99,120,255,0.1);   color: #8FA8FF; border: 1px solid rgba(99,120,255,0.2); }
        .badge-active { background: rgba(124,245,192,0.08); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.2); }
        .badge-ended  { background: rgba(100,100,120,0.08); color: #6b7280; border: 1px solid rgba(100,100,120,0.18); }
        .badge-free   { background: rgba(255,210,80,0.08);  color: #FFD264; border: 1px solid rgba(255,210,80,0.18); }
        .badge-paid   { background: rgba(244,63,94,0.08);   color: #f87171; border: 1px solid rgba(244,63,94,0.18); }

        /* Identity */
        .dp-identity { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 24px; position: relative; }
        .dp-logo {
          width: 72px; height: 72px; border-radius: 18px;
          object-fit: cover; flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }
        .dp-logo-fb {
          width: 72px; height: 72px; border-radius: 18px; flex-shrink: 0;
          background: linear-gradient(135deg, #111827, #1e2d45);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 26px; color: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .dp-title {
          font-weight: 700; font-size: 28px; letter-spacing: -0.025em;
          color: #fff; line-height: 1.15; margin: 0 0 10px;
        }
        .dp-desc {
          font-size: 14px; font-weight: 400;
          color: rgba(255,255,255,0.42); line-height: 1.75;
          margin: 0 0 20px; max-width: 560px;
        }

        /* CTAs */
        .dp-cta-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; position: relative; }
        .btn-start {
          display: inline-flex; align-items: center; gap: 8px;
          background: #7CF5C0; color: #04120A;
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px; letter-spacing: -0.01em;
          padding: 11px 24px; border-radius: 12px; border: none;
          text-decoration: none; cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
          box-shadow: 0 0 20px rgba(124,245,192,0.2);
        }
        .btn-start:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5);
          font-family: var(--font-space), system-ui, sans-serif;
          font-size: 13px; font-weight: 500;
          padding: 10px 18px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.09);
          text-decoration: none; cursor: pointer;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.75); }

        /* Stats strip */
        .dp-strip-wrap {
          max-width: 1600px; margin: 0 auto; padding: 0 28px 28px;
        }
        .dp-strip {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
          background: rgba(255,255,255,0.03);
        }
        .dp-strip-cell {
          padding: 20px 16px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .dp-strip-cell:last-child { border-right: none; }
        .dp-strip-val {
          font-weight: 700; font-size: 20px; letter-spacing: -0.02em;
          margin-bottom: 4px; line-height: 1;
        }
        .dp-strip-lbl {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
          color: rgba(255,255,255,0.25); font-weight: 600;
        }

        /* Body */
        .dp-body {
          display: grid; grid-template-columns: 1fr 300px; gap: 20px;
          max-width: 1600px; margin: 0 auto;
          padding: 0 28px 80px;
          align-items: start;
        }
        .dp-main { display: flex; flex-direction: column; gap: 14px; }

        /* Card base */
        .dp-card {
          background: #0D1221;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; overflow: hidden;
        }
        .dp-card-inner { padding: 22px; }
        .dp-eyebrow {
          font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.25);
          margin: 0 0 7px;
        }
        .dp-heading {
          font-weight: 600; font-size: 17px; letter-spacing: -0.02em;
          color: #fff; margin: 0 0 16px;
        }

        /* Quick answer */
        .dp-qa {
          background: linear-gradient(120deg, rgba(124,245,192,0.03) 0%, rgba(99,120,255,0.03) 100%);
          border: 1px solid rgba(124,245,192,0.12);
          border-radius: 16px; padding: 18px 20px;
          display: flex; gap: 14px; align-items: flex-start;
        }
        .dp-qa-icon {
          width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px;
          background: rgba(124,245,192,0.09);
          display: flex; align-items: center; justify-content: center;
        }
        .dp-qa-icon svg { width: 15px; height: 15px; color: #7CF5C0; }
        .dp-qa-label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #7CF5C0; margin: 0 0 6px; }
        .dp-qa-text { font-size: 13.5px; color: rgba(255,255,255,0.5); line-height: 1.7; margin: 0; }
        .dp-qa-text strong { color: #fff; font-weight: 600; }

        /* Overview */
        .dp-ov-text { font-size: 14px; color: rgba(255,255,255,0.48); line-height: 1.8; margin: 0 0 12px; }
        .dp-ov-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 14px; }
        .dp-ov-tag {
          font-size: 11.5px; font-weight: 500;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.4); padding: 4px 12px; border-radius: 8px;
        }
        .dp-ov-tag span { color: rgba(255,255,255,0.78); margin-left: 4px; }

        /* CTA banner */
        .dp-banner {
          background: #0D1221;
          border: 1px solid rgba(124,245,192,0.1);
          border-radius: 16px; padding: 20px 22px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .dp-banner-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #7CF5C0; box-shadow: 0 0 8px rgba(124,245,192,0.5);
          animation: bdot 2s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes bdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        .dp-banner-eye { display: flex; align-items: center; gap: 7px; margin-bottom: 4px; }
        .dp-banner-eyetxt { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #7CF5C0; }
        .dp-banner-title { font-weight: 600; font-size: 15px; letter-spacing: -0.01em; color: #fff; margin: 0 0 3px; }
        .dp-banner-sub { font-size: 12px; color: rgba(255,255,255,0.3); margin: 0; }
        .dp-banner-btns { display: flex; gap: 8px; flex-wrap: wrap; }
        .btn-tg-green {
          display: inline-flex; align-items: center; gap: 7px;
          background: #7CF5C0; color: #04120A;
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 13px;
          padding: 10px 18px; border-radius: 10px;
          text-decoration: none; white-space: nowrap;
          transition: opacity 0.15s, transform 0.15s;
        }
        .btn-tg-green:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-more {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5);
          font-family: var(--font-space), system-ui, sans-serif;
          font-size: 13px; font-weight: 500;
          padding: 10px 16px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none; white-space: nowrap;
          transition: background 0.15s;
        }
        .btn-more:hover { background: rgba(255,255,255,0.07); }

        /* FAQ */
        .dp-faq-item {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 11px; padding: 15px 17px; margin-bottom: 8px;
        }
        .dp-faq-item:last-child { margin-bottom: 0; }
        .dp-faq-q { font-size: 13.5px; font-weight: 600; color: #E2E4EC; margin: 0 0 7px; letter-spacing: -0.01em; }
        .dp-faq-a { font-size: 13px; color: rgba(255,255,255,0.4); margin: 0; line-height: 1.75; }

        /* Tags */
        .dp-tag {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.38); padding: 4px 12px; border-radius: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.01em;
        }

        /* Learn links */
        .dp-learn-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 15px;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 11px; text-decoration: none;
          color: rgba(255,255,255,0.45); font-size: 13px; font-weight: 500;
          transition: all 0.15s; margin-bottom: 7px;
        }
        .dp-learn-link:last-child { margin-bottom: 0; }
        .dp-learn-link:hover { background: rgba(255,255,255,0.04); border-color: rgba(124,245,192,0.14); color: rgba(255,255,255,0.75); }
        .dp-learn-link svg { opacity: 0.3; flex-shrink: 0; transition: opacity 0.15s, transform 0.15s; }
        .dp-learn-link:hover svg { opacity: 0.6; transform: translateX(2px); }

        /* Related */
        .dp-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; }
        .dp-related-card {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px; padding: 13px; text-decoration: none;
          display: flex; flex-direction: column; gap: 7px;
          transition: border-color 0.15s, background 0.15s;
        }
        .dp-related-card:hover { border-color: rgba(124,245,192,0.15); background: rgba(124,245,192,0.02); }

        /* ── Sidebar ── */
        .dp-sidebar { position: sticky; top: 76px; display: flex; flex-direction: column; gap: 12px; }

        /* Reward */
        .dp-reward-card {
          background: linear-gradient(135deg, #091810, #0a1a1c);
          border: 1px solid rgba(124,245,192,0.16); border-radius: 16px; padding: 20px;
        }
        .dp-reward-eye {
          display: flex; align-items: center; gap: 6px; margin-bottom: 10px;
          font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.09em;
          color: rgba(124,245,192,0.5);
        }
        .dp-reward-eye svg { width: 12px; height: 12px; }
        .dp-reward-val {
          font-weight: 700; font-size: 26px; letter-spacing: -0.03em;
          color: #7CF5C0; line-height: 1; margin-bottom: 5px;
        }
        .dp-reward-sub { font-size: 11px; color: rgba(255,255,255,0.22); font-weight: 500; }

        /* Side card */
        .dp-side-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 16px;
        }
        .dp-side-label {
          font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.09em; color: rgba(255,255,255,0.24); margin: 0 0 12px;
        }
        .dp-stat-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .dp-stat-row:last-child { border-bottom: none; }
        .dp-stat-lbl {
          display: flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.07em; color: rgba(255,255,255,0.26);
        }
        .dp-stat-lbl svg { width: 12px; height: 12px; opacity: 0.5; }
        .dp-stat-val { font-size: 13px; font-weight: 600; letter-spacing: -0.01em; }

        /* Link buttons */
        .dp-link-btn {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 13px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px; text-decoration: none;
          color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 500;
          transition: all 0.15s; margin-bottom: 7px;
        }
        .dp-link-btn:last-child { margin-bottom: 0; }
        .dp-link-btn:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); }
        .dp-link-icon {
          width: 26px; height: 26px; border-radius: 7px;
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
        }
        .dp-link-icon svg { width: 12px; height: 12px; }

        /* TG card */
        .dp-tg-card {
          background: linear-gradient(135deg, rgba(99,120,255,0.06), rgba(124,245,192,0.04));
          border: 1px solid rgba(99,120,255,0.15); border-radius: 16px;
          padding: 18px; text-align: center;
        }
        .dp-tg-title { font-weight: 600; font-size: 14px; letter-spacing: -0.01em; color: #fff; margin: 0 0 5px; }
        .dp-tg-sub { font-size: 12px; color: rgba(255,255,255,0.32); line-height: 1.6; margin: 0 0 14px; }
        .dp-tg-btn {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          background: rgba(99,120,255,0.1); color: #8FA8FF;
          border: 1px solid rgba(99,120,255,0.2); border-radius: 10px;
          padding: 10px; font-size: 13px; font-weight: 600;
          text-decoration: none; transition: background 0.15s;
          font-family: var(--font-space), system-ui, sans-serif;
        }
        .dp-tg-btn:hover { background: rgba(99,120,255,0.16); }
        .dp-tg-btn svg { width: 13px; height: 13px; }

        /* Mobile */
        @media (max-width: 768px) {
          .dp-bc { padding: 12px 16px; }
          .dp-hero { padding: 24px 16px 24px; }
          .dp-title { font-size: 22px; }
          .dp-logo, .dp-logo-fb { width: 60px; height: 60px; border-radius: 14px; }
          .dp-logo-fb { font-size: 20px; }
          .dp-strip-wrap { padding: 0 16px 20px; }
          .dp-body { grid-template-columns: 1fr; padding: 0 16px 60px; gap: 14px; }
          .dp-sidebar { position: static; order: -1; }
          .dp-main { order: 0; }
          .dp-related-grid { grid-template-columns: 1fr 1fr; }
          .dp-banner { flex-direction: column; }
        }
      `}</style>

      <div className="dp">

        {/* Breadcrumb */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <nav className="dp-bc" aria-label="Breadcrumb">
            <a href="https://www.3alamiyweb3.com">Home</a>
            <span style={{ opacity: 0.3 }}>›</span>
            <a href="https://www.3alamiyweb3.com/airdrops">Airdrops</a>
            <span style={{ opacity: 0.3 }}>›</span>
            <span className="dp-bc-active">{a.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="dp-hero">
          <div className="dp-hero-glow-r" />
          <div className="dp-hero-glow-l" />

          <div className="dp-badges">
            <span className="dp-badge badge-chain">{a.blockchain}</span>
            <span className={`dp-badge ${a.status === 'Active' ? 'badge-active' : 'badge-ended'}`}>{a.status}</span>
            <span className={`dp-badge ${a.cost === 'Paid' ? 'badge-paid' : 'badge-free'}`}>{costLabel}</span>
          </div>

          <div className="dp-identity">
            {a.logo
              ? <Image className="dp-logo" src={a.logo} alt={`${a.name} logo`} width={72} height={72} priority />
              : <div className="dp-logo-fb">{a.name?.[0]}</div>
            }
            <div style={{ flex: 1 }}>
              <h1 className="dp-title">{a.name} Airdrop Guide {year}</h1>
              <p className="dp-desc">{a.description}</p>
              <div className="dp-cta-row">
                <a href="#guide" className="btn-start">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Start Guide
                </a>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Get Alerts
                </a>
                <FavoriteButton slug={a.slug} name={a.name} blockchain={a.blockchain} tags={tags} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="dp-strip-wrap">
          <div className="dp-strip">
            <div className="dp-strip-cell">
              <div className="dp-strip-val" style={{ color: '#7CF5C0' }}>{reward}</div>
              <div className="dp-strip-lbl">Est. Reward</div>
            </div>
            <div className="dp-strip-cell">
              <div className="dp-strip-val" style={{ color: difficultyColor }}>{a.difficulty}</div>
              <div className="dp-strip-lbl">Difficulty</div>
            </div>
            <div className="dp-strip-cell">
              <div className="dp-strip-val" style={{ color: costColor }}>{a.cost}</div>
              <div className="dp-strip-lbl">Cost</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="dp-body">

          {/* ── Left column ── */}
          <div className="dp-main">

            {/* Quick Answer */}
            <div className="dp-qa">
              <div className="dp-qa-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <p className="dp-qa-label">Quick Answer</p>
                <p className="dp-qa-text">
                  <strong>{a.name}</strong> is a {a.status === 'Active' ? 'live' : a.status.toLowerCase()} crypto airdrop on{' '}
                  <strong>{a.blockchain}</strong>. Costs <strong style={{ color: costColor }}>{a.cost}</strong> to participate,
                  rated <strong style={{ color: difficultyColor }}>{a.difficulty}</strong> difficulty
                  with <strong>{steps.length} steps</strong>.{' '}
                  {a.reward_min ? <>Estimated reward: <strong style={{ color: '#7CF5C0' }}>{reward}</strong>.</> : 'Reward TBA.'}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="dp-card">
              <div className="dp-card-inner">
                <p className="dp-eyebrow">Overview</p>
                <h2 className="dp-heading">What is {a.name} Airdrop?</h2>
                <p className="dp-ov-text">{a.description}</p>
                <p className="dp-ov-text" style={{ marginBottom: 0 }}>
                  Currently <strong style={{ color: '#7CF5C0' }}>{a.status}</strong> on {a.blockchain}.
                  Difficulty: <strong style={{ color: difficultyColor }}>{a.difficulty}</strong>.
                  Cost: <strong style={{ color: costColor }}>{a.cost}</strong>.
                  {reward !== 'TBA' ? <> Reward estimate: <strong style={{ color: '#7CF5C0' }}>{reward}</strong>.</> : ''}
                </p>
                <div className="dp-ov-tags">
                  <span className="dp-ov-tag">Status<span>{a.status}</span></span>
                  <span className="dp-ov-tag">Chain<span>{a.blockchain}</span></span>
                  <span className="dp-ov-tag">Time<span>{Math.max(15, steps.length * 3)} mins</span></span>
                  <span className="dp-ov-tag">Steps<span>{steps.length}</span></span>
                  {a.category && <span className="dp-ov-tag">Category<span>{a.category}</span></span>}
                </div>
              </div>
            </div>

            {/* Guide */}
            <div id="guide" className="dp-card" style={{ overflow: 'visible' }}>
              <ParticipationGuide steps={steps} airdropName={a.name} />
            </div>

            {/* CTA Banner */}
            <div className="dp-banner">
              <div>
                <div className="dp-banner-eye">
                  <div className="dp-banner-dot" />
                  <span className="dp-banner-eyetxt">Finished?</span>
                </div>
                <p className="dp-banner-title">Don't miss the next airdrop</p>
                <p className="dp-banner-sub">Instant alerts when new airdrops drop. Free, no spam.</p>
              </div>
              <div className="dp-banner-btns">
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-tg-green">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 13, height: 13 }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Join Telegram
                </a>
                <a href="/airdrops" className="btn-more">More Airdrops →</a>
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="dp-card">
                <div className="dp-card-inner">
                  <p className="dp-eyebrow">Categories</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {tags.map((tag: string) => <span key={tag} className="dp-tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            )}

            {/* FAQ */}
            <div className="dp-card">
              <div className="dp-card-inner">
                <p className="dp-eyebrow">FAQ</p>
                <h2 className="dp-heading">Frequently Asked Questions</h2>
                {[
                  { q: `Is ${a.name} airdrop legit?`, a: `Yes, ${a.name} is a verified ${a.blockchain} project. Always use official links and never share your private keys or seed phrase.` },
                  { q: `How much can I earn from the ${a.name} airdrop?`, a: `Estimated reward is ${reward}. Actual rewards depend on your on-chain activity and eligibility at snapshot.` },
                  { q: `Is the ${a.name} airdrop free?`, a: a.cost === 'Free' ? `Yes, completely free — no investment required.` : `Small gas fees may apply for on-chain transactions.` },
                  { q: `How long does it take to complete?`, a: `Approximately ${Math.max(15, steps.length * 3)} minutes. Difficulty is rated ${a.difficulty}.` },
                ].map((faq, i) => (
                  <div key={i} className="dp-faq-item">
                    <p className="dp-faq-q">{faq.q}</p>
                    <p className="dp-faq-a">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learn */}
            <div className="dp-card">
              <div className="dp-card-inner">
                <p className="dp-eyebrow">Learn More</p>
                {[
                  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams' },
                  { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'Build Onchain Activity That Matters' },
                  ...(a.cost === 'Free' ? [{ slug: 'free-crypto-airdrops-no-investment-2026', title: 'Best Free Airdrops — No Investment' }] : [{ slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026' }]),
                  ...(a.category === 'DeFi' ? [{ slug: 'how-to-get-crypto-airdrops-2026', title: 'How to Get Crypto Airdrops 2026' }] : []),
                  ...(a.category === 'AI' ? [{ slug: 'best-ai-crypto-airdrops-2026', title: 'Best AI Crypto Airdrops 2026' }] : []),
                  ...(a.category === 'DePIN' ? [{ slug: 'best-depin-airdrops-2026', title: 'Best DePIN Airdrops 2026' }] : []),
                  ...(a.blockchain === 'Solana' ? [{ slug: 'best-solana-airdrops-2026', title: 'Best Solana Airdrops 2026' }] : []),
                  { slug: 'best-crypto-airdrop-websites-2026', title: 'Best Crypto Airdrop Websites 2026' },
                  { slug: 'best-crypto-airdrops-2026', title: 'Best Crypto Airdrops 2026' },
                ].slice(0, 4).map((article) => (
                  <a key={article.slug} href={`/learn/${article.slug}`} className="dp-learn-link">
                    <span>{article.title}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Wallet eligibility upsell ── */}
            <div style={{ background: 'linear-gradient(135deg,rgba(124,245,192,0.07) 0%,rgba(99,102,241,0.04) 100%)', border: '1px solid rgba(124,245,192,0.15)', borderRadius: 18, padding: '24px 28px', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 5 }}>
                  Already farming {a.name}? Check if you qualify.
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', lineHeight: 1.6 }}>
                  Paste your wallet — we scan 9 chains and show your full airdrop eligibility report.
                </div>
              </div>
              <a href="/wallet-checker" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', fontSize: 12, fontWeight: 900, padding: '11px 22px', borderRadius: 10, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '-0.01em', boxShadow: '0 4px 16px rgba(124,245,192,0.25)', flexShrink: 0 }}>
                Check My Wallet
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            {/* Related */}
            {relatedAirdrops.length > 0 && (
              <div className="dp-card">
                <div className="dp-card-inner">
                  <p className="dp-eyebrow">More {a.blockchain} Airdrops</p>
                  <div className="dp-related-grid">
                    {relatedAirdrops.map((r: any) => (
                      <a key={r.slug} href={`/airdrops/${r.slug}`} className="dp-related-card">
                        {r.logo && <Image src={r.logo} alt={r.name} width={30} height={30} style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.07)' }} />}
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#E2E4EC', letterSpacing: '-0.01em' }}>{r.name}</div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', fontWeight: 600 }}>{r.difficulty} · {r.blockchain}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Similar difficulty & cost */}
            {similarAirdrops.length > 0 && (
              <div className="dp-card">
                <div className="dp-card-inner">
                  <p className="dp-eyebrow">Also {a.difficulty} · {a.cost}</p>
                  <div className="dp-related-grid">
                    {similarAirdrops.map((r: any) => (
                      <a key={r.slug} href={`/airdrops/${r.slug}`} className="dp-related-card">
                        {r.logo && <Image src={r.logo} alt={r.name} width={30} height={30} style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.07)' }} />}
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#E2E4EC', letterSpacing: '-0.01em' }}>{r.name}</div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', fontWeight: 600 }}>{r.category} · {r.blockchain}</div>
                      </a>
                    ))}
                  </div>
                  <a href="/airdrops" style={{ display: 'block', textAlign: 'center', marginTop: '14px', fontSize: '12px', color: '#7CF5C0', textDecoration: 'none', fontWeight: 600 }}>
                    Browse all {allAirdrops.length}+ airdrops →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="dp-sidebar">

            {/* Reward */}
            <div className="dp-reward-card">
              <div className="dp-reward-eye">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Est. Reward Range
              </div>
              <div className="dp-reward-val">{rewardDisplay}</div>
              <div className="dp-reward-sub">based on similar projects</div>
            </div>

            {/* Quick Stats */}
            <div className="dp-side-card">
              <p className="dp-side-label">Quick Stats</p>
              {[
                { svg: <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2"/>, label: 'Est. Time', value: `${Math.max(15, steps.length * 3)} Mins`, color: '#fff' },
                { svg: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>, label: 'Reward', value: reward, color: '#7CF5C0' },
                { svg: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>, label: 'Gas', value: costLabel, color: costColor },
                { svg: <path d="M18 20V10M12 20V4M6 20v-6"/>, label: 'Difficulty', value: a.difficulty, color: difficultyColor },
                { svg: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>, label: 'Blockchain', value: a.blockchain, color: '#8FA8FF' },
                { svg: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>, label: 'Steps', value: `${steps.length} steps`, color: '#fff' },
              ].map(({ svg, label, value, color }) => (
                <div key={label} className="dp-stat-row">
                  <span className="dp-stat-lbl">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{svg}</svg>
                    {label}
                  </span>
                  <span className="dp-stat-val" style={{ color }}>{value}</span>
                </div>
              ))}

              {/* Official links */}
              {Object.keys(links).length > 0 && (
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="dp-side-label" style={{ marginBottom: '9px' }}>Official Links</p>
                  {Object.entries(links).map(([key, url]) => (
                    <a key={key} href={url as string} target="_blank" rel="noopener noreferrer" className="dp-link-btn">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                        <div className="dp-link-icon">
                          {key === 'X' || key === 'twitter'
                            ? <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: 'rgba(255,255,255,0.55)' }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#8FA8FF' }}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                          }
                        </div>
                        <span>{key === 'X' || key === 'twitter' ? 'X (Twitter)' : key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      </div>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.25 }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Telegram */}
            <div className="dp-tg-card">
              <p className="dp-tg-title">Need Help?</p>
              <p className="dp-tg-sub">Join our community for real-time alerts and step-by-step guides.</p>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="dp-tg-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join Telegram Channel
              </a>
            </div>

            {/* Browse */}
            <div className="dp-side-card" style={{ textAlign: 'center' }}>
              <a href="/airdrops" style={{ color: '#8FA8FF', textDecoration: 'none', fontWeight: 600, fontSize: '13px', display: 'block', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                Browse All Airdrops →
              </a>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.22)', margin: 0, fontWeight: 500 }}>{allAirdrops.length}+ guides available</p>
            </div>

            {/* Updated */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.18)', margin: 0, fontWeight: 500 }}>
                Updated <span style={{ color: 'rgba(255,255,255,0.32)' }}>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </p>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
}
