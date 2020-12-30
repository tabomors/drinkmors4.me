/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout, {
  CommonFooterContent,
  containerStyles,
} from '../components/Layout';

const CvTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout
      footerContent={<CommonFooterContent />}
      headerContent={
        <div sx={{ ...containerStyles, pt: 3 }}>
          <Link to={'/'}>Home</Link>
        </div>
      }
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        type
      }
    }
  }
`;

export default CvTemplate;
