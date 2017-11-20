import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const NavMenu = ({ items }) => (
  <ul>
    {items.map(({ name, path }) => (
      <li key={name}>
        <Link to={path}>{name}</Link>
      </li>
      ))}
  </ul>
);

NavMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default NavMenu;
