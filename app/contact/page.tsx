import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — 3alamiy Web3',
  description: 'Get in touch with the 3alamiy Web3 team. Report an airdrop, suggest a project, or ask a question.',
  alternates: { canonical: 'https://www.3alamiyweb3.com/contact' },
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C14', color: '#fff', fontFamily: "var(--font-space), 'Space Grotesk', system-ui, sans-serif" }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '72px 24px 80px' }}>

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
