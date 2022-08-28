import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  BurgerMenu,
  BurgerMenuContainer,
  HeaderAppName,
  HeaderButton,
  HeaderContainer,
  HeaderNavContainer,
  LinkRouter,
} from './styles';

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderContainer hidden={menu}>
      <HeaderAppName>Utec Timestamp</HeaderAppName>

      <BurgerMenuContainer>
        <BurgerMenu onClick={handleMenu}>
          <AiOutlineMenu />
        </BurgerMenu>
      </BurgerMenuContainer>

      <HeaderNavContainer hidden={menu}>
        <Link href='/dashboard' passHref>
          <LinkRouter>Home</LinkRouter>
        </Link>

        <Link href='/permissions' passHref>
          <LinkRouter>Permissions</LinkRouter>
        </Link>

        <Link href='/' passHref>
          <LinkRouter>Teachers</LinkRouter>
        </Link>
      </HeaderNavContainer>

      <HeaderButton hidden={menu}>Logout</HeaderButton>
    </HeaderContainer>
  );
};

export default Header;
