import React from 'react';
import PropTypes from 'prop-types';
import ProjectsPostsList from '../components/ProjectsList';

const Projects = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const projects = edges.map(edge => {
    const { node: { frontmatter: { title } } } = edge;
    return {
      title,
    };
  });
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsPostsList list={projects} />
    </div>
  );
};

// TODO: add proptype
Projects.propTypes = {
  data: PropTypes.any,
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
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
