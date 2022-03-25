import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

export default function News({ news }) {
  const intl = useIntl()
  let { title, slug, date, time, image } = news.frontmatter;
  let { html: content } = news;

  function makeTime(mil) {
    let temp = mil / 3600
    let h = Math.floor(temp)
    let m = Math.ceil((temp - h) * 60)
    return `${h}:${m}`
  }

  function makePreview(ctn) {
    return ctn.substring(0, 250) + '...'
  }

  return (
    <div className='grid-cols-4 gap-4 mb-8 md:grid'>
      { image && (
        <div className='col-span-1'>
          <img src={`/${image}`} alt='' className='w-full mt-1' />
        </div>
      ) }
      <div className='col-span-3'>
        <h2 className='text-xl font-semibold hover:underline'>
          <Link to={`/${intl.locale}/news/${slug}`}>{title}</Link>
        </h2>
        <span className='flex items-center mb-2 text-sm text-gray-500'>
          <FontAwesomeIcon icon={faCalendarAlt} size='xs' className='mr-1'/>{ date }
          <FontAwesomeIcon icon={faClock} size='xs' className='ml-2 mr-1'/>{ makeTime(time) }
        </span>
        <a href={`/${intl.locale}/news/${slug}`} className='text-gray-500 hover:underline'>
          <div dangerouslySetInnerHTML={{ __html: makePreview(content) }}/>
        </a>
      </div>
    </div>
  )
}