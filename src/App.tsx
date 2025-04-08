import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/public/Home';

function App(): JSX.Element {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
}

export default App;
