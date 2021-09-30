require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://lucasnramos.com",
    title: "Lucas Nogueira Ramos",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CF_ACCESS_TOKEN,
        spaceId: process.env.CF_SPACE_ID,
        host: process.env.CF_HOST,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"
  ],
};
