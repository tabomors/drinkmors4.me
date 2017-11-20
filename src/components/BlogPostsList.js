import React from 'react';
import PropTypes from 'prop-types';

const BlogPostsList = ({ list }) => (
  <ul>{list.map(item => <li key={item.title}>{item.title}</li>)}</ul>
);

BlogPostsList.defaultProps = {
  list: [],
};

BlogPostsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })),
};

export default BlogPostsList;
