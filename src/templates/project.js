import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => {
  const project = data.markdownRemark;
  return (
    <div>
      <h1>{project.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
  );
};

Project.propTypes = {};

export default Project;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
