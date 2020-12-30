/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Layout, { Copyright, containerStyles } from '../components/Layout';
import SEO from '../components/Seo';
import { HomepageQueryQuery } from '../../graphql-types';
import Socials from '../components/Socials';

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
    }
  `);

  return (
    <Layout
      headerContent={
        <h1 sx={{ ...containerStyles, color: 'primary', py: 3 }}>
          {data.site.siteMetadata.homepage.title}
        </h1>
      }
      footerContent={
        <div
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Socials />
          <Copyright />
        </div>
      }
    >
      <SEO title="About me" />
      <p sx={{ margin: 0 }}>{data.site.siteMetadata.homepage.text}</p>
    </Layout>
  );
};

export default IndexPage;
