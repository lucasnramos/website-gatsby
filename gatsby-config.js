require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://lucasnramos.com",
    title: "Lucas Nogueira Ramos",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"
  ],
};
