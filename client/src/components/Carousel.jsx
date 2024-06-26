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


//getting screen size
let winsize = window.innerWidth;
console.log(winsize); 

// dynamic attribute
let showNavigation = (winsize > 300)?" ":{navigation:'navigation'};

console.log(showNavigation,winsize);

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
  className='w-screen h-[40vh] md:h-[90vh] '
    >
      

        {/* carousel container */}
        <div className="w-full h-full">
          {images.map((image)=>(
            <SwiperSlide key={image.id}>
            <div className=" relative bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)] w-full h-full">
            <img className='absolute mix-blend-overlay ease-linear transition object-cover w-full h-full ' src={image.image} alt="" />
            {/* welcome text */}
            <div className="absolute text-white top-[30%] md:top-[45%] left-[2rem] md:left-[10rem]">
              <h2 className='md:text-[3rem] text-2xl capitalize font-poppins font-bold '>{image.title}</h2>
              <p className='pl-[2rem] py-[1rem]'>{image.text}</p>
              <div className="pl-[2rem]">
                <button className='capitalize bg-primary px-3 py-2 font rounded-full'>{image.btn}</button>
              </div>
            </div>
            </div>
            
          </SwiperSlide>
          ))}

        </div>
    </Swiper>
    </div>
  )
}