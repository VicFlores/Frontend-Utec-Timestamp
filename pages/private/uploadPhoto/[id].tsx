import React from 'react';
import { getCookie } from 'cookies-next';
import { InferGetServerSidePropsType } from 'next';
import jwt from 'jsonwebtoken';
import { IPayload } from '../../../types/TPayload';
import Layout from '../../../components/Layout/Layout';
import UploadImages from '../../../components/UploadImages/UploadImages';

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

const uploadPhotos = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout decoded={decodedToken}>
      <UploadImages authToken={token} decoded={decodedToken} />
    </Layout>
  );
};

export default uploadPhotos;
