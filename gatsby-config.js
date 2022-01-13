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
  ],
  siteMetadata: {
    title: 'Pendidikan Ilmu Pengetahuan Sosial',
    description: 'Website Resmi Pendidikan Ilmu Pengetahuan Sosial Universitas Pendidikan Indonesia',
    copyright: '2021 Iqdam Musayyad'
  }
}
