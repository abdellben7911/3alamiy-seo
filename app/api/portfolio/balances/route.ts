import { NextRequest, NextResponse } from 'next/server';

const COVALENT_KEY = process.env.COVALENT_API_KEY || '';
const HELIUS_KEY = process.env.HELIUS_API_KEY || '';

const EVM_CHAINS = [
  { id: 1,     name: 'Ethereum',  symbol: 'ETH',  color: '#627EEA' },
  { id: 42161, name: 'Arbitrum',  symbol: 'ARB',  color: '#12AAFF' },
  { id: 8453,  name: 'Base',      symbol: 'ETH',  color: '#0052FF' },
  { id: 10,    name: 'Optimism',  symbol: 'ETH',  color: '#FF0420' },
  { id: 137,   name: 'Polygon',   symbol: 'MATIC', color: '#8247E5' },
  { id: 56,    name: 'BNB Chain', symbol: 'BNB',  color: '#F3BA2F' },
  { id: 324,   name: 'zkSync',    symbol: 'ETH',  color: '#8C8DFC' },
  { id: 59144, name: 'Linea',     symbol: 'ETH',  color: '#61DFFF' },
];

type TokenBalance = {
  chain: string;
  chainColor: string;
  symbol: string;
  name: string;
  decimals: number;
  balance: string;
  balanceFormatted: number;
  contractAddress: string;
  logoUrl: string | null;
  quoteRate: number;
  valueUsd: number;
  change24h: number | null;
  isNative: boolean;
};

async function fetchEvmBalances(address: string): Promise<TokenBalance[]> {
  if (!COVALENT_KEY) return [];

  const results = await Promise.allSettled(
    EVM_CHAINS.map(async (chain) => {
      const url = `https://api.covalenthq.com/v1/${chain.id}/address/${address}/balances_v2/?key=${COVALENT_KEY}&no-spam=true&nft=false`;
      const res = await fetch(url, { next: { revalidate: 120 } });
      if (!res.ok) return [];
      const json = await res.json();
      const items: any[] = json?.data?.items ?? [];

      return items
        .filter(t => parseFloat(t.balance) > 0 && t.quote > 0.01)
        .map((t): TokenBalance => ({
          chain: chain.name,
          chainColor: chain.color,
          symbol: t.contract_ticker_symbol || '?',
          name: t.contract_name || t.contract_ticker_symbol || 'Unknown',
          decimals: t.contract_decimals ?? 18,
          balance: t.balance,
          balanceFormatted: parseFloat(t.balance) / Math.pow(10, t.contract_decimals ?? 18),
          contractAddress: t.contract_address,
          logoUrl: t.logo_url || null,
          quoteRate: t.quote_rate || 0,
          valueUsd: t.quote || 0,
          change24h: t.quote_rate_24h != null && t.quote_rate > 0
            ? ((t.quote_rate - t.quote_rate_24h) / t.quote_rate_24h) * 100
            : null,
          isNative: t.native_token === true,
        }));
    })
  );

  return results
    .filter((r): r is PromiseFulfilledResult<TokenBalance[]> => r.status === 'fulfilled')
    .flatMap(r => r.value);
}

async function fetchSolanaBalances(address: string): Promise<TokenBalance[]> {
  if (!HELIUS_KEY) return [];
  try {
    const url = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_KEY}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0', id: 'portfolio',
        method: 'getTokenAccountsByOwner',
        params: [address, { programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' }, { encoding: 'jsonParsed' }],
      }),
      next: { revalidate: 120 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const accounts: any[] = json?.result?.value ?? [];

    const solRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 'sol-balance', method: 'getBalance', params: [address] }),
    });
    const solJson = await solRes.json();
    const solBalance = (solJson?.result?.value ?? 0) / 1e9;

    const tokens: TokenBalance[] = [];

    if (solBalance > 0.001) {
      // Fetch SOL price from CoinGecko
      let solPrice = 150;
      try {
        const priceRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true', { next: { revalidate: 300 } });
        const priceJson = await priceRes.json();
        solPrice = priceJson?.solana?.usd ?? 150;
      } catch { /* use default */ }

      tokens.push({
        chain: 'Solana', chainColor: '#9945FF',
        symbol: 'SOL', name: 'Solana',
        decimals: 9, balance: String(solJson?.result?.value ?? 0),
        balanceFormatted: solBalance,
        contractAddress: 'native', logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
        quoteRate: solPrice, valueUsd: solBalance * solPrice,
        change24h: null, isNative: true,
      });
    }

    for (const acc of accounts) {
      const info = acc.account?.data?.parsed?.info;
      if (!info) continue;
      const amount = parseFloat(info.tokenAmount?.uiAmountString ?? '0');
      if (amount < 0.001) continue;
      tokens.push({
        chain: 'Solana', chainColor: '#9945FF',
        symbol: info.mint?.slice(0, 4) ?? '?', name: 'SPL Token',
        decimals: info.tokenAmount?.decimals ?? 0,
        balance: info.tokenAmount?.amount ?? '0',
        balanceFormatted: amount,
        contractAddress: info.mint ?? '',
        logoUrl: null,
        quoteRate: 0, valueUsd: 0,
        change24h: null, isNative: false,
      });
    }

    return tokens;
  } catch {
    return [];
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get('address');
  if (!address) return NextResponse.json({ error: 'address required' }, { status: 400 });

  const isSolana = !address.startsWith('0x') && address.length >= 32;

  const [evmTokens, solTokens] = await Promise.all([
    isSolana ? Promise.resolve([]) : fetchEvmBalances(address),
    isSolana ? fetchSolanaBalances(address) : Promise.resolve([]),
  ]);

  const all = [...evmTokens, ...solTokens];
  const totalUsd = all.reduce((s, t) => s + t.valueUsd, 0);

  // Chain breakdown
  const byChain: Record<string, number> = {};
  for (const t of all) {
    byChain[t.chain] = (byChain[t.chain] ?? 0) + t.valueUsd;
  }

  return NextResponse.json({
    address,
    tokens: all.sort((a, b) => b.valueUsd - a.valueUsd),
    totalUsd,
    byChain,
    tokenCount: all.length,
  });
}
