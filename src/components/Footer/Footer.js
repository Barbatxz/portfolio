import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+56-98697-3035">+56-98697-3035</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jcoronadodev@gmail.com?Subject=Work%Contact">jcoronadodev@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Developing incredible solutions with a wonderfull experiecne</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com'>
          <AiFillGithub size="3rem" />
          </SocialIcons>
        <SocialIcons href='https://www.instagram.com/gianni_coronado/'>
          <AiFillInstagram size="3rem" />
          </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/juan-coronado-05874a189/'>
          <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
