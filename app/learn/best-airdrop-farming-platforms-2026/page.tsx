import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Airdrop Farming Platforms 2026 — Ranked and Reviewed',
  description: 'Honest comparison of the best crypto airdrop farming platforms in 2026. We review 3alamiy Web3, Galxe, Layer3, Superboard, Zealy, and ZNS Connect — covering verified task quality, reward rates, and which platforms serious farmers actually use.',
  keywords: 'best airdrop farming platforms, best crypto airdrop platforms 2026, galxe vs layer3, airdrop task platforms, crypto quest platforms 2026, best airdrop websites 2026',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/best-airdrop-farming-platforms-2026' },
  openGraph: {
    title: 'Best Airdrop Farming Platforms 2026 — Ranked and Reviewed',
    description: 'Honest 2026 comparison of the top crypto airdrop farming platforms.',
    type: 'article',
  },
};

const schema1 = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Airdrop Farming Platforms 2026 — Ranked and Reviewed',
  description: 'Honest comparison of the best crypto airdrop farming platforms in 2026.',
  datePublished: '2026-04-01', dateModified: '2026-07-01',
  author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
  publisher: { '@type': 'Organization', name: '3alamiy Web3', logo: { '@type': 'ImageObject', url: 'https://www.3alamiyweb3.com/icon.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.3alamiyweb3.com/learn/best-airdrop-farming-platforms-2026' },
};

const schema2 = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best airdrop farming platform in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For finding and tracking airdrop opportunities, 3alamiy Web3 is the most comprehensive. For completing on-chain quest tasks, Galxe and Layer3 both have large ecosystems with real token rewards.' } },
    { '@type': 'Question', name: 'Is Galxe still worth using in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Galxe remains one of the largest quest platforms in 2026 with a credentialing system and GAL token rewards. Its quests are now widely farmed, so competition is high. It works best as part of a broader strategy.' } },
    { '@type': 'Question', name: 'What is Layer3 and is it legit?', acceptedAnswer: { '@type': 'Answer', text: 'Layer3 is a legitimate quest and credentialing platform backed by major crypto VCs. It distributes LAYER token and rewards users with project tokens, NFTs, and XP points. It is well-regarded for quality curated quests.' } },
    { '@type': 'Question', name: 'Do I need to pay to use airdrop farming platforms?', acceptedAnswer: { '@type': 'Answer', text: 'No — all platforms reviewed here are free to use. You may need small amounts of ETH or SOL for gas fees. Never pay a fee to join or claim on any of these platforms.' } },
    { '@type': 'Question', name: 'How do Zealy and Superboard compare?', acceptedAnswer: { '@type': 'Answer', text: 'Zealy focuses on community engagement tasks and gives XP scores. Superboard has stronger DeFi task infrastructure. Superboard is preferred by serious airdrop farmers; Zealy is better for community-focused quests.' } },
    { '@type': 'Question', name: 'What is ZNS Connect?', acceptedAnswer: { '@type': 'Answer', text: 'ZNS Connect is a Web3 identity and domain platform with an active questing system. It distributes ZNS token rewards and is good for building on-chain identity, which some airdrop projects look for in wallet analysis.' } },
  ],
};

const schema3 = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Best Airdrop Farming Platforms 2026', item: 'https://www.3alamiyweb3.com/learn/best-airdrop-farming-platforms-2026' },
  ],
};

type Platform = {
  rank: number;
  name: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  score: number;
  badge: string;
  subtitle: string;
  overview: string;
  details: string[];
  pros: string[];
  cons: string[];
  best_for: string;
  taskType: string;
  tokenRewards: string;
};

const PLATFORMS: Platform[] = [
  {
    rank: 1,
    name: '3alamiy Web3',
    tag: 'Best for Tracking',
    tagColor: '#7CF5C0',
    tagBg: 'rgba(124,245,192,0.1)',
    score: 9.4,
    badge: '#1 Airdrop Tracker',
    subtitle: 'The most comprehensive airdrop tracker and guide site',
    overview: '3alamiy Web3 is a dedicated airdrop tracker with 500+ verified airdrops, step-by-step farming guides, and live status tracking. Unlike quest platforms that show generic social tasks, 3alamiy focuses on high-value airdrop opportunities with real token upside. Each listed project is verified for legitimacy, funding, and airdrop potential.',
    details: [
      '500+ airdrops tracked with live status (Active, Testnet, Ended, Claim)',
      'Step-by-step farming guides for each project',
      'Hype scores and reward tier estimates for each airdrop',
      'Upcoming tokenless tracker for pre-token projects',
      'GM Station for building daily on-chain activity across chains',
      'Learn hub with chain-specific and project-specific guides',
    ],
    pros: ['Curated, high-value opportunities', 'Actual step-by-step guides', 'Covers tokenless upcoming projects', 'Free to use, no token required'],
    cons: ['No social quest tasks (by design)', 'Focused on tracking rather than task execution'],
    best_for: 'Farmers who want to know what to farm and exactly how to do it',
    taskType: 'Tracking + Guides',
    tokenRewards: 'Indirect (via tracked drops)',
  },
  {
    rank: 2,
    name: 'Galxe',
    tag: 'Largest Quest Platform',
    tagColor: '#a78bfa',
    tagBg: 'rgba(167,139,250,0.1)',
    score: 8.1,
    badge: 'Credentialing Leader',
    subtitle: 'Web3 largest quest platform with 25M+ users',
    overview: 'Galxe (formerly Project Galaxy) is the most widely used quest platform in Web3 with over 25 million registered users. It operates as a credential layer for blockchain projects, letting protocols issue verifiable on-chain credentials to users who complete tasks. Completing Galxe quests is valuable beyond the immediate reward — many airdrop projects use Galxe credential data in their snapshot analysis.',
    details: [
      '25M+ registered users, largest quest ecosystem in crypto',
      'OAT (On-chain Achievement Token) system — NFT credentials that prove participation',
      'GAL token rewards distributed for completing campaigns',
      'Used by Arbitrum, zkSync, Linea, Base, and most major L2s for official campaigns',
      'Credential API used by many projects in snapshot analysis',
      'Loyalty points system for frequent users',
    ],
    pros: ['Most campaigns available', 'OATs count toward many airdrop snapshots', 'Official campaigns from top projects', 'Cross-chain support'],
    cons: ['Very high competition — millions of wallets farming the same tasks', 'Many campaigns are low-reward social tasks', 'Platform is now well-known — less alpha'],
    best_for: 'Users who want official on-chain credentials that count toward multiple project snapshots',
    taskType: 'Social + On-chain',
    tokenRewards: 'GAL + project tokens',
  },
  {
    rank: 3,
    name: 'Layer3',
    tag: 'Curated Quests',
    tagColor: '#63b3ed',
    tagBg: 'rgba(99,179,237,0.1)',
    score: 8.3,
    badge: 'Top Quality Tasks',
    subtitle: 'Curated quest platform with real token distributions',
    overview: 'Layer3 positions itself as the quality layer of Web3 questing — it has fewer campaigns than Galxe but curates them more carefully. Each campaign typically involves genuinely using a protocol rather than social media tasks. Layer3 distributes its own LAYER token to active users and coordinates real token distributions from partnered projects. Backed by major VCs including Electric Capital and Framework Ventures.',
    details: [
      'LAYER token distributed to active platform users (ongoing)',
      'Cubed system: quests grouped into cubes that unlock larger rewards',
      'Streak rewards: consistent daily usage earns multipliers',
      'Focuses on DeFi interactions — real swaps, bridges, liquidity',
      'Partnered with Arbitrum, Optimism, Base, Polygon, Solana ecosystems',
      'XP and cube completion tracked on-chain for snapshot use',
    ],
    pros: ['Higher quality tasks than most platforms', 'LAYER token rewards still active', 'Streak system rewards consistent farmers', 'Good for building genuine DeFi history'],
    cons: ['Fewer campaigns than Galxe', 'Some campaigns have high gas cost', 'Streak maintenance can feel like a chore'],
    best_for: 'Farmers who want on-chain DeFi history and LAYER token exposure',
    taskType: 'DeFi + Social',
    tokenRewards: 'LAYER + project tokens',
  },
  {
    rank: 4,
    name: 'Superboard',
    tag: 'DeFi Tasks',
    tagColor: '#f59e0b',
    tagBg: 'rgba(245,158,11,0.1)',
    score: 7.8,
    badge: 'Rising Platform',
    subtitle: 'On-chain quest platform with strong DeFi task quality',
    overview: 'Superboard is a growing quest platform known for requiring genuine on-chain DeFi interactions. Unlike platforms that accept tweet likes as proof of participation, Superboard verifies tasks on-chain — you actually have to bridge assets, add liquidity, or interact with the target protocol. Superboard is lower competition than Galxe, making it a good platform for serious farmers who want their activity to stand out.',
    details: [
      'On-chain task verification — social media tasks limited',
      'Campaigns from emerging protocols often before token launch',
      'Dashboard tracks all completed quests across chains',
      'Lower user count than Galxe/Layer3 = less competition',
      'Active Superboard Points system with planned token distribution',
      'Good cross-chain support: Ethereum, Arbitrum, Base, Optimism',
    ],
    pros: ['Lower competition than big platforms', 'Genuine on-chain task verification', 'Good source of pre-token protocol campaigns', 'Points system with token upside'],
    cons: ['Smaller campaign catalog', 'Less brand recognition', 'Fewer chain integrations than Galxe'],
    best_for: 'Farmers looking for lower-competition on-chain tasks with DeFi protocol exposure',
    taskType: 'On-chain DeFi',
    tokenRewards: 'Points + future token',
  },
  {
    rank: 5,
    name: 'Zealy',
    tag: 'Community Tasks',
    tagColor: '#f87171',
    tagBg: 'rgba(248,113,113,0.1)',
    score: 7.2,
    badge: 'Community Leader',
    subtitle: 'Community questing platform for Discord and social tasks',
    overview: 'Zealy (formerly Crew3) is the leading community quest platform. It specializes in Discord engagement, Twitter interactions, and content creation rather than on-chain DeFi actions. Protocols use Zealy to grow communities and identify engaged early supporters — many projects factor Zealy XP and leaderboard position into their airdrop criteria. It is best used alongside on-chain activity platforms.',
    details: [
      'Leading Discord community quest platform in Web3',
      'XP leaderboard system — top users often receive priority in airdrop allocations',
      'Tasks include Discord activity, Twitter engagement, content creation',
      'Used by 1,000+ Web3 projects including many pre-token protocols',
      'Zealy Connect: on-chain verification of community participation',
      'Sprint system for periodic high-XP earning windows',
    ],
    pros: ['Largest community quest ecosystem', 'Leaderboard position counts toward many airdrops', 'Good for community-focused projects', 'Free and easy to start'],
    cons: ['Mostly social tasks, not on-chain', 'Discord requirement for most tasks', 'XP alone rarely qualifies for high-value airdrops'],
    best_for: 'Farmers who want to build community standing alongside their on-chain activity',
    taskType: 'Community/Social',
    tokenRewards: 'XP + project tokens',
  },
  {
    rank: 6,
    name: 'ZNS Connect',
    tag: 'Web3 Identity',
    tagColor: '#34d399',
    tagBg: 'rgba(52,211,153,0.1)',
    score: 7.0,
    badge: 'Identity + Quests',
    subtitle: 'Web3 identity platform with questing and ZNS token rewards',
    overview: 'ZNS Connect combines a Web3 naming/identity service with an active quest ecosystem that rewards ZNS token for participation. Its lower competition and focus on identity-building tasks make it worth including in a farming stack. Building a Web3 identity profile (name, linked wallets, verified credentials) is increasingly a factor that airdrop projects look for when analyzing wallet quality.',
    details: [
      'Multi-chain Web3 domain registration (like ENS but multi-chain)',
      'Active quest system with ZNS token rewards',
      'Identity verification tasks that build wallet profile depth',
      'Lower competition = easier to rank on leaderboards',
      'Native ZNS token has market value — quest rewards are real',
      'Works across Ethereum, BNB Chain, Polygon, Arbitrum',
    ],
    pros: ['Low competition platform', 'ZNS token rewards have real value', 'Builds wallet identity profile', 'Multi-chain coverage'],
    cons: ['Smaller ecosystem', 'Less brand recognition', 'Domain registration has a cost'],
    best_for: 'Farmers who want low-competition rewards and on-chain identity credentials',
    taskType: 'Identity + Quests',
    tokenRewards: 'ZNS token',
  },
];

const FAQS = [
  { q: 'What is the best airdrop farming platform in 2026?', a: 'It depends on what you mean by farming. For finding and tracking high-value airdrop opportunities with step-by-step guides, 3alamiy Web3 is the most comprehensive. For completing on-chain quest tasks and earning credentials, Galxe and Layer3 are the largest ecosystems. Most serious farmers use all three in combination.' },
  { q: 'Is Galxe still worth using in 2026?', a: 'Yes. Despite being well-known, Galxe OATs and credentials are still used by many projects in their snapshot analysis. The platform integrates with major L2 ecosystems including Arbitrum, Base, and Linea. The main downside is high competition — millions of wallets completing the same tasks.' },
  { q: 'What is Layer3 and is it legit?', a: 'Layer3 is a legitimate and VC-backed quest platform. It distributes LAYER token to active users and offers curated DeFi quests that require genuine on-chain interaction. The streak system rewards consistent users, making it good for long-term farmers.' },
  { q: 'Do I need to pay to use these platforms?', a: 'No — all six platforms reviewed here are free to use. You may need small amounts of ETH or SOL for gas fees when completing on-chain tasks. Never pay a fee to join or claim on any of these platforms.' },
  { q: 'How do Zealy and Superboard compare?', a: 'They serve different needs. Zealy focuses on community tasks — Discord activity, Twitter engagement — and rewards XP. Superboard requires genuine on-chain DeFi interactions for task completion. Serious airdrop farmers prefer Superboard for on-chain farming; Zealy is better for building community presence.' },
  { q: 'What is ZNS Connect?', a: 'ZNS Connect is a multi-chain Web3 identity platform. It offers domain/name registration and an active quest system that rewards ZNS token. Its main appeal for airdrop farmers is low competition and identity-building.' },
];

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".afp-faq", ".afp-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/best-airdrop-farming-platforms-2026",
};

export default function BestAirdropFarmingPlatforms() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }} />
      <style>{`
        .bp { max-width: 860px; margin: 0 auto; padding: 48px 20px 80px; color: rgba(255,255,255,0.85); }
        .bp-bc { font-size: 12px; color: rgba(255,255,255,0.3); margin-bottom: 28px; display: flex; gap: 6px; flex-wrap: wrap; }
        .bp-bc a { color: rgba(255,255,255,0.3); text-decoration: none; }
        .bp-bc a:hover { color: #7CF5C0; }
        .bp-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7CF5C0; margin-bottom: 12px; }
        .bp-h1 { font-size: clamp(24px, 5vw, 36px); font-weight: 800; line-height: 1.15; margin: 0 0 16px; color: #fff; }
        .bp-intro { font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.55); margin-bottom: 14px; }
        .bp-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 36px; }
        .bp-tag { font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 99px; background: rgba(124,245,192,0.07); border: 1px solid rgba(124,245,192,0.18); color: #7CF5C0; }
        .bp-tag.n { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.35); }
        .bp-div { height: 1px; background: rgba(255,255,255,0.05); margin: 40px 0; }
        .bp-h2 { font-size: 22px; font-weight: 800; color: #fff; margin: 0 0 14px; }
        .bp-p { font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.55); margin: 0 0 14px; }
        .bp-tbl { width: 100%; border-collapse: collapse; margin: 20px 0 32px; font-size: 13px; }
        .bp-tbl th { text-align: left; padding: 10px 14px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.3); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .bp-tbl td { padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); color: rgba(255,255,255,0.6); vertical-align: top; }
        .bp-tbl tr:hover td { background: rgba(255,255,255,0.015); }
        .bp-score { font-weight: 800; color: #7CF5C0; }
        .bp-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; margin-bottom: 16px; }
        .bp-card-top { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; flex-wrap: wrap; }
        .bp-rank { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 900; flex-shrink: 0; }
        .bp-card-info { flex: 1; min-width: 200px; }
        .bp-card-name { font-size: 18px; font-weight: 800; color: #fff; margin: 0 0 2px; }
        .bp-card-sub { font-size: 12px; color: rgba(255,255,255,0.35); margin-bottom: 8px; }
        .bp-card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .bp-pill { font-size: 10px; font-weight: 700; padding: 3px 9px; border-radius: 99px; }
        .bp-score-box { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .bp-score-val { font-size: 24px; font-weight: 900; }
        .bp-score-lbl { font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.3); }
        .bp-overview { font-size: 14px; line-height: 1.75; color: rgba(255,255,255,0.55); margin-bottom: 16px; }
        .bp-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        @media (max-width: 580px) { .bp-details-grid { grid-template-columns: 1fr; } }
        .bp-detail-box { background: rgba(255,255,255,0.02); border-radius: 10px; padding: 14px 16px; }
        .bp-detail-title { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.3); margin-bottom: 10px; }
        .bp-detail-list { padding: 0; margin: 0; list-style: none; }
        .bp-detail-list li { font-size: 12px; color: rgba(255,255,255,0.5); padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; gap: 6px; }
        .bp-detail-list li:last-child { border-bottom: none; }
        .bp-best { background: rgba(124,245,192,0.05); border: 1px solid rgba(124,245,192,0.12); border-radius: 10px; padding: 10px 14px; font-size: 12px; color: rgba(255,255,255,0.5); }
        .bp-feature-list { list-style: none; padding: 0; margin: 0 0 16px; }
        .bp-feature-list li { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; gap: 8px; align-items: flex-start; }
        .bp-faq { display: flex; flex-direction: column; gap: 8px; }
        .bp-faq-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .bp-faq-q { font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 8px; }
        .bp-faq-a { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.65; margin: 0; }
        .bp-tip { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.16); border-radius: 12px; padding: 16px 20px; margin: 20px 0; }
        .bp-tip-lbl { font-size: 10px; font-weight: 800; color: #7CF5C0; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
        .bp-tip-body { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.65; margin: 0; }
        .bp-routine { display: flex; flex-direction: column; gap: 8px; margin: 16px 0; }
        .bp-routine-item { display: flex; gap: 12px; align-items: flex-start; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 12px 16px; }
        .bp-routine-title { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.85); margin-bottom: 3px; }
        .bp-routine-text { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.5; }
        .bp-cta { background: linear-gradient(135deg, rgba(124,245,192,0.07), rgba(99,102,241,0.04)); border: 1px solid rgba(124,245,192,0.15); border-radius: 16px; padding: 28px; text-align: center; margin-top: 48px; }
        .bp-cta-title { font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 8px; }
        .bp-cta-sub { font-size: 14px; color: rgba(255,255,255,0.45); margin-bottom: 20px; }
        .bp-btn-p { background: #7CF5C0; color: #060A12; font-size: 13px; font-weight: 800; padding: 11px 22px; border-radius: 99px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
        .bp-btn-s { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 700; padding: 11px 22px; border-radius: 99px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
      `}</style>

      <main className="bp">
        <nav className="bp-bc">
          <Link href="/">Home</Link><span>›</span>
          <Link href="/learn">Learn</Link><span>›</span>
          <span>Best Airdrop Farming Platforms 2026</span>
        </nav>

        <div className="bp-label">Platform Comparison · Updated June 2026</div>
        <h1 className="bp-h1">Best Airdrop Farming Platforms 2026 — Ranked &amp; Reviewed</h1>
        <div className="bp-meta">
          <span className="bp-tag">6 Platforms Reviewed</span>
          <span className="bp-tag">Honest Scores</span>
          <span className="bp-tag n">12 min read</span>
          <span className="bp-tag n">Updated June 10, 2026</span>
        </div>
        <p className="bp-intro">There are dozens of platforms claiming to help you earn crypto airdrops. We tested six of the most-used platforms in 2026, evaluated their task quality, reward rates, and how much the activity actually matters to airdrop projects when they analyze wallet history.</p>
        <p className="bp-intro">No single platform covers everything. Serious airdrop farmers use a combination — a tracker for finding opportunities, a quest platform for on-chain credentials, and a community platform for Discord standing.</p>

        <div className="bp-div" />

        <section>
          <h2 className="bp-h2">Quick Comparison Table</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="bp-tbl">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Best For</th>
                  <th>Task Type</th>
                  <th>Token Rewards</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORMS.map(p => (
                  <tr key={p.name}>
                    <td><strong style={{ color: '#fff' }}>{p.name}</strong></td>
                    <td>{p.tag}</td>
                    <td>{p.taskType}</td>
                    <td>{p.tokenRewards}</td>
                    <td><span className="bp-score">{p.score}/10</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bp-div" />

        <section>
          <h2 className="bp-h2">Platform Deep Dives</h2>
          <p className="bp-p">What each platform actually offers, what it is good at, and where it falls short.</p>

          {PLATFORMS.map(p => (
            <div key={p.name} className="bp-card">
              <div className="bp-card-top">
                <div className="bp-rank" style={{ background: p.tagBg, border: `1px solid ${p.tagColor}30`, color: p.tagColor }}>
                  #{p.rank}
                </div>
                <div className="bp-card-info">
                  <div className="bp-card-name">{p.name}</div>
                  <div className="bp-card-sub">{p.subtitle}</div>
                  <div className="bp-card-tags">
                    <span className="bp-pill" style={{ background: p.tagBg, color: p.tagColor, border: `1px solid ${p.tagColor}30` }}>{p.tag}</span>
                    <span className="bp-pill" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>{p.badge}</span>
                  </div>
                </div>
                <div className="bp-score-box">
                  <div className="bp-score-val" style={{ color: p.tagColor }}>{p.score}</div>
                  <div className="bp-score-lbl">Score</div>
                </div>
              </div>

              <p className="bp-overview">{p.overview}</p>

              <div className="bp-detail-box" style={{ marginBottom: '12px' }}>
                <div className="bp-detail-title">Key Features</div>
                <ul className="bp-detail-list">
                  {p.details.map(d => (
                    <li key={d}><span style={{ color: p.tagColor, flexShrink: 0 }}>→</span>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="bp-details-grid">
                <div className="bp-detail-box">
                  <div className="bp-detail-title">Pros</div>
                  <ul className="bp-detail-list">
                    {p.pros.map(pro => (
                      <li key={pro}><span style={{ color: '#7CF5C0', flexShrink: 0 }}>✓</span>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="bp-detail-box">
                  <div className="bp-detail-title">Cons</div>
                  <ul className="bp-detail-list">
                    {p.cons.map(con => (
                      <li key={con}><span style={{ color: '#f87171', flexShrink: 0 }}>✕</span>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bp-best"><strong style={{ color: '#7CF5C0' }}>Best for: </strong>{p.best_for}</div>
            </div>
          ))}
        </section>

        <div className="bp-div" />

        <section>
          <h2 className="bp-h2">How to Use These Platforms Together</h2>
          <p className="bp-p">The best airdrop farmers do not just use one platform — they build a stack. Here is the recommended routine:</p>
          <div className="bp-routine">
            {[
              { icon: '🌅', title: 'Daily (5-10 minutes)', text: 'GM Station on 3alamiy Web3 to build on-chain activity. Check 3alamiy for new active airdrops. Complete Layer3 daily streak task.' },
              { icon: '📅', title: 'Weekly (30-60 minutes)', text: 'Complete active campaigns on Galxe and Superboard. Check Zealy leaderboard for top 2-3 projects you are farming. Bridge and interact with 1-2 new protocols from 3alamiy Upcoming page.' },
              { icon: '📊', title: 'Monthly (2-3 hours)', text: 'Audit your farming list on 3alamiy — remove ended projects, add new ones. Review Layer3 cube progress. Revoke unused token approvals at revoke.cash.' },
            ].map(r => (
              <div key={r.title} className="bp-routine-item">
                <div style={{ fontSize: '18px', flexShrink: 0 }}>{r.icon}</div>
                <div>
                  <div className="bp-routine-title">{r.title}</div>
                  <div className="bp-routine-text">{r.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bp-tip">
            <div className="bp-tip-lbl">The Core Insight</div>
            <p className="bp-tip-body">Quest platforms (Galxe, Layer3) build on-chain credentials. Trackers (3alamiy Web3) show you what to farm. Community platforms (Zealy) build your social standing. Use all three — but prioritize on-chain actions over social tasks. Projects weight genuine protocol usage 10x more than Discord roles.</p>
          </div>
        </section>

        <div className="bp-div" />

        <section>
          <h2 className="bp-h2">Which Platform Should You Start With?</h2>
          <ul className="bp-feature-list">
            {[
              { text: 'New to crypto and not sure where to start', rec: '3alamiy Web3', color: '#7CF5C0' },
              { text: 'Want on-chain credentials that count toward multiple snapshots', rec: 'Galxe', color: '#a78bfa' },
              { text: 'Want to farm DeFi protocols consistently and earn LAYER token', rec: 'Layer3', color: '#63b3ed' },
              { text: 'Want lower competition with genuine on-chain verification', rec: 'Superboard', color: '#f59e0b' },
              { text: 'Already farming on-chain but want community standing', rec: 'Zealy', color: '#f87171' },
              { text: 'Want to build Web3 identity profile and earn ZNS token', rec: 'ZNS Connect', color: '#34d399' },
            ].map(item => (
              <li key={item.rec}>
                <span style={{ color: '#7CF5C0' }}>→</span>
                <span>{item.text} → <strong style={{ color: item.color }}>{item.rec}</strong></span>
              </li>
            ))}
          </ul>
        </section>

        <div className="bp-div" />

        <section>
          <h2 className="bp-h2">Frequently Asked Questions</h2>
          <div className="bp-faq">
            {FAQS.map((f, i) => (
              <div key={i} className="bp-faq-item">
                <div className="bp-faq-q">{f.q}</div>
                <p className="bp-faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bp-cta">
          <div className="bp-cta-title">Find your next high-value airdrop</div>
          <div className="bp-cta-sub">500+ verified airdrops with step-by-step guides, live status, and reward estimates.</div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/airdrops" className="bp-btn-p">Browse Airdrops</Link>
            <Link href="/upcoming" className="bp-btn-s">Upcoming Drops</Link>
          </div>
        </div>
      </main>
    </>
  );
}
