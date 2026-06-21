import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const CRON_SECRET = process.env.CRON_SECRET || '';

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get('authorization');
  if (CRON_SECRET && auth === `Bearer ${CRON_SECRET}`) return true;
  if (req.headers.get('x-vercel-cron') === '1') return true;
  return false;
}

async function getSubscribers(): Promise<string[]> {
  const emails: string[] = [];
  let page = 1;
  const perPage = 1000;

  while (true) {
    const res = await fetch(
      `${SUPABASE_URL}/auth/v1/admin/users?page=${page}&per_page=${perPage}`,
      { headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` } }
    );
    if (!res.ok) break;
    const data = await res.json();
    const users: any[] = data.users ?? data ?? [];
    if (users.length === 0) break;
    for (const u of users) {
      if (u.email) emails.push(u.email);
    }
    if (users.length < perPage) break;
    page++;
  }

  return emails;
}

function buildCampaignHtml(): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#060A12;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#060A12;min-height:100vh;">
<tr><td align="center" style="padding:40px 20px;">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="padding-bottom:28px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><a href="https://www.3alamiyweb3.com" style="text-decoration:none;font-size:18px;font-weight:900;color:#ffffff;letter-spacing:-0.04em;">3alamiy <span style="color:#7CF5C0;">Web3</span></a></td>
      <td align="right"><span style="font-size:11px;color:#374151;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Update</span></td>
    </tr></table>
  </td></tr>

  <!-- Hero -->
  <tr><td style="background:#0D1221;border:1px solid rgba(124,245,192,0.15);border-radius:16px;padding:36px 32px 32px;">
    <div style="font-size:11px;font-weight:700;color:#7CF5C0;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:14px;">New — Wallet Checker Update</div>
    <div style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.04em;line-height:1.2;margin-bottom:16px;">We just made the wallet checker actually useful</div>
    <div style="font-size:15px;color:#64748b;line-height:1.75;">
      The old version showed blurred fake rows to tease the Pro upgrade. We replaced them with <strong style="color:#fff;">real airdrop names from your wallet</strong> — so you can see exactly what you're missing before deciding whether to unlock the full report.
    </div>
  </td></tr>

  <tr><td style="height:20px;"></td></tr>

  <!-- What changed -->
  <tr><td style="background:#0D1221;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:28px 32px;">
    <div style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:20px;">What changed</div>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding-bottom:18px;vertical-align:top;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:28px;vertical-align:top;padding-top:2px;">
            <div style="width:20px;height:20px;border-radius:50%;background:rgba(124,245,192,0.12);border:1px solid rgba(124,245,192,0.25);text-align:center;line-height:20px;font-size:10px;font-weight:800;color:#7CF5C0;">1</div>
          </td>
          <td style="padding-left:14px;">
            <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px;">Real airdrop names in the free preview</div>
            <div style="font-size:13px;color:#64748b;line-height:1.6;">Paste your wallet and you'll see 2 actual airdrops you qualify for — with the project name, chain, and eligibility status. Not fake placeholders.</div>
          </td>
        </tr></table>
      </td></tr>
      <tr><td style="padding-bottom:18px;vertical-align:top;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:28px;vertical-align:top;padding-top:2px;">
            <div style="width:20px;height:20px;border-radius:50%;background:rgba(124,245,192,0.12);border:1px solid rgba(124,245,192,0.25);text-align:center;line-height:20px;font-size:10px;font-weight:800;color:#7CF5C0;">2</div>
          </td>
          <td style="padding-left:14px;">
            <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px;">Personalized count — not a generic CTA</div>
            <div style="font-size:13px;color:#64748b;line-height:1.6;">Instead of "unlock your report", you now see: "Your wallet qualifies for 7 airdrops. You also missed 3 and can still claim 12 more." Your actual numbers.</div>
          </td>
        </tr></table>
      </td></tr>
      <tr><td style="vertical-align:top;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:28px;vertical-align:top;padding-top:2px;">
            <div style="width:20px;height:20px;border-radius:50%;background:rgba(124,245,192,0.12);border:1px solid rgba(124,245,192,0.25);text-align:center;line-height:20px;font-size:10px;font-weight:800;color:#7CF5C0;">3</div>
          </td>
          <td style="padding-left:14px;">
            <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px;">Pro is now $5/mo in USDC</div>
            <div style="font-size:13px;color:#64748b;line-height:1.6;">Unlocks the full report — every eligible airdrop, every missed one, every active campaign you can still join, with step-by-step guides for each.</div>
          </td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="height:20px;"></td></tr>

  <!-- CTA -->
  <tr><td style="background:linear-gradient(135deg,rgba(124,245,192,0.06),rgba(96,165,250,0.04));border:1px solid rgba(124,245,192,0.15);border-radius:16px;padding:32px;text-align:center;">
    <div style="font-size:20px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;margin-bottom:10px;">Check your wallet — it takes 10 seconds</div>
    <div style="font-size:14px;color:#64748b;margin-bottom:24px;">Works with any EVM address (Ethereum, Arbitrum, Base, Polygon, zkSync, Linea) or Solana address. Free to check.</div>
    <a href="https://www.3alamiyweb3.com/wallet-checker" style="display:inline-block;background:linear-gradient(135deg,#7CF5C0,#4ade80);color:#060A12;font-size:15px;font-weight:900;padding:16px 36px;border-radius:12px;text-decoration:none;letter-spacing:-0.01em;">Check My Wallet Free →</a>
    <div style="font-size:12px;color:#374151;margin-top:14px;">No sign-up. No KYC. Just paste your address.</div>
  </td></tr>

  <tr><td style="height:20px;"></td></tr>

  <!-- Social proof / context -->
  <tr><td style="background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:24px 32px;">
    <div style="font-size:13px;color:#64748b;line-height:1.8;">
      The checker scans 110+ active and historical airdrops across 8 chains. It tells you which ones your wallet qualifies for right now, which ones ended and you missed, and which active campaigns you can still join.<br><br>
      The free version shows your wallet score, chain activity, and 2 real airdrop results. Pro ($5/mo USDC) unlocks the full list — usually 10–40 results depending on your wallet age and activity.
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding-top:32px;text-align:center;">
    <div style="font-size:11px;color:#374151;line-height:1.8;">
      You subscribed at 3alamiyweb3.com &mdash; we send updates when something meaningful ships.<br>
      <a href="https://www.3alamiyweb3.com/unsubscribe?email={{email}}" style="color:#4b5563;text-decoration:underline;">Unsubscribe</a>
      &nbsp;&middot;&nbsp;
      <a href="https://www.3alamiyweb3.com" style="color:#4b5563;text-decoration:underline;">3alamiyweb3.com</a>
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

  const subscribers = await getSubscribers();
  if (subscribers.length === 0) {
    return NextResponse.json({ sent: 0, message: 'No subscribers' });
  }

  const html = buildCampaignHtml();
  let sent = 0;
  const batchSize = 50;

  for (let i = 0; i < subscribers.length; i += batchSize) {
    const batch = subscribers.slice(i, i + batchSize);
    const res = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        batch.map(email => ({
          from: '3alamiy Web3 <digest@3alamiyweb3.com>',
          to: email,
          subject: 'We updated the wallet checker — your numbers are in',
          html: html.replace('{{email}}', encodeURIComponent(email)),
        }))
      ),
    });
    if (res.ok) sent += batch.length;
  }

  return NextResponse.json({ sent, total: subscribers.length });
}

export async function GET(req: NextRequest) {
  return POST(req);
}
