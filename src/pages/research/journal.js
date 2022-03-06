import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function Journal({ data }) {
  const intl = useIntl()
  let { journal } = data
  journal = filterContent(journal.nodes, intl.locale)

  return (
    <Layout>
      <div className='p-8 lg:p-16'>
        <section id='journal' className='space-y-3'>
            {/* <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'research.journal' }) }</h1> */}
            <div className='space-y-3 text-sm text-justify md-text' dangerouslySetInnerHTML={{ __html: journal.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query Journal {
    journal: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "research-journal"}}}
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