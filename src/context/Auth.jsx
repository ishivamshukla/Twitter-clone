import { createContext, useEffect, useState } from 'react';

const Auth = createContext();

const Provider = ({ children }) => {
  const [auth, setAuth] = useState(window.localStorage.getItem('auth'));

  useEffect(() => {
    setAuth(window.localStorage.getItem('auth'));
  }, [auth]);

  return <Auth.Provider value={{ auth, setAuth }}>{children}</Auth.Provider>;
};

export { Auth, Provider };
