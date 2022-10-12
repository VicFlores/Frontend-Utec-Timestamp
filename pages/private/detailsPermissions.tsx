import React from 'react';
import SpecificsPermissions from '../../components/SpecificsPermissions/SpecificsPermissions';
import { getCookie } from 'cookies-next';

import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = ({ req, res }: any) => {
  const token = getCookie('MyTokenCookie', { req, res });

  return { props: { token } };
};

const detailsPermissions = ({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <SpecificsPermissions authToken={token} />;
};

export default detailsPermissions;
