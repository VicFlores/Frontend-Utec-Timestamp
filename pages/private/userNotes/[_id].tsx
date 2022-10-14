import React from 'react';
import { getCookie } from 'cookies-next';
import { InferGetServerSidePropsType } from 'next';
import jwt from 'jsonwebtoken';
import SpecificsPermissions from '../../../components/SpecificsPermissions/SpecificsPermissions';

export const getServerSideProps = ({ req, res }: any) => {
  const token: any = getCookie('MyTokenCookie', { req, res });
  const decodedToken = jwt.decode(token);

  return { props: { token, decodedToken } };
};

const userNotes = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <SpecificsPermissions authToken={token} decoded={decodedToken} />;
};

export default userNotes;
