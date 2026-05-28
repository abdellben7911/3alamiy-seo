import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — 3alamiy Web3',
  description: 'Get in touch with the 3alamiy Web3 team. Report an airdrop, suggest a project, or ask a question.',
  alternates: { canonical: 'https://www.3alamiyweb3.com/contact' },
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C14', color: '#fff', fontFamily: "var(--font-space), 'Space Grotesk', system-ui, sans-serif" }}>
      <style>{`
        .ct-wrap { max-width:600px; margin:0 auto; padding:56px 16px 80px; }
        .ct-header { margin-bottom:36px; }
        .ct-eyebrow { font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em; color:#7CF5C0; margin-bottom:10px; display:block; }
        .ct-title { font-size:clamp(28px,7vw,42px); font-weight:700; letter-spacing:-0.03em; color:#fff; margin:0 0 10px; line-height:1.1; }
        .ct-sub { font-size:14px; color:rgba(255,255,255,0.38); line-height:1.7; margin:0; }

        /* Cards */
        .ct-cards { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:28px; }
        .ct-card { border-radius:16px; padding:20px; text-decoration:none; color:#fff; display:flex; flex-direction:column; gap:14px; transition:transform 0.15s,border-color 0.15s; -webkit-tap-highlight-color:transparent; }
        .ct-card:active { transform:scale(0.97); }
        .ct-card-tg { background:#0D1525; border:1px solid rgba(124,245,192,0.12); }
        .ct-card-em { background:#0D1A14; border:1px solid rgba(124,245,192,0.12); }
        .ct-card-icon { width:38px; height:38px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ct-card-name { font-size:14px; font-weight:700; color:#fff; margin:0 0 3px; }
        .ct-card-desc { font-size:11px; color:rgba(255,255,255,0.32); line-height:1.5; margin:0; }
        .ct-card-link { font-size:11px; font-weight:700; display:flex; align-items:center; gap:4px; margin-top:auto; }

        /* Topics */
        .ct-box { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:20px; margin-bottom:24px; }
        .ct-box-label { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,0.22); margin-bottom:14px; }
        .ct-topic { display:flex; gap:12px; padding:11px 0; border-bottom:1px solid rgba(255,255,255,0.04); align-items:flex-start; }
        .ct-topic:last-child { border-bottom:none; padding-bottom:0; }
        .ct-topic-icon { width:32px; height:32px; border-radius:8px; background:rgba(124,245,192,0.06); border:1px solid rgba(124,245,192,0.12); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ct-topic-title { font-size:13px; font-weight:600; color:#fff; margin:0 0 3px; }
        .ct-topic-desc { font-size:12px; color:rgba(255,255,255,0.32); line-height:1.55; margin:0; }

        /* Footer note */
        .ct-note { background:rgba(124,245,192,0.03); border:1px solid rgba(124,245,192,0.08); border-radius:12px; padding:16px; }
        .ct-note p { font-size:12px; color:rgba(255,255,255,0.28); line-height:1.75; margin:0; }
        .ct-note strong { color:rgba(255,255,255,0.5); }

        @media (max-width:400px) {
          .ct-cards { grid-template-columns:1fr; }
          .ct-wrap { padding:40px 14px 72px; }
        }
      `}</style>

      <div className="ct-wrap">

        {/* Header */}
        <div className="ct-header">
          <span className="ct-eyebrow">Get in Touch</span>
          <h1 className="ct-title">Contact Us</h1>
          <p className="ct-sub">Have a question, found a scam airdrop, or want to list your project? We read every message.</p>
        </div>

        {/* Contact cards */}
        <div className="ct-cards">
          <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="ct-card ct-card-tg">
            <div className="ct-card-icon" style={{ background:'rgba(124,245,192,0.08)', border:'1px solid rgba(124,245,192,0.18)' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#7CF5C0"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
            </div>
            <div>
              <div className="ct-card-name">Telegram</div>
              <div className="ct-card-desc">Fastest response · usually same day</div>
            </div>
            <div className="ct-card-link" style={{ color:'#7CF5C0' }}>
              t.me/web33alamiy
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </a>

          <a href="mailto:contact@3alamiyweb3.com" className="ct-card ct-card-em">
            <div className="ct-card-icon" style={{ background:'rgba(124,245,192,0.06)', border:'1px solid rgba(124,245,192,0.14)' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div className="ct-card-name">Email</div>
              <div className="ct-card-desc">Partnerships and serious inquiries</div>
            </div>
            <div className="ct-card-link" style={{ color:'#7CF5C0' }}>
              contact@3alamiyweb3.com
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </a>
        </div>

        {/* Topics */}
        <div className="ct-box">
          <div className="ct-box-label">What we can help with</div>
          {[
            {
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
              title: 'List Your Project',
              desc: 'Want your airdrop featured on 3alamiy? Ping us on Telegram.',
            },
            {
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
              title: 'Report a Scam',
              desc: 'Found a suspicious airdrop on our tracker? Let us know immediately.',
            },
            {
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
              title: 'Content Suggestion',
              desc: "Know an airdrop we haven't covered? Send us the details.",
            },
            {
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              title: 'Partnership',
              desc: 'Interested in collaborating? Email is best for business inquiries.',
            },
            {
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
              title: 'Bug Report',
              desc: "Something broken on the site? Tell us and we'll fix it fast.",
            },
          ].map((item) => (
            <div key={item.title} className="ct-topic">
              <div className="ct-topic-icon">{item.icon}</div>
              <div>
                <div className="ct-topic-title">{item.title}</div>
                <div className="ct-topic-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="ct-note">
          <p><strong>3alamiy Web3</strong> is a free crypto airdrop tracker. We are not affiliated with any projects listed on our platform. All guides are independently researched and written.</p>
        </div>

      </div>
    </main>
  );
}

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7CF5C0', marginBottom: '12px', display: 'block' }}>
            Get in Touch
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-0.035em', color: '#fff', margin: '0 0 14px', lineHeight: 1.1 }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
            Have a question, found a scam airdrop, or want to list your project? We read every message.
          </p>
        </div>

        {/* Contact Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '40px' }}>

          {/* Telegram */}
          <a
            href="https://t.me/web33alamiy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg, #0D1A2B, #080C14)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '18px', padding: '24px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'border-color 0.15s', cursor: 'pointer' }}
          >
            <div style={{ width: '40px', height: '40px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#818cf8"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>Telegram</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Fastest response · usually same day</div>
            </div>
            <div style={{ fontSize: '12px', color: '#818cf8', fontWeight: 700 }}>t.me/web33alamiy →</div>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@3alamiyweb3.com"
            style={{ background: 'linear-gradient(135deg, #0D1A14, #080C14)', border: '1px solid rgba(124,245,192,0.15)', borderRadius: '18px', padding: '24px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', gap: '12px', cursor: 'pointer' }}
          >
            <div style={{ width: '40px', height: '40px', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.18)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>Email</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>For serious inquiries and partnerships</div>
            </div>
            <div style={{ fontSize: '12px', color: '#7CF5C0', fontWeight: 700 }}>contact@3alamiyweb3.com →</div>
          </a>

        </div>

        {/* Topics */}
        <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '18px', padding: '28px', marginBottom: '32px' }}>
          <div style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', marginBottom: '18px' }}>
            What we can help with
          </div>
          {[
            { icon: '🚀', title: 'List Your Project', desc: 'Want your airdrop featured on 3alamiy? Ping us on Telegram.' },
            { icon: '⚠️', title: 'Report a Scam', desc: 'Found a suspicious airdrop on our tracker? Let us know immediately.' },
            { icon: '📝', title: 'Content Suggestion', desc: 'Know an airdrop we haven\'t covered? Send us the details.' },
            { icon: '🤝', title: 'Partnership', desc: 'Interested in collaborating? Email is best for business inquiries.' },
            { icon: '🐛', title: 'Bug Report', desc: 'Something broken on the site? Tell us and we\'ll fix it fast.' },
          ].map((item) => (
            <div key={item.title} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '3px' }}>{item.title}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* About section for AdSense */}
        <div style={{ background: 'rgba(124,245,192,0.03)', border: '1px solid rgba(124,245,192,0.1)', borderRadius: '14px', padding: '22px' }}>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.8 }}>
            <strong style={{ color: 'rgba(255,255,255,0.6)' }}>3alamiy Web3</strong> is a free crypto airdrop tracker. We are not affiliated with any of the projects listed on our platform. All guides are independently researched and written.
          </div>
        </div>

      </div>
    </main>
  );
}
