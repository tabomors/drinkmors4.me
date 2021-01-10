const puppeteer = require('puppeteer');
const { resolve } = require('path');
const fs = require('fs');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const cvTemplate = require.resolve('./src/templates/CvTemplate.tsx');
  const blogPostTemplate = require.resolve(
    './src/templates/BlogPostTemplate.tsx'
  );
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
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};

exports.createPagesStatefully = async ({ graphql }) => {
  const res = await graphql(`
    {
      cvs: allMarkdownRemark(filter: { frontmatter: { type: { eq: "cv" } } }) {
        edges {
          node {
            html
            frontmatter {
              slug
              pdfName
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

  const browser = await puppeteer.launch();

  try {
    for (let edge of res.data.cvs.edges) {
      const { node } = edge;
      const page = await browser.newPage();
      await page.setContent(node.html);
      const staticFolder = resolve(process.cwd(), 'public/static');

      if (!fs.existsSync(staticFolder)) {
        fs.mkdirSync(staticFolder);
      }

      const path = resolve(staticFolder, `${node.frontmatter.pdfName}.pdf`);
      await page.emulateMediaType('screen');
      await page.pdf({
        path,
        format: 'A4',
        scale: 0.8,
        margin: { left: 30, right: 30, top: 15 },
      });
    }
  } catch (error) {
    reporter.panicOnBuild('Error while generating pdf for cv.', error);
  } finally {
    await browser.close();
  }
};
