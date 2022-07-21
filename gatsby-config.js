require("dotenv").config({ path: `.env` });
module.exports = {
  siteMetadata: {
    title: `usama_theme`,
    description: `Going from react theme to gatsby site`,
    author: ``,
    siteUrl: `https://themeintegration.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
    // "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {

      
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#a50f20`,
        display: `standalone`,
        icon: `static/assets/images/logo.png`,
      },
    },
  
    `gatsby-transformer-json`,
    "gatsby-plugin-sharp",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

{
  resolve: `gatsby-plugin-offline`,
  options: {
    // workboxConfig: {
    //   importWorkboxFrom: `cdn`,
    // },
    appendScript: require.resolve(`./src/custom-sw.js`),
  },
},

    
  
  ],
};

