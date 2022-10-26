import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
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

const Header = ({ decoded }: any) => {
  const router = useRouter();
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const logout = async () => {
    await axios.post('/api/auth/logout');
    router.push({
      pathname: '/login',
    });
  };

  return (
    <>
      {decoded.rol === 'admin' ? (
        <HeaderContainer hidden={menu}>
          <HeaderAppName>Utec Timestamp</HeaderAppName>

          <BurgerMenuContainer>
            <BurgerMenu onClick={handleMenu}>
              <AiOutlineMenu />
            </BurgerMenu>
          </BurgerMenuContainer>

          <HeaderNavContainer hidden={menu}>
            <Link href='/private/dashboard' passHref>
              <LinkRouter>Home</LinkRouter>
            </Link>

            <Link href='/private/permissions' passHref>
              <LinkRouter>Permissions</LinkRouter>
            </Link>

            <Link href='/private/users' passHref>
              <LinkRouter>Teachers</LinkRouter>
            </Link>
          </HeaderNavContainer>

          <HeaderButton onClick={() => logout()} hidden={menu}>
            Logout
          </HeaderButton>
        </HeaderContainer>
      ) : decoded.rol === 'teacher' ? (
        <HeaderContainer hidden={menu}>
          <HeaderAppName>Utec Timestamp</HeaderAppName>

          <BurgerMenuContainer>
            <BurgerMenu onClick={handleMenu}>
              <AiOutlineMenu />
            </BurgerMenu>
          </BurgerMenuContainer>

          <HeaderNavContainer hidden={menu}>
            <Link href='/teachers/dashboard' passHref>
              <LinkRouter>Home</LinkRouter>
            </Link>

            <Link href='/teachers/emergency' passHref>
              <LinkRouter>Emergency</LinkRouter>
            </Link>
          </HeaderNavContainer>

          <HeaderButton onClick={() => logout()} hidden={menu}>
            Logout
          </HeaderButton>
        </HeaderContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
