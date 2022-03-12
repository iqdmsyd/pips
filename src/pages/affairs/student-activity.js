import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function StudentActivity({ data }) {
  const intl = useIntl()
  let { studentActivity } = data
  studentActivity = filterContent(studentActivity.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'affairs.studentActivity' })} />
      <div className='p-8 lg:p-10'>
        <section id='student-activity' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'affairs.studentActivity' }) }</h1>
            <div className='space-y-3 text-sm text-justify markdown' dangerouslySetInnerHTML={{ __html: studentActivity.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query StudentActivity {
    studentActivity: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "affairs-student-activity"}}}
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