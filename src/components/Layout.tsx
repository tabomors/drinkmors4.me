import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import styled from 'astroturf';
import { SiteTitleQueryQuery } from '../../graphql-types';

const Container = styled('div')`
  max-width: 800px;
  margin: auto;
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </Container>
    </>
  );
};

export default Layout;
