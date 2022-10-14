import React from 'react';
import Dash from '../../components/Dash/Dash';
import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = ({ req, res }: any) => {
  const token: any = getCookie('MyTokenCookie', { req, res });
  const decodedToken = jwt.decode(token);

  return { props: { token, decodedToken } };
};

const dashboard = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Dash authToken={token} decoded={decodedToken} />;
};

export default dashboard;
