import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';
import NavMenu from './NavMenu';

const HeaderElement = styled.header`
  max-width: 750px;
  margin: auto;
  padding: 15px;
  background: white;
  margin-bottom: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Header = ({ nav }) => (
  <HeaderElement>
    <Nav>
      <Logo />
      <NavMenu items={nav} />
    </Nav>
  </HeaderElement>
);

Header.defaultProps = {
  nav: [],
};

Header.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Header;
