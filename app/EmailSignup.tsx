'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    try {
      const res = await fetch('https://aahxneihytiogjvcznir.supabase.co/rest/v1/newsletter_subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok && res.status !== 201) throw new Error('Failed');
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
      <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '6px', maxWidth: '520px', margin: '0 auto 12px', backdropFilter: 'blur(8px)', boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '16px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', fontSize: '14px', outline: 'none', fontFamily: 'inherit', minWidth: 0 }}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          style={{ background: 'linear-gradient(135deg, #7CF5C0, #4ade80)', color: '#060A12', border: 'none', padding: '13px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 800, cursor: status === 'loading' ? 'not-allowed' : 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(124,245,192,0.35)', opacity: status === 'loading' ? 0.7 : 1, flexShrink: 0, letterSpacing: '-0.01em', transition: 'transform 0.15s, box-shadow 0.15s' }}
        >
          {status === 'loading' ? 'Joining...' : 'Get Early Access →'}
        </button>
      </div>

      {/* Error */}
      {status === 'error' && (
        <p style={{ fontSize: '13px', color: '#f43f5e', textAlign: 'center', margin: '0 0 8px' }}>Something went wrong. Please try again.</p>
      )}

      {/* Trust line */}
      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', textAlign: 'center', margin: 0 }}>
        Free forever · No spam · Unsubscribe anytime
      </p>
    </div>
  );
}
