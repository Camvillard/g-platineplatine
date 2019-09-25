require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `platine`,
    description: `lisez, écoutez, faites tourner`,
    author: `cdltbisou`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // sass styles
    `gatsby-plugin-sass`,
    {
     resolve: `gatsby-source-wordpress`,
     options: {
       baseUrl: "contenu.platineplatine.com",
       protocol: "https",
       hostingWPCOM: false,
       useACF: true,
       verboseOutput: true,
       auth: {
         wpcom_app_clientSecret: process.env.GATSBY_WORDPRESS_CLIENT_SECRET,
         wpcom_app_clientId: process.env.GATSBY_WORDPRESS_CLIENT_ID,
         wpcom_user: process.env.GATSBY_WORDPRESS_USER,
         wpcom_pass: process.env.GATSBY_WORDPRESS_PASSWORD,
       },
       includedRoutes: [
       "**/categories",
       "**/posts",
       "**/pages",
       "**/comments",
       "**/media",
       "**/users",
       ],
     },
    },
    // using svg
    {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /images/
          }
        }
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `platine | lisez, écoutez, faites tourner`,
        short_name: `platine`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/platine_favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://instagram.us20.list-manage.com/subscribe/post?u=e706a2e0903a6884875d845cd&amp;id=2095cd4f8a'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
