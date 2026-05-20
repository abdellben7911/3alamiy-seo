'use client';

import { useState } from 'react';

// Generate a unique, meaningful description for each step based on its content
function getStepDescription(step: string, idx: number): string {
  const s = step.toLowerCase();

  if (s.includes('wallet') && (s.includes('connect') || s.includes('install')))
    return 'Linking your wallet establishes your on-chain identity for the snapshot.';
  if (s.includes('create') && s.includes('wallet'))
    return 'A dedicated farming wallet keeps your main funds safe and tracks activity cleanly.';
  if (s.includes('email') && s.includes('sign') || s.includes('register') || s.includes('sign up'))
    return 'Account creation is required to link your activity to the airdrop snapshot.';
  if (s.includes('email') && s.includes('verify'))
    return 'Verification confirms your account is legitimate and eligible for rewards.';
  if (s.includes('email') && s.includes('submit') || s.includes('enter') && s.includes('email'))
    return 'Your email ties your identity to your airdrop eligibility record.';
  if (s.includes('discord') && s.includes('join'))
    return 'Discord membership is often tracked as a community signal for airdrop eligibility.';
  if (s.includes('twitter') || s.includes('follow') && s.includes('x'))
    return 'Social follows signal genuine community engagement, which projects track for allocation scoring.';
  if (s.includes('referral') || s.includes('invite') || s.includes('refer'))
    return 'Referrals multiply your points and can significantly boost your tier allocation.';
  if (s.includes('quest') || s.includes('task') || s.includes('mission'))
    return 'Completing quests increases your activity score and eligibility multiplier.';
  if (s.includes('swap') || s.includes('trade') || s.includes('exchange'))
    return 'Trading volume is one of the strongest signals projects use to determine reward size.';
  if (s.includes('bridge'))
    return 'Cross-chain activity demonstrates genuine protocol engagement across ecosystems.';
  if (s.includes('stake') || s.includes('lock'))
    return 'Staking signals long-term commitment, which projects reward with higher allocations.';
  if (s.includes('liquidity') || s.includes('pool') || s.includes('lp'))
    return 'Providing liquidity is heavily weighted — it directly supports the protocol economy.';
  if (s.includes('check') && s.includes('in') || s.includes('daily') && s.includes('check'))
    return 'Daily check-ins build a streak multiplier that compounds your points over time.';
  if (s.includes('testnet'))
    return 'Testnet activity proves early adopter status — projects snapshot this for mainnet rewards.';
  if (s.includes('nft') || s.includes('mint'))
    return 'NFT interactions are tracked as on-chain proof of early community membership.';
  if (s.includes('points') || s.includes('claim'))
    return 'Claiming points locks in your current allocation — do this regularly.';
  if (s.includes('deploy') || s.includes('contract'))
    return 'Contract deployment signals advanced usage, which earns higher allocation tiers.';
  if (s.includes('vote') || s.includes('governance'))
    return 'Governance participation is a strong eligibility signal for DAO-style airdrops.';
  if (s.includes('faucet'))
    return 'Claiming testnet tokens is required to fund your test transactions — always free.';
  if (s.includes('screenshot') || s.includes('submit'))
    return 'Proof of completion is required for manual verification tasks.';
  if (s.includes('profile') || s.includes('username'))
    return 'Completing your profile links your social identity to your on-chain activity.';
  if (s.includes('open') || s.includes('visit') || s.includes('go to'))
    return 'First interaction establishes your wallet as an early participant in the protocol.';
  if (s.includes('download') || s.includes('install') || s.includes('extension'))
    return 'Installing the app or extension starts tracking your contribution activity.';
  if (s.includes('deposit') || s.includes('fund'))
    return 'Depositing capital demonstrates active usage and increases your reward tier.';
  if (s.includes('interact') || s.includes('use') || s.includes('activity'))
    return 'Regular interaction builds a verified usage history that survives sybil filtering.';
  if (s.includes('waitlist'))
    return 'Early waitlist position gives you priority access and higher allocation potential.';
  if (s.includes('monitor') || s.includes('follow') && s.includes('update'))
    return 'Staying updated ensures you don\'t miss critical deadlines or new earning opportunities.';
  if (s.includes('complete') || s.includes('finish'))
    return 'Finishing all requirements maximizes your eligibility score before snapshot.';

  // Fallback based on step index
  const fallbacks = [
    'This first step establishes you as an early participant in the protocol.',
    'Completing this step is required to unlock further participation.',
    'This action directly contributes to your eligibility score.',
    'Projects track this interaction to verify genuine user activity.',
    'Consistent completion of this step increases your allocation tier.',
    'This step demonstrates active engagement with the protocol.',
    'Completing this builds on-chain history that survives snapshot filtering.',
    'This interaction is weighted in the project\'s airdrop allocation formula.',
  ];
  return fallbacks[idx % fallbacks.length];
}

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
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: 0, letterSpacing: '-0.01em' }}>
              How to Participate in {airdropName} Airdrop?
            </h2>
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
          const description = getStepDescription(step, idx);
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
                  {description}
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
