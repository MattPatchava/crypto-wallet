import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/public/Home';

function App(): JSX.Element {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
