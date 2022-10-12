import React from 'react';
import Dash from '../../components/Dash/Dash';
import { getCookie } from 'cookies-next';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = ({ req, res }: any) => {
  const token = getCookie('MyTokenCookie', { req, res });

  return { props: { token } };
};

const dashboard = ({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Dash authToken={token} />;
};

export default dashboard;
