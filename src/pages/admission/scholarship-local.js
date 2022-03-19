import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function ScholarshipLocal({ data }) {
  const intl = useIntl()
  let { scholarshipLocal } = data
  scholarshipLocal = filterContent(scholarshipLocal.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'admission.scholarshipLocal' })} />
      <div className='p-8 lg:p-10'>
        <section id='scholarship-local'>
          <HeadingOne>
            { intl.formatMessage({ id: 'admission.scholarshipLocal' }) }
          </HeadingOne>
          <div className='text-justify markdown' dangerouslySetInnerHTML={{ __html: scholarshipLocal.html }} />
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query ScholarshipLocal {
    scholarshipLocal: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "admission-scholarship-local"}}}
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