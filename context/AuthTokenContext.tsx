import axios from 'axios';
import Cookies from 'js-cookie';
import { createContext, useEffect, useMemo, useState } from 'react';
import { TLayout } from '../types/TLayout';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: TLayout) => {
  const [authCookie, setAuthCookie] = useState('waiting');

  useEffect(() => {
    const getCookieToken = async () => {
      const authToken: any = await axios.get('/api/auth/verifyToken');
      setAuthCookie(authToken);
    };

    getCookieToken();
  }, []);

  const values = useMemo(
    () => ({
      authCookie,
    }),
    [authCookie]
  );

  return (
    <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
  );
};
