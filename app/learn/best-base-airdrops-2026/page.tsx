import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Base Airdrops 2026 — Top 10 Picks | 3alamiy Web3',
  description: 'The best Base airdrops in 2026. Top picks from the Coinbase L2 ecosystem including Aerodrome, BaseSwap, Seamless Protocol, and more. Step-by-step farming guides.',
  keywords: 'best base airdrops 2026, base network airdrop, coinbase L2 airdrop, aerodrome airdrop, base chain airdrop guide, base ecosystem airdrops',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/best-base-airdrops-2026' },
  openGraph: {
    title: 'Best Base Airdrops 2026 — Top 10 Picks',
    description: 'Top Base ecosystem airdrop opportunities for 2026. The Coinbase L2 has $5B+ TVL with dozens of unannounced token projects.',
    url: 'https://www.3alamiyweb3.com/learn/best-base-airdrops-2026',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Base Airdrops 2026 — Top 10 Picks from the Coinbase L2 Ecosystem',
  description: 'Comprehensive guide to the best airdrop opportunities on Base (Coinbase L2) in 2026, including farming strategies for Aerodrome, Seamless Protocol, and other top protocols.',
  url: 'https://www.3alamiyweb3.com/learn/best-base-airdrops-2026',
  datePublished: '2026-07-01', dateModified: '2026-07-01',
  author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
  publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.base-sub'] },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best Base airdrops in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The best Base airdrops in 2026 include: Seamless Protocol (decentralized lending, no token yet), BaseSwap V3 (DEX with active trading incentives), Grand Base (leveraged yield, active rewards), Dackieswap (gamified DEX with points), and BasePaint (NFT protocol). The safest strategy is to interact with multiple Base protocols weekly to maximize eligibility across all potential future drops.' } },
    { '@type': 'Question', name: 'Does Base have its own token?', acceptedAnswer: { '@type': 'Answer', text: 'No. As of June 2026, Base (built by Coinbase) has not launched a native token. However, the Base ecosystem has dozens of protocols with their own unannounced tokens. Interacting with Base protocols is the primary strategy for capturing ecosystem airdrops.' } },
    { '@type': 'Question', name: 'How do I farm Base airdrops?', acceptedAnswer: { '@type': 'Answer', text: 'To farm Base airdrops: (1) Add Base network to MetaMask (Chain ID: 8453, RPC: mainnet.base.org), (2) Bridge ETH from Ethereum using bridge.base.org, (3) Swap weekly on DEXes like Aerodrome and BaseSwap, (4) Supply/borrow on Seamless Protocol or Moonwell, (5) Join active quests on Galxe, Zora, and Coinbase Wallet. Consistent weekly activity across multiple protocols is the key strategy.' } },
    { '@type': 'Question', name: 'Is Base free to use?', acceptedAnswer: { '@type': 'Answer', text: 'Nearly free. Base gas fees are typically $0.01–$0.05 per transaction, far cheaper than Ethereum mainnet. You need a small amount of ETH bridged to Base to pay for gas.' } },
    { '@type': 'Question', name: 'What is Aerodrome Finance on Base?', acceptedAnswer: { '@type': 'Answer', text: 'Aerodrome Finance is the largest DEX on Base by TVL, based on the Velodrome model (vote-escrow tokenomics). AERO token is live. The next airdrop opportunity is from protocols that integrate Aerodrome liquidity — many have no token yet. Trading and providing liquidity on Aerodrome helps with those protocols\' eligibility.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Best Base Airdrops 2026', item: 'https://www.3alamiyweb3.com/learn/best-base-airdrops-2026' },
  ],
};

const protocols = [
  { rank: 1, name: 'Seamless Protocol', type: 'Lending/Borrowing', status: 'No token yet', potential: '$500–$3,000', effort: 'Medium', description: 'The leading lending protocol on Base. No token yet. Supply ETH or USDC, borrow against it, repay. The longer you interact and the larger your positions, the higher your likely allocation. Modeled after Aave.' },
  { rank: 2, name: 'Dackieswap', type: 'Gamified DEX', status: 'Dackie Points active', potential: '$300–$2,000', effort: 'Low', description: 'A DEX with gamified rewards on Base. Dackie Points are actively tracked — swap daily, provide liquidity, complete quests. Strong community with NFT integration.' },
  { rank: 3, name: 'Grand Base', type: 'Leveraged Yield', status: 'GB Points active', potential: '$400–$2,500', effort: 'Medium', description: 'Leveraged yield farming protocol on Base. Active points program. Deposit collateral, open yield positions. Higher risk, higher airdrop potential. Points tracked publicly.' },
  { rank: 4, name: 'BaseSwap V3', type: 'DEX', status: 'BSWAP live (more drops?)', potential: '$200–$1,500', effort: 'Low', description: 'The original major DEX on Base. BSWAP token is live. New V3 upgrade may bring additional incentive programs. Consistent swapping and LP positions have historically been rewarded.' },
  { rank: 5, name: 'Moonwell', type: 'Lending', status: 'WELL live, ongoing rewards', potential: '$200–$1,000', effort: 'Low', description: 'Multi-chain lending protocol on Base (and Moonbeam). WELL token is live but ongoing protocol interactions unlock additional rewards and support eligibility for future upgrades or V2.' },
  { rank: 6, name: 'Zora Network / Protocol', type: 'NFT minting', status: 'No token yet', potential: '$200–$2,000', effort: 'Low', description: 'Zora is an NFT protocol natively supported on Base. Minting NFTs on Zora (usually free + small gas) is one of the lowest-effort Base activities and qualifies for both Base and Zora ecosystem airdrops.' },
  { rank: 7, name: 'Morpho Blue (Base)', type: 'Lending', status: 'Points active', potential: '$500–$3,000', effort: 'Medium', description: 'Morpho\'s peer-to-peer lending protocol deployed on Base. Active morpho points program. Supply assets to earn points. Morpho raised from a16z and has significant airdrop history.' },
  { rank: 8, name: 'Extra Finance', type: 'Leveraged LP', status: 'EXTRA live, ongoing rewards', potential: '$200–$1,000', effort: 'Medium', description: 'Leveraged LP on Base with Aerodrome integration. EXTRA token is live with ongoing staking rewards. Interacting with Extra Finance also deepens your Aerodrome activity profile.' },
  { rank: 9, name: 'Parallel Finance', type: 'DeFi Hub', status: 'Points active', potential: '$300–$1,500', effort: 'Low', description: 'Multi-chain DeFi protocol with Base integration. Active on-chain points. Cross-chain interactions are increasingly valued by airdrop programs — Base + Ethereum + another chain creates a strong profile.' },
  { rank: 10, name: 'Coinbase Wallet Quests', type: 'Onchain Actions', status: 'Active, ongoing', potential: '$50–$500', effort: 'Very Low', description: 'Coinbase Wallet has built-in quest campaigns ("onchain actions") that reward NFT badges and points for completing specific Base transactions. Free to complete, strong signal for any potential Base ecosystem future reward.' },
];

const statusColors: Record<string, string> = {
  'No token yet': '#7CF5C0',
  'Points active': '#8FA8FF',
  'Dackie Points active': '#8FA8FF',
  'GB Points active': '#8FA8FF',
  'Active, ongoing': '#FFD166',
};

export default function BestBaseAirdrops2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .base-wrap { min-height:100vh; background:#060A12; font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif; }
        .base-hero { padding:56px 24px 48px; border-bottom:1px solid rgba(255,255,255,0.06); position:relative; overflow:hidden; }
        .base-glow { position:absolute; top:-80px; right:0; width:500px; height:400px; background:radial-gradient(ellipse at top right,rgba(0,82,255,0.08) 0%,transparent 65%); pointer-events:none; }
        .base-inner { max-width:900px; margin:0 auto; position:relative; }
        .base-bc { display:flex; align-items:center; gap:6px; margin-bottom:20px; }
        .base-bc a { font-size:12px; color:rgba(255,255,255,0.3); text-decoration:none; }
        .base-bc span { color:rgba(255,255,255,0.15); font-size:12px; }
        .base-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(0,82,255,0.07); border:1px solid rgba(0,82,255,0.2); color:#6494FF; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:18px; }
        h1.base-h1 { font-size:clamp(28px,4vw,44px); font-weight:900; color:#fff; letter-spacing:-0.04em; line-height:1.1; margin:0 0 18px; }
        .base-sub { font-size:16px; color:rgba(255,255,255,0.45); line-height:1.75; margin:0; max-width:640px; }
        .base-meta { display:flex; gap:10px; flex-wrap:wrap; margin-top:20px; }
        .base-tag { font-size:11px; font-weight:600; color:rgba(255,255,255,0.3); background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:4px 12px; border-radius:99px; }
        .base-body { max-width:900px; margin:0 auto; padding:48px 24px 80px; }
        .base-section { margin-bottom:48px; }
        h2.base-h2 { font-size:22px; font-weight:800; color:#fff; letter-spacing:-0.02em; margin:0 0 16px; }
        .base-p { font-size:15px; color:rgba(255,255,255,0.5); line-height:1.85; margin:0 0 16px; }
        .base-callout { background:linear-gradient(135deg,rgba(0,82,255,0.05),rgba(124,245,192,0.03)); border:1px solid rgba(0,82,255,0.18); border-radius:16px; padding:22px 24px; margin-bottom:32px; }
        .base-callout-label { font-size:10px; font-weight:700; color:#6494FF; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 8px; }
        .base-callout-text { font-size:14px; color:rgba(255,255,255,0.55); line-height:1.8; margin:0; }
        .base-stat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin:20px 0; }
        .base-stat { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:16px; text-align:center; }
        .base-stat-val { font-size:20px; font-weight:800; color:#6494FF; letter-spacing:-0.03em; margin:0 0 4px; }
        .base-stat-lbl { font-size:10px; font-weight:600; color:rgba(255,255,255,0.25); text-transform:uppercase; letter-spacing:0.08em; }
        .base-rpc { background:#0D1221; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:20px 22px; margin:20px 0; }
        .base-rpc-title { font-size:11px; font-weight:700; color:rgba(255,255,255,0.3); text-transform:uppercase; letter-spacing:0.08em; margin:0 0 14px; }
        .base-rpc-row { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.04); font-size:13px; }
        .base-rpc-row:last-child { border-bottom:none; }
        .base-rpc-key { color:rgba(255,255,255,0.3); font-weight:600; font-size:11px; text-transform:uppercase; letter-spacing:0.06em; }
        .base-rpc-val { color:#6494FF; font-weight:600; font-size:13px; font-family:monospace; }
        .base-protocol { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:20px 22px; margin-bottom:12px; }
        .base-protocol-header { display:flex; align-items:flex-start; gap:14px; margin-bottom:10px; }
        .base-rank { width:28px; height:28px; border-radius:8px; background:rgba(0,82,255,0.08); border:1px solid rgba(0,82,255,0.2); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; color:#6494FF; flex-shrink:0; }
        .base-protocol-name { font-size:16px; font-weight:800; color:#fff; margin:0; letter-spacing:-0.02em; }
        .base-protocol-type { font-size:11px; color:rgba(255,255,255,0.3); font-weight:600; margin:2px 0 0; }
        .base-protocol-badges { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px; }
        .base-pill { font-size:10px; font-weight:700; padding:3px 10px; border-radius:99px; border:1px solid; }
        .base-protocol-desc { font-size:13px; color:rgba(255,255,255,0.4); line-height:1.7; margin:0; }
        .base-potential { font-size:13px; font-weight:700; color:#7CF5C0; }
        .base-faq-item { border-bottom:1px solid rgba(255,255,255,0.05); padding:18px 0; }
        .base-faq-item:last-child { border-bottom:none; }
        .base-faq-q { font-size:15px; font-weight:700; color:#fff; margin:0 0 8px; }
        .base-faq-a { font-size:14px; color:rgba(255,255,255,0.45); line-height:1.75; margin:0; }
        @media(max-width:640px){ .base-stat-grid{grid-template-columns:1fr 1fr;} h1.base-h1{font-size:26px;} }
      `}</style>

      <div className="base-wrap">
        <div className="base-hero">
          <div className="base-glow" />
          <div className="base-inner">
            <nav className="base-bc">
              <a href="/">Home</a><span>›</span>
              <a href="/learn">Learn</a><span>›</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Best Base Airdrops 2026</span>
            </nav>
            <div className="base-badge">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6494FF', display: 'inline-block' }} />
              Coinbase L2 · $5B+ TVL
            </div>
            <h1 className="base-h1">Best Base Airdrops 2026<br />— Top 10 Picks</h1>
            <p className="base-sub">Base is Coinbase's Layer 2 with $5B+ TVL and dozens of protocols that have no token yet. Here are the best airdrop opportunities in the Base ecosystem right now.</p>
            <div className="base-meta">
              <span className="base-tag">Updated June 8, 2026</span>
              <span className="base-tag">10 protocols ranked</span>
              <span className="base-tag">~$0.02 avg gas</span>
              <span className="base-tag">12 min read</span>
            </div>
          </div>
        </div>

        <div className="base-body">
          <div className="base-callout">
            <p className="base-callout-label">Quick Answer</p>
            <p className="base-callout-text">
              <strong style={{ color: '#fff' }}>The best Base airdrops in 2026</strong> come from protocols with active points programs and no token yet: <strong style={{ color: '#6494FF' }}>Seamless Protocol</strong> (lending), <strong style={{ color: '#6494FF' }}>Dackieswap</strong> (gamified DEX), <strong style={{ color: '#6494FF' }}>Grand Base</strong> (leveraged yield), and <strong style={{ color: '#6494FF' }}>Morpho Blue</strong> (peer-to-peer lending). Gas is ~$0.01–$0.05. Interact weekly across all four to maximize eligibility.
            </p>
          </div>

          <div className="base-section">
            <div className="base-stat-grid">
              <div className="base-stat"><div className="base-stat-val">$5B+</div><div className="base-stat-lbl">TVL on Base</div></div>
              <div className="base-stat"><div className="base-stat-val">200+</div><div className="base-stat-lbl">Active protocols</div></div>
              <div className="base-stat"><div className="base-stat-val">$0.02</div><div className="base-stat-lbl">Avg gas fee</div></div>
              <div className="base-stat"><div className="base-stat-val">Coinbase</div><div className="base-stat-lbl">Builder</div></div>
            </div>
          </div>

          <div className="base-section">
            <h2 className="base-h2">Add Base to MetaMask</h2>
            <div className="base-rpc">
              <div className="base-rpc-title">Base Mainnet Network Details</div>
              {[
                ['Network Name', 'Base'],
                ['RPC URL', 'https://mainnet.base.org'],
                ['Chain ID', '8453'],
                ['Currency Symbol', 'ETH'],
                ['Block Explorer', 'basescan.org'],
              ].map(([k, v]) => (
                <div key={k} className="base-rpc-row">
                  <span className="base-rpc-key">{k}</span>
                  <span className="base-rpc-val">{v}</span>
                </div>
              ))}
            </div>
            <p className="base-p" style={{ fontSize: 13 }}>Or simply visit <strong style={{ color: '#6494FF' }}>chainlist.org</strong> and search "Base" to add with one click. Then bridge ETH from Ethereum using <strong style={{ color: '#6494FF' }}>bridge.base.org</strong> — bridging itself is also an on-chain activity signal.</p>
          </div>

          <div className="base-section">
            <h2 className="base-h2">Top 10 Base Airdrops — Ranked</h2>
            {protocols.map((p) => {
              const statusColor = statusColors[p.status] || 'rgba(255,255,255,0.3)';
              return (
                <div key={p.rank} className="base-protocol">
                  <div className="base-protocol-header">
                    <div className="base-rank">#{p.rank}</div>
                    <div style={{ flex: 1 }}>
                      <p className="base-protocol-name">{p.name}</p>
                      <p className="base-protocol-type">{p.type}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div className="base-potential">{p.potential}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', marginTop: 2 }}>estimated</div>
                    </div>
                  </div>
                  <div className="base-protocol-badges">
                    <span className="base-pill" style={{ color: statusColor, borderColor: `${statusColor}30`, background: `${statusColor}08` }}>{p.status}</span>
                    <span className="base-pill" style={{ color: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>Effort: {p.effort}</span>
                  </div>
                  <p className="base-protocol-desc">{p.description}</p>
                </div>
              );
            })}
          </div>

          <div className="base-section">
            <h2 className="base-h2">Base Farming Strategy</h2>
            <p className="base-p">The optimal Base strategy is breadth + consistency. Protocols with no token yet — Seamless, Dackieswap, Grand Base, Morpho Blue — are the highest-value targets. For each:</p>
            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '20px 24px' }}>
              {[
                { step: '1', text: 'Set up a dedicated Base wallet. Do not use your main wallet for testnet farming.' },
                { step: '2', text: 'Bridge 0.05–0.1 ETH to Base via bridge.base.org. This costs ~$3–5 in Ethereum gas once.' },
                { step: '3', text: 'Swap $20–$50 worth of tokens on Aerodrome or Dackieswap at least twice per week.' },
                { step: '4', text: 'Supply a small amount to Seamless Protocol or Moonwell — even $20 USDC shows lending activity.' },
                { step: '5', text: 'Complete all Coinbase Wallet onchain quests — these are specifically designed to build your Base activity history.' },
                { step: '6', text: 'Mint any free NFTs on Zora (many are free + gas). Monthly minting builds a strong NFT activity profile.' },
                { step: '7', text: 'Maintain activity for at least 3 months. Airdrop snapshots reward time-weighted activity, not one-time bursts.' },
              ].map(({ step, text }) => (
                <div key={step} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: step === '7' ? 'none' : '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 8, background: 'rgba(0,82,255,0.08)', border: '1px solid rgba(0,82,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#6494FF', flexShrink: 0 }}>{step}</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="base-section">
            <h2 className="base-h2">Frequently Asked Questions</h2>
            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '8px 24px' }}>
              {faqSchema.mainEntity.map((f) => (
                <div key={f.name} className="base-faq-item">
                  <p className="base-faq-q">{f.name}</p>
                  <p className="base-faq-a">{f.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 10, marginBottom: 40 }}>
            {[
              { href: '/learn/best-hyperliquid-airdrops-2026', title: 'Best Hyperliquid Airdrops 2026', sub: 'HyperEVM ecosystem' },
              { href: '/learn/how-to-farm-monad-airdrop', title: 'How to Farm Monad Airdrop', sub: 'High-performance EVM L1' },
              { href: '/learn/how-to-farm-megaeth-airdrop', title: 'How to Farm MegaETH Airdrop', sub: '100K TPS EVM L1' },
              { href: '/learn/best-crypto-airdrops-this-week', title: 'Best Airdrops This Week', sub: 'Weekly updated list' },
            ].map((r) => (
              <a key={r.href} href={r.href} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '14px 16px', textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#E2E4EC', marginBottom: 4 }}>{r.title}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontWeight: 500 }}>{r.sub}</div>
              </a>
            ))}
          </div>

          <div className="aff-box">
            <p className="aff-label">🔗 Get ETH for Base airdrops</p>
            <div className="aff-links">
              <a href="https://www.gate.com/share/xwvca1ha" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-gate">Gate.io — Buy crypto →</a>
              <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-binance">Binance →</a>
            </div>
            <p className="aff-note">Low fees · Supports ETH, USDC, all major chains · Instant deposits</p>
          </div>


          <div style={{ background: 'linear-gradient(135deg,rgba(0,82,255,0.07),rgba(124,245,192,0.04))', border: '1px solid rgba(0,82,255,0.15)', borderRadius: 20, padding: '28px 32px', textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: '-0.02em' }}>Check your Base wallet eligibility</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Our wallet checker scans 9 chains including Base for airdrop eligibility.</div>
            <a href="/wallet-checker" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', fontWeight: 800, fontSize: 14, padding: '13px 28px', borderRadius: 12, textDecoration: 'none' }}>
              Check My Wallet →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
