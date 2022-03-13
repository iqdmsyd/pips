import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

export default function NewsPage({ data }) {
  const intl = useIntl()

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'news.news' }) } />
      <div className='p-8 lg:p-10'>
        <section className='mb-8'>
        <h1 className='mb-4 text-2xl font-bold 2xl:text-3xl'>{ intl.formatMessage({ id: "news.news" }) }</h1>
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    news_EN: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/news/"}, frontmatter: {lang: {eq: "en"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM, Do YYYY")
          lang
          slug
          status
          title
          time
        }
      }
    }
    news_ID: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/news/"}, frontmatter: {lang: {eq: "id"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM, Do YYYY")
          lang
          slug
          status
          title
          time
        }
      }
    }
    announcements_EN: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/announcements/"}, frontmatter: {lang: {eq: "en"}}}
      limit: 5
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM, Do YYYY")
          lang
          slug
          status
          title
          time
        }
      }
    }
    announcements_ID: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/announcements/"}, frontmatter: {lang: {eq: "id"}}}
      limit: 5
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM, Do YYYY")
          lang
          slug
          status
          title
          time
        }
      }
    }
  }
`