import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


export default function Sidebar() {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query Sidebar {
      recentNews: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/content/news/"}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 3
      ) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM, Do YYYY")
          }
        }
      }
      announcements: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/content/announcements/"}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 3
      ) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM, Do YYYY")
          }
        }
      }
    }
  `)

  const { recentNews, announcements } = data;

  return (
    <div className='space-y-9'>
      <div>
        <h1 className='mb-4 text-lg font-bold lg:text-xl 2xl:text-2xl'>{ intl.formatMessage({ id: 'home.recentNews'}) }</h1>
        <ul className='space-y-2'>
          { recentNews.nodes.map((item, idx) => (
            <li key={idx}>
              <h3 className='font-semibold lg:text-base hover:underline'>
                <Link to={'/news/' + item.frontmatter.slug}>
                  {item.frontmatter.title}
                </Link>
              </h3>
              <span className='flex items-center mb-2 text-sm text-gray-500'>
                <FontAwesomeIcon icon={faCalendarAlt} size='xs' className='mr-1'/>{ item.frontmatter.date }
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className='mb-4 text-lg font-bold lg:text-xl 2xl:text-2xl'>{ intl.formatMessage({ 'id': 'home.announcements' }) }</h1>
        <ul className='space-y-2'>
        { announcements.nodes.map((item, idx) => (
            <li key={idx}>
              <h3 className='font-semibold lg:text-base hover:underline'>
                <Link to={'/announcements/' + item.frontmatter.slug}>
                  {item.frontmatter.title}
                </Link>
              </h3>
              <span className='flex items-center mb-2 text-sm text-gray-500'>
                <FontAwesomeIcon icon={faCalendarAlt} size='xs' className='mr-1'/>{ item.frontmatter.date }
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
