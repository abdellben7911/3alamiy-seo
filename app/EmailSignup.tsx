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
    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '28px', marginBottom: '8px' }}>🎉</div>
      <div style={{ fontSize: '16px', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>You're in!</div>
      <div style={{ fontSize: '13px', color: '#71717a' }}>Check your inbox for daily airdrop alerts.</div>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '8px', maxWidth: '480px', margin: '0 auto' }}>
      <input
        type="email"
        placeholder="Enter your email address..."
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        style={{ flex: 1, background: '#0d1117', border: '1px solid #1a1f2e', color: '#fff', padding: '14px 18px', borderRadius: '12px', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
      />
      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', border: 'none', padding: '14px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 800, cursor: status === 'loading' ? 'not-allowed' : 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(99,102,241,0.3)', opacity: status === 'loading' ? 0.7 : 1 }}
      >
        {status === 'loading' ? '⏳' : '🚀 Get Alerts'}
      </button>
    </div>
  );
}
