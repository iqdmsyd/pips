import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Carousel({slide, setSlide}) {
  return (
    <div className='relative m-auto'>
      <div className={slide === 0 ? 'opacity-100 h-auto transition-opacity ease-linear' : ' overflow-hidden opacity-0 h-0 transition-opacity ease-linear'}>
        <img src='/carousel.jpeg' alt='' className='w-full transition-all'/>
      </div>
      <div className={slide === 1 ? 'opacity-100 h-auto transition-opacity ease-linear' : ' overflow-hidden opacity-0 h-0 transition-opacity ease-linear'}>
        <img src='/carousel_2.jpeg' alt='' className='w-full transition-all'/>
      </div>
      <div className={slide === 2 ? 'opacity-100 h-auto transition-opacity ease-linear' : ' overflow-hidden opacity-0 h-0 transition-opacity ease-linear'}>
        <img src='/carousel_3.jpeg' alt='' className='w-full transition-all'/>
      </div>

      <button className='absolute hidden w-auto p-2 ml-4 bg-gray-300 rounded-lg cursor-pointer md:block opacity-30 bottom-36 hover:bg-white hover:opacity-90' onClick={() => setSlide(c => {
        if (c-1 < 0) return 2
        return c-1
      })}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className='absolute right-0 hidden w-auto p-2 mr-4 bg-gray-300 rounded-lg cursor-pointer md:block opacity-30 bottom-36 hover:bg-white hover:opacity-90' onClick={() => setSlide(c => {
        if (c+1 > 2) return 0
        return c+1
      })}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}
