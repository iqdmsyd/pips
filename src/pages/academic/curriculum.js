import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function Curriculum({ data }) {
  const intl = useIntl()
  let { curriculum } = data
  curriculum = filterContent(curriculum.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'academic.curriculum' })} />
      <div className='p-8 lg:p-10'>
        <section id='curriculum' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'academic.curriculum' }) }</h1>
            <div className='space-y-3 text-sm text-justify markdown' dangerouslySetInnerHTML={{ __html: curriculum.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query Curriculum {
    curriculum: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "academic-curriculum"}}}
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