import React from 'react';
import Dash from '../../components/Dash/Dash';
import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';
import { InferGetServerSidePropsType } from 'next';
import { IPayload } from '../../types/TPayload';
import { useRouter } from 'next/router';
import axios from 'axios';

export const getServerSideProps = ({ req, res }: any) => {
  const token: any = getCookie('MyTokenCookie', { req, res });
  const decodedToken = jwt.decode(token);

  return { props: { token, decodedToken } };
};

const dashboard = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const rolValidation = decodedToken as unknown as IPayload;

  /* if (rolValidation.rol !== 'admin') {
    const logout = async () => {
      await axios.post('/api/auth/logout');
      router.push({
        pathname: '/login',
      });
    };

    logout();
  } */

  return <Dash authToken={token} decoded={decodedToken} />;
};

export default dashboard;
