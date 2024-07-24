import React from 'react'

import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


import { motion } from 'framer-motion'
  


//   images

// import image1 from "../components/images/image1.jpg";
// import image2 from "../components/images/image2.jpg";
// import image3 from "../components/images/image3.jpg";



export default function EventsCarousel({items}) {

  motion

  return (
    <div className='md:w-[90vw] block w-full relative md:mx-auto '>
    <Carousel className="w-full h-full py-3 mx-aut ">
      <CarouselContent className="-ml-1">


        {items.map((item,) => (
          <CarouselItem key={item.id} className="pl-1 hover:scale-[1.02]  md:basis-1/2 lg:basis-1/3  ">
            <div className="p-1 ">
              <div className="w-full rounded-xl shadow p-4">
            <div className="text-">
              {item.date}
            </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {/* images */}
              <div className=" ">
               <img src={item.img} className=' object-cover ' alt="" />
              </div>

               {/* time & venue*/}
            <div className="flex justify-between pt-2 ">
              <div className="flex gap-1">
                Time: <p className="text-[#0099ff] ">{item.time}</p>
              </div>
              <div className="">
                Venue:{item.venue}
              </div>
            </div>
            </div>
            </div>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      {/* navigation */}
      <div className="flex  top-[24rem]  right-16 justify-between  gap-10 w-[20%]  absolute md:relative">
      {/* <CarouselPrevious className=" w-[5rem]  "/>
      <CarouselNext className="w-[5rem]  "/> */}
      </div>
    </Carousel>


    </div>
  )
}
