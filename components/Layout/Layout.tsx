import React from 'react';
import { TLayout } from '../../types/TLayout';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children, show }: TLayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
