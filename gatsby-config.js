require("dotenv").config();
const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    siteUrl: "https://lucasnramos.com",
    title: "Lucas Nogueira Ramos",
    languages
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
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
  ],
};
