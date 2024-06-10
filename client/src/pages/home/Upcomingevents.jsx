
import image1 from "../../components/images/image1.jpg";
import image2 from "../../components/images/image2.jpg";
import image3 from "../../components/images/image3.jpg";


import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


function Upcoming() {
  // let events =[{
  //   date:"Feb 09",
  //   title:"Q & A with the President",
  //   intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
  //   time:"15:00-19:00",
  //   venue:"online",
  //   img:image1,
  //   button:"RSVP",
  //   id:1
  // },{
  //   date:"Feb 09",
  //   title:"Q & A with the President",
  //   intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
  //   time:"15:00-19:00",
  //   venue:"online",
  //   img:image2,
  //   button:"RSVP",
  //   id:2
  // },{
  //   date:"Feb 09",
  //   title:"Q & A with the President",
  //   intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
  //   time:"15:00-19:00",
  //   venue:"online",
  //   img:image3,
  //   button:"RSVP",
  //   id:3
  // }];

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
    <div className='bg-darkbg w-full '>
    {/* cards container */}
    {/* view name  */}
    <div className="">
      <h1 className='text-2xl text-white py-2 font-bold'>UPCOMING EVENTS</h1>
    </div>
    <div className="">
     {/* cards */}
     <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center absolute w-full h-full">
        <button
          className="absolute left-0 top-[50%] bottom-0 flex items-center justify-center z-10 w-10 h-10 bg-gray-900 text-white hover:bg-gray-800"
          onClick={goToPrevSlide}
        >
          <FaArrowAltCircleLeft />
        </button>
        <button
          className="absolute right-0 top-[50%] bottom-0 flex items-center justify-center z-10 w-10 h-10 bg-gray-900 text-white hover:bg-gray-800"
          onClick={goToNextSlide}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
          >
            {/* date */}
            
            <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="text-muted">
              {item.date}
            </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {/* images */}
              <div className="">
               <img src={item.img} alt="" />
              </div>
              <p>{item.intro}</p>
               {/* time & venue*/}
            <div className="flex justify-between pt-2 text-muted">
              <div className="">
                Time:{item.time}
              </div>
              <div className="">
                Venue:{item.venue}
              </div>
            </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>

    </div>
   </div>
  )
}

export default Upcoming;
