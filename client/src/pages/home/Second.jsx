import React from 'react'
import image from '../../assets/blog62.jpg'
import { Link } from 'react-router-dom'

function Second() {
  return (
    <div className='md:mt-8 mt-4  mb-8 md:mb-0 max-w-screen  '>
     {/* rounded container */}
     <div className="w-[95%] rounded-xl mx-auto border p-5 border-[#0099ff]">
       {/* top */}
       <div className="mb-4 ">
        {/* red */}
        <div className="md:w-20 w-8 h-1  bg-[#0099ff]"></div>

      <div className="flex  items-center gap-[10px]">
        {/* h1 and line */}
      <h1 className='md:text-[1.5rem] text-2xl font-lobster md:ml-[1rem]  capitalize font-semibold'>What we do </h1>

      </div>
      </div>

      {/* flex */}
      <div className="max-w-[full] flex lg:gap-[20px]  flex-col md:flex-row md:max-h-[32rem]">
        

        {/* left */}
        <div className="w-full mb-5 md:mb-0   rounded-xl    md:max-h-full  max-h-[20rem] ">
          {/* image */}
          <img src={image} className='max-w-full rounded-xl max-h-full object-center' alt="" />
        </div>


        {/* right */}
        <div className=" flex items-center  justify-center">
          {/* text */}
          <div className="md:text-start md:max-w-2/5 leading-loose  ">

              <h2 className='capitalize font-poppins md:text-5xl text-3xl  font-bold text-[#0099ff]' >Get to know more about us</h2>
            <p className='font-roboto md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quae quod voluptate tenetur earum rem saepe consequuntur quasi unde, quia veritatis expedita sed, numquam accusantium aperiam! Eaque fugiat excepturi nostrum.</p>
            {/* button */}
            <button className=' font-roboto md:text-[#0099ff] bg-[#0099ff] text-center text-white md:bg-white rounded-xl mt-2 px-3 py-2 block mx-auto text-lg'>
              <Link to={'/about'}>
              See more
              </Link>
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Second
