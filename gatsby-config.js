module.exports = {
  siteMetadata: {
    title: 'Dev Day 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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
        spaceId: `wufm80vssyv2`,
        accessToken: `aa8416267bc238405ede287575fd0097b586563c5e004771edaf0ef7081a67d6`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: "gatsby-source-cloudinary",
      options: {
        api_key: "367738384345219",
        api_secret: "vdrGaqPCUv0WyMHz75nJtA76uoA",
        cloud_name: "turbinekreuzberg",
      },
    }
    
  ],
};
