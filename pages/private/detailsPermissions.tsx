import React from 'react';
import SpecificsPermissions from '../../components/SpecificsPermissions/SpecificsPermissions';
import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';

import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = ({ req, res }: any) => {
  const token: any = getCookie('MyTokenCookie', { req, res });
  const decodedToken = jwt.decode(token);

  return { props: { token, decodedToken } };
};

const detailsPermissions = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <SpecificsPermissions authToken={token} decoded={decodedToken} />;
};

export default detailsPermissions;
