import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

async function createSupabase() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } }
  );
}

async function getUser(supabase: any) {
  const { data: { user } } = await supabase.auth.getUser();
  return user ?? null;
}

async function getWalletLimit(supabase: any, userId: string): Promise<number> {
  const { data: sub } = await supabase
    .from('subscriptions')
    .select('status')
    .eq('user_id', userId)
    .in('status', ['active', 'trialing'])
    .maybeSingle();
  return sub ? 5 : 1; // Pro: 5, Free: 1
}

// GET — list saved wallets
export async function GET() {
  const supabase = await createSupabase();
  const user = await getUser(supabase);
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 });

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
  const supabase = await createSupabase();
  const user = await getUser(supabase);
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 });

  const { address, nickname } = await req.json();
  if (!address) return NextResponse.json({ error: 'Address required' }, { status: 400 });

  const limit = await getWalletLimit(supabase, user.id);
  const { count } = await supabase
    .from('portfolio_wallets')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  if ((count ?? 0) >= limit) {
    const msg = limit === 1
      ? 'Free plan allows 1 wallet. Upgrade to Pro for up to 5.'
      : `Max ${limit} wallets per account`;
    return NextResponse.json({ error: msg }, { status: 400 });
  }

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
  const supabase = await createSupabase();
  const user = await getUser(supabase);
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 });

  const { id } = await req.json();
  const { error } = await supabase
    .from('portfolio_wallets')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
