const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    {
      news_ID: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/content/news/"}, frontmatter: {lang: {eq: "id"}}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      allNews: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // news-list.js
  const { news_ID } = result.data
  const newsLitsTemplate = path.resolve("./src/templates/news-list.js")
  const perPage = 6
  const numPages = Math.ceil(news_ID.nodes.length / perPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i+1}`,
      component: newsLitsTemplate,
      context: {
        limit: perPage,
        skip: i * perPage,
        numPages,
        currentPage: i + 1,
      }
    })
  })

  // news-post.js
  const { allNews } = result.data
  const newsPostTemplate = path.resolve(`./src/templates/news-post.js`)
  allNews.nodes.forEach(node => {
    const { slug } = node.frontmatter
    const path = `/news/${slug}`
    createPage({
      path,
      component: newsPostTemplate,
      context: {
        slug
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}