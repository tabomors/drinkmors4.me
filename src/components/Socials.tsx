/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  SocialsQueryQuery,
  SiteSiteMetadataSocials,
} from '../../graphql-types';

const hideText: SxStyleProp = {
  textIndent: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const socialsListStyles: SxStyleProp = {
  padding: 0,
  display: 'flex',
  listStyleType: 'none',
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

const SocialLink: React.FC<SiteSiteMetadataSocials> = ({
  href,
  label,
  icon,
}) => {
  return (
    <a href={href} sx={socialLinkStyles} title={label}>
      <div sx={imageContainer}>
        <img src={`/icons/${icon}`} />
      </div>
    </a>
  );
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
      {data.site.siteMetadata.socials.map((social) => {
        return (
          <div key={social.href}>
            {social.href.startsWith('/') ? (
              <Link to={social.href}>
                <SocialLink label={social.label} icon={social.icon} />
              </Link>
            ) : (
              <SocialLink {...social} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
