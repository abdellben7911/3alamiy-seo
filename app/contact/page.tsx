import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - 3alamiy Web3',
  description: 'Get in touch with the 3alamiy Web3 team. Report an airdrop, suggest a project, or ask a question.',
  alternates: { canonical: 'https://www.3alamiyweb3.com/contact' },
};

const topics = [
  {
    color: '#7CF5C0',
    title: 'List Your Project',
    desc: 'Want your airdrop featured on 3alamiy? Ping us on Telegram.',
  },
  {
    color: '#f87171',
    title: 'Report a Scam',
    desc: 'Found a suspicious airdrop on our tracker? Let us know immediately.',
  },
  {
    color: '#7CF5C0',
    title: 'Content Suggestion',
    desc: "Know an airdrop we haven't covered? Send us the details.",
  },
  {
    color: '#818cf8',
    title: 'Partnership',
    desc: 'Interested in collaborating? Email is best for business inquiries.',
  },
  {
    color: '#f59e0b',
    title: 'Bug Report',
    desc: "Something broken on the site? Tell us and we'll fix it fast.",
  },
];

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C14', color: '#fff', fontFamily: "var(--font-space), 'Space Grotesk', system-ui, sans-serif" }}>
      <style>{`
        .ct-wrap { max-width:600px; margin:0 auto; padding:56px 16px 80px; }
        .ct-eyebrow { font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em; color:#7CF5C0; margin-bottom:10px; display:block; }
        .ct-title { font-size:clamp(28px,7vw,42px); font-weight:700; letter-spacing:-0.03em; color:#fff; margin:0 0 10px; line-height:1.1; }
        .ct-sub { font-size:14px; color:rgba(255,255,255,0.38); line-height:1.7; margin:0 0 36px; }
        .ct-cards { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:28px; }
        .ct-card { border-radius:16px; padding:20px; text-decoration:none; color:#fff; display:flex; flex-direction:column; gap:14px; transition:transform 0.15s; -webkit-tap-highlight-color:transparent; }
        .ct-card:active { transform:scale(0.97); }
        .ct-card-tg { background:#0D1525; border:1px solid rgba(124,245,192,0.12); }
        .ct-card-em { background:#0D1A14; border:1px solid rgba(124,245,192,0.12); }
        .ct-icon { width:38px; height:38px; border-radius:10px; display:flex; align-items:center; justify-content:center; }
        .ct-card-name { font-size:14px; font-weight:700; color:#fff; margin:0 0 3px; }
        .ct-card-desc { font-size:11px; color:rgba(255,255,255,0.32); line-height:1.5; margin:0; }
        .ct-card-link { font-size:11px; font-weight:700; color:#7CF5C0; margin-top:auto; }
        .ct-box { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:20px; margin-bottom:24px; }
        .ct-box-label { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,0.22); margin-bottom:14px; }
        .ct-topic { display:flex; gap:12px; padding:11px 0; border-bottom:1px solid rgba(255,255,255,0.04); align-items:flex-start; }
        .ct-topic:last-child { border-bottom:none; padding-bottom:0; }
        .ct-topic-dot { width:6px; height:6px; border-radius:50%; margin-top:6px; flex-shrink:0; }
        .ct-topic-title { font-size:13px; font-weight:600; color:#fff; margin:0 0 3px; }
        .ct-topic-desc { font-size:12px; color:rgba(255,255,255,0.32); line-height:1.55; margin:0; }
        .ct-note { background:rgba(124,245,192,0.03); border:1px solid rgba(124,245,192,0.08); border-radius:12px; padding:16px; }
        .ct-note p { font-size:12px; color:rgba(255,255,255,0.28); line-height:1.75; margin:0; }
        .ct-note strong { color:rgba(255,255,255,0.5); }
        @media (max-width:400px) {
          .ct-cards { grid-template-columns:1fr; }
          .ct-wrap { padding:40px 14px 72px; }
        }
      `}</style>

      <div className="ct-wrap">

        <span className="ct-eyebrow">Get in Touch</span>
        <h1 className="ct-title">Contact Us</h1>
        <p className="ct-sub">Have a question, found a scam airdrop, or want to list your project? We read every message.</p>

        <div className="ct-cards">
          <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="ct-card ct-card-tg">
            <div className="ct-icon" style={{ background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.18)' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#7CF5C0">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
              </svg>
            </div>
            <div>
              <div className="ct-card-name">Telegram</div>
              <div className="ct-card-desc">Fastest response, usually same day</div>
            </div>
            <div className="ct-card-link">t.me/web33alamiy</div>
          </a>

          <a href="mailto:contact@3alamiyweb3.com" className="ct-card ct-card-em">
            <div className="ct-icon" style={{ background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.14)' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <div className="ct-card-name">Email</div>
              <div className="ct-card-desc">Partnerships and serious inquiries</div>
            </div>
            <div className="ct-card-link">contact@3alamiyweb3.com</div>
          </a>
        </div>

        <div className="ct-box">
          <div className="ct-box-label">What we can help with</div>
          {topics.map((item) => (
            <div key={item.title} className="ct-topic">
              <div className="ct-topic-dot" style={{ background: item.color }} />
              <div>
                <div className="ct-topic-title">{item.title}</div>
                <div className="ct-topic-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="ct-note">
          <p><strong>3alamiy Web3</strong> is a free crypto airdrop tracker. We are not affiliated with any projects listed on our platform. All guides are independently researched and written.</p>
        </div>

      </div>
    </main>
  );
}
