import React from 'react';
import { TLayout } from '../../types/TLayout';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children, decoded }: TLayout) => {
  return (
    <>
      <Header decoded={decoded} />
      {children}
      <Footer margin='90' />
    </>
  );
};

export default Layout;
