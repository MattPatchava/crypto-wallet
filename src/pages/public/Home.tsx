import { useFetchPrices } from '@/hooks/useFetchPrices';
import Header from '@/components/Header';
import Prices from '@/components/Prices';

function Home(): JSX.Element {

    const prices: number[] = useFetchPrices();
    
    return (
        <div>
            <Header />
            <div className="m-4">
                <Prices prices={prices} />
            </div>
        </div>
    );
}

export default Home;
