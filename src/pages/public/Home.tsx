import { useFetchPrices } from '@/hooks/useFetchPrices';
import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';
import Prices from '@/components/Prices';
import WalletBalanceViewer from '@/components/WalletBalanceViewer';

function Home(): JSX.Element {

    const prices: Record<string, BigNumber> = useFetchPrices();
    
    return (
        <Box>
            <Header />
            <Box>
                <Prices prices={prices} />
            </Box>
            <Box>
                <WalletBalanceViewer prices={prices} />
            </Box>
        </Box>
    );
}

export default Home;
