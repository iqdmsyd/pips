const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/"}}) {
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

  const newsPostTemplate = path.resolve(`src/templates/news-post.js`)
  result.data.allMarkdownRemark.nodes.forEach(node => {
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