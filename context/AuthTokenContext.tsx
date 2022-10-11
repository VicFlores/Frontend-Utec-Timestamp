import axios from 'axios';
import Cookies from 'js-cookie';
import { createContext, useEffect, useMemo, useState } from 'react';
import { TLayout } from '../types/TLayout';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: TLayout) => {
  const [authCookie, setAuthCookie] = useState('waiting');
  const [cookieDecoded, setCookieDecoded] = useState('waiting');

  useEffect(() => {
    const getCookieToken = async () => {
      const authToken: any = await axios.get('/api/auth/verifyToken');
      setAuthCookie(authToken);
    };

    const getCookieDecoded = async () => {
      const cookieDecoded: any = await axios.get('/api/profile');
      setCookieDecoded(cookieDecoded);
    };

    getCookieToken();
    getCookieDecoded();
  }, []);

  const values = useMemo(
    () => ({
      authCookie,
      cookieDecoded,
    }),
    [authCookie]
  );

  return (
    <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
  );
};
