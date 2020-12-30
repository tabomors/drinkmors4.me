exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const cvTemplate = require.resolve(`./src/templates/CvTemplate.tsx`);
  const cvsResult = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "cv" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (cvsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  cvsResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: cvTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};
