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



export default function Carousel() {

  return (
    <div >
        <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
  spaceBetween={50}
  effect="fade"
  slidesPerView={1}
  
  autoplay={{delay:5000}}
  pagination={{ clickable: true }}
 
  // scrollbar={{ draggable: true }}
  className='max-w-screen h-[40vh] md:h-[90vh] '
    >
      

        {/* carousel container */}
        <div className="w-full h-full">
          {images.map((image)=>(
            <SwiperSlide key={image.id}>
            <div className=" relative bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)] max-w-full h-full">
            <img className='absolute mix-blend-overlay ease-linear transition object-cover w-full h-full ' src={image.image} alt="" />
            {/* welcome text */}
            <div className=" w-full h-full  text-white  flex text-center flex-col mx-auto ">
            {/* content container */}
            <div className="my-auto ">
            <motion.h2 className='md:text-[3rem]  text-2xl capitalize font-poppins font-bold leading-relaxed '
              
              >{image.title}</motion.h2>
             
             <div className="  md:py-[1rem">
             <p className=''>{image.text}</p>
             </div>

              <div className="pl-[2rem] my-8 ">
                <motion.button className='capitalize bg-primary border border-white px-3 py-2 font rounded-[5px]'
                animate={{y:0,opacity:1}}
                initial={{y:200,opacity:0}}
                transition={{ duration: 1.5,type: "spring", stiffness: 30 }}
                >{image.btn}</motion.button>
              </div>

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