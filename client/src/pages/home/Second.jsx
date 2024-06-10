import React from 'react'

function Second() {
  return (
    <div className='md:mt-12 mt-4 mx-[1rem] md:mx-[2rem]'>
      {/* top */}
      <div className="mb-4 py-2">
        {/* red */}
        <div className="md:w-20 w-8 h-1  bg-danger"></div>

      <div className="flex  items-center gap-[10px]">
        {/* h1 and line */}
      <h1 className='md:text-[1.5rem] text-[1.1rem] font-poppins md:ml-[1rem]  md:w-[10rem] capitalize text-primary font-semibold'>What we do </h1>
      <div className="h-1 w-[65%] md:w-[calc(90vw-10rem)] rounded-xl bg-gray-text"></div>
      </div>
      </div>

      {/* flex */}
      <div className="w-[full] flex lg:gap-[20px] flex-col md:flex-row h-[25rem] md:h-[32rem]">
        {/* left */}
        <div className="w-full mb-2 md:mb-0  rounded-xl bg-gray-400  md:h-full p-10 h-[20rem]"></div>
        {/* right */}
        <div className=" flex items-center justify-center">
          {/* text */}
          <div className="text-center md:w-2/5  ">
            <p className='font-roboto md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quae quod voluptate tenetur earum rem saepe consequuntur quasi unde, quia veritatis expedita sed, numquam accusantium aperiam! Eaque fugiat excepturi nostrum.</p>
            {/* button */}
            <button className='bg-primary font-poppins text-white rounded-lg mt-2 px-3 py-2 text-lg'>See more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second
