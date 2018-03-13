import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const LogoWrapper = styled.h1`
  margin: 0;
  padding-bottom: 15px;
`;

const LogoText = styled.strong`
  font-family: 'sans-serif';
  line-height: 1;
`;

const StyledLink = styled(Link)`
  display: flex;
  color: #000;
  align-items: flex-end;

  &:visited {
    color: #000;
  }
`;

const SlashSign = styled.span`
  font-size: 2.5em;
`;

const Logo = () => (
  <LogoWrapper>
    <StyledLink to="/">
      <LogoText><SlashSign>/</SlashSign>home</LogoText>
    </StyledLink>
  </LogoWrapper>
);

export default Logo;
