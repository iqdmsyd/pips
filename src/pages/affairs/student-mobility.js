import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

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
        <section id='student-mobility'>
          <HeadingOne>
            { intl.formatMessage({ id: 'affairs.studentMobility' }) }
          </HeadingOne>
          <div className='text-justify markdown' dangerouslySetInnerHTML={{ __html: studentMobility.html }} />
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