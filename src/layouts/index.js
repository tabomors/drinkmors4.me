import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import Header from '../components/Header';
import bg from '../assets/images/dark-triangles.png';


// eslint-disable-next-line
const globalStyles = injectGlobal`
  *,
  *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-image: url('${bg}');
    padding: 15px;
  }

  a {
    text-decoration: none;
  }
`;

const MainContainer = styled.main`
  max-width: 750px;
  margin: auto;
  background-color: white;
  padding: 30px 30px 100px 30px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-bottom-left-radius: 50% 10%;
  border-bottom-right-radius: 50% 10%;
`;

const TemplateWrapper = ({ children, data }) => {
  const { site: { siteMetadata: { nav } } } = data;

  return (
    <div>
      <Helmet
        title="drinkMors4.me"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header nav={nav} />
      <MainContainer>{children()}</MainContainer>
    </div>
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
