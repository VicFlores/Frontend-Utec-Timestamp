import React from 'react';
import TeacherEmergency from '../../components/TeacherEmergency/TeacherEmergency';
import jwt from 'jsonwebtoken';
import { getCookie } from 'cookies-next';
import { InferGetServerSidePropsType } from 'next';
import Layout from '../../components/Layout/Layout';

export const getServerSideProps = ({ req, res }: any) => {
  const token: any = getCookie('MyTokenCookie', { req, res });
  const decodedToken = jwt.decode(token);

  return { props: { token, decodedToken } };
};

const emergency = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout decoded={decodedToken}>
      <TeacherEmergency authToken={token} decoded={decodedToken} />
    </Layout>
  );
};

export default emergency;
