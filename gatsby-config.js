module.exports = {
  siteMetadata: {
    socials: [
      {
        label: 'stas.morozevich@gmail.com',
        href: 'mailto:stas.morozevich@gmail.com',
        icon: 'email.svg',
      },
      {
        label: 'github.com/tabomors',
        href: 'https://github.com/tabomors',
        icon: 'github.svg',
      },
      {
        label: 'linkedin.com/stanislav-morozevich',
        href: 'https://www.linkedin.com/in/stanislav-morozevich-1918b4115/',
        icon: 'linkedin.svg',
      },
    ],
    homepage: {
      title: 'Stas Morozevich',
      text: `
        👋! I’m a software developer based in Brest, Belarus. Doing mostly web, front-end, in particular, sometimes I get into the back-end. 
        Constantly trying to increase the maintainability of the code by decreasing its complexity (hopefully it works out) 
        and probably have good enough ability to research. 
        Currently, I am working as a front-end developer with clients from Europe in the tourism sphere. 
        If you are interested in more please hit me up. There are some links related to me:
      `,
      links: [],
    },
    title: "Stas Morozevich' site",
    description:
      'I’m a software developer based in Brest, Belarus. Doing web, front-end, back-end.',
    author: '@tabomors',
  },
  plugins: [
    'gatsby-plugin-preact',
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
        name: 'tabomors-site',
        short_name: 'tabomors',
        start_url: '/',
        background_color: '#262626',
        theme_color: '#262626',
        display: 'minimal-ui',
        icon: 'src/images/sloth-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
