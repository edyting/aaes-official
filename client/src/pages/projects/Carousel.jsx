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
import discuss from '../../assets/discuss.jpg';
import success from '../../assets/success.jpg';
import celebration from '../../assets/celebration.jpg';

const images = [{
  image:plan,
  title:'Welcome to QF Technologies',
  text:'we will help build modern technologies',
  btn:'Find out more',
  id:1
},{
  image:discuss,
  title:'Mobile App development',
  text:'we will help build modern technologies',
  btn:'Find out more',
  id:2
},{
  image:success,
  title:'Project success our greatest priority',
  text:'we will help build modern technologies',
  btn:'Find out more',
  id:3
},{
  image:celebration,
  title:'celebration of success',
  text:'we will help build modern technologies',
  btn:'Find out more',
  id:4
},]

export default function Carousel() {


  return (
    <div >
        <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
  spaceBetween={50}
  effect="fade"
  slidesPerView={1}
  navigation
  autoplay={{delay:5000}}
  pagination={{ clickable: true }}
  // scrollbar={{ draggable: true }}
  className='w-screen md:h-[90vh] '
    >
      

        {/* carousel container */}
        <div className="w-full h-full">
          {images.map((image)=>(
            <SwiperSlide key={image.id}>
            <div className=" bg-gradient-to-r from-[rgba(0,0,0,0.1)] to-[hsla(0,0%,0%,0.3)] w-full h-full">
            <img className='absolute mix-blend-overlay ease-linear transition object-cover w-full h-full ' src={image.image} alt="" />   
            </div>
            
          </SwiperSlide>
          ))}

        </div>
    </Swiper>
    </div>
  )
}