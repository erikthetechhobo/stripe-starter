/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby E-commerce Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price", "Sku", "Product"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
  ],
}
