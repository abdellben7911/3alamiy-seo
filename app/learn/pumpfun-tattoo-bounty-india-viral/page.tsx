import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "He Tattooed His Forehead for $2,400, Misspelled It, Got Nothing — Then Crypto Twitter Made Him $15K | 3alamiy Web3",
  description:
    "An Indian man tattooed 'pump.fun' on his forehead for a $2,400 bounty — misspelled it, got disqualified. Crypto Twitter found out, launched a coin in his name, hit $250K market cap, and he earned $15K in fees. The full story.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/pumpfun-tattoo-bounty-india-viral" },
  openGraph: {
    title: "He Tattooed His Forehead for $2,400, Misspelled It, Got Nothing — Then Crypto Twitter Made Him $15K",
    description:
      "Tattooed his forehead for a pump.fun bounty, misspelled it, got disqualified. CT launched a coin in his name, hit $250K market cap, he earned $15K in fees. Full story.",
    url: "https://www.3alamiyweb3.com/learn/pumpfun-tattoo-bounty-india-viral",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "He Tattooed His Forehead for $2,400, Misspelled It, Got Nothing — Then CT Made Him $15K",
    description:
      "Pump.fun bounty. Forehead tattoo. Misspelled. Disqualified. Community coins him anyway. $15K in fees. Only in crypto.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "He Tattooed His Forehead for $2,400, Misspelled It, Got Nothing — Then Crypto Twitter Made Him $15K",
  description:
    "An Indian man tattooed 'pump.fun' on his forehead for a $2,400 bounty, misspelled it, got disqualified. Crypto Twitter launched a coin in his name that hit $250K market cap — earning him $15K in fees.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: {
    "@type": "Organization",
    name: "3alamiy Web3",
    url: "https://www.3alamiyweb3.com",
  },
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.3alamiyweb3.com/learn/pumpfun-tattoo-bounty-india-viral",
  },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "p"] },
  url: "https://www.3alamiyweb3.com/learn/pumpfun-tattoo-bounty-india-viral",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the pump.fun tattoo bounty story?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Indian man accepted a pump.fun community bounty worth approximately $2,400 to tattoo 'pump.fun' on his forehead. He completed the tattoo but misspelled the text, which disqualified him from receiving the bounty. Crypto Twitter discovered the story, launched a meme coin in his name that reached a $250,000 market cap, and he earned approximately $15,000 in creator fees — far more than the original bounty.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pump.fun bounty feature?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pump.fun's bounty feature allows token creators and communities to post on-chain tasks with attached SOL rewards. Anyone can complete the task — promoting a token, creating content, or real-world stunts — and claim the bounty. It's designed to incentivize organic marketing and community participation.",
      },
    },
    {
      "@type": "Question",
      name: "How did the man earn $15,000 if he didn't get the bounty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After the story went viral on X (Twitter), the crypto community launched a meme coin named after or inspired by the man. Because pump.fun allows coin creators to earn fees from trading volume, and the coin reached a $250,000 market cap with heavy trading activity, the associated creator fees totaled approximately $15,000 — more than 6x the original $2,400 bounty he missed.",
      },
    },
    {
      "@type": "Question",
      name: "Why is this important for pump.fun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The story demonstrates that pump.fun's bounty feature creates viral feedback loops: someone does something extreme, it gets attention, the attention creates a meme coin, the meme coin generates fees and more attention. Analysts believe this cycle — real-world stunts leading to on-chain coins — is exactly the kind of mechanic that could bring non-crypto users (normies) into the ecosystem.",
      },
    },
  ],
};

export default function TattooBountyArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        .tb * { box-sizing: border-box; }
        .tb { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .tb-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .tb-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .tb-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .tb-bc a:hover { color: #7CF5C0; }
        .tb-badge { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; padding: 4px 12px; border-radius: 99px; text-transform: uppercase; }
        .tb-h1 { font-size: clamp(24px, 4.5vw, 38px); font-weight: 900; line-height: 1.15; letter-spacing: -0.03em; margin: 20px 0 16px; color: #fff; }
        .tb-h1 em { color: #f87171; font-style: normal; }
        .tb-lead { font-size: 17px; color: rgba(255,255,255,0.5); line-height: 1.75; margin-bottom: 24px; }
        .tb-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 12px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
        .tb-meta span { color: rgba(255,255,255,0.4); }

        .tb-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .tb-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        .tb-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .tb-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }

        /* Stats */
        .tb-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 52px; }
        .tb-stat { background: #0D1221; padding: 20px 16px; text-align: center; }
        .tb-stat-val { font-size: 22px; font-weight: 900; letter-spacing: -0.04em; margin-bottom: 4px; }
        .tb-stat-lbl { font-size: 10px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }

        /* Sections */
        .tb-section { margin-bottom: 52px; }
        .tb-h2 { font-size: 22px; font-weight: 800; letter-spacing: -0.03em; color: #fff; margin-bottom: 14px; line-height: 1.3; }
        .tb-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.85; margin-bottom: 16px; }
        .tb-p strong { color: #fff; font-weight: 700; }
        .tb-p em { color: #7CF5C0; font-style: normal; }

        /* Timeline */
        .tb-timeline { display: flex; flex-direction: column; gap: 0; }
        .tb-tl-item { display: flex; gap: 16px; padding-bottom: 24px; }
        .tb-tl-item:last-child { padding-bottom: 0; }
        .tb-tl-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 40px; }
        .tb-tl-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.08); background: #0D1221; }
        .tb-tl-line { width: 1px; flex: 1; background: rgba(255,255,255,0.06); margin-top: 6px; }
        .tb-tl-item:last-child .tb-tl-line { display: none; }
        .tb-tl-content { flex: 1; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px 18px; margin-top: -2px; }
        .tb-tl-step { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px; }
        .tb-tl-title { font-size: 14px; font-weight: 800; color: #fff; margin-bottom: 6px; letter-spacing: -0.01em; }
        .tb-tl-body { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.75; }

        /* Quote */
        .tb-quote { border-left: 3px solid rgba(124,245,192,0.35); padding: 16px 20px; margin: 28px 0; background: rgba(124,245,192,0.03); border-radius: 0 12px 12px 0; }
        .tb-quote-text { font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.75; font-style: italic; margin: 0 0 8px; }
        .tb-quote-src { font-size: 12px; color: rgba(255,255,255,0.25); font-weight: 600; }

        /* Highlight box */
        .tb-highlight { background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.15); border-radius: 14px; padding: 22px 24px; margin: 28px 0; }
        .tb-highlight-title { font-size: 13px; font-weight: 800; color: #7CF5C0; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 10px; }
        .tb-highlight-body { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.75; }
        .tb-highlight-body strong { color: #fff; }

        /* Warning box */
        .tb-warning { background: rgba(248,113,113,0.04); border: 1px solid rgba(248,113,113,0.18); border-radius: 14px; padding: 20px 22px; margin: 24px 0; }
        .tb-warning-title { font-size: 12px; font-weight: 800; color: #f87171; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
        .tb-warning-body { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.75; }

        /* FAQ */
        .tb-faq { display: flex; flex-direction: column; gap: 14px; }
        .tb-faq-item { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 20px 22px; }
        .tb-faq-q { font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.02em; margin-bottom: 10px; display: flex; align-items: flex-start; gap: 10px; }
        .tb-faq-icon { width: 22px; height: 22px; border-radius: 6px; flex-shrink: 0; background: rgba(124,245,192,0.08); border: 1px solid rgba(124,245,192,0.15); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; color: #7CF5C0; margin-top: 1px; }
        .tb-faq-a { font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.75; padding-left: 32px; }

        /* CTA */
        .tb-cta { background: linear-gradient(135deg, rgba(124,245,192,0.06) 0%, rgba(99,102,241,0.04) 100%); border: 1px solid rgba(124,245,192,0.15); border-radius: 18px; padding: 36px 32px; text-align: center; margin-top: 64px; }
        .tb-cta-h { font-size: 22px; font-weight: 900; letter-spacing: -0.03em; color: #fff; margin-bottom: 10px; }
        .tb-cta-sub { font-size: 14px; color: rgba(255,255,255,0.35); margin-bottom: 24px; line-height: 1.6; }
        .tb-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .tb-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #7CF5C0, #4ade80); color: #060A12; font-size: 14px; font-weight: 800; padding: 13px 24px; border-radius: 12px; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 20px rgba(124,245,192,0.25); }
        .tb-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124,245,192,0.35); }
        .tb-btn-sec { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 600; padding: 13px 24px; border-radius: 12px; text-decoration: none; transition: background 0.15s; }
        .tb-btn-sec:hover { background: rgba(255,255,255,0.08); color: #fff; }

        @media (max-width: 600px) {
          .tb-wrap { padding: 32px 16px 64px; }
          .tb-stats { grid-template-columns: 1fr; }
          .tb-cta { padding: 28px 20px; }
        }
      `}</style>

      <div className="tb">
        <div className="tb-wrap">

          {/* Breadcrumb */}
          <nav className="tb-bc">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/learn">Learn</Link>
            <span>›</span>
            <span>Pump.fun Tattoo Bounty</span>
          </nav>

          {/* Badge + headline */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="tb-badge" style={{ background: 'rgba(248,113,113,0.1)', color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>Viral</span>
            <span className="tb-badge" style={{ background: 'rgba(124,245,192,0.08)', color: '#7CF5C0', border: '1px solid rgba(124,245,192,0.18)' }}>Pump.fun</span>
            <span className="tb-badge" style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.18)' }}>Trending on X</span>
          </div>

          <h1 className="tb-h1">
            He Tattooed His Forehead for $2,400.<br />
            <em>Misspelled It. Got Nothing.</em><br />
            Then Crypto Twitter Made Him $15K.
          </h1>

          <p className="tb-lead">
            A man in India permanently tattooed "pump.fun" on his forehead to claim a bounty. He misspelled it. Got disqualified. The community found out — and the internet did what the internet does.
          </p>

          <div className="tb-meta">
            <span>📅 <span>June 7, 2026</span></span>
            <span>⏱ <span>5 min read</span></span>
            <span>🔥 <span>Trending on X</span></span>
          </div>

          <div className="tb-byline">
            <div className="tb-byline-avatar">🌐</div>
            <div>
              <div className="tb-byline-name">3alamiy Web3</div>
              <div className="tb-byline-sub">
                Tracking what actually matters in crypto —{' '}
                <Link href="/airdrops" style={{ color: '#7CF5C0', textDecoration: 'none' }}>125+ verified airdrop guides →</Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="tb-stats">
            <div className="tb-stat">
              <div className="tb-stat-val" style={{ color: '#f87171' }}>$2,400</div>
              <div className="tb-stat-lbl">Original Bounty</div>
            </div>
            <div className="tb-stat">
              <div className="tb-stat-val" style={{ color: '#f59e0b' }}>$250K</div>
              <div className="tb-stat-lbl">Community Coin Market Cap</div>
            </div>
            <div className="tb-stat">
              <div className="tb-stat-val" style={{ color: '#7CF5C0' }}>$15K</div>
              <div className="tb-stat-lbl">Fees He Actually Earned</div>
            </div>
          </div>

          {/* Section 1 */}
          <div className="tb-section">
            <h2 className="tb-h2">What Actually Happened</h2>
            <p className="tb-p">
              Pump.fun introduced a bounty feature that lets anyone post on-chain tasks with SOL rewards attached. The idea: pay people to do things that promote your coin — make a video, post on Twitter, go viral.
            </p>
            <p className="tb-p">
              Someone posted a bounty worth <strong>approximately $2,400</strong>. The task: tattoo "pump.fun" on your forehead. Permanently. On your face.
            </p>
            <p className="tb-p">
              A man in India took the bounty seriously. He sat in a chair. He let someone tattoo the brand across his forehead. He sent the proof. He waited for his $2,400.
            </p>
            <p className="tb-p">
              <strong>He misspelled it.</strong>
            </p>
            <p className="tb-p">
              The exact misspelling has been debated — but the bounty terms were clear. The tattoo had to be accurate. It wasn't. <em>He was disqualified.</em> No SOL. No $2,400. Just a permanent tattoo on his forehead.
            </p>
          </div>

          {/* Timeline */}
          <div className="tb-section">
            <h2 className="tb-h2">The Full Chain of Events</h2>
            <div className="tb-timeline">
              {[
                {
                  icon: '📋',
                  step: 'Step 1',
                  title: 'The bounty goes live on pump.fun',
                  body: 'A community bounty offering ~$2,400 in SOL is posted on pump.fun. The task: permanently tattoo "pump.fun" on your forehead and submit proof. Most people ignore it.',
                  color: '#818cf8',
                },
                {
                  icon: '🪡',
                  step: 'Step 2',
                  title: 'An Indian man takes the bounty',
                  body: "He doesn't think twice. $2,400 is real money. He books the appointment, sits in the chair, and gets the word tattooed across his forehead. Permanently. He submits the photo as proof.",
                  color: '#f59e0b',
                },
                {
                  icon: '❌',
                  step: 'Step 3',
                  title: 'Disqualified — misspelling',
                  body: 'The bounty is rejected. The tattoo has a misspelling. The exact terms required accurate text. He gets nothing. A permanent mark on his face, zero compensation, and a rejected submission.',
                  color: '#f87171',
                },
                {
                  icon: '🐦',
                  step: 'Step 4',
                  title: 'Crypto Twitter finds out',
                  body: 'The story spreads on X (Twitter). The combination — permanent tattoo, misspelling, zero pay — is the kind of thing that goes viral instantly in the crypto community. Tens of thousands of impressions within hours.',
                  color: '#7CF5C0',
                },
                {
                  icon: '🚀',
                  step: 'Step 5',
                  title: 'The community launches a coin',
                  body: 'Someone deploys a meme coin on pump.fun in his honor. The story itself becomes the narrative. Traders pile in. Volume explodes. The coin hits a $250,000 market cap.',
                  color: '#7CF5C0',
                },
                {
                  icon: '💰',
                  step: 'Step 6',
                  title: 'He earns $15K in creator fees',
                  body: 'Through pump.fun\'s creator fee mechanism, the trading volume on the coin generates approximately $15,000 in fees — more than 6x the original bounty he was disqualified from. He gets paid more for losing the bounty than he would have for winning it.',
                  color: '#7CF5C0',
                },
              ].map((item, i) => (
                <div key={i} className="tb-tl-item">
                  <div className="tb-tl-left">
                    <div className="tb-tl-icon">{item.icon}</div>
                    <div className="tb-tl-line" />
                  </div>
                  <div className="tb-tl-content">
                    <div className="tb-tl-step" style={{ color: item.color }}>{item.step}</div>
                    <div className="tb-tl-title">{item.title}</div>
                    <div className="tb-tl-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="tb-quote">
            <p className="tb-quote-text">
              "Fucking insane story. Indian guy tattooed his forehead for a $2,400 bounty just to not get anything bc he misspelled it. Community finds out and makes him a coin that goes to $250k market cap and he gets $15k in fees. Literally changing his life forever."
            </p>
            <div className="tb-quote-src">— Viral X post, June 2026</div>
          </div>

          {/* Section 2 */}
          <div className="tb-section">
            <h2 className="tb-h2">Why This Is a Bigger Deal Than It Looks</h2>
            <p className="tb-p">
              On the surface this is a funny story. Man does insane thing, fails, gets saved by internet. That's the tweet. But the mechanics underneath are genuinely new.
            </p>
            <p className="tb-p">
              <strong>Pump.fun's bounty feature created a viral loop that didn't exist before.</strong> The bounty created the stunt. The stunt created the story. The story created the coin. The coin generated real money for the person at the center of it — not because he succeeded, but because he failed spectacularly enough for the internet to care.
            </p>
            <p className="tb-p">
              This is on-chain attention economics working exactly the way people have theorized but rarely seen in practice. A real human being had their financial outcome determined by a combination of pump.fun's infrastructure, crypto Twitter's attention, and meme coin mechanics — all within 24–48 hours of a single failed tattoo.
            </p>
            <p className="tb-p">
              <em>The bounty he missed paid him 6x more than it would have if he'd won it.</em>
            </p>
          </div>

          {/* Highlight */}
          <div className="tb-highlight">
            <div className="tb-highlight-title">💡 The Pump.fun Bounty Mechanic</div>
            <div className="tb-highlight-body">
              Pump.fun's bounty system lets anyone post on-chain tasks attached to SOL rewards. Token creators use it to generate real-world marketing — stunts, content, social proof. <strong>The key is that the stunt itself becomes content</strong>, which drives awareness, which drives coin creation, which drives fees back to creators. It's a closed loop that turns human behavior into on-chain value.
            </div>
          </div>

          {/* Section 3 */}
          <div className="tb-section">
            <h2 className="tb-h2">What This Means for Crypto Adoption</h2>
            <p className="tb-p">
              The argument being made on CT is that pump.fun's bounty feature could be one of the mechanisms that pulls normies back into crypto. Not because it's educational. Not because of DeFi yields. But because it creates stories like this one.
            </p>
            <p className="tb-p">
              <strong>Normal people understand a story about a guy who tattooed his face for money and got saved by the internet.</strong> That's a human story with a beginning, a crisis, and a resolution — and the resolution involved on-chain coins and creator fees.
            </p>
            <p className="tb-p">
              Every person who shares that story is one step closer to asking: "Wait, how does pump.fun work?" That's the onboarding loop. Not whitepapers. Not yield farming tutorials. A guy with a misspelled tattoo on his forehead.
            </p>
            <p className="tb-p">
              It's also a preview of what on-chain attention markets look like when they mature. Real stakes. Real outcomes. Transparent mechanics. Immediate settlement. This isn't an isolated story — it's a pattern that will repeat.
            </p>
          </div>

          {/* Warning */}
          <div className="tb-warning">
            <div className="tb-warning-title">⚠️ Before You Do Anything Stupid</div>
            <div className="tb-warning-body">
              This story had a happy ending. Most bounty attempts don't go viral, don't get a coin launched, and don't generate $15K in fees. The man has a permanent tattoo on his face. The $15K is real — the tattoo is also real, and it's forever. Do not let meme coins inspire permanent body modifications. The expected value of "go viral and get a coin" is much lower than it looks after seeing one success story.
            </div>
          </div>

          {/* Section 4 */}
          <div className="tb-section">
            <h2 className="tb-h2">The Bigger Picture: Bounties as Onboarding</h2>
            <p className="tb-p">
              Pump.fun has built a machine that turns attention into liquidity. The bounty feature is a specific lever within that machine — one that creates incentive structures around real-world action, not just on-chain behavior.
            </p>
            <p className="tb-p">
              If this feature scales, you'll see more stories like this. Some will be organic and genuine. Some will be manufactured. The line between the two will blur fast. That's both the promise and the risk of on-chain attention markets.
            </p>
            <p className="tb-p">
              <strong>For now, the man has $15,000 he didn't have before, a tattoo on his forehead, and a story that will probably follow him forever.</strong> In a weird way, that's the most crypto outcome possible — permanent, transparent, and completely insane.
            </p>
          </div>

          {/* FAQ */}
          <div className="tb-section">
            <h2 className="tb-h2">Frequently Asked Questions</h2>
            <div className="tb-faq">
              {[
                {
                  q: "What is the pump.fun tattoo bounty story?",
                  a: "An Indian man accepted a pump.fun community bounty worth approximately $2,400 to tattoo 'pump.fun' on his forehead. He completed the tattoo but misspelled the text, which disqualified him from receiving the bounty. Crypto Twitter discovered the story, launched a meme coin in his name that reached a $250,000 market cap, and he earned approximately $15,000 in creator fees — far more than the original bounty.",
                },
                {
                  q: "How did he earn $15,000 if he didn't get the bounty?",
                  a: "After the story went viral on X, the community launched a meme coin in his honor. Pump.fun's creator fee mechanism means trading volume generates fees. With $250K market cap and heavy trading, those fees added up to ~$15,000 — 6x more than the original $2,400 he missed out on.",
                },
                {
                  q: "What is pump.fun's bounty feature?",
                  a: "Pump.fun's bounty feature lets token creators post on-chain tasks with SOL rewards. Anyone can complete the task — creating content, promoting a token, or real-world stunts — and claim the reward. It's designed to generate organic marketing and community engagement.",
                },
                {
                  q: "Will this bring new users into crypto?",
                  a: "Analysts believe so. Stories like this translate complex on-chain mechanics into simple human narratives — something normal people can understand and share. The pump.fun bounty loop (real-world action → viral story → meme coin → fees) is the kind of cycle that creates genuine mainstream curiosity about crypto.",
                },
              ].map((item, i) => (
                <div key={i} className="tb-faq-item">
                  <div className="tb-faq-q">
                    <div className="tb-faq-icon">Q</div>
                    {item.q}
                  </div>
                  <div className="tb-faq-a">{item.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="tb-cta">
            <div className="tb-cta-h">Track the Next Viral Airdrop</div>
            <div className="tb-cta-sub">
              Stories like this start on-chain. We track 125+ airdrop opportunities —<br />
              get alerts before they hit Crypto Twitter.
            </div>
            <div className="tb-cta-btns">
              <Link href="/airdrops" className="tb-btn-primary">
                Browse Airdrops →
              </Link>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="tb-btn-sec">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                Join Telegram
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
