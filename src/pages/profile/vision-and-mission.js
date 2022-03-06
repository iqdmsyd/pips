import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function VisionAndMission({ data }) {
  const intl = useIntl()
  let { visionAndMission } = data
  visionAndMission = filterContent(visionAndMission.nodes, intl.locale)

  return (
    <Layout>
      <div className='p-8 lg:p-16'>
        <section id='vision-and-mission' className='space-y-3'>
            <h2 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'profile.visionAndMission' })}</h2>
            <div className='space-y-3 text-sm text-justify md-text' dangerouslySetInnerHTML={{ __html: visionAndMission.html }} />
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query VisionMission {
    visionAndMission: allMarkdownRemark(filter: {frontmatter: {title: {eq: "vision-and-mission"}}}
    ){
      nodes {
        html
        frontmatter {
          lang
        }
      }
    }
  }
`