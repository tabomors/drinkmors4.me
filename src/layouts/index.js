import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';

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
      <div>{children()}</div>
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
