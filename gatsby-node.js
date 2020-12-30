exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const cvTemplate = require.resolve('./src/templates/CvTemplate.tsx');
  const res = await graphql(`
    {
      cvs: allMarkdownRemark(filter: { frontmatter: { type: { eq: "cv" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      blogPosts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog-post" } } }
      ) {
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
  if (res.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  res.data.cvs.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: cvTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });

  res.data.blogPosts.edges.forEach(({ node }) => {
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
