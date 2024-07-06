import React, { useState } from 'react'
import Upcoming from './Upcomingevents'
import { Link } from 'react-router-dom';


function Eventsection() {

  return (
   <div className="mt-8 md:mt-0  md:mx-[2rem]">
      {/* top */}
      <div className="md:mb-4  mb:py-2 ">
        {/* red */}
        <div className="md:w-20 mx-[1rem] w-12 h-1  bg-[#0099ff]"></div>

      <div className="flex mx-[1rem]  items-center gap-[10px]">
        {/* h1 and line */}
      <h1 className='md:text-[1.5rem] text-[1.2rem] font-poppins md:ml-[1rem]  md:w-[10rem] capitalize  font-semibold'>Events </h1>
      </div>
      </div>


     <div className='mb-8 mt-1 md:h-ful w-full md:px-4'>
      {/* events  */}
      <div className="w-full ">
     <Upcoming/>
      </div>
      
       {/* button */}
       <div className="">
         <button className='capitalize text-[#0099ff] border-primary  border-2 mt-4 px-4 py-2 mb-4  hover:text-white hover:bg-[#0099ff] ml-2 rounded hover:text-primary'>
           {/* {!eventstate ? " view next event": " view past events"}   */}
           <Link to={'/pastevents'}> View Past Events</Link>
         </button>
       </div>
     </div>
   </div>
  )
}

export default Eventsection
