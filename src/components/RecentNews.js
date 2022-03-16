import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby';

export default function RecentNews({ news }) {
  let { title, slug, date, time } = news.frontmatter;
  let { html: content } = news;

  function makePreview(ctn) {
    return ctn.substring(0, 250) + '...'
  }

  function makeTime(mil) {
    let temp = mil / 3600
    let h = Math.floor(temp)
    let m = Math.ceil((temp - h) * 60)
    return `${h}:${m}`
  }

  makeTime(time)

  return (
    <div>
      <img src='/panigale-v4r.jpg' alt='' className='w-full'/>
      <h3 className='font-semibold hover:underline'><a href={'/news/' + slug}>{ title }</a></h3>
      <span className='flex items-center mb-2 text-sm text-gray-500'>
        <FontAwesomeIcon icon={faCalendarAlt} size='xs' className='mr-1'/>{ date }
        <FontAwesomeIcon icon={faClock} size='xs' className='ml-2 mr-1'/>{ makeTime(time) }
      </span>
      <Link to={'/news/' + slug} className='text-gray-500 hover:underline'>
        <p dangerouslySetInnerHTML={{ __html: makePreview(content) }}/>
      </Link>
    </div>
  )
}
