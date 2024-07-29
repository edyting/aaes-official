import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


// importing images
import plan from '../../assets/plan.jpg';




export default function Carousel() {


  return (
    <div >
        <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
  // spaceBetween={50}
  // effect="fade"
  // slidesPerView={1}
  // navigation
  // autoplay={{delay:5000}}
  // pagination={{ clickable: true }}
  // scrollbar={{ draggable: true }}
  className='w-full h-[25vh] md:h-[90vh] '
    >
      

        {/* carousel container */}
        <div className="w-full h-full">
          
            <SwiperSlide >
            <div className=" relative bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)] w-full h-full">
            <img className='absolute mix-blend-overlay ease-linear transition object-cover w-full h-full ' src={plan} alt="" />
            {/* welcome text */}
            <div className=" w-full h-full flex items-center justify-center  text-white">
              <h2 className='md:text-[3rem] text-[2rem]  text-center capitalize font-poppins  font-bold '>Get to know more about us</h2>
              
            </div>
            </div>
            
          </SwiperSlide>

        </div>
    </Swiper>
    </div>
  )
}