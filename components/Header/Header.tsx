import Link from 'next/link';
import React from 'react';
import {
  AppName,
  AppNameContainer,
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
  LinkRouter,
  NavContainer,
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <AppNameContainer>
        <AppName>Utec Timestamp</AppName>
      </AppNameContainer>

      <NavContainer>
        <Link href='/' passHref>
          <LinkRouter>Home</LinkRouter>
        </Link>
        <Link href='/' passHref>
          <LinkRouter>Permissions</LinkRouter>
        </Link>
        <Link href='/' passHref>
          <LinkRouter>Teachers</LinkRouter>
        </Link>
      </NavContainer>

      <HeaderButtonContainer>
        <HeaderButton>Logout</HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
