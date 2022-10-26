import { getCookie } from 'cookies-next';
import { InferGetServerSidePropsType } from 'next';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import TeacherDash from '../../components/TeacherDash/TeacherDash';
import jwt from 'jsonwebtoken';

export const getServerSideProps = ({ req, res }: any) => {
  const token: any = getCookie('MyTokenCookie', { req, res });
  const decodedToken = jwt.decode(token);

  return { props: { token, decodedToken } };
};

const dashboard = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout decoded={decodedToken}>
      <TeacherDash authToken={token} decoded={decodedToken} />
    </Layout>
  );
};

export default dashboard;
