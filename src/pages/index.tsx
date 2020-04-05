import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
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
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.homepage.title}</h1>
      <p>{data.site.siteMetadata.homepage.text}</p>
    </Layout>
  );
};

export default IndexPage;
