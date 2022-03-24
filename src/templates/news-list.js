import React, { useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import News from '../components/News'
import Sidebar from '../components/Sidebar'

import { graphql, Link } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

const NewsList = ({ data, pageContext }) => {
  const intl = useIntl()
  const [ tabOpen, setTabOpen ] = useState({ news: true, annoncements: false })
  const { news_EN, news_ID, announcements_EN, announcements_ID } = data

  const listNews = intl.locale === 'id' ? news_ID : news_EN
  const listAnnouncements = intl.locale === 'id' ? announcements_ID : announcements_EN

  const changeWhichTabOpen = (tab) => {
    setTabOpen(prev => {
      return {
        ...prev,
        ...tab
      }
    })
  }

  // pagination button
  const pagination = []
  for(let i=0; i<pageContext.numPages; i++) pagination[i] = i + 1

  return (
    <Layout>
      <Seo title={ intl.formatMessage({ id: 'news.news' }) } />
      <div className='p-8 lg:p-10'>
        <section className='gap-8 md:grid lg:gap-10 md:grid-cols-3 lg:grid-cols-4'>
          <div className='md:col-span-2 lg:col-span-3'>
            <div className='flex mb-4 space-x-8'>
              <button
                className={`text-2xl 2xl:text-3xl ${tabOpen.news ? 'font-bold' : 'text-gray-500'} `}
                onClick={() => changeWhichTabOpen({ news: true, annoncements: false })}
              >
                { intl.formatMessage({ id: "news.news" }) }
              </button>
              <button
                className={`text-2xl 2xl:text-3xl ${tabOpen.annoncements ? 'font-bold' : 'text-gray-500'}`}
                onClick={() => changeWhichTabOpen({ news: false, annoncements: true })}
              >
                { intl.formatMessage({ id: 'news.announcement' }) }
              </button>
            </div>
            { tabOpen.news && (
              <ul>
                { listNews.nodes.map((news) => (
                    <News key={news.id} news={news} />
                  ))
                }
              </ul>
            )}
            { tabOpen.annoncements && (
              <ul>
                { listAnnouncements.nodes.map((news) => (
                    <News key={news.id} news={news} />
                  ))
                }
              </ul>
            )}
            <div className='flex mb-4 space-x-8'>
              {
                pagination.map((pageNumber, i) => (
                  <Link to={`/news/${i === 0 ? `` : pageNumber }`} key={i}>
                  {pageNumber === pageContext.currentPage ? (
                    <span className='font-bold'>{pageNumber}</span>
                  ) : (
                    <span className='font-light text-gray-600'>{pageNumber}</span>
                  )}
                  </Link>
                ))
              }
            </div>
          </div>
          <Sidebar />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    news_EN: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/news/"}, frontmatter: {lang: {eq: "en"}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
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
      limit: $limit
      skip: $skip
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
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
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
        id
      }
    }
    announcements_ID: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/announcements/"}, frontmatter: {lang: {eq: "id"}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
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
        id
      }
    }
  }
`

export default NewsList