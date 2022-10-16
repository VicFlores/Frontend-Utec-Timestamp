import React from 'react';
import { getCookie } from 'cookies-next';
import { InferGetServerSidePropsType } from 'next';
import jwt from 'jsonwebtoken';
import SpecificsPermissions from '../../../components/SpecificsPermissions/SpecificsPermissions';
import { IPayload } from '../../../types/TPayload';
import Layout from '../../../components/Layout/Layout';

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

const userNotes = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <SpecificsPermissions authToken={token} decoded={decodedToken} />
    </Layout>
  );
};

export default userNotes;
