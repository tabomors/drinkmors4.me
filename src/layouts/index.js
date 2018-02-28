import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import Header from '../components/Header';

// eslint-disable-next-line
const globalStyles = injectGlobal`
  *,
  *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const FullHeightWrapper = styled.div`
  height: 100vh;
`;

const MainContainer = styled.main`
  max-width: 750px;
  margin: auto;
`;

const TemplateWrapper = ({ children, data }) => {
  const { site: { siteMetadata: { nav } } } = data;

  return (
    <FullHeightWrapper>
      <Helmet
        title="drinkMors4.me"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header nav={nav} />
      <MainContainer>{children()}</MainContainer>
    </FullHeightWrapper>
  );
};

// TODO: add prop-type for data
TemplateWrapper.propTypes = {
  data: PropTypes.any,
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        nav {
          name
          path
        }
      }
    }
  }
`;
