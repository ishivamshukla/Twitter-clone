import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = (props) => {
  const [auth] = useAuth();

  if (auth) {
    return <Route {...props} />;
  }

  return <Redirect to="/auth" />;
};

export default PrivateRoute;
