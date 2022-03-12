import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image';

const filterContent = (ctx, lang) => {
  return ctx.filter(c => c.frontmatter.lang === lang)[0]
}

export default function Profile({ data }) {
  const intl = useIntl()
  let { greetings } = data

  greetings = filterContent(greetings.nodes, intl.locale)

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: 'profile.profile' })} />
      <div className='p-8 lg:p-10'>

        {/* greetings */}
        <section id='greetings' className='space-y-3'>
          <h1 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'profile.greetings' }) }</h1>
          <figure>
            <StaticImage src='../../../static/ketua_prodi.jpg' alt=''/>
            <figcaption className='text-xs text-center text-gray-500 md:text-left'>Prof. Dr. Sapriya, M.Ed</figcaption>
          </figure>

          {/* old figure without static image */}
          {/* <figure>
            <img src='/ketua_prodi.jpg' alt='' className='w-full mx-auto md:w-10/12'/>
            <figcaption className='text-xs text-center text-gray-500'>Prof. Dr. Sapriya, M.Ed</figcaption>
          </figure> */}
          <div className='space-y-3 text-sm text-justify' dangerouslySetInnerHTML={{ __html: greetings.html }} />
          <div className='text-sm'>
            { intl.locale === 'id' ? <>
            <p>Ketua Program Studi Pendidikan Ilmu Pengetahuan Sosial</p>
            <p>Fakultas Ilmu Sosial Pendidikan</p>
            <p>Universitas Pendidikan Indonesia</p>
            </> : <>
            <p>Head of Social Studies Education Study Program</p>
            <p>Faculty of Social Studies Education</p>
            <p>Universitas Pendidikan Indonesia</p>
            </> }
            <p className='font-bold'>Prof. Dr. Sapriya, M.Ed</p>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export const data = graphql`
  query Profile {
    greetings: allMarkdownRemark(filter: {frontmatter: {title: {eq: "profile-greetings"}}}
    ) {
      nodes {
        html
        frontmatter {
          lang
        }
      }
    }
  }
`;