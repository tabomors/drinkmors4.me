module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    nav: [
      {
        name: 'Projects',
        path: '/projects',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: 'Contact me',
        path: '/contacts',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
