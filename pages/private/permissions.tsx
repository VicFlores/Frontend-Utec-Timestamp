import React from 'react';
import Allowances from '../../components/Allowances/Allowances';
import jwt from 'jsonwebtoken';
import { getCookie } from 'cookies-next';

import { InferGetServerSidePropsType } from 'next';
import { IPayload } from '../../types/TPayload';

export const getServerSideProps = ({ req, res }: any) => {
  const token: any = getCookie('MyTokenCookie', { req, res });
  const decodedToken = jwt.decode(token);

  const decoded = decodedToken as unknown as IPayload;

  if (decoded.rol === 'teacher') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { token, decodedToken } };
};

const permissions = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Allowances authToken={token} decoded={decodedToken} />;
};

export default permissions;
