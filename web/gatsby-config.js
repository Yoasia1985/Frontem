// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Frontem`,
    siteUrl: `https://frontem.netlify.app`,
    description: `Miro's personal blog`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
  ],
};
