import { useState, useEffect } from 'react';
import { getPrice } from '@/lib/blockchain/chainlink/getPrices';

export function useFetchPrices() {
    const [prices, setPrices] = useState<Record<string, BigNumber> | null>(null);

    useEffect(() => {
        async function fetchPrices() {
            const symbols: string[] = ["eth", "btc", "sol"];

            const prices: BigNumber[] = await Promise.all(symbols.map(symbol => getPrice(symbol)));
            const priceMap: Record<string, BigNumber> = {};

            symbols.forEach((symbol, idx) => {
                priceMap[symbol] = prices[idx];
            });

            setPrices(priceMap);
        }

        fetchPrices();
    }, []);

    return prices;
}
