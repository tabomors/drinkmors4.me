import React from 'react';
import PropTypes from 'prop-types';
import BlogPostsList from '../components/BlogPostsList';

const Blog = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const blogPosts = edges.map(edge => {
    const { node: { frontmatter: { title, date }, id, fields: { slug } } } = edge;
    return {
      id,
      title,
      date,
      slug
    };
  });
  return (
    <div>
      <h1>Blog</h1>
      <BlogPostsList list={blogPosts} />
    </div>
  );
};

Blog.defaultProps = {
  data: {}
};

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string
          }),
          id: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string
          })
        })
      }))
    })
  })
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
          excerpt,
          fields { 
            slug 
          }
        }
      }
    }
  }
`;
