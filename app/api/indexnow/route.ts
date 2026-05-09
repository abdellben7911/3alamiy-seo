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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug) {
      return NextResponse.json({ error: 'slug is required' }, { status: 400 });
    }

    // Fetch airdrop details from Supabase
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

    if (!a) {
      return NextResponse.json({ error: 'Airdrop not found' }, { status: 404 });
    }

    const diffEmoji = a.difficulty === 'Easy' ? '🟢' : a.difficulty === 'Medium' ? '🟡' : '🔴';
    const costEmoji = a.cost === 'Free' ? '🆓' : '💰';
    const reward = a.reward_min && a.reward_max
      ? `$${a.reward_min} - $${a.reward_max}`
      : a.reward_min ? `$${a.reward_min}+` : 'TBA';

    const tags = Array.isArray(a.tags) ? a.tags.map((t: string) => `#${t}`).join(' ') : '';

    const message = `
🪂 <b>New Airdrop Alert!</b>

<b>${a.name}</b>
${a.description}

${costEmoji} <b>Cost:</b> ${a.cost}
${diffEmoji} <b>Difficulty:</b> ${a.difficulty}
💰 <b>Reward:</b> ${reward}
⛓ <b>Blockchain:</b> ${a.blockchain}
📊 <b>Status:</b> ${a.status}

📖 <b>Step-by-step guide:</b>
<a href="https://seo.3alamiyweb3.online/airdrops/${a.slug}">seo.3alamiyweb3.online/airdrops/${a.slug}</a>

${tags}

<i>Track all airdrops → @alamiyweb3_bot</i>
`.trim();

    const result = await sendTelegramMessage(message);

    return NextResponse.json({
      success: true,
      telegram: result,
      airdrop: a.name,
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

// GET endpoint to test the bot
export async function GET() {
  try {
    const result = await sendTelegramMessage(
      '✅ 3alamiy Web3 Bot is connected and ready!\n\nNew airdrops will be posted here automatically. 🪂\n\nseo.3alamiyweb3.online'
    );
    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
