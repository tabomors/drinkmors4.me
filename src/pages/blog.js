import React from 'react';
import PropTypes from 'prop-types';
import BlogPostsList from '../components/BlogPostsList';

const Blog = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const blogPosts = edges.map(edge => {
    const { node: { frontmatter: { title } } } = edge;
    return {
      title,
    };
  });
  return (
    <div>
      <h1>Blog</h1>
      <BlogPostsList list={blogPosts} />
    </div>
  );
};

// TODO: add proptype
Blog.propTypes = {
  data: PropTypes.any,
};

export default Blog;

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog-post" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
          }
          excerpt
        }
      }
    }
  }
`;
