
import EventsCarousel from "@/components/EventsCarousel";
import image1 from "../../components/images/image1.jpg";
import image2 from "../../components/images/image2.jpg";
import image3 from "../../components/images/image3.jpg";


import React, { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

function Upcoming() {

  const items = [
    {
      title: "Q & A with the President",
      description: "Description for Item 1",
      date:"Feb 09,2024",
      intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
      time:"15:00-19:00",
      venue:"online",
      img:image1,
      button:"RSVP",
      id:1
    },
    {
      title: "Q & A with the President",
      description: "Description for Item 1",
      date:"Feb 09,2024",
      intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
      time:"15:00-19:00",
      venue:"online",
      img:image2,
      button:"RSVP",
      id:2
    },
    {
      title: "Q & A with the President",
      description: "Description for Item 1",
      date:"Feb 09,2024",
      intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
      time:"15:00-19:00",
      venue:"online",
      img:image3,
      button:"RSVP",
      id:3
    },
    {
      title: "Q & A with the President",
      description: "Description for Item 1",
      date:"Feb 09,2024",
      intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
      time:"15:00-19:00",
      venue:"online",
      img:image3,
      button:"RSVP",
      id:3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className=' w-full pl-2'>
    {/* cards container */}
    {/* view name  */}
    <div className="">
      <h1 className='text-2xl text-[#0099ff]  font-bold'>UPCOMING EVENTS</h1>
    </div>
    <div className="relative">


     <div className="relative md:w-full md:overflow-hidden">
      <div className="flex justify-between items-center w-full  md:h-full">
      <EventsCarousel items={items} />
       
      </div>

     
    </div>

    </div>
   </div>
  )
}

export default Upcoming;
