require('dotenv').config();

module.exports = {
  siteMetadata: {
    socials: [
      {
        label: 'My CV',
        href: '/cv/smarazevich',
        icon: 'cv.svg',
      },
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
        label: 'linkedin.com/stanislau-marazevich',
        href: 'https://www.linkedin.com/in/stanislau-marazevich-1918b4115/',
        icon: 'linkedin.svg',
      },
    ],
    homepage: {
      title: 'Stas Marazevich',
      text: `
        👋! I’m a software developer based in Brest, Belarus. Doing mostly web but interested in many aspects of software development. 
        Constantly trying to increase the maintainability of the code by decreasing its complexity (hopefully it works out) 
        and probably have good enough ability to research. 
        Currently, I am on sabbatical leave 🌴 doing some pet projects and learning new things. 
        Hit me up if you have any questions!
      `,
      links: [],
    },
    title: "Stas Marazevich' site",
    description:
      'I’m a software developer. Doing mostly JS (Node.js, React)...',
    author: '@tabomors',
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen',

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
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: '@theme-ui/preset-swiss',
      },
    },
    {
      resolve: 'gatsby-github-md-gists',
      options: {
        author: process.env.author,
        token: process.env.token,
      },
    },
    'gatsby-transformer-remark',
  ],
};
