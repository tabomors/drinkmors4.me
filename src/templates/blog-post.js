import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ data }) => {
  const blogPost = data.markdownRemark;
  return (
    <div>
      <h1>{blogPost.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogPost.html }} />
    </div>
  );
};

BlogPost.propTypes = {};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
