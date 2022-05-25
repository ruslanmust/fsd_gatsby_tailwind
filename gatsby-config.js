if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

module.exports = {
  siteMetadata: {
    title: `ALRT-FSN`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-image', 
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sharp', 
    'gatsby-transformer-sharp', 
    'gatsby-plugin-postcss', 
    'gatsby-plugin-root-import',
    'gatsby-plugin-sitemap',
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  }]
};