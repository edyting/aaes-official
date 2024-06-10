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

export default function Carousel() {
//  use setinterval to write the logic for changing the carousel image
// let timerId = setInterval(() => 1, 7000);

// const [currentIndex, setCurrentIndex] = useState(0);

// // Effect to handle the carousel logic
// useEffect(() => {
//   // Function to update the current image index
//   const updateIndex = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Increment the index and wrap around
//   };

//   // Set an interval to update the image index every 10 seconds
//   const intervalId = setInterval(updateIndex, 10000);

//   // Cleanup function to clear the interval when the component unmounts or updates
//   return () => clearInterval(intervalId);
// }, []); // Empty dependency array means this effect runs once when the component mounts


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
            <div className=" relative bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)] w-full h-full">
            <img className='absolute mix-blend-overlay ease-linear transition object-cover w-full h-full ' src={image.image} alt="" />
            {/* welcome text */}
            <div className="absolute text-white top-[45%] left-[10rem]">
              <h2 className='text-[3rem] capitalize font-poppins font-bold '>{image.title}</h2>
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