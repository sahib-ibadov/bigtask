import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Sonswiper.css'
const Sonswiper = () => {
  return (
    <div>
       <div className='div__Swiper'>
    <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        
        className="mySwiper"
      >
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-2.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
    </div>
  )
}

export default Sonswiper
