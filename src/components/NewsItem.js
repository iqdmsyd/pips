import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'

export default function NewsItem({ item }) {
  let { title, slug, date, time } = item.frontmatter;
  let { html: content } = item;

  console.log(item.frontmatter);

  function makePreview(ctn) {
    return ctn.substring(0, 250) + '...'
  }

  function getDate(dt) {
    return format(new Date(dt), 'PPP')
  }

  function getTime(dt) {
    return format(dt, 'p')
  }

  return (
    <div>
      <img src='/panigale-v4r.jpg' alt='' className='w-full'/>
      <h3 className='mb-1 text-sm font-semibold hover:underline'><a href={'/news/' + slug}>{ title }</a></h3>
      <h5 className='flex items-center mb-2 text-xs text-gray-500'>
        <FontAwesomeIcon icon={faCalendarAlt} size='xs' className='mr-1'/>{ getDate(date) }
        <FontAwesomeIcon icon={faClock} size='xs' className='ml-2 mr-1'/>{ time }
      </h5>
      <a href={'/news/' + slug} className='text-sm text-gray-500 hover:underline'>
        <p dangerouslySetInnerHTML={{ __html: makePreview(content) }}/>
      </a>
    </div>
  )
}
