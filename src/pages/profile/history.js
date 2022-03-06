import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function History({ data }) {
  const intl = useIntl()
  let { history } = data
  history = filterContent(history.nodes, intl.locale)

  return (
    <Layout>
      <div className='p-8 lg:p-16'>
        <section id='history' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'profile.history' }) }</h1>
            <div className='space-y-3 text-sm text-justify md-text' dangerouslySetInnerHTML={{ __html: history.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query History {
    history: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "profile-history"}}}
    ) {
      nodes {
        html
        frontmatter {
          lang
        }
      }
    }
  }
`