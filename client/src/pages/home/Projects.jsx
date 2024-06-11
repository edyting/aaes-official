import React from 'react'
import bgsvg from '/wave.svg'
import { DummyPost } from '@/db'

import demopic from '../../assets/blog16.jpg'

export default function Projects() {
  return (
    <div className='mt-12 relative bg-red-00 '>
        <div className="h-[60vh] w-full  bg-[#0099ff] ">
            {/* white design */}
            <div className="w-[30rem] hidden  h-[25rem] z-10 md:block absolute  top-16 right-0">
                <div className='h-full w-full bg-white rounded-l-2xl z-4 relative'>
                    {/*  absolute image container*/}
                    <div className="h-[20rem] w-full bg-red-600 absolute top-10 right-[8rem] rounded-3xl">
                    <img src={demopic} className='object-center rounded-2xl w-full h-full' alt="" />
                    </div>
                </div>
            </div>
            {/* descriptive text */}
            <div className="w-[32rem] h-[24rem] absolute top-20 left-24 ">
                  <h2 className='text-5xl capitalize text-center my-2 text-white font-bold'>Top featured projects</h2>
                  {/* paragraph */}
                  <div className="">
                    <p className='text-center text-white my-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero itaque eligendi amet rerum, incidunt culpa! Dolore numquam maiores exercitationem, vel dolores aliquam adipisci quidem culpa, officia facere ipsum incidunt saepe rerum natus dicta blanditiis dolorem! Natus corrupti ducimus molestiae consequuntur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit illum placeat fuga provident suscipit consectetur facilis at. Dicta deserunt consequatur recusandae dolorum libero! Illo, saepe.</p>
                  </div>
                  {/* button */}
                  <div className="text-center rounded-lg">
                    <button className='bg-white text-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>Read more</button>
                  </div>
             </div>
        </div>
        <div className="bg-[url('../../../public/wave.svg')] h-[22rem] bg-cover bg-no-repeat w-full " >

        </div>
    </div>
  )
}
