'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    try {
      await fetch('https://aahxneihytiogjvcznir.supabase.co/rest/v1/newsletter_subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email, subscribed_at: new Date().toISOString() }),
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') return (
    <section style={{ padding: '80px 24px', background: '#060910', borderTop: '1px solid #1a1f2e', textAlign: 'center' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '20px', padding: '40px 32px' }}>
        <div style={{ width: '52px', height: '52px', background: 'rgba(16,185,129,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '24px' }}>✓</div>
        <div style={{ fontSize: '20px', fontWeight: 800, color: '#10b981', marginBottom: '8px' }}>You're in!</div>
        <div style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.6 }}>You'll get daily airdrop alerts straight to your inbox.<br />No spam. Unsubscribe anytime.</div>
      </div>
    </section>
  );

  return (
    <section style={{ padding: '80px 24px', background: '#060910', borderTop: '1px solid #1a1f2e', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '300px', background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '5px 14px', borderRadius: '99px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
          Free Daily Alerts
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Never Miss a New Airdrop
        </h2>
        <p style={{ fontSize: '15px', color: '#71717a', margin: '0 0 32px', lineHeight: 1.7 }}>
          Get the best new airdrops delivered to your inbox every day.<br />Free, no spam.
        </p>

        {/* Input row */}
        <div style={{ display: 'flex', gap: '8px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '14px', padding: '6px 6px 6px 18px', maxWidth: '480px', margin: '0 auto 20px' }}>
          <input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', fontSize: '14px', outline: 'none', fontFamily: 'inherit', minWidth: 0 }}
          />
          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', border: 'none', padding: '12px 22px', borderRadius: '10px', fontSize: '14px', fontWeight: 800, cursor: status === 'loading' ? 'not-allowed' : 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(99,102,241,0.3)', opacity: status === 'loading' ? 0.7 : 1, transition: 'opacity 0.2s, transform 0.1s', flexShrink: 0 }}
          >
            {status === 'loading' ? 'Joining...' : 'Get Alerts →'}
          </button>
        </div>

        {/* Error */}
        {status === 'error' && (
          <p style={{ fontSize: '13px', color: '#f43f5e', margin: '0 0 12px' }}>Something went wrong. Please try again.</p>
        )}

        {/* Social proof */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {[
            { icon: '👥', text: 'Join 500+ Web3 farmers' },
            { icon: '🔒', text: 'No spam, ever' },
            { icon: '↩', text: 'Unsubscribe anytime' },
          ].map(({ icon, text }) => (
            <span key={text} style={{ fontSize: '12px', color: '#52525b', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>{icon}</span>{text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
