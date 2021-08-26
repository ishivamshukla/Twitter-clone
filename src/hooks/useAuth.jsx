import { useContext } from 'react';
import { Auth } from '../context/Auth';

const useAuth = (setterOnly) => {
  const { auth, setAuth } = useContext(Auth);
  return setterOnly ? [setAuth] : [auth, setAuth];
};

export default useAuth;
