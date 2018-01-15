import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const BlogPostsList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.title}>
        <Link to={item.slug}>
          {item.title} | {item.date} | {item.slug}
        </Link>
      </li>
    ))}
  </ul>
);

BlogPostsList.defaultProps = {
  list: []
};

BlogPostsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  )
};

export default BlogPostsList;
