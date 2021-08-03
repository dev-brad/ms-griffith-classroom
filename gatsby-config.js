/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Gracie Griffith",
    description: "Class website of Gracie Griffith",
    author: "@bradgriffith",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nothing You Could Do",
              variants: ["400"],
            },
            {
              family: "Open Sans",
              variants: ["400", "500", "600", "700"],
            },
            {
              family: "Red Hat Text",
              variants: ["400", "500", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `89cfnv0n8esi`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
