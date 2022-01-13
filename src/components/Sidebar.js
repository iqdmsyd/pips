import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Sidebar() {
  const data = useStaticQuery(graphql`
    query Sidebar {
      recentNews: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/news/"}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 3
      ) {
        nodes {
          frontmatter {
            title
            time
            slug
            date
          }
        }
      }
      announcements: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/announcements/"}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 3
      ) {
        nodes {
          frontmatter {
            title
            time
            slug
            date
          }
        }
      }
    }
  `)

  const { recentNews, announcements } = data;

  return (
    <div className='space-y-9'>
      <div>
        <h2 className='mb-3 text-lg font-semibold lg:text-xl 2xl:text-2xl'>Recent News</h2>
        <ul className='space-y-3'>
          { recentNews.nodes.map((item, idx) => (
            <li key={idx}>
              <h5 className='-mb-1 text-sm leading-4 lg:text-base lg:leading-none hover:underline'>
                <Link to={'/news/' + item.frontmatter.slug}>
                  {item.frontmatter.title}
                </Link>
              </h5>
              <span className='text-xs lg:text-sm'>{new Date(item.frontmatter.date).toDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='mb-3 text-lg font-semibold lg:text-xl 2xl:text-2xl'>Annoucements</h2>
        <ul className='space-y-3'>
        { announcements.nodes.map((item, idx) => (
            <li key={idx}>
              <h5 className='-mb-1 text-sm leading-4 lg:text-base lg:leading-none hover:underline'>
                <Link to={'/announcements/' + item.frontmatter.slug}>
                  {item.frontmatter.title}
                </Link>
              </h5>
              <span className='text-xs lg:text-sm'>{new Date(item.frontmatter.date).toDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
