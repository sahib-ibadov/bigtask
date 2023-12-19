import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Section.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';
import SectionCard from '../SectionCard/SectionCard';
const Section = () => {
    const {data}=useSelector(state=>state.Books)
    console.log(data)
    return (
        <div className='Section__bc__image'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className='ima__div' src="https://htmldemo.net/pustok/pustok/image/others/best-seller-author.jpg" alt="" />
                    </div>
                    <div className="col-6 map">
                        <>
                            <Swiper
                                slidesPerView={2}
                                grid={{
                                    rows: 2,
                                }}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Grid, Pagination]}
                                className="gridSwiper"
                            >

                      
                                    {
                                        data.map((item,index)=>{
                                            return   <SwiperSlide className="gridSwiperSlider" key={index} ><SectionCard item={item}/></SwiperSlide>
                                        })
                                    }

                          
                              
                            </Swiper>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
