import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import NewsItem from '../components/NewsItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faDownload, faFilePdf, faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'
import { Link, useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import links from '../texts/home/links.json';

export default function Home({ data }) {
  const intl = useIntl();
  let { greetings, recentNews } = data;

  // filter data
  greetings = greetings.nodes.filter(grt => grt.frontmatter.lang === intl.locale)[0];

  return (
    <Layout>
      <Carousel/>
      <div className='p-8 lg:p-16'>
        {/* Greetings */}
        <section className='mb-8 md-text' dangerouslySetInnerHTML={{ __html: greetings.html }} />

        {/* Recent News */}
        <section className='mb-8'>
          <h1 className='mb-2 text-2xl font-medium 2xl:text-3xl'>{ intl.formatMessage({ id: "home.recentNews" }) }</h1>
          <div className='flex flex-col gap-6 md:basis-1/3 md:flex-row'>
            { recentNews.nodes.map( item => (
              <NewsItem key={item.id} item={item}/>
            )) }
          </div>
        </section>

        {/* Announcements & External Links */}
        <section>
          <div className='flex flex-col gap-4 md:basis-1/3 md:flex-row'>
            <div className='w-full mb-4'>
              <h1 className='mb-2 text-2xl font-medium 2xl:text-3xl'><FontAwesomeIcon icon={faInfoCircle} size='sm' className='mr-1'/>{ intl.formatMessage({ id: "home.announcements" }) }</h1>
              <ul className=''>
                { links[intl.locale].map(({title, url}, idx) => (
                  <li key={idx}>
                    <a href={url} className='hover:underline'> <FontAwesomeIcon icon={faLink} className='mr-2' size='sm'/>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full mb-4'>
              <h1 className='mb-2 text-2xl font-medium 2xl:text-3xl'><FontAwesomeIcon icon={faDownload} size='sm' className='mr-1'/>{ intl.formatMessage({ id: "home.downloads" }) }</h1>
              <ul className=''>
                { links[intl.locale].map(({title, url}, idx) => (
                  <li key={idx}>
                    <a href={url} className='hover:underline'> <FontAwesomeIcon icon={faFilePdf} className='mr-2' size='sm'/>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full'>
              <h1 className='mb-2 text-2xl font-medium 2xl:text-3xl'><FontAwesomeIcon icon={faLink} size='sm' className='mr-1'/>{ intl.formatMessage({ id: "home.links" }) }</h1>
              <ul className=''>
                { links[intl.locale].map(({title, url}, idx) => (
                  <li key={idx}>
                    <a href={url} className='hover:underline'> <FontAwesomeIcon icon={faExternalLinkAlt} className='mr-2' size='sm'/>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query Home {
    greetings: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/greetings_home/"}}
    ) {
      nodes {
        frontmatter {
          lang
        }
        html
      }
    }
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
        html
        id
      }
    }
  }
`