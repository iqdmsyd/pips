import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

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
        <section id='communityService'>
          <HeadingOne>
            { intl.formatMessage({ id: 'research.communityService' }) }
          </HeadingOne>
            <div className='text-justify markdown' dangerouslySetInnerHTML={{ __html: communityService.html }} />
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