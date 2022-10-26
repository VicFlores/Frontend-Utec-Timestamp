import React from 'react';
import SpecificsPermissions from '../../components/SpecificsPermissions/SpecificsPermissions';
import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';

import { InferGetServerSidePropsType } from 'next';
import { IPayload } from '../../types/TPayload';
import Layout from '../../components/Layout/Layout';

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

const detailsPermissions = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout decoded={decodedToken}>
      <SpecificsPermissions authToken={token} decoded={decodedToken} />
    </Layout>
  );
};

export default detailsPermissions;
