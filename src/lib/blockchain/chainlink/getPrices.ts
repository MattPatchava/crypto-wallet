import { ethers } from 'ethers';
import { priceFeedAbi } from './abi';
import { provider } from '../provider';
import { priceFeeds } from './priceFeeds';

type RoundData = {
    roundId: BigNumber;
    answer: BigNumber;
    startedAt: BigNumber;
    updatedAt: BigNumber;
    answeredInRound: BigNumber;
};

export async function getPrice(symbol: string): Promise<BigNumber> {
    const address: string = priceFeeds.usd[symbol];
    const contract: ethers.Contract = new ethers.Contract(address, priceFeedAbi, provider);

    const roundData: RoundData = await contract.latestRoundData();
    return parseFloat(ethers.formatUnits(roundData.answer, 8));
}
