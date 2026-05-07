'use client';

import { useState } from 'react';

export default function ParticipationGuide({ steps, airdropName }: { steps: string[]; airdropName: string }) {
  const [checked, setChecked] = useState<boolean[]>(steps.map(() => false));

  const toggle = (idx: number) => {
    setChecked(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  const completedCount = checked.filter(Boolean).length;
  const progressPercent = steps.length > 0 ? (completedCount / steps.length) * 100 : 0;
  const allDone = completedCount === steps.length;

  return (
    <section id="guide" style={{ marginBottom: '24px', background: '#0d1117', border: '1px solid #18181b', borderRadius: '20px', padding: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: allDone ? 'rgba(16,185,129,0.15)' : 'rgba(99,102,241,0.15)',
            border: `1px solid ${allDone ? 'rgba(16,185,129,0.3)' : 'rgba(99,102,241,0.3)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px',
            transition: 'all 0.3s'
          }}>
            {allDone ? '✓' : '📋'}
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: 0, letterSpacing: '-0.01em' }}>Participation Guide</h2>
            <p style={{ fontSize: '12px', fontWeight: '700', color: allDone ? '#10b981' : '#6366f1', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.3s' }}>
              Step {completedCount} of {steps.length} {allDone ? 'finished' : 'completed'}
            </p>
          </div>
        </div>
        {/* Progress bar */}
        <div style={{ width: '120px', height: '6px', background: '#18181b', borderRadius: '99px', overflow: 'hidden', flexShrink: 0 }}>
          <div style={{
            width: `${progressPercent}%`, height: '100%',
            background: 'linear-gradient(90deg, #10b981, #34d399)',
            borderRadius: '99px', transition: 'width 0.4s ease'
          }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        {steps.map((step: string, idx: number) => {
          const done = checked[idx];
          return (
            <div
              key={idx}
              onClick={() => toggle(idx)}
              style={{
                display: 'flex', gap: '16px', padding: '18px 20px',
                borderRadius: '14px',
                border: `1px solid ${done ? 'rgba(16,185,129,0.2)' : '#1f2937'}`,
                background: done ? 'rgba(16,185,129,0.05)' : '#111827',
                alignItems: 'center', cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {/* Checkmark circle */}
              <div style={{
                width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                background: done ? 'rgba(16,185,129,0.15)' : '#18181b',
                border: `2px solid ${done ? '#10b981' : '#374151'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.25s ease',
              }}>
                {done ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#6366f1' }}>{idx + 1}</span>
                )}
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '15px', fontWeight: '700', margin: '0 0 4px', lineHeight: 1.4,
                  color: done ? '#6b7280' : '#fff',
                  textDecoration: done ? 'line-through' : 'none',
                  textDecorationColor: '#374151',
                  transition: 'all 0.25s ease',
                }}>{step}</h3>
                <p style={{ fontSize: '12px', color: done ? '#374151' : '#52525b', margin: 0, transition: 'color 0.25s' }}>
                  Why it matters: Crucial interaction for snapshot eligibility and wallet ranking.
                </p>
              </div>

              {/* Arrow */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke={done ? '#10b981' : '#4b5563'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          );
        })}
      </div>

      {/* All done message */}
      {allDone && (
        <div style={{
          marginTop: '16px', padding: '14px 18px', borderRadius: '12px',
          background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
          display: 'flex', alignItems: 'center', gap: '10px'
        }}>
          <span style={{ fontSize: '20px' }}>🎉</span>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#10b981' }}>
            All steps completed! You're eligible for the {airdropName} airdrop snapshot.
          </p>
        </div>
      )}
    </section>
  );
}
