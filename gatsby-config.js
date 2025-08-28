/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://danutakoziello-doherty.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [320, 640, 960, 1280, 1920],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lotus-flower.webp`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MMMJDLSW",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://danutakoziello-doherty.co.uk",
        sitemap: "https://danutakoziello-doherty.co.uk/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => "https://danutakoziello-doherty.co.uk",
      },
    },
  ]
}
