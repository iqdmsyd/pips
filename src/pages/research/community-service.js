import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
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
      <Seo title={ intl.formatMessage({ id: 'research.communityService' })} />
      <div className='p-8 lg:p-10'>
        <section id='communityService' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'research.communityService' }) }</h1>
            <div className='space-y-3 text-sm text-justify markdown' dangerouslySetInnerHTML={{ __html: communityService.html }} />
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