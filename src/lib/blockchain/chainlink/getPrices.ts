import { ethers } from 'ethers';
import { priceFeedAbi } from './abi';
import { provider } from '../provider';
import { priceFeeds } from './priceFeeds';

type RoundData = {
    roundId: bigint;
    answer: bigint;
    startedAt: bigint;
    updatedAt: bigint;
    answeredInRound: bigint;
};

export async function getPrice(symbol: string): Promise<number> {
    const address: string = priceFeeds.usd[symbol];
    const contract: ethers.Contract = new ethers.Contract(address, priceFeedAbi, provider);

    const roundData: RoundData = await contract.latestRoundData();
    return parseFloat(ethers.formatUnits(roundData.answer, 8));
}
