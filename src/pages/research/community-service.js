import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function CommunityService({ data }) {
  const intl = useIntl()
  let { communityService } = data
  communityService = filterContent(communityService.nodes, intl.locale)

  return (
    <Layout>
      <div className='p-8 lg:p-16'>
        <section id='communityService' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'research.communityService' }) }</h1>
            <div className='space-y-3 text-sm text-justify md-text' dangerouslySetInnerHTML={{ __html: communityService.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query CommunityService {
    communityService: allMarkdownRemark(
      filter: {fileAbsolutePath: {}, frontmatter: {title: {eq: "research-community-service"}}}
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