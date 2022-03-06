import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function ScholarshipInter({ data }) {
  const intl = useIntl()
  let { scholarshipInter } = data
  scholarshipInter = filterContent(scholarshipInter.nodes, intl.locale)

  return (
    <Layout>
      <div className='p-8 lg:p-16'>
        <section id='scholarship-local' className='space-y-3'>
          <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'admission.scholarshipInter' }) }</h1>
          <div className='space-y-3 text-sm text-justify md-text' dangerouslySetInnerHTML={{ __html: scholarshipInter.html }} />
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query ScholarshipInter {
    scholarshipInter: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "admission-scholarship-inter"}}}
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