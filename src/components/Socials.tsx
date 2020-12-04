/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SocialsQueryQuery } from '../../graphql-types';

const hideText: SxStyleProp = {
  textIndent: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const socialsListStyles: SxStyleProp = {
  padding: 0,
  display: 'flex',
  listStyleType: 'none'
};

const socialLinkStyles: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  span: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
    ...hideText,
  },
};

const imageContainer: SxStyleProp = {
  width: '35px',
  marginRight: '10px',
  img: {
    display: 'block',
    maxWidth: '100%',
  },
};

const Socials: React.FC = () => {
  const data = useStaticQuery<SocialsQueryQuery>(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
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
    <div sx={socialsListStyles}>
      {data.site.siteMetadata.socials.map(({ href, icon, label }) => {
        return (
          <div key={href}>
            <a href={href} sx={socialLinkStyles} title={label}>
              <div sx={imageContainer}>
                <img src={`/icons/${icon}`} />
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
