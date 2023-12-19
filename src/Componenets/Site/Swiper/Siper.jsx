
import './Swiper.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';
const Siper = () => {
  return (

    <Swiper pagination={true} modules={[Pagination,Autoplay]} className="swiper" 
    autoplay={{
      delay:  2000,
      disableOnInteraction: false,
    }}>
      <SwiperSlide className='swiper-slide'><img className='img__swiper' src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png" alt="" />
      <div className='swiperSlideInside'>
        <p><b>H.G.Wells</b></p>
        <p><b>De Vengeance</b></p>
        <p>cover up Front of Books And Leave <br />  summary</p>

        <button className='button__swiper'>$78.09-order Now! </button>
     
       
      </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'><img className='img__swiperr' src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png" alt="" />
      <div className='sahib'>
        <p><b>J.D.Kurtness</b></p>
        <p><b>De Vengeance</b></p>
        <p>cover up Front of Books And Leave  summary</p>

        <button className='button__swiper'>$78.09-Learb More </button>
     
       
      </div>
      </SwiperSlide>
     

    </Swiper>


  )
}

export default Siper
