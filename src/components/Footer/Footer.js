import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: 24961792'>24961792</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto: goelouaer@gmail.com'>goelouaer@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://www.linkedin.com/in/aymen-elouaer-9390b7189/' target="_blank">
            <AiFillLinkedin size="3rem" />

          </SocialIcons>
          <SocialIcons href='https://github.com/AymenElouaer' target="_blank">
            <AiFillGithub size="3rem" />

          </SocialIcons>
          <SocialIcons href='https://www.facebook.com/elouaer.aymen' target="_blank">
            <AiFillFacebook size="3rem" />

          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
