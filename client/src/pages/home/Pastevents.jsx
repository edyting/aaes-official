import React from 'react'
import { Link } from 'react-router-dom';

function Pastevents() {
  return (
    <div className='h-full w-full'>
       <div className="">
      <h1 className='text-2xl text-[#0099ff] py-2 font-bold'>PAST EVENTS</h1>

      {/* content */}
      <div className="h-[25rem] w-full flex items-center justify-center">
            <p className='text-[#0099ff] text-lg capitalize'>No item available</p>
      </div>
    </div>
    {/* link to homepage */}
    <button className='capitalize text-[#0099ff] px-4 py-2 mb-4  hover:text-white hover:bg-[#0099ff] rounded hover:text-primary'>
           {/* {!eventstate ? " view next event": " view past events"}   */}
           <Link to={'/'}> {'<<'} Back to home</Link>
         </button>
    </div>
  )
}

export default Pastevents;
