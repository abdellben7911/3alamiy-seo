import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

function createSupabase() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } }
  );
}

async function getProUser(supabase: any) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: sub } = await supabase
    .from('subscriptions')
    .select('status')
    .eq('user_id', user.id)
    .in('status', ['active', 'trialing'])
    .maybeSingle();
  if (!sub) return null;
  return user;
}

// GET — list saved wallets
export async function GET() {
  const supabase = createSupabase();
  const user = await getProUser(supabase);
  if (!user) return NextResponse.json({ error: 'Pro required' }, { status: 403 });

  const { data, error } = await supabase
    .from('portfolio_wallets')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ wallets: data });
}

// POST — add a wallet
export async function POST(req: NextRequest) {
  const supabase = createSupabase();
  const user = await getProUser(supabase);
  if (!user) return NextResponse.json({ error: 'Pro required' }, { status: 403 });

  const { address, nickname } = await req.json();
  if (!address) return NextResponse.json({ error: 'Address required' }, { status: 400 });

  // Max 5 wallets per user
  const { count } = await supabase
    .from('portfolio_wallets')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);
  if ((count ?? 0) >= 5) return NextResponse.json({ error: 'Max 5 wallets per account' }, { status: 400 });

  const chain = address.startsWith('0x') ? 'evm' : address.length >= 32 ? 'solana' : 'evm';

  const { data, error } = await supabase
    .from('portfolio_wallets')
    .insert({ user_id: user.id, wallet_address: address.toLowerCase(), nickname: nickname || null, chain })
    .select()
    .single();

  if (error) {
    if (error.code === '23505') return NextResponse.json({ error: 'Wallet already added' }, { status: 409 });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ wallet: data });
}

// DELETE — remove a wallet
export async function DELETE(req: NextRequest) {
  const supabase = createSupabase();
  const user = await getProUser(supabase);
  if (!user) return NextResponse.json({ error: 'Pro required' }, { status: 403 });

  const { id } = await req.json();
  const { error } = await supabase
    .from('portfolio_wallets')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
