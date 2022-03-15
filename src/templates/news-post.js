import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Sidebar from '../components/Sidebar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

const NewsPost = ({ data }) => {
  const intl = useIntl()
  const node = data.allMarkdownRemark.nodes.filter(node => node.frontmatter.lang === intl.locale)[0]

  const { frontmatter, html } = node

  function makeTime(mil) {
    let temp = mil / 3600
    let h = Math.floor(temp)
    let m = Math.ceil((temp - h) * 60)
    return `${h}:${m}`
  }

  return(
    <Layout>
      <Seo title={ frontmatter.title } />
      <div className='p-8 lg:p-10'>
        <div className='gap-8 md:grid lg:gap-12 md:grid-cols-3 lg:grid-cols-4'>
          <div className='mb-10 md:mb-0 md:col-span-2 lg:col-span-3'>
            <h1 className='text-2xl font-bold xl:text-3xl'>{ frontmatter.title }</h1>
            <span className='flex items-center mb-2 text-sm text-gray-500'>
              <FontAwesomeIcon icon={faCalendarAlt} size='xs' className='mr-1'/>{ frontmatter.date }
              <FontAwesomeIcon icon={faClock} size='xs' className='ml-2 mr-1'/>{ makeTime(frontmatter.time) }
            </span>
            <p className='mb-4 text-sm italic'>Author: { frontmatter.author }</p>
            <section dangerouslySetInnerHTML={{ __html: html }} className="markdown" />
          </div>
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {slug: {eq: $slug}}, fileAbsolutePath: {regex: "/content/news/"}}
    ) {
      nodes {
        frontmatter {
          slug
          author
          date(formatString: "MMMM Do, YYYY")
          image
          lang
          status
          time
          title
        }
        html
      }
    }
  }
`

export default NewsPost