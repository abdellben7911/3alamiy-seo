'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../auth/supabase';

type Props = { userId: string };

const POINTS_PER_CHECKIN = 100;
const STREAK_BONUSES: Record<number, number> = { 7: 500, 14: 1000, 30: 2000 };
const BOOST_LEVELS = [
  { days: 0, boost: 0 },
  { days: 3, boost: 10 },
  { days: 7, boost: 20 },
  { days: 14, boost: 30 },
  { days: 30, boost: 50 },
];

function getBoost(streak: number) {
  let boost = 0;
  for (const level of BOOST_LEVELS) {
    if (streak >= level.days) boost = level.boost;
  }
  return boost;
}

function getNextBoost(streak: number) {
  for (const level of BOOST_LEVELS) {
    if (streak < level.days) return { days: level.days, boost: level.boost };
  }
  return null;
}

export default function DailyCheckIn({ userId }: Props) {
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [totalCheckins, setTotalCheckins] = useState(0);
  const [lastCheckin, setLastCheckin] = useState<string | null>(null);
  const [history, setHistory] = useState<{ action: string; points: number; created_at: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);
  const [justChecked, setJustChecked] = useState(false);
  const supabase = createClient();

  const today = new Date().toISOString().split('T')[0];
  const checkedToday = lastCheckin === today;

  useEffect(() => {
    loadData();
  }, [userId]);

  const loadData = async () => {
    setLoading(true);
    const [{ data: pts }, { data: hist }] = await Promise.all([
      supabase.from('user_points').select('*').eq('user_id', userId).single(),
      supabase.from('points_history').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(10),
    ]);
    if (pts) {
      setPoints(pts.points || 0);
      setStreak(pts.streak || 0);
      setLongestStreak(pts.longest_streak || 0);
      setTotalCheckins(pts.total_checkins || 0);
      setLastCheckin(pts.last_checkin || null);
    }
    if (hist) setHistory(hist);
    setLoading(false);
  };

  const doCheckIn = async () => {
    if (checkedToday || checking) return;
    setChecking(true);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const newStreak = lastCheckin === yesterdayStr ? streak + 1 : 1;
    const boost = getBoost(newStreak);
    const basePoints = POINTS_PER_CHECKIN;
    const boostedPoints = Math.floor(basePoints * (1 + boost / 100));
    const bonusPoints = STREAK_BONUSES[newStreak] || 0;
    const totalEarned = boostedPoints + bonusPoints;
    const newLongest = Math.max(longestStreak, newStreak);
    const newTotal = totalCheckins + 1;
    const newPoints = points + totalEarned;

    // Upsert points
    await supabase.from('user_points').upsert({
      user_id: userId,
      points: newPoints,
      streak: newStreak,
      longest_streak: newLongest,
      last_checkin: today,
      total_checkins: newTotal,
    }, { onConflict: 'user_id' });

    // Log history
    const historyEntries = [
      { user_id: userId, action: `Daily Check-in (Day ${newStreak})`, points: boostedPoints },
    ];
    if (bonusPoints > 0) {
      historyEntries.push({ user_id: userId, action: `🎉 Streak Bonus (${newStreak} days)`, points: bonusPoints });
    }
    await supabase.from('points_history').insert(historyEntries);

    setPoints(newPoints);
    setStreak(newStreak);
    setLongestStreak(newLongest);
    setTotalCheckins(newTotal);
    setLastCheckin(today);
    setJustChecked(true);
    setChecking(false);
    await loadData();
  };

  const boost = getBoost(streak);
  const nextBoost = getNextBoost(streak);
  const pointsToday = Math.floor(POINTS_PER_CHECKIN * (1 + boost / 100));

  // Build 30-day grid
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (totalCheckins - 1 - i));
    return {
      day: i + 1,
      checked: i < totalCheckins,
      isToday: i === totalCheckins - 1 && checkedToday,
      isNext: i === totalCheckins && !checkedToday,
    };
  });

  if (loading) return (
    <div style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '16px', padding: '24px', textAlign: 'center', color: '#3f3f46', fontSize: '13px' }}>
      Loading check-in...
    </div>
  );

  return (
    <div style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '16px', overflow: 'hidden', marginBottom: '28px' }}>

      {/* Header */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #1a1f2e', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 4px' }}>Daily Check-In</p>
          <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            Day {checkedToday ? streak : streak + 1}
          </h2>
          <p style={{ fontSize: '12px', color: checkedToday ? '#52525b' : '#10b981', margin: '4px 0 0', fontWeight: 600 }}>
            {checkedToday ? 'Locked for today. Come back tomorrow.' : 'Ready to check in!'}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 4px' }}>Total PP</p>
          <p style={{ fontSize: '28px', fontWeight: 900, color: '#6366f1', margin: 0, letterSpacing: '-0.02em' }}>{points.toLocaleString()}</p>
        </div>
      </div>

      {/* Boost + Reward */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #1a1f2e' }}>
        <div style={{ padding: '16px 24px', borderRight: '1px solid #1a1f2e' }}>
          <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 6px' }}>Current Boost</p>
          <p style={{ fontSize: '22px', fontWeight: 900, color: '#818cf8', margin: '0 0 3px' }}>+{boost}%</p>
          {nextBoost && (
            <p style={{ fontSize: '11px', color: '#3f3f46', margin: 0 }}>
              Next: +{nextBoost.boost}% at day {nextBoost.days}
            </p>
          )}
        </div>
        <div style={{ padding: '16px 24px' }}>
          <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 6px' }}>Daily Reward</p>
          <p style={{ fontSize: '22px', fontWeight: 900, color: '#10b981', margin: '0 0 3px' }}>{pointsToday} PP</p>
          {STREAK_BONUSES[streak + 1] && !checkedToday && (
            <p style={{ fontSize: '11px', color: '#f59e0b', margin: 0, fontWeight: 700 }}>
              +{STREAK_BONUSES[streak + 1]} bonus tomorrow!
            </p>
          )}
        </div>
      </div>

      {/* 30-day grid */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #1a1f2e' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: 0 }}>30 Day Track</p>
          <p style={{ fontSize: '11px', color: '#52525b', margin: 0 }}>{Math.min(totalCheckins, 30)}/30</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px' }}>
          {days.map((d) => (
            <div key={d.day} style={{
              background: d.checked ? 'rgba(99,102,241,0.12)' : '#060910',
              border: `1px solid ${d.isNext ? '#6366f1' : d.checked ? 'rgba(99,102,241,0.3)' : '#1a1f2e'}`,
              borderRadius: '10px',
              padding: '8px 4px',
              textAlign: 'center',
              transition: 'all 0.2s',
              boxShadow: d.isNext ? '0 0 10px rgba(99,102,241,0.2)' : 'none',
            }}>
              <p style={{ fontSize: '8px', fontWeight: 700, color: d.checked ? '#6366f1' : '#3f3f46', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>DAY</p>
              <p style={{ fontSize: '14px', fontWeight: 900, color: d.checked ? '#818cf8' : d.isNext ? '#6366f1' : '#3f3f46', margin: 0 }}>{d.day}</p>
              {d.checked && (
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1', margin: '4px auto 0' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #1a1f2e' }}>
        {[
          { val: streak, lbl: 'Current Streak', color: '#818cf8' },
          { val: longestStreak, lbl: 'Longest Streak', color: '#f59e0b' },
          { val: totalCheckins, lbl: 'Total Check-ins', color: '#10b981' },
        ].map((s, i) => (
          <div key={s.lbl} style={{ padding: '14px', textAlign: 'center', borderRight: i < 2 ? '1px solid #1a1f2e' : 'none' }}>
            <p style={{ fontSize: '20px', fontWeight: 900, color: s.color, margin: '0 0 2px' }}>{s.val}</p>
            <p style={{ fontSize: '9px', color: '#3f3f46', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>{s.lbl}</p>
          </div>
        ))}
      </div>

      {/* Check-in button */}
      <div style={{ padding: '20px 24px' }}>
        <button
          onClick={doCheckIn}
          disabled={checkedToday || checking}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '14px',
            fontWeight: 800,
            cursor: checkedToday ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit',
            transition: 'all 0.2s',
            background: checkedToday
              ? '#1a1f2e'
              : checking
              ? 'rgba(99,102,241,0.5)'
              : 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color: checkedToday ? '#3f3f46' : '#fff',
            boxShadow: checkedToday ? 'none' : '0 4px 16px rgba(99,102,241,0.3)',
          }}
        >
          {checking ? 'Checking in...' : checkedToday ? '✓ Checked In Today' : `Check In · Earn ${pointsToday} PP`}
        </button>

        {justChecked && (
          <div style={{ marginTop: '12px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#10b981', margin: '0 0 3px' }}>+{pointsToday} PP earned!</p>
            {streak > 0 && STREAK_BONUSES[streak] && (
              <p style={{ fontSize: '12px', color: '#f59e0b', margin: 0 }}>🎉 Streak bonus: +{STREAK_BONUSES[streak]} PP!</p>
            )}
          </div>
        )}

        {/* Recent history */}
        {history.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 8px' }}>Recent Activity</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {history.slice(0, 4).map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #1a1f2e' }}>
                  <span style={{ fontSize: '12px', color: '#71717a' }}>{h.action}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#6366f1' }}>+{h.points} PP</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NFT hint */}
        <div style={{ marginTop: '16px', background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#52525b', margin: 0, lineHeight: 1.6 }}>
            PP points will be used for <span style={{ color: '#818cf8', fontWeight: 700 }}>3alamiy NFT mint whitelist</span> — the more you earn, the higher your priority.
          </p>
        </div>
      </div>
    </div>
  );
}
