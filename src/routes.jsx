import { Register } from './components/Register.jsx';
import { Card } from './components/hoteles/Card.jsx';
import { AuthPage } from './pages/auth/authPage.jsx';
import PrincipalPage from './pages/principal/PrincipalPage.jsx';
import HotelPage from './pages/hoteles/hotelPage.jsx';

// Routes
const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/*', element: <PrincipalPage /> },
    { path: '/hotel/:id', element: <Card /> },
    { path: '/hotelPage', element: <HotelPage />}
];

export default routes;
