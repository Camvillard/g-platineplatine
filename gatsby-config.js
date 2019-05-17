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
    // {
    //  resolve: `gatsby-source-wordpress`,
    //  options: {
    //    baseUrl: process.env.WORDPRESS_BASE_URL,
    //    protocol: process.env.WORDPRESS_PROTOCOL,
    //    hostingWPCOM: (process.env.WORDPRESS_HOSTING_WPCOM === 'true'),
    //    useACF: (process.env.WORDPRESS_USE_ACF === 'true'),
    //    verboseOutput: (process.env.WORDPRESS_VERBOSE_OUTPUT === 'true'),
    //    auth: {
    //      wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
    //      wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
    //      wpcom_user: process.env.WORDPRESS_USER,
    //      wpcom_pass: process.env.WORDPRESS_PASSWORD,
    //    },
    //    includedRoutes: [
    //      "**/posts",
    //      "**/pages",
    //      "**/tags",
    //    ],
    //  },
    //  },
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
        icon: `src/images/platine_logo-mini.png`, // This path is relative to the root of the site.
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
