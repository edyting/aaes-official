import React from 'react'

import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  


//   images

// import image1 from "../components/images/image1.jpg";
// import image2 from "../components/images/image2.jpg";
// import image3 from "../components/images/image3.jpg";



export default function EventsCarousel({items}) {

    // const items = [
    //     {
    //       title: "Q & A with the President",
    //       description: "Description for Item 1",
    //       date:"Feb 09,2024",
    //       intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
    //       time:"15:00-19:00",
    //       venue:"online",
    //       img:image1,
    //       button:"RSVP",
    //       id:1
    //     },
    //     {
    //       title: "Q & A with the President",
    //       description: "Description for Item 1",
    //       date:"Feb 09,2024",
    //       intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
    //       time:"15:00-19:00",
    //       venue:"online",
    //       img:image2,
    //       button:"RSVP",
    //       id:2
    //     },
    //     {
    //       title: "Q & A with the President",
    //       description: "Description for Item 1",
    //       date:"Feb 09,2024",
    //       intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
    //       time:"15:00-19:00",
    //       venue:"online",
    //       img:image3,
    //       button:"RSVP",
    //       id:3
    //     },
    //     {
    //       title: "Q & A with the President",
    //       description: "Description for Item 1",
    //       date:"Feb 09,2024",
    //       intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
    //       time:"15:00-19:00",
    //       venue:"online",
    //       img:image3,
    //       button:"RSVP",
    //       id:3
    //     }
    //   ];

  return (
    <div className='md:w-[90vw] block w-full md:h-[30rem] h-[25rem] relative md:mx-auto '>
    <Carousel className="w-full h-full mx-aut ">
      <CarouselContent className="-ml-1">
        {items.map((item,) => (
          <CarouselItem key={item.id} className="pl-1 basi md:basis-1/2 lg:basis-1/3  ">
            <div className="p-1 ">
              <div className="w-full rounded-lg shadow p-4">
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
              <div className="">
                Time:{item.time}
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
      <CarouselPrevious className=" w-[5rem] md:w-1/4 "/>
      <CarouselNext className="w-[5rem] md:w-1/4 "/>
      </div>
    </Carousel>


    </div>
  )
}
