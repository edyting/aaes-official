import React from 'react'
import bgsvg from '../../../public/wave.svg'

export default function Projects() {
  return (
    <div className='mt-12 relative bg-red-00 '>
        <div className="h-[50vh] w-full  bg-[#0099ff] ">
            {/* white design */}

            <div className="w-[30rem]  h-[25rem] z-10  absolute  top-16 right-0">
                <div className='h-full w-full bg-white rounded-l-2xl z-4 relative'>
                    {/*  absolute image container*/}
                    <div className="h-[20rem] w-full bg-red-600 absolute top-10 right-[8rem] rounded-3xl">

                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[url('../../../public/wave.svg')] h-[22rem] bg-cover bg-no-repeat w-full " >

        </div>
    </div>
  )
}
