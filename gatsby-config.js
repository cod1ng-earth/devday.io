let activeEnv = process.env.ACTIVE_ENV;

if (!activeEnv) {
  activeEnv = "development";
}

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: 'Dev Day 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      },
    },
    {
      resolve: "gatsby-source-cloudinary",
      options: {
        api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
        api_secret: process.env.GATSBY_CLOUDINARY_API_SECRET,
        cloud_name: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
      },
    }
    
  ],
};
