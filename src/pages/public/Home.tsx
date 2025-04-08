import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import { getPrice } from '@/lib/blockchain/chainlink/getPrices';

function Home(): JSX.Element {

    const [ethPrice, setEthPrice] = useState();

    useEffect(() => {
        async function fetchEthPrice() {
            const result = await getPrice("eth");
            setEthPrice(result);
        }

        fetchEthPrice();
    }, []);

    return (
        <div>
            <Header />
            <div className="m-4">
                {ethPrice ? `$${ethPrice.toFixed(2)}` : "Loading..."}
            </div>
        </div>
    );
}

export default Home;
