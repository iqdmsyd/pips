import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function VisionAndMission({ data }) {
  const intl = useIntl()
  let { visionAndMission } = data
  visionAndMission = filterContent(visionAndMission.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: 'profile.visionAndMission' })} />
      <div className='p-8 lg:p-10'>
        <section id='vision-and-mission'>
            <HeadingOne>
              { intl.formatMessage({ id: 'profile.visionAndMission' })}
            </HeadingOne>
            <div className='text-justify markdown' dangerouslySetInnerHTML={{ __html: visionAndMission.html }} />
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