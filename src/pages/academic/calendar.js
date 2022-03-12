import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function Calendar({ data }) {
  const intl = useIntl()
  let { calendar } = data
  calendar = filterContent(calendar.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'academic.calendar' })} />
      <div className='p-8 lg:p-10'>
        <section id='calendar' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'academic.calendar' }) }</h1>
            <div className='space-y-3 text-sm text-justify markdown' dangerouslySetInnerHTML={{ __html: calendar.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query Calendar {
    calendar: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "academic-calendar"}}}
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