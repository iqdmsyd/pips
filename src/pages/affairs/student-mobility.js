import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function StudentMobility({ data }) {
  const intl = useIntl()
  let { studentMobility } = data
  studentMobility = filterContent(studentMobility.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'affairs.studentMobility' })} />
      <div className='p-8 lg:p-10'>
        <section id='student-mobility' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'affairs.studentMobility' }) }</h1>
            <div className='space-y-3 text-sm text-justify markdown' dangerouslySetInnerHTML={{ __html: studentMobility.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query StudentMobility {
    studentMobility: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "affairs-student-mobility"}}}
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