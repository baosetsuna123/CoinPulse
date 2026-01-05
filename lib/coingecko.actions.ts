'use server';

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error('Could not get base url');
if (!API_KEY) throw new Error('Could not get api key');

export async function fetcher<T>(
  endpoint: string,
  params?: QueryParams,
  revalidate = 60,
): Promise<T> {
  const url = qs.stringifyUrl(
    {
      url: `${BASE_URL}/${endpoint}`,
      query: params,
    },
    { skipEmptyString: true, skipNull: true },
  );

  const response = await fetch(url, {
    headers: {
      'x-cg-demo-api-key': API_KEY,
      'Content-Type': 'application/json',
    } as Record<string, string>,
    next: { revalidate },
  });

  if (!response.ok) {
    const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));

    throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText} `);
  }

  return response.json();
}

export async function getPools(
  id: string,
  network?: string | null,
  contractAddress?: string | null,
): Promise<PoolData> {
  const fallback: PoolData = {
    id: '',
    address: '',
    name: '',
    network: '',
  };

  if (network && contractAddress) {
    const poolData = await fetcher<{ data: PoolData[] }>(
      `/onchain/networks/${network}/tokens/${contractAddress}/pools`,
    );

    return poolData.data?.[0] ?? fallback;
  }

  try {
    const poolData = await fetcher<{ data: PoolData[] }>('/onchain/search/pools', { query: id });

    return poolData.data?.[0] ?? fallback;
  } catch {
    return fallback;
  }
}

export async function searchCoins(query: string): Promise<SearchCoin[]> {
  const searchResults = await fetcher<{ coins: Array<{ id: string; name: string; symbol: string; thumb: string; large: string }> }>(
    '/search',
    { query },
  );

  const coinIds = searchResults.coins.slice(0, 10).map((coin) => coin.id);

  if (coinIds.length === 0) return [];

  const marketData = await fetcher<Array<{
    id: string;
    current_price: number;
    price_change_percentage_24h: number;
  }>>('/coins/markets', {
    ids: coinIds.join(','),
    vs_currency: 'usd',
  });

  return searchResults.coins.map((coin) => {
    const marketInfo = marketData.find((data) => data.id === coin.id);
    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      thumb: coin.thumb,
      large: coin.large,
      market_cap_rank: null, // Placeholder, update if needed
      data: marketInfo
        ? {
            price: marketInfo.current_price,
            price_change_percentage_24h: marketInfo.price_change_percentage_24h,
          }
        : { price_change_percentage_24h: 0 },
    };
  });
}
