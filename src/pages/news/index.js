import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import News from '../../components/News'
import Sidebar from '../../components/Sidebar'

import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

export default function NewsPage({ data }) {
  const intl = useIntl()
  const { news_EN, news_ID } = data

  const listNews = intl.locale === 'id' ? news_ID : news_EN

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'news.news' }) } />
      <div className='p-8 lg:p-10'>
        <section className='gap-8 md:grid lg:gap-10 md:grid-cols-3 lg:grid-cols-4'>
          <div className='md:col-span-2 lg:col-span-3'>
            <h1 className='mb-4 text-2xl font-bold 2xl:text-3xl'>{ intl.formatMessage({ id: "news.news" }) }</h1>
            <ul>
              { listNews.nodes.map((news) => (
                  <News key={news.id} news={news} />
                ))
              }
            </ul>
          </div>
          <Sidebar />
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
      limit: 5
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
          image
        }
        html
        id
      }
    }
    news_ID: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/news/"}, frontmatter: {lang: {eq: "id"}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: 5
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
          image
        }
        html
        id
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
        html
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
        html
      }
    }
  }
`