import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function Alumni({ data }) {
  const intl = useIntl()
  let { alumni } = data
  alumni = filterContent(alumni.nodes, intl.locale)

  return (
    <Layout>
      <div className='p-8 lg:p-16'>
        <section id='student-mobility' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'affairs.alumni' }) }</h1>
            <div className='space-y-3 text-sm text-justify md-text' dangerouslySetInnerHTML={{ __html: alumni.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query Alumni {
    alumni: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "affairs-alumni"}}}
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