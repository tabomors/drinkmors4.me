const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'data' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.map(({ node }) =>
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.frontmatter.type}.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    }));
};
