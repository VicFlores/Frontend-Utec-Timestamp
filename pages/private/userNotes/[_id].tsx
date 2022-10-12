import React from 'react';
import Notes from '../../../components/Notes/Notes';
import { getCookie } from 'cookies-next';
import { InferGetServerSidePropsType } from 'next';
import SpecificsPermissions from '../../../components/SpecificsPermissions/SpecificsPermissions';

export const getServerSideProps = ({ req, res }: any) => {
  const token = getCookie('MyTokenCookie', { req, res });

  return { props: { token } };
};

const userNotes = ({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <SpecificsPermissions authToken={token} />;
};

export default userNotes;
