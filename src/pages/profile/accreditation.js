import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function Accreditation({ data }) {
  const intl = useIntl()
  let { accreditation } = data
  accreditation = filterContent(accreditation.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: 'profile.accreditation' })} />
      <div className='p-8 lg:p-10'>
        <section id='accreditation'>
            <HeadingOne>
              { intl.formatMessage({ id: 'profile.accreditation' })}
            </HeadingOne>
            <div className='flex flex-col md:gap-8 basis-1 md:flex-row'>
              <div className='text-justify markdown' dangerouslySetInnerHTML={{ __html: accreditation.html }} />
              <div>
                <StaticImage src='../../../static/akreditasi.png' alt='' imgClassName='w-full' />
                <a href="/sertifikat_akreditasi.pdf" className='text-sm text-blue-400 hover:underline'>Download certificate</a>
              </div>
            </div>
          </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query Accreditation {
    accreditation: allMarkdownRemark(filter: {frontmatter: {title: {eq: "profile-accreditation"}}}
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