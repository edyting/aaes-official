import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// framer motion
import { motion } from "framer-motion"

import 'swiper/css';
import 'swiper/css/effect-fade';

import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


// importing images
import plan from '../assets/plan.jpg';
import discuss from '../assets/discuss.jpg';
import success from '../assets/success.jpg';
import celebration from '../assets/celebration.jpg';

const images = [{
  image:plan,
  title:'Welcome to QF Technologies',
  text:'we will help build modern technologies',
  btn:'Find out more',
  id:1
},{
  image:discuss,
  title:'Welcome to QF Technologies',
  text:'we will help build modern technologies',
  btn:'Find out more',
  id:2
},{
  image:success,
  title:'Welcome to QF Technologies',
  text:'we will help build modern technologies',
  btn:'Find out more',
  id:3
},{
  image:celebration,
  title:'Welcome to QF Technologies',
  text:'we will help build modern technologies',
  btn:'Find out more',
  id:4
},]


//getting screen size
let winsize = window.innerWidth;
console.log(winsize); 

// dynamic attribute
let showNavigation = (winsize > 300)?" ":{navigation:'navigation'};


export default function ProjectCarousel() {
  return (
    <div className='w-full h-full'>
         <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
  spaceBetween={50}
  effect="fade"
  slidesPerView={1}
  autoplay={{delay:5000}}
  pagination={{ clickable: true }}
  // scrollbar={{ draggable: true }}
  className='w-full h-full'
    >
        {/* carousel container */}
        <div className="w-full h-full md:rounded-2xl absolute">
          {images.map((image)=>(
            <SwiperSlide key={image.id}>

            <div className=" relative rounded-2xl bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)] w-full h-full">
            <img className='absolute mix-blend-overlay ease-linear rounded-2xl transition object-cover w-full h-full ' src={image.image} alt="" />
            </div>
          </SwiperSlide>
          ))}

        </div>
    </Swiper>
    </div>
  )
}
