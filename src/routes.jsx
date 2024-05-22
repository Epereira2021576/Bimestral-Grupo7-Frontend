import { Register } from './components/Register.jsx';
import { HotelCard } from './components/hoteles/HotelCard.jsx';
import { AuthPage } from './pages/auth/authPage.jsx';
import PrincipalPage from './pages/principal/PrincipalPage.jsx';

// Routes
const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/*', element: <PrincipalPage /> },
    { path: '/cards', element: <HotelCard /> },
];

export default routes;
