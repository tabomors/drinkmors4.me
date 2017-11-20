import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = ({ nav }) => (
  <header>
    <nav>
      <Logo />
      <NavMenu items={nav} />
    </nav>
  </header>
);

Header.defaultProps = {
  nav: [],
};

Header.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Header;
