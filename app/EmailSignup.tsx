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
    <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '16px', padding: '28px 32px', textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}>
      <div style={{ width: '44px', height: '44px', background: 'rgba(16,185,129,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#10b981', fontSize: '20px', fontWeight: 900 }}>✓</div>
      <div style={{ fontSize: '18px', fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>You're in!</div>
      <div style={{ fontSize: '13px', color: '#71717a' }}>Daily airdrop alerts on their way to your inbox.</div>
    </div>
  );

  return (
    <div>
      {/* Input row */}
      <div style={{ display: 'flex', gap: '8px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '14px', padding: '6px 6px 6px 18px', maxWidth: '480px', margin: '0 auto 16px' }}>
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
          style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', border: 'none', padding: '12px 22px', borderRadius: '10px', fontSize: '14px', fontWeight: 800, cursor: status === 'loading' ? 'not-allowed' : 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(99,102,241,0.3)', opacity: status === 'loading' ? 0.7 : 1, flexShrink: 0 }}
        >
          {status === 'loading' ? 'Joining...' : 'Get Alerts →'}
        </button>
      </div>

      {/* Error */}
      {status === 'error' && (
        <p style={{ fontSize: '13px', color: '#f43f5e', textAlign: 'center', margin: '0 0 8px' }}>Something went wrong. Please try again.</p>
      )}

      {/* Social proof */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {[
          { icon: '👥', text: 'Join 500+ Web3 farmers' },
          { icon: '🔒', text: 'No spam, ever' },
          { icon: '↩', text: 'Unsubscribe anytime' },
        ].map(({ icon, text }) => (
          <span key={text} style={{ fontSize: '12px', color: '#3f3f46', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>{icon}</span>{text}
          </span>
        ))}
      </div>
    </div>
  );
}
