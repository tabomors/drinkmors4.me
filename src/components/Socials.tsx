import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SocialsQueryQuery } from '../../graphql-types';
import styled from 'astroturf';

const MOBILE_WIDTH = '800px'

const SocialsList = styled.ul`
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  list-style-type: none;

  @media only screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const SocialItem = styled.li`
  flex: 1;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;

  span {
    font-size: 13px;
    white-space: nowrap;
  }
`;

const ImageContainer = styled.div`
  width: 35px;
  margin-right: 10px;
  img {
    display: block;
    max-width: 100%;
  }
`;

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
    <SocialsList>
      {data.site.siteMetadata.socials.map(({ href, icon, label }) => {
        return (
          <SocialItem>
            <SocialLink href={href}>
              <ImageContainer>
                <img src={`/icons/${icon}`} />
              </ImageContainer>
              <span>{label}</span>
            </SocialLink>
          </SocialItem>
        );
      })}
    </SocialsList>
  );
};

export default Socials;
