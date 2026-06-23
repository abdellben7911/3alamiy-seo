import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unicity ($UNC) Airdrop Guide 2026 — Testnet V2 Live, Epoch 3 Active, Confirmed Airdrop",
  description: "Unicity Testnet V2 is live with Epoch 3 now active. $UNC airdrop is confirmed and free to farm. $3M raised. Full step-by-step guide to maximizing your UNC allocation.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/unicity-unc-airdrop-guide-2026" },
  openGraph: {
    title: "Unicity ($UNC) Airdrop Guide 2026 — Testnet V2 + Epoch 3 Live",
    description: "Confirmed $UNC airdrop. Testnet V2 just launched with Epoch 3. Free to farm. Full guide.",
    url: "https://www.3alamiyweb3.com/learn/unicity-unc-airdrop-guide-2026",
    siteName: "3alamiy Web3", type: "article",
  },
  twitter: { card: "summary_large_image", title: "Unicity $UNC Airdrop — Testnet V2 + Epoch 3 Live Now", description: "Confirmed airdrop. Free. $3M raised. Full farming guide." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Unicity ($UNC) Airdrop Guide 2026 — Testnet V2 Live, Epoch 3 Active, Confirmed Airdrop",
  description: "Unicity Testnet V2 is live with Epoch 3 now active. $UNC airdrop confirmed and free to farm. Full step-by-step guide.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-23", dateModified: "2026-06-23",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/unicity-unc-airdrop-guide-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Has Unicity confirmed a $UNC airdrop?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Unicity has officially confirmed a $UNC token airdrop for testnet participants. The airdrop is tied to the Points Program running alongside Testnet V2. Users who complete testnet tasks during Epoch 3 and earn points will receive $UNC token allocations at the time of the main token generation event (TGE)." },
    },
    {
      "@type": "Question",
      name: "What is Unicity?",
      acceptedAnswer: { "@type": "Answer", text: "Unicity is a blockchain protocol focused on privacy-preserving transactions and verifiable computation. It has raised $3 million and is running Testnet V2 with an active points program. The project targets the intersection of privacy tech and DeFi, allowing users to verify computations without revealing underlying data." },
    },
    {
      "@type": "Question",
      name: "What is Epoch 3 in Unicity?",
      acceptedAnswer: { "@type": "Answer", text: "Epoch 3 is the third phase of the Unicity testnet points program. Each epoch runs for a set period and rewards users with points for completing testnet tasks. Epoch 3 just launched, meaning there is a full epoch window available to new farmers. Points from all epochs roll over and count toward the final $UNC airdrop allocation." },
    },
    {
      "@type": "Question",
      name: "How do I farm the Unicity airdrop?",
      acceptedAnswer: { "@type": "Answer", text: "To farm the Unicity $UNC airdrop: visit the Unicity app and create an account, connect your EVM wallet, complete available testnet tasks in the dashboard (transactions, interactions, and protocol-specific actions), join the Unicity Discord for role-gated quests, follow @unicity_labs on X for campaign announcements, and refer friends to earn bonus points. Epoch 3 tasks are live now." },
    },
    {
      "@type": "Question",
      name: "Is the Unicity airdrop free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Unicity testnet participation is completely free. All tasks run on testnet using test tokens with no real funds required. You only need a wallet address and an internet connection to farm the $UNC airdrop." },
    },
  ],
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".unc-answer", ".unc-steps", ".unc-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/unicity-unc-airdrop-guide-2026",
};

const STEPS = [
  {
    n: "01",
    title: "Visit the Unicity testnet app",
    desc: "Go to the official Unicity testnet at app.unicity.network (or the link pinned in their Discord). Create an account and connect your EVM wallet. Use a wallet you plan to keep long-term — this is the address that will receive your $UNC tokens at TGE.",
  },
  {
    n: "02",
    title: "Complete Epoch 3 tasks",
    desc: "Epoch 3 is live now. Check the task dashboard for available actions — these typically include sending test transactions, interacting with protocol contracts, running a node, or completing specific DeFi actions on testnet. Complete every available task as each one adds points to your allocation.",
  },
  {
    n: "03",
    title: "Join Discord and get active roles",
    desc: "Unicity's Discord has role-gated quests that add bonus points beyond what the testnet app tracks. Join the server, verify your wallet, and complete any available quest campaigns. Discord activity is a secondary signal many projects use when determining final airdrop tiers.",
  },
  {
    n: "04",
    title: "Follow @unicity_labs on X",
    desc: "New task campaigns and epoch updates are announced on X. Follow the account and turn on notifications so you do not miss time-limited bonus point events. Projects often run 24–48 hour bonus campaigns that can significantly boost your allocation.",
  },
  {
    n: "05",
    title: "Refer friends for bonus points",
    desc: "Unicity has a referral system. Each friend you refer who completes testnet tasks adds bonus points to your account. Share your referral link in crypto communities, airdrop farming groups, and with friends who are already active on-chain.",
  },
  {
    n: "06",
    title: "Return for each new epoch",
    desc: "Each new epoch resets available tasks but rolls over your existing points. Return at the start of every epoch to complete the new task set. Missing an epoch is a lost opportunity — set a calendar reminder or join the Discord to get epoch start notifications.",
  },
];

const SIGNALS = [
  { label: "Confirmed $UNC airdrop", detail: "Unicity has officially confirmed a token airdrop for testnet participants — not speculative, not 'likely'. The airdrop is real and tied directly to the Points Program running in Testnet V2.", color: '#22c55e' },
  { label: "$3M seed raise", detail: "Small but focused raise signals a team serious about shipping. Many of the most profitable retroactive airdrops came from projects with sub-$10M raises targeting a specific technical niche.", color: '#7CF5C0' },
  { label: "Testnet V2 with new tasks", detail: "Testnet V2 is a major upgrade over V1 — more tasks, new protocol features, and the Epoch 3 point refresh. Projects that ship testnet upgrades are on track for mainnet, which is when the token launches.", color: '#60a5fa' },
  { label: "100% free to participate", detail: "No cost barrier means anyone can farm. But it also means the bar for standing out is activity breadth and consistency — users who complete every task in every epoch consistently outperform those who dip in once.", color: '#f59e0b' },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <main style={{ minHeight: '100vh', background: '#060A12', color: '#fff', fontFamily: "'Inter', sans-serif" }}>

        <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
          <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/learn" style={{ color: '#64748b', textDecoration: 'none' }}>Learn</Link>
          <span>/</span>
          <span style={{ color: '#94a3b8' }}>Unicity $UNC Airdrop Guide 2026</span>
        </nav>

        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 80px' }}>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#22c55e', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Confirmed Airdrop</span>
            <span style={{ background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.15)', color: '#7CF5C0', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Free</span>
            <span style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Epoch 3 Live</span>
            <span style={{ fontSize: '12px', color: '#475569', display: 'flex', alignItems: 'center' }}>June 23, 2026 &nbsp;·&nbsp; 6 min read</span>
          </div>

          {/* Urgency */}
          <div style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '12px', padding: '14px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f87171', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#f87171' }}>Testnet V2 + Epoch 3 just launched — most users missed the update</span>
          </div>

          <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '20px', color: '#fff' }}>
            Unicity ($UNC) Airdrop Guide 2026 — Testnet V2 Live, Epoch 3 Active
          </h1>

          <div className="unc-answer" style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.75, marginBottom: '36px' }}>
            <p style={{ marginBottom: '16px' }}>
              Unicity just launched Testnet V2 with Epoch 3 now active — and a $UNC airdrop is officially confirmed for participants. The project raised $3M, costs nothing to farm, and most of the community has not noticed the Testnet V2 update yet.
            </p>
            <p>
              This guide covers what Unicity is, why the airdrop signal is strong, and exactly how to farm Epoch 3 before the window closes.
            </p>
          </div>

          {/* Quick stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '48px' }}>
            {[
              { n: '$3M', label: 'Raised' },
              { n: 'FREE', label: 'Cost to farm' },
              { n: 'Epoch 3', label: 'Currently active' },
            ].map(s => (
              <div key={s.n} style={{ background: '#0D1221', border: '1px solid rgba(124,245,192,0.1)', borderRadius: '12px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#7CF5C0', letterSpacing: '-0.03em', marginBottom: '4px' }}>{s.n}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Why farm */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px', color: '#fff' }}>
              Why the $UNC airdrop signal is strong
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SIGNALS.map(s => (
                <div key={s.label} style={{ background: '#0D1221', border: `1px solid ${s.color}18`, borderLeft: `3px solid ${s.color}`, borderRadius: '10px', padding: '16px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: '6px' }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{s.label}</div>
                    <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '8px', color: '#fff' }}>
              How to farm the Unicity airdrop — Epoch 3
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '28px' }}>
              Epoch 3 is live. Every task you complete now adds points to your final $UNC allocation.
            </p>
            <div className="unc-steps" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {STEPS.map(step => (
                <div key={step.n} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '22px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, color: '#7CF5C0', flexShrink: 0, marginTop: '2px' }}>{step.n}</div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{step.title}</div>
                    <div style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pro tip */}
          <div style={{ background: '#0D1221', border: '1px solid rgba(124,245,192,0.12)', borderRadius: '16px', padding: '24px 28px', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#7CF5C0', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Pro tip</div>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.75, marginBottom: '0' }}>
              Most users who farm confirmed airdrops spread their activity across multiple wallets. For Unicity specifically — since participation is free and testnet-based — farming with 2–3 wallets that each complete all epoch tasks significantly increases your total $UNC allocation. Use different browser profiles or devices to keep activities separate and avoid Sybil filters by using distinct IP addresses.
            </p>
          </div>

          {/* FAQ */}
          <section className="unc-faqs" style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '24px', color: '#fff' }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {faqJsonLd.mainEntity.map(faq => (
                <details key={faq.name} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px' }}>
                  <summary style={{ padding: '18px 20px', fontSize: '14px', fontWeight: 700, color: '#e2e8f0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.name}
                    <span style={{ color: '#475569', fontSize: '18px', flexShrink: 0, marginLeft: '12px' }}>+</span>
                  </summary>
                  <div style={{ padding: '0 20px 18px', fontSize: '14px', color: '#64748b', lineHeight: 1.75, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(124,245,192,0.06), rgba(96,165,250,0.04))', border: '1px solid rgba(124,245,192,0.15)', borderRadius: '16px', padding: '32px', textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#7CF5C0', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Also check your wallet</div>
            <h3 style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '10px', color: '#fff' }}>
              See every airdrop your wallet qualifies for right now
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px', lineHeight: 1.6 }}>
              While you farm Unicity, check what other airdrops your wallet has already earned across 110+ projects.
            </p>
            <Link href="/wallet-checker" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #7CF5C0, #4ade80)', color: '#060A12', fontSize: '14px', fontWeight: 800, padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', letterSpacing: '-0.01em' }}>
              Check My Wallet Free
            </Link>
          </div>

          {/* Related */}
          <section>
            <h2 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px', color: '#fff' }}>Related guides</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { slug: 'grass-season-2-airdrop-date-2026', title: 'Grass Season 2 — July 7 Update', desc: 'Discord mod confirmed a Season 2 update. Farm before the snapshot.' },
                { slug: 'best-testnet-airdrops-2026', title: 'Best Testnet Airdrops 2026', desc: 'Top free testnet farming opportunities with confirmed token drops.' },
                { slug: 'confirmed-crypto-airdrop-pools-2026', title: 'Confirmed Airdrop Pools 2026', desc: '$107M MegaETH, $37M Backpack, $52M Pharos.' },
                { slug: 'free-crypto-airdrops-no-investment-2026', title: 'Free Crypto Airdrops 2026', desc: 'Best airdrops that cost nothing to farm — no ETH needed.' },
              ].map(r => (
                <Link key={r.slug} href={`/learn/${r.slug}`} style={{ display: 'block', background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '16px', textDecoration: 'none' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px', lineHeight: 1.4 }}>{r.title}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>{r.desc}</div>
                </Link>
              ))}
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
