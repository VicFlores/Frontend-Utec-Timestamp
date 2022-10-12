import React from 'react';
import Teachers from '../../components/Teachers/Teachers';
import { getCookie } from 'cookies-next';

import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = ({ req, res }: any) => {
  const token = getCookie('MyTokenCookie', { req, res });

  return { props: { token } };
};

const users = ({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Teachers authToken={token} />;
};

export default users;
