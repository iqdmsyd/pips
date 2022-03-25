import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StaticImage } from 'gatsby-plugin-image'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Carousel () {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className='mt-2 md:mt-4'
    >
      <SwiperSlide>
        <StaticImage src='../../static/carousel.jpeg' className='w-full' alt='...' />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src='../../static/carousel.jpeg' className='w-full' alt='...' />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src='../../static/carousel.jpeg' className='w-full' alt='...' />
      </SwiperSlide>
    </Swiper>
  )
}