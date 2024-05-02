import { Register } from './components/Register.jsx';
import { AuthPage } from './pages/auth/authPage.jsx';
import PrincipalPage from './pages/principal/PrincipalPage.jsx';
import { hotelPage } from './pages/hoteles/index.js';

// Routes
const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/*', element: <PrincipalPage /> },
];

export default routes;
