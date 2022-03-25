import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function Journal({ data }) {
  const intl = useIntl()
  let { journal } = data
  journal = filterContent(journal.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'research.journal' })} />
      <div className='p-8 lg:p-10'>
        <section id='journal'>
          <HeadingOne>
            { intl.formatMessage({ id: 'research.journal' }) }
          </HeadingOne>
            <div className='text-justify markdown' dangerouslySetInnerHTML={{ __html: journal.html }} />
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