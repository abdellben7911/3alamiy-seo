import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pod Network Airdrop Guide 2026 — $10M a16z Raise, Testnet Farming & POD Token",
  description: "Pod Network raised $10M from a16z CSX and 1kx. No token yet. Testnet competition runs to June 24, 2026. Full step-by-step farming guide — how to qualify for a POD airdrop.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/pod-network-airdrop-guide-2026" },
  openGraph: {
    title: "Pod Network Airdrop Guide 2026 — a16z Backed, No Token Yet",
    description: "$10M from a16z CSX + 1kx. Consensusless L1 targeting 200ms transactions. Testnet active. Full farming guide.",
    url: "https://www.3alamiyweb3.com/learn/pod-network-airdrop-guide-2026",
    siteName: "3alamiy Web3", type: "article",
  },
  twitter: { card: "summary_large_image", title: "Pod Network Airdrop 2026 — Full Farming Guide", description: "a16z + 1kx backed. No token yet. Testnet ending June 24. How to qualify." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Pod Network Airdrop Guide 2026 — $10M a16z Raise, Testnet Farming & POD Token",
  description: "Pod Network raised $10M from a16z CSX and 1kx. No token yet. Full farming guide for the POD airdrop.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-20", dateModified: "2026-06-20",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/pod-network-airdrop-guide-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Has Pod Network confirmed an airdrop?",
      acceptedAnswer: { "@type": "Answer", text: "Pod Network has not officially confirmed an airdrop or a POD token as of June 2026. However, the project raised $10M from a16z CSX and 1kx, has an active testnet, and has no token — all strong signals of a future retroactive airdrop. The testnet competition (June 3–24, 2026) is the primary farming opportunity right now." },
    },
    {
      "@type": "Question",
      name: "What is Pod Network?",
      acceptedAnswer: { "@type": "Answer", text: "Pod Network is a 'consensusless' Layer-1 blockchain that streams transactions directly to validators for attestation and timestamping, targeting transaction speeds of up to 200 milliseconds — similar to Google search response time. It was founded by CEO Shresth Agrawal and raised $10M from a16z CSX, 1kx, Flashbots, and others." },
    },
    {
      "@type": "Question",
      name: "How do I farm the Pod Network airdrop?",
      acceptedAnswer: { "@type": "Answer", text: "The main farming activity is participating in the Pod Network testnet competition (June 3–24, 2026): register at pod.network, verify your X (Twitter) account, connect a wallet, and trade actively using testnet paper funds. Additional activities include joining the Discord, completing any available quests, and maintaining a trading history throughout the competition window." },
    },
    {
      "@type": "Question",
      name: "Who backed Pod Network?",
      acceptedAnswer: { "@type": "Answer", text: "Pod Network raised $10 million in seed funding led by a16z CSX (Andreessen Horowitz Crypto Startup Accelerator) and 1kx. Other backers include Flashbots, Blockchain Builders Fund, and Protagonist. Angel investors include Celestia's Nick White, Babylon's David Tse, and Axelar's Sergey Gorbunov." },
    },
    {
      "@type": "Question",
      name: "What are the eligibility requirements for the Pod Network testnet?",
      acceptedAnswer: { "@type": "Answer", text: "To register for the Pod Network testnet competition, your X (Twitter) account must be either verified (blue checkmark) OR have more than 100 followers. Registration must be completed before June 24, 2026. There is no cost to participate — trading uses paper testnet funds." },
    },
  ],
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".pod-answer", ".pod-steps", ".pod-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/pod-network-airdrop-guide-2026",
};

const SIGNALS = [
  { label: "$10M seed raise", detail: "a16z CSX and 1kx co-led. Same caliber of early-stage investors who backed Hyperliquid, Celestia, and Arbitrum before their airdrops.", color: "#7CF5C0" },
  { label: "No token yet", detail: "Pod has no native token as of June 2026. Every tokenless project with VC backing eventually launches one — and early testnet users are the primary recipients.", color: "#60a5fa" },
  { label: "Active testnet", detail: "Testnet competition running June 3–24, 2026. Active testnets build the on-chain history that airdrop algorithms use to identify real users.", color: "#f59e0b" },
  { label: "Top-tier angel investors", detail: "Celestia's Nick White, Babylon's David Tse, Axelar's Sergey Gorbunov. These are founders who airdropped billions to their own early users — they understand the value of rewarding farmers.", color: "#a78bfa" },
  { label: "Unique tech (consensusless L1)", detail: "Pod is not another EVM fork. A novel architecture creates a genuine narrative around the token launch — which drives higher initial valuations and larger airdrop pools.", color: "#f6851b" },
];

const STEPS = [
  {
    n: "01",
    title: "Register at pod.network",
    desc: "Go to pod.network and sign up. You will need to connect your X (Twitter) account — it must be verified OR have 100+ followers. This is a hard requirement. If your account does not meet this, grow it to 100 followers before registering.",
    urgent: false,
  },
  {
    n: "02",
    title: "Verify your X account on the platform",
    desc: "After registration, complete the X verification step inside the Pod platform. Users who register and verify before the competition end date (June 24, 2026) get a higher starting paper-fund balance for the competition — which directly affects your ranking.",
    urgent: true,
  },
  {
    n: "03",
    title: "Connect a wallet",
    desc: "Connect an EVM-compatible wallet (MetaMask or similar) to the Pod testnet. Use a dedicated farming wallet — not your main wallet with real assets. The testnet uses paper funds, but the wallet address is what gets recorded for retroactive airdrop eligibility.",
    urgent: false,
  },
  {
    n: "04",
    title: "Trade actively throughout the competition",
    desc: "The competition uses paper testnet funds that cannot be withdrawn. Your goal is to trade as actively as possible to: (1) maximize your P&L ranking for prizes, and (2) build transaction count and volume history for retroactive airdrop eligibility. Trade at minimum once per day for the full competition window.",
    urgent: false,
  },
  {
    n: "05",
    title: "Join Discord and complete quests",
    desc: "Join the Pod Network Discord. Most airdrop programs use Discord activity (roles, quests, community participation) as a secondary eligibility signal. Check the #quests or #missions channel for any available tasks and complete them all.",
    urgent: false,
  },
  {
    n: "06",
    title: "Follow and engage on X",
    desc: "Follow @pod_network on X and retweet or engage with official posts. Social engagement is tracked and commonly used as a tiebreaker in airdrop allocations. Spend 2 minutes per day liking and retweeting official Pod posts during the testnet.",
    urgent: false,
  },
];

export default function PodNetworkAirdropGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        .pod * { box-sizing: border-box; }
        .pod { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space),'Space Grotesk',system-ui,sans-serif; }
        .pod-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .pod-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .pod-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .pod-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
        .pod-badge { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; padding: 3px 12px; border-radius: 99px; text-transform: uppercase; }
        .pod-h1 { font-size: clamp(26px,5vw,40px); font-weight: 700; line-height: 1.2; margin: 0 0 16px; }
        .pod-h1 span { color: #7CF5C0; }
        .pod-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .pod-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 36px; }
        .pod-urgent { background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25); border-radius: 12px; padding: 14px 18px; margin-bottom: 32px; font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.6; }
        .pod-urgent strong { color: #f87171; }
        .pod-answer { background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.13); border-radius: 14px; padding: 22px 24px; margin-bottom: 40px; }
        .pod-answer-label { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7CF5C0; margin-bottom: 10px; }
        .pod-answer-text { font-size: 15px; color: rgba(255,255,255,0.7); line-height: 1.8; }
        .pod-answer-text strong { color: #fff; }
        .pod-h2 { font-size: 22px; font-weight: 700; margin: 0 0 16px; }
        .pod-h2 span { color: #7CF5C0; }
        .pod-p { font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.8; margin-bottom: 20px; }
        .pod-section { margin-bottom: 48px; }
        .pod-signals { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
        .pod-signal { display: flex; gap: 16px; align-items: flex-start; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 13px; padding: 16px 18px; }
        .pod-signal-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
        .pod-signal-label { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .pod-signal-detail { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.6; }
        .pod-steps { display: flex; flex-direction: column; gap: 16px; }
        .pod-step { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 20px 22px; position: relative; }
        .pod-step.urgent { border-color: rgba(248,113,113,0.25); background: rgba(248,113,113,0.04); }
        .pod-step-n { font-size: 11px; font-weight: 800; color: rgba(255,255,255,0.2); letter-spacing: 0.1em; margin-bottom: 6px; }
        .pod-step-title { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .pod-step-desc { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; }
        .pod-step-tag { position: absolute; top: 18px; right: 18px; font-size: 10px; font-weight: 800; color: #f87171; background: rgba(248,113,113,0.1); border: 1px solid rgba(248,113,113,0.2); padding: 2px 8px; border-radius: 99px; }
        .pod-facts { display: grid; grid-template-columns: repeat(auto-fit,minmax(160px,1fr)); gap: 12px; margin-bottom: 32px; }
        .pod-fact { background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 13px; padding: 16px 18px; text-align: center; }
        .pod-fact-val { font-size: 22px; font-weight: 900; color: #7CF5C0; margin-bottom: 5px; }
        .pod-fact-label { font-size: 11px; color: rgba(255,255,255,0.3); line-height: 1.4; }
        .pod-faqs { display: flex; flex-direction: column; gap: 14px; }
        .pod-faq { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 13px; padding: 20px 22px; }
        .pod-faq-q { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .pod-faq-a { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; }
        @media (max-width: 600px) { .pod-wrap { padding: 32px 16px 60px; } }
      `}</style>

      <div className="pod">
        <div className="pod-wrap">

          {/* Breadcrumb */}
          <nav className="pod-bc">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/learn">Learn</Link> <span>/</span>
            <span>Pod Network Airdrop Guide</span>
          </nav>

          {/* Badges */}
          <div className="pod-badges">
            <span className="pod-badge" style={{ background: 'rgba(124,245,192,0.1)', color: '#7CF5C0', border: '1px solid rgba(124,245,192,0.2)' }}>a16z Backed</span>
            <span className="pod-badge" style={{ background: 'rgba(248,113,113,0.1)', color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>Testnet Ends June 24</span>
            <span className="pod-badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>No Token Yet</span>
          </div>

          <h1 className="pod-h1">Pod Network <span>Airdrop Guide</span> 2026 — Farm the POD Token Before It Launches</h1>
          <p className="pod-sub">Pod Network raised $10M from a16z CSX and 1kx to build a "consensusless" Layer-1 targeting 200ms transaction speeds. No token yet. The testnet competition is live now and ends June 24, 2026. Here is exactly how to farm it.</p>
          <p className="pod-meta">By 3alamiy Web3 — June 20, 2026</p>

          {/* Urgency banner */}
          <div className="pod-urgent">
            <strong>Time-sensitive:</strong> The Pod Network testnet trading competition ends <strong>June 24, 2026</strong>. You have 4 days to register, verify your X account, and build trading history. Early users get a higher starting balance for the competition.
          </div>

          {/* Answer box */}
          <div className="pod-answer">
            <div className="pod-answer-label">Quick Answer</div>
            <div className="pod-answer-text">
              Pod Network has <strong>not confirmed an airdrop</strong> but has raised <strong>$10M from a16z CSX and 1kx</strong> and has no token. The main farming opportunity is the testnet trading competition (June 3–24, 2026): register at pod.network with a verified X account (or 100+ followers), connect a wallet, and trade actively with paper funds. <strong>Competition ends June 24.</strong> All transaction history from the testnet is recorded on-chain and is the most likely basis for a retroactive POD token airdrop.
            </div>
          </div>

          {/* Key facts */}
          <section className="pod-section">
            <h2 className="pod-h2">Pod Network — <span>Key Facts</span></h2>
            <div className="pod-facts">
              {[
                { val: "$10M", label: "seed raise from a16z CSX + 1kx" },
                { val: "200ms", label: "target transaction speed (vs 1-2s for standard L1s)" },
                { val: "June 24", label: "testnet competition end date" },
                { val: "0", label: "tokens issued — no POD token yet" },
              ].map(f => (
                <div key={f.val} className="pod-fact">
                  <div className="pod-fact-val">{f.val}</div>
                  <div className="pod-fact-label">{f.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why this is worth farming */}
          <section className="pod-section">
            <h2 className="pod-h2">Why Pod Network Is <span>Worth Farming</span></h2>
            <p className="pod-p">No airdrop is guaranteed. But these 5 signals make Pod one of the highest-probability opportunities available right now for the time investment required.</p>
            <div className="pod-signals">
              {SIGNALS.map((s, i) => (
                <div key={i} className="pod-signal">
                  <div className="pod-signal-dot" style={{ background: s.color }} />
                  <div>
                    <div className="pod-signal-label">{s.label}</div>
                    <div className="pod-signal-detail">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="pod-section">
            <h2 className="pod-h2">How to Farm — <span>Step by Step</span></h2>
            <p className="pod-p">Complete all 6 steps before June 24. Steps 1 and 2 are most time-sensitive.</p>
            <div className="pod-steps">
              {STEPS.map((step, i) => (
                <div key={i} className={`pod-step${step.urgent ? ' urgent' : ''}`}>
                  {step.urgent && <span className="pod-step-tag">Do first</span>}
                  <div className="pod-step-n">STEP {step.n}</div>
                  <div className="pod-step-title">{step.title}</div>
                  <div className="pod-step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Investors context */}
          <section className="pod-section">
            <h2 className="pod-h2">Who Backed Pod — <span>Why It Matters</span></h2>
            <p className="pod-p">The investor list is the strongest signal that a token is coming. These are not passive investors — they are founders who have run multi-billion dollar airdrops themselves.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { investor: "a16z CSX", role: "Co-lead investor", note: "a16z backed Aptos, Sui, and Arbitrum before their tokens. CSX (Crypto Startup Accelerator) focuses specifically on seed-stage L1/L2 projects." },
                { investor: "1kx", role: "Co-lead investor", note: "Token-focused fund known for early bets on projects that launch with large community airdrops." },
                { investor: "Nick White (Celestia)", role: "Angel", note: "Celestia distributed a $400M+ airdrop to early testnet participants. White understands how to reward early users." },
                { investor: "David Tse (Babylon)", role: "Angel", note: "Babylon distributed a significant BTC staking airdrop. Tse is a repeat airdrop program architect." },
                { investor: "Sergey Gorbunov (Axelar)", role: "Angel", note: "Axelar airdropped to early testnet users before mainnet. Same pattern as Pod." },
                { investor: "Flashbots", role: "Investor", note: "MEV infrastructure specialists. Participation signals Pod has real technical credibility beyond just marketing." },
              ].map((r, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '14px 18px', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ minWidth: 140 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{r.investor}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{r.role}</div>
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, flex: 1 }}>{r.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="pod-section">
            <h2 className="pod-h2">FAQ</h2>
            <div className="pod-faqs">
              {faqJsonLd.mainEntity.map((item, i) => (
                <div key={i} className="pod-faq">
                  <div className="pod-faq-q">{item.name}</div>
                  <div className="pod-faq-a">{item.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="pod-section">
            <h2 className="pod-h2">More High-Potential Farming Guides</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: "/learn/metamask-token-launch-2026", label: "MetaMask Token Launch 2026 — $686M raised, no token yet" },
                { href: "/learn/hyperliquid-guide", label: "Hyperliquid Season 2 — HLP 3x multiplier, 38.8% unreleased" },
                { href: "/learn/confirmed-crypto-airdrop-pools-2026", label: "Confirmed Airdrop Pools 2026 — MegaETH $107M, Backpack $37M" },
                { href: "/upcoming", label: "All Upcoming Tokenless Projects to Farm" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 14, color: '#7CF5C0', textDecoration: 'none', padding: '12px 16px', background: 'rgba(124,245,192,0.04)', border: '1px solid rgba(124,245,192,0.1)', borderRadius: 10, display: 'block' }}>
                  {l.label} →
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
