type PricesProps = {
    prices: {
        eth: number;
        btc: number;
        sol: number;
    } | null;
}

// type PricesProps = Record<string, Record<string, number>>;

function Prices({ prices }: PricesProps): JSX.Component {
    return (
        prices ? (
            <>
                <div>ETH: {`$${prices.eth.toFixed(2)}`}</div>
                <div>BTC: {`$${prices.btc.toFixed(2)}`}</div>
                <div>SOL: {`$${prices.sol.toFixed(2)}`}</div>
            </>
        ) : <div>Loading Prices...</div>
    );
}

export default Prices;
