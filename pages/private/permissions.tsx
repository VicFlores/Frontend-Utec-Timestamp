import React from 'react';
import Allowances from '../../components/Allowances/Allowances';
import { getCookie } from 'cookies-next';

import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = ({ req, res }: any) => {
  const token = getCookie('MyTokenCookie', { req, res });

  return { props: { token } };
};

const permissions = ({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Allowances authToken={token}/>;
};

export default permissions;
