import { NextResponse } from 'next/server';

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function sendTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
      disable_web_page_preview: false,
    }),
  });
  return res.json();
}

async function notifyAirdrop(slug: string) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/airdrops?slug=eq.${slug}&select=*&limit=1`,
    {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );

  const data = await res.json();
  const a = data[0];

  if (!a) return { error: 'Airdrop not found' };

  const diffEmoji = a.difficulty === 'Easy' ? '🟢' : a.difficulty === 'Medium' ? '🟡' : '🔴';
  const costEmoji = a.cost === 'Free' ? '🆓' : '💰';
  const reward = a.reward_min && a.reward_max
    ? `$${a.reward_min} - $${a.reward_max}`
    : a.reward_min ? `$${a.reward_min}+` : 'TBA';
  const tags = Array.isArray(a.tags) ? a.tags.map((t: string) => `#${t}`).join(' ') : '';

  const message = `
🪂 <b>${a.name}</b> — New Airdrop!

${costEmoji} ${a.cost}  ${diffEmoji} ${a.difficulty}  ⛓ ${a.blockchain}
💰 Reward: <b>${reward}</b>

👉 <a href="https://seo.3alamiyweb3.online/airdrops/${a.slug}">View Full Guide</a>

${tags}
`.trim();

  const result = await sendTelegramMessage(message);
  return { success: true, telegram: result, airdrop: a.name };
}

// GET — handles browser visits: /api/indexnow?slug=xxx
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const result = await notifyAirdrop(slug);
      return NextResponse.json(result);
    }

    // No slug = test message
    const result = await sendTelegramMessage(
      '✅ <b>3alamiy Web3 Bot</b> is connected and ready!\n\n🪂 New airdrops posted here daily.\n\n👉 <a href="https://seo.3alamiyweb3.online">seo.3alamiyweb3.online</a>'
    );
    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

// POST — handles programmatic calls
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug) {
      return NextResponse.json({ error: 'slug is required' }, { status: 400 });
    }

    const result = await notifyAirdrop(slug);
    return NextResponse.json(result);

  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
