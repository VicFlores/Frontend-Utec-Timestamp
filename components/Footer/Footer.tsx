import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from 'react-icons/ai';
import { ThemeProvider } from 'styled-components';
import {
  FooterContainer,
  FooterLinks,
  FooterLinksContainer,
  LinkName,
  LinkRouter,
  SocialMedia,
} from './styles';

const Footer: NextPage<{ margin: string }> = ({ margin }) => {
  return (
    <FooterContainer theme={{ margin }}>
      <FooterLinksContainer>
        <FooterLinks>
          <Link href='/' passHref>
            <LinkRouter>Developed by: Vic Flores</LinkRouter>
          </Link>
        </FooterLinks>

        <FooterLinks>
          <Link href='/' passHref>
            <LinkRouter>About me</LinkRouter>
          </Link>
        </FooterLinks>

        <FooterLinks>
          <Link href='/' passHref>
            <LinkRouter>App Info</LinkRouter>
          </Link>
        </FooterLinks>

        <FooterLinks>
          <Link href='/' passHref>
            <LinkRouter>All rights reserved © 2022</LinkRouter>
          </Link>
        </FooterLinks>

        <ThemeProvider theme={{ margin: '0 15px' }}>
          <SocialMedia>
            <AiFillGithub fontSize={32} />
            <Link href='/' passHref>
              <LinkRouter>
                <LinkName>Github</LinkName>
              </LinkRouter>
            </Link>
          </SocialMedia>

          <SocialMedia>
            <AiOutlineInstagram fontSize={32} />
            <Link href='/' passHref>
              <LinkRouter>
                <LinkName>Instagram</LinkName>
              </LinkRouter>
            </Link>
          </SocialMedia>

          <SocialMedia>
            <AiOutlineLinkedin fontSize={32} />
            <Link href='/' passHref>
              <LinkRouter>
                <LinkName>Linkedin</LinkName>
              </LinkRouter>
            </Link>
          </SocialMedia>

          <SocialMedia>
            <AiOutlineFacebook fontSize={32} />
            <Link href='/' passHref>
              <LinkRouter>
                <LinkName>Facebook</LinkName>
              </LinkRouter>
            </Link>
          </SocialMedia>
        </ThemeProvider>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
