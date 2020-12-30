/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout, { containerStyles, CommonFooterContent } from '../components/Layout';
import SEO from '../components/Seo';
import { HomepageQueryQuery } from '../../graphql-types';

const IndexPage = () => {
  const data = useStaticQuery<HomepageQueryQuery>(graphql`
    query HomepageQuery {
      site {
        siteMetadata {
          homepage {
            title
            text
          }
          socials {
            label
            href
            icon
          }
        }
      }
      blog: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog-post" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              slug
              type
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <Layout
      headerContent={
        <h1 sx={{ ...containerStyles, py: 3 }}>
          {data.site.siteMetadata.homepage.title}
        </h1>
      }
      footerContent={
        <CommonFooterContent />
      }
    >
      <SEO title="About me" />
      <p sx={{ margin: 0 }}>{data.site.siteMetadata.homepage.text}</p>
      <ul>
        {data.blog.edges.map(({ node }, i) => {
          return (
            <li key={i}>
              <Link to={node.frontmatter.slug}>
                {node.frontmatter.title} | {node.frontmatter.date}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;
