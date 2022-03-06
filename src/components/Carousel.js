import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Carousel () {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
    >
      <SwiperSlide>
        <img src='/carousel.jpeg' alt='' className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='/carousel.jpeg' alt='' className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='/carousel.jpeg' alt='' className='w-full'/>
      </SwiperSlide>
    </Swiper>
  )
}