import { Box, Text } from "@chakra-ui/react";

type PricesProps = {
    prices: {
        eth: number;
        btc: number;
        sol: number;
    } | null;
}

function Prices({ prices }: PricesProps): JSX.Element {
    return (
        <Box p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>Price Feed</Text>
            {prices ? (
                <>
                    <Text>ETH: {`$${prices.eth.toFixed(2)}`}</Text>
                    <Text>BTC: {`$${prices.btc.toFixed(2)}`}</Text>
                    <Text>SOL: {`$${prices.sol.toFixed(2)}`}</Text>
                </>
            )
            :
                <Text>Loading Prices...</Text>
            }
        </Box>
    );
}

export default Prices;
