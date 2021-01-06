/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout, {
  CommonFooterContent,
  containerStyles,
} from '../components/Layout';
import SEO from '../components/Seo';

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
      <SEO title={'CV'} />
      <div sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a href={`/static/${frontmatter.pdfName}.pdf`} target="_blank">
          Download CV 📥
        </a>
      </div>
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
        pdfName
      }
    }
  }
`;

export default CvTemplate;
