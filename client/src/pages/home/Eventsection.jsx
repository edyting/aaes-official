import React, { useState } from 'react'
import Upcoming from './Upcomingevents'
import { Link } from 'react-router-dom';


function Eventsection() {

  return (
   <div className="mt-8 md:mt-0  md:mx-[2rem]">
      {/* rounded container */}
      <div className="border w-[95%] md:w-full mx-auto md:mx-0 rounded-xl md:mb-4 pt-5 border-[#0099ff]">
        {/* top */}
      <div className="md:mb-  mb:py-2 ">
        {/* red */}
        <div className="md:w-20 mx-[1rem] w-12 h-1  bg-[#0099ff]"></div>

      <div className="flex mx-[1rem]  items-center gap-[10px]">
        {/* h1 and line */}
      <h1 className='md:text-[1.5rem] text-[1.2rem] font-poppins md:ml-[1rem]  md:w-[10rem] capitalize  font-semibold'>Events </h1>
      </div>
      </div>


     <div className='mb-8  md:h-ful w-full md:px-4'>
      {/* events  */}
      <div className="w-full ">
     <Upcoming/>
      </div>
      
       {/* button */}
       {/* <div className="">
         <button className='capitalize text-[#0099ff] border-primary  border-2 mt-4 px-4 py-2 mb-4  hover:text-white hover:bg-[#0099ff] ml-2 rounded-xl hover:text-primary'>
         
           <Link to={'/pastevents'}> View Past Events</Link>
         </button>
       </div> */}
       
     </div>
      </div>
   </div>
  )
}

export default Eventsection
