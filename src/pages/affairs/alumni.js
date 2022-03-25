import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function Alumni({ data }) {
  const intl = useIntl()
  let { alumni } = data
  alumni = filterContent(alumni.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'affairs.alumni' })} />
      <div className='p-8 lg:p-10'>
        <section id='student-mobility'>
          <HeadingOne>
            { intl.formatMessage({ id: 'affairs.alumni' }) }
          </HeadingOne>
          <div className='text-justify markdown' dangerouslySetInnerHTML={{ __html: alumni.html }} />
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