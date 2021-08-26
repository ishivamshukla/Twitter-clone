import { Switch, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <PublicRoute path="/auth" component={AuthPage} />
        <PrivateRoute path="/" component={Home} exact />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={SignUp} />
        <PrivateRoute path="/profile/:username" component={Profile} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
};

export default App;
