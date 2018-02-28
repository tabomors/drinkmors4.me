import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';
import NavMenu from './NavMenu';

const HeaderElement = styled.header`
  max-width: 750px;
  margin: auto;
`;

const Header = ({ nav }) => (
  <HeaderElement>
    <nav>
      <Logo />
      <NavMenu items={nav} />
    </nav>
  </HeaderElement>
);

Header.defaultProps = {
  nav: [],
};

Header.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Header;
