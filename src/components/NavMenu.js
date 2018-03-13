import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const NavMenu = ({ items }) => (
  <List>
    {items.map(({ name, path }) => (
      <Li key={name}>
        <Link to={path}>{name}</Link>
      </Li>
      ))}
  </List>
);

NavMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default NavMenu;
