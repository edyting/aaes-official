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
  className='w-screen md:h-[90vh] '
    >
      

        {/* carousel container */}
        <div className="w-full h-full">
          
            <SwiperSlide >
            <div className=" relative bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)] w-full h-full">
            <img className='absolute mix-blend-overlay ease-linear transition object-cover w-full h-full ' src={plan} alt="" />
            {/* welcome text */}
            <div className="absolute text-white top-[45%] left-[10rem]">
              <h2 className='text-[3rem] capitalize font-poppins font-bold '>Get to know more about us</h2>
              
              <div className="pl-[2rem]">
                
              </div>
            </div>
            </div>
            
          </SwiperSlide>

        </div>
    </Swiper>
    </div>
  )
}