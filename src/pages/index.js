import React from 'react'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import RecentNews from '../components/RecentNews'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faDownload, faFilePdf, faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { graphql, Link } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import links from '../texts/home/links.json';

export default function Home({ data }) {
  let { aboutUs, recentNews_EN, recentNews_ID, announcements_EN, announcements_ID } = data;
  const intl = useIntl();

  // filter data
  aboutUs = aboutUs.nodes.filter(grt => grt.frontmatter.lang === intl.locale)[0];
  const recentNews = intl.locale === 'id' ? recentNews_ID : recentNews_EN
  const announcement = intl.locale === 'id' ? announcements_ID : announcements_EN

  return (
    <Layout>
      <Seo title="Home" />
      <Carousel/>
      <div className='p-8 lg:p-10'>
        {/* Greetings */}
        <section className='mb-8 text-justify transition-all markdown' dangerouslySetInnerHTML={{ __html: aboutUs.html }} />

        {/* Recent News */}
        <section className='mb-8'>
          <h1 className='mb-4 text-2xl font-bold 2xl:text-3xl'>{ intl.formatMessage({ id: "home.recentNews" }) }</h1>
          <div className='flex flex-col gap-6 md:basis-1/3 md:flex-row'>
            { recentNews.nodes.map( news => (
              <RecentNews key={news.id} news={news}/>
            )) }
          </div>
        </section>

        {/* Announcements & External Links */}
        <section>
          <div className='flex flex-col gap-4 md:basis-1/3 md:flex-row'>
            <div className='w-full mb-4'>
              <h1 className='mb-2 text-2xl font-medium 2xl:text-3xl'><FontAwesomeIcon icon={faInfoCircle} size='sm' className='mr-1'/>{ intl.formatMessage({ id: "home.announcements" }) }</h1>
              <ul className=''>
                { announcement.nodes.map(node => (
                  <li key={node.id}>
                    <Link to={`/news/` + node.frontmatter.slug} className='hover:underline'>
                      <FontAwesomeIcon icon={faLink} className='mr-2' size='sm'/>{node.frontmatter.title}
                    </Link>
                  </li>
                ))
                }
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
  query {
    aboutUs: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/greetings_home/"}}
    ) {
      nodes {
        frontmatter {
          lang
        }
        html
      }
    }
    recentNews_EN: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/news/"}, frontmatter: {lang: {eq: "en"}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: 3
    ) {
      nodes {
        frontmatter {
          title
          time
          slug
          date(formatString: "MMMM Do, YYYY")
        }
        html
        id
      }
    }
    recentNews_ID: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/news/"}, frontmatter: {lang: {eq: "id"}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: 3
    ) {
      nodes {
        frontmatter {
          title
          time
          slug
          date(formatString: "MMMM Do, YYYY")
        }
        html
        id
      }
    }
    announcements_EN: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/announcements/"}, frontmatter: {lang: {eq: "en"}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: 10
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
        id
      }
    }
    announcements_ID: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/announcements/"}, frontmatter: {lang: {eq: "id"}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: 10
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
        id
      }
    }
  }
`