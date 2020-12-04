/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Layout, { Copyright } from '../components/Layout';
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
      footerContent={
        <div sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Socials />
          <Copyright />
        </div>
      }
    >
      <SEO title="About me" />
      <h1 sx={{ color: 'primary' }}>{data.site.siteMetadata.homepage.title}</h1>
      <p>{data.site.siteMetadata.homepage.text}</p>
    </Layout>
  );
};

export default IndexPage;
