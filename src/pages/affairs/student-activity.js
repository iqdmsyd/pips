import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

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
        <section id='student-activity'>
          <HeadingOne>
            { intl.formatMessage({ id: 'affairs.studentActivity' }) }
          </HeadingOne>
          <div className='text-justify markdown' dangerouslySetInnerHTML={{ __html: studentActivity.html }} />
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