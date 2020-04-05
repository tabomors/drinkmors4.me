module.exports = {
  siteMetadata: {
    homepage: {
      title: 'Stas Morozevich',
      text: `
        👋! I’m a software developer based in Brest, Belarus. Doing mostly web, frontend, in particular, sometimes I get into the backend. 
        Constantly trying to increase the maintainability of the code by decreasing its complexity (hopefully it works out) 
        and probably have good enough ability to research. 
        Currently, I am working as a frontend developer with clients from Europe in the tourism sphere. 
        If you are interested in more please hit me up. There are some links related to me:
      `,
      links: [],
    },
    title: "Personal site of Stas' Morozevich",
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@tabomors',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-astroturf',
      options: {
        tagName: 'css',
        styledTag: 'styled',
        extension: '.module.css',
      },
    },

    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
