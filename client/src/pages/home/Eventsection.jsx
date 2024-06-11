import React, { useState } from 'react'
import Upcoming from './Upcomingevents'
import Pastevents from './Pastevents';

function Eventsection() {
  let [eventstate,setevent] = useState(true);

  let onClick = ()=>{
      setevent(!eventstate);
      console.log(eventstate);
  }
  return (
   <div className="md:m -  md:mx-[2rem]">
      {/* top */}
      <div className="md:mb-4  mb:py-2 ">
        {/* red */}
        <div className="md:w-20 mx-[1rem] w-8 h-1  bg-[#0099ff]"></div>

      <div className="flex mx-[1rem]  items-center gap-[10px]">
        {/* h1 and line */}
      <h1 className='md:text-[1.5rem] text-[1.2rem] font-poppins md:ml-[1rem]  md:w-[10rem] capitalize  font-semibold'>Events </h1>
      <div className="h-1 w-[78%] md:w-[calc(90vw-10rem)] rounded-xl bg-gray-text"></div>
      </div>
      </div>
     <div className='bg-darkbg mb-8 mt-1 h-full w-full px-4 md:px-12'>
      {/* events  */}
      <div className="">
     { eventstate ?  <Upcoming/> : <Pastevents/> }
      </div>
       {/* button */}
       <div className="">
         <button onClick={onClick} className='capitalize text-[#0099ff] border-primary  border-2 px-4 py-2 mb-4 hover:bg-white hover:font-bold hover:text-primary'>
           {!eventstate ? " view next event": " view past events"}  
         </button>
       </div>
     </div>
   </div>
  )
}

export default Eventsection
