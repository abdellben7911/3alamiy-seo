'use client';

import { useState } from 'react';

// Generate a unique, meaningful description for each step based on its content
function getStepDescription(step: string, idx: number): string {
  const s = step.toLowerCase();

  // Extract domain from visit/go-to steps and use it in the description
  const urlMatch = step.match(/(?:visit|go to|open)\s+([\w.-]+\.[a-z]{2,})/i);
  if (urlMatch) {
    return `Opening ${urlMatch[1]} is your first on-chain touchpoint — projects snapshot early visitors for priority allocation.`;
  }

  if (s.includes('wallet') && (s.includes('connect') || s.includes('link')))
    return 'Linking your wallet ties your on-chain identity to the snapshot — use the same wallet every session.';
  if (s.includes('create') && s.includes('wallet'))
    return 'A dedicated farming wallet keeps your main funds safe and creates a clean, traceable activity history.';
  if ((s.includes('sign') && s.includes('up')) || (s.includes('create') && s.includes('account')))
    return 'Account creation links your identity to the eligibility record — required before any further steps count.';
  if (s.includes('register'))
    return 'Registration ties your wallet address to your account identity in the project\'s airdrop database.';
  if (s.includes('verify') && s.includes('email'))
    return 'Email verification confirms your account is legitimate and prevents your allocation from being flagged as a sybil.';
  if (s.includes('verify') && (s.includes('twitter') || s.includes('x account')))
    return 'Linking your X account creates a social proof layer that protects your allocation from sybil filters.';
  if (s.includes('verify') && s.includes('discord'))
    return 'Discord verification ties your on-chain wallet to a real social identity — required for most role-based rewards.';
  if (s.includes('discord') && (s.includes('join') || s.includes('server')))
    return 'Discord membership is a tracked eligibility signal — projects snapshot active server members before the airdrop launches.';
  if (s.includes('discord') && (s.includes('react') || s.includes('channel') || s.includes('rules')))
    return 'Channel reactions and role steps build your Discord reputation score, which feeds directly into allocation tiers.';
  if (s.includes('discord') && s.includes('role'))
    return 'Claiming Discord roles flags you as an engaged community member — a high-weight signal in community airdrop formulas.';
  if (s.includes('ama') || (s.includes('event') && (s.includes('attend') || s.includes('particip'))))
    return 'Attending AMAs and live events earns OG-tier status — one of the highest-weight signals in community scoring.';
  if (s.includes('help') && s.includes('communit'))
    return 'Organic community contributions are hard to fake and earn top allocation tiers that scripted activity never reaches.';
  if (s.includes('xp') || s.includes('level up') || s.includes('rank'))
    return 'Higher XP and rank unlock larger allocation multipliers — each tier jump meaningfully increases your reward estimate.';
  if (s.includes('stay active') || (s.includes('active') && s.includes('discussion')))
    return 'Sustained weekly presence is a stronger eligibility signal than short activity bursts — history depth matters.';
  if (s.includes('twitter') || (s.includes('follow') && (s.includes(' x ') || s.includes('tweet'))))
    return 'Twitter follows and engagement signal genuine community interest — projects weight this in social airdrop scoring.';
  if (s.includes('referral') || s.includes('invite') || s.includes('refer'))
    return 'Each activated referral multiplies your allocation — referral tiers compound significantly at higher counts.';
  if (s.includes('quest') || s.includes('mission') || s.includes('campaign'))
    return 'Completed quests stack your on-chain activity score and push you toward higher reward tiers.';
  if (s.includes('spot') && s.includes('market'))
    return 'Spot trading builds verifiable volume history — aim for consistent weekly sessions over a single large trade.';
  if (s.includes('perpetual') || s.includes('perp') || s.includes('futures'))
    return 'Perpetuals volume is weighted heavily in DEX airdrop formulas — consistent open interest outperforms one-off trades.';
  if (s.includes('leverage'))
    return 'Leveraged positions create traceable on-chain data — the protocol rewards sophisticated usage patterns over simple swaps.';
  if (s.includes('equit') || s.includes('commodit') || s.includes('index') && s.includes('market'))
    return 'Using diverse market types demonstrates deep protocol engagement, which scores higher than single-market activity.';
  if (s.includes('volume') || s.includes('pnl'))
    return 'Higher cumulative volume and PnL push you into premium allocation tiers — spread activity across multiple sessions.';
  if (s.includes('repeat') || s.includes('regular') || s.includes('consistent'))
    return 'Recurring activity over multiple weeks is the strongest sybil-resistant signal — one-time actions rarely qualify for top tiers.';
  if (s.includes('swap') || s.includes('exchange'))
    return 'Swap volume is a primary eligibility metric — consistent weekly swaps outperform a single large transaction.';
  if (s.includes('trade') || (s.includes('trading') && !s.includes('spot') && !s.includes('perp')))
    return 'Trading volume is one of the strongest on-chain signals projects use to calculate reward size.';
  if (s.includes('bridge'))
    return 'Bridging assets to the target chain proves genuine cross-chain engagement, not just airdrop hunting.';
  if (s.includes('stake') || s.includes('lock'))
    return 'Staked or locked tokens signal long-term commitment — most projects weight them 2–5× higher than liquid activity.';
  if (s.includes('liquidity') || s.includes('pool') || s.includes(' lp '))
    return 'LP positions are the most heavily weighted activity in DeFi airdrops — they directly fund protocol liquidity.';
  if (s.includes('daily') && s.includes('check'))
    return 'Daily check-ins build a streak multiplier that compounds your points — missing even one day can reset the streak.';
  if (s.includes('testnet'))
    return 'Testnet activity is a permanent on-chain record of early adoption — projects snapshot testnet wallets at mainnet launch.';
  if (s.includes('nft') || s.includes('mint'))
    return 'Minting an NFT creates a verifiable on-chain timestamp proving you were an early community member.';
  if (s.includes('points') || (s.includes('claim') && !s.includes('testnet') && !s.includes('faucet')))
    return 'Claiming points locks in your allocation at the current tier — unclaimed points may expire before the snapshot.';
  if (s.includes('deploy') || s.includes('contract'))
    return 'Deploying contracts signals developer-grade usage, which earns the highest allocation category in technical airdrops.';
  if (s.includes('vote') || s.includes('governance'))
    return 'Governance votes are among the most credible on-chain signals — they prove you hold tokens and care about the protocol.';
  if (s.includes('faucet'))
    return 'Claiming testnet tokens is always free and required to fund all subsequent farming transactions.';
  if (s.includes('screenshot') || (s.includes('submit') && s.includes('proof')))
    return 'Proof of completion is required for manual verification — screenshots must show your wallet address clearly.';
  if (s.includes('profile') || s.includes('username') || s.includes('bio'))
    return 'A complete profile links your social identity to your wallet, protecting your allocation from sybil-filter removal.';
  if (s.includes('download') || s.includes('install') || s.includes('extension'))
    return 'Installing the app or extension starts logging your activity to the project\'s eligibility database immediately.';
  if (s.includes('deposit') || s.includes('fund'))
    return 'Depositing tokens moves you from "visitor" to "active user" status — a critical distinction at snapshot time.';
  if (s.includes('waitlist'))
    return 'Earlier waitlist signups receive priority access and higher allocations in phased distribution rollouts.';
  if (s.includes('same wallet') || (s.includes('use') && s.includes('wallet')))
    return 'Using one consistent wallet across all interactions ensures all your activity accumulates under a single identity.';
  if (s.includes('monitor') || s.includes('watch'))
    return 'Monitoring announcements ensures you catch snapshot windows before they close — many windows last under 48 hours.';
  if (s.includes('complete') || s.includes('finish'))
    return 'Completing all steps moves you to the highest eligibility tier and locks in your maximum allocation.';
  if (s.includes('interact') || s.includes('activity'))
    return 'Recurring protocol interactions build a verified usage history that passes sybil filtering at snapshot time.';
  if (s.includes('open') || s.includes('visit') || s.includes('go to'))
    return 'Your first site visit is logged — establishing early participant status before the snapshot window opens.';
  if (s.includes('increase') || s.includes('boost'))
    return 'Increasing your activity metrics pushes you into higher allocation tiers that pay out significantly more.';
  if (s.includes('task'))
    return 'Completing on-platform tasks is tracked and weighted directly in the eligibility formula.';

  // Smarter fallbacks — pull a keyword from the step itself to avoid identical descriptions
  const words = step.replace(/[^a-zA-Z\s]/g, '').split(' ').filter(w => w.length > 4);
  const keyWord = words.find(w => !['this','with','your','that','from','have','will','each','into','over','should','about'].includes(w.toLowerCase())) || 'this action';
  const fallbacks = [
    `${keyWord} activity is tracked on-chain — this step adds to your verified eligibility record.`,
    `Completing this step builds the on-chain footprint projects analyze when calculating your allocation.`,
    `${keyWord} is one of the signals that separates serious farmers from low-effort wallets at snapshot.`,
    `Projects weight this interaction when running eligibility checks — skipping it costs allocation points.`,
    `Your ${keyWord.toLowerCase()} history is logged permanently and counts toward your final reward tier.`,
    `This step contributes to your cumulative activity score, which determines final allocation size.`,
    `Consistent ${keyWord.toLowerCase()} across sessions elevates this from a routine step to a high-impact signal.`,
    `Completing this advances your eligibility toward the top reward tier before the snapshot runs.`,
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
