/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
        name: `admissions`,
        path: `${__dirname}/src/texts/admissions`,
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
  ],
  siteMetadata: {
    title: 'Pendidikan Ilmu Pengetahuan Sosial',
    description: 'Website Resmi Pendidikan Ilmu Pengetahuan Sosial Universitas Pendidikan Indonesia',
    copyright: '2021 Iqdam Musayyad'
  }
}
