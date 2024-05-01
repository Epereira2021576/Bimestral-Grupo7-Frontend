import { Register } from './components/Register.jsx';
import { AuthPage } from './pages/auth/authPage.jsx'
import PrincipalPage from './pages/principal/PrincipalPage.jsx'

// Routes

const routes = [
    { path: '/auth', element: < AuthPage /> },
    { path: '/*', element: < PrincipalPage /> },
    { path: '/register', element: < Register /> },

];

export default routes;
