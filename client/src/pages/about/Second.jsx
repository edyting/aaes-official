import React from 'react'
import image from '../../assets/blog62.jpg'

function Second() {
  return (
    <div className='md:mt-8 mt-4 mb-12 mx-[1rem] md:mx-[2rem]'>
    

      {/* flex */}
      <div className="w-[full] flex lg:gap-[20px] flex-col md:flex-row h-[20rem] md:h-[32rem]">
        {/* left */}
        <div className="w-full mb-2 md:mb-0  rounded-xl   md:h-full  h-[20rem] ">
          {/* image */}
          <img src={image} className='w-full rounded-xl h-full object-center' alt="" />
        </div>
        {/* right */}
        <div className=" flex items-center  justify-center">
          {/* text */}
          <div className="text-center md:w-10/12  ">
            {/* header */}
            <h2 className=" text-[#0099ff] capitalize w-full text-3xl mb-2"> 5 years as an association</h2>
            <p className='text-center font-roboto md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quae quod voluptate tenetur earum rem saepe consequuntur quasi unde, quia veritatis expedita sed, numquam accusantium aperiam! Eaque fugiat excepturi nostrum.</p>
            <p className='text-center font-roboto md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quae quod voluptate tenetur earum rem saepe consequuntur quasi unde, quia veritatis expedita sed, numquam accusantium aperiam! Eaque fugiat excepturi nostrum.</p>
            {/* button */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second
