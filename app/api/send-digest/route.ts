import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const CRON_SECRET = process.env.CRON_SECRET || '';

// Protect this route — only callable by Vercel Cron or with the secret
function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get('authorization');
  if (CRON_SECRET && auth === `Bearer ${CRON_SECRET}`) return true;
  // Vercel Cron sends this header automatically
  if (req.headers.get('x-vercel-cron') === '1') return true;
  return false;
}

async function getSubscribers(): Promise<string[]> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers?select=email&status=neq.unsubscribed`, {
    headers: { 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}` },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map((r: any) => r.email).filter(Boolean);
}

async function getTopAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?status=eq.Active&cost=eq.Free&select=name,slug,blockchain,difficulty,description&order=updated_at.desc&limit=5`, {
    headers: { 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}` },
  });
  if (!res.ok) return [];
  return res.json();
}

function buildEmailHtml(airdrops: any[]): string {
  const week = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const rows = airdrops.map((a, i) => `
    <tr>
      <td style="padding:16px 0;border-bottom:1px solid #1a2540;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:28px;padding-right:14px;vertical-align:top;">
              <div style="width:26px;height:26px;border-radius:6px;background:#0d2a1a;border:1px solid rgba(124,245,192,0.2);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#7CF5C0;text-align:center;line-height:26px;">${i + 1}</div>
            </td>
            <td style="vertical-align:top;">
              <div style="font-size:15px;font-weight:700;color:#ffffff;margin-bottom:4px;">${a.name}</div>
              <div style="font-size:12px;color:#64748b;margin-bottom:8px;">${a.blockchain} · ${a.difficulty} · Free</div>
              <div style="font-size:13px;color:#94a3b8;line-height:1.6;">${(a.description || '').slice(0, 120)}${(a.description || '').length > 120 ? '…' : ''}</div>
              <a href="https://www.3alamiyweb3.com/airdrops/${a.slug}" style="display:inline-block;margin-top:10px;font-size:12px;font-weight:700;color:#7CF5C0;text-decoration:none;">View guide →</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#060A12;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#060A12;min-height:100vh;">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="padding-bottom:32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <a href="https://www.3alamiyweb3.com" style="text-decoration:none;">
                  <span style="font-size:18px;font-weight:900;color:#ffffff;letter-spacing:-0.04em;">3alamiy <span style="color:#7CF5C0;">Web3</span></span>
                </a>
              </td>
              <td align="right">
                <span style="font-size:11px;color:#374151;font-weight:600;">Weekly Airdrop Digest</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Hero -->
        <tr><td style="background:#0D1221;border:1px solid rgba(124,245,192,0.12);border-radius:16px;padding:32px 28px;margin-bottom:24px;">
          <div style="font-size:11px;font-weight:700;color:#7CF5C0;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Week of ${week}</div>
          <div style="font-size:26px;font-weight:900;color:#ffffff;letter-spacing:-0.04em;line-height:1.2;margin-bottom:12px;">Top 5 Airdrops This Week</div>
          <div style="font-size:14px;color:#64748b;line-height:1.6;">Free, verified, and updated — before they go viral on CT.</div>
        </td></tr>

        <tr><td style="height:24px;"></td></tr>

        <!-- Airdrops -->
        <tr><td style="background:#0D1221;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:8px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${rows}
          </table>
        </td></tr>

        <tr><td style="height:24px;"></td></tr>

        <!-- CTA -->
        <tr><td style="text-align:center;padding:28px;background:#0D1221;border:1px solid rgba(124,245,192,0.1);border-radius:16px;">
          <div style="font-size:15px;font-weight:700;color:#ffffff;margin-bottom:8px;">Check if your wallet qualifies</div>
          <div style="font-size:13px;color:#64748b;margin-bottom:20px;">Paste any EVM or Solana address — see your full airdrop eligibility report.</div>
          <a href="https://www.3alamiyweb3.com/wallet-checker" style="display:inline-block;background:linear-gradient(135deg,#7CF5C0,#4ade80);color:#060A12;font-size:14px;font-weight:900;padding:14px 32px;border-radius:10px;text-decoration:none;letter-spacing:-0.01em;">Check My Wallet →</a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:32px;text-align:center;">
          <div style="font-size:11px;color:#374151;line-height:1.8;">
            You're receiving this because you subscribed at 3alamiyweb3.com<br>
            <a href="https://www.3alamiyweb3.com/unsubscribe?email={{email}}" style="color:#4b5563;text-decoration:underline;">Unsubscribe</a>
            &nbsp;·&nbsp;
            <a href="https://www.3alamiyweb3.com/privacy" style="color:#4b5563;text-decoration:underline;">Privacy Policy</a>
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: 'RESEND_API_KEY not set' }, { status: 500 });
  }

  const [subscribers, airdrops] = await Promise.all([getSubscribers(), getTopAirdrops()]);

  if (subscribers.length === 0) {
    return NextResponse.json({ sent: 0, message: 'No subscribers' });
  }

  if (airdrops.length === 0) {
    return NextResponse.json({ error: 'No airdrops found' }, { status: 500 });
  }

  const html = buildEmailHtml(airdrops);
  const week = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  // Send in batches of 50 (Resend batch limit)
  let sent = 0;
  const batchSize = 50;
  for (let i = 0; i < subscribers.length; i += batchSize) {
    const batch = subscribers.slice(i, i + batchSize);
    const res = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(batch.map(email => ({
        from: '3alamiy Web3 <digest@3alamiyweb3.com>',
        to: email,
        subject: `Top 5 Airdrops — ${week} 🪂`,
        html: html.replace('{{email}}', encodeURIComponent(email)),
      }))),
    });
    if (res.ok) sent += batch.length;
  }

  return NextResponse.json({ sent, subscribers: subscribers.length });
}

// Allow GET for testing in browser (with secret)
export async function GET(req: NextRequest) {
  return POST(req);
}
