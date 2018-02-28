import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  margin: auto;
`;

const NavMenu = ({ items }) => (
  <List>
    {items.map(({ name, path }) => (
      <li key={name}>
        <Link to={path}>{name}</Link>
      </li>
      ))}
  </List>
);

NavMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default NavMenu;
