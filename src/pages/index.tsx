import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
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
    <Layout>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.homepage.title}</h1>
      <p>{data.site.siteMetadata.homepage.text}</p>
      <Socials />
    </Layout>
  );
};

export default IndexPage;
