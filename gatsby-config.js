module.exports = {
  siteMetadata: {
    title: `Among Kuruption`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Dante Interactions LLC`,
    client: `Among Kuruption LLC`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SCAPI",
        fieldName: "soundcloudapi",
        url: "https://ak-webapp-graphql.herokuapp.com/graphql",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TAPI",
        fieldName: "twitterapi",
        url: "https://twitter-graphql.herokuapp.com/",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
