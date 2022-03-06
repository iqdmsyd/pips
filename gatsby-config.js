/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: 'article',
      queryParams: {
        // Populate all the fields
        populate: '*',
      },
    },
  ],
  singleTypes: [],
};

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-fontawesome-css',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/src/texts/home`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `profile`,
        path: `${__dirname}/src/texts/profile`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/texts/news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `announcements`,
        path: `${__dirname}/src/texts/announcements`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `admission`,
        path: `${__dirname}/src/texts/admission`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `research`,
        path: `${__dirname}/src/texts/research`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `academic`,
        path: `${__dirname}/src/texts/academic`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `affairs`,
        path: `${__dirname}/src/texts/affairs`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`id`, `en`],
        // language file path
        defaultLanguage: `id`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "noopener noreferrer"
          }
        }
        ]
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig
    }
  ],
  siteMetadata: {
    title: 'Pendidikan Ilmu Pengetahuan Sosial',
    description: 'Website Resmi Pendidikan Ilmu Pengetahuan Sosial Universitas Pendidikan Indonesia',
    copyright: '2021 Iqdam Musayyad'
  }
}
