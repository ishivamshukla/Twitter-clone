import { Route, Redirect, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = (props) => {
  const [auth] = useAuth();
  const { pathname } = useLocation();

  if (
    auth &&
    (pathname === '/login' || pathname === '/signup' || pathname === '/auth')
  ) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};

export default PublicRoute;
