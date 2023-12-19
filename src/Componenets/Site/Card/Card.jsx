import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Card = () => {
  const dispatch = useDispatch()

  const { data } = useSelector(state => state.Books)

  return (

    <div className='container'>
      <div className="row">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"

        >
          {
            data.map((item, index) => {
              return <SwiperSlide key={index}><Cards item={item}  /></SwiperSlide>
            })
          }

        </Swiper>


      </div>
    </div>
  )
}

export default Card
