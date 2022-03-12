import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'

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
        <section id='accreditation' className='space-y-3'>
            <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'profile.accreditation' })}</h1>
            <div className='flex flex-col gap-4 basis-1 md:flex-row'>
              <div className='space-y-3 text-sm text-justify' dangerouslySetInnerHTML={{ __html: accreditation.html }} />
              <div>
                <img src='/akreditasi.png' alt='' className='w-full'/>
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