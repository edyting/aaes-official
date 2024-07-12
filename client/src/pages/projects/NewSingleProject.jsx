import React, { useState,useEffect } from 'react';

import {DummyPost} from '../../db'

import bgsvg from '/wave.svg'
import demopic from '../../assets/blog16.jpg'
import { Link } from 'react-router-dom';


function NewSingleProject() {

    //  // scroll tot top
    //  useEffect(()=>{
    //     window.scrollTo(0,0)
    //   },[]);

  const [posts,setPost]= useState(DummyPost)

//   paginating
   const [currentpage,setCurrentpage]=useState(1);
   const [postperpage,setpostperpage]=useState(1);
//    logic
   const lastIndex = currentpage * postperpage;
   const firstIndex = lastIndex - postperpage;
   const currentproject = posts.slice(posts.length -1,posts.length)


  return (
    <div>
      <div className='mt-4 md:mt-12 md:mb-12 '>
        {/* container start */}
        <div className="md:h-auto w-full mx-auto bg-[#0099ff] md:pt-12 md:relative ">
            
            {currentproject.map((project)=>(
                // container
                <div key={project.id} className="h-full grid md:grid-cols-2 grid-cols-1 ">
  
            
            {/* descriptive text */}
            <div className="md:max-w-[32rem] h-auto md:justify-self-center text-center ">
                  <h2 className='md:text-5xl text-3xl capitalize md:text-start my-2 text-white font-bold'>Top featured projects</h2>
                  {/* paragraph */}
                  <div className="">
                    <p className='text-start w-[95%] mx-auto text-white md:my-8'>
                        {project.desc}
                    </p>
                  </div>
                  {/* button */}
                  <div className="text-start rounded-lg">
                    <Link to='/projects/[12]/' className='bg-white hidden md:visible text-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>Read more</Link>
                  </div>

             </div>
                 
            {/* white design */}
            <div className="md:w-[30rem] justify-self-end md:h-[25rem] z-10  py-4 items-end">
                <div className='md:h-full md:w-full md:bg-white rounded-l-2xl z-4 md:relative'>
                    {/*  absolute image container*/}
                    <div className="md:h-[20rem] md:w-full md:absolute md:top-10 right-[8rem] md:rounded-3xl">
                        {/* image */}
                    <img src={project.thumbnail} className='object-center rounded-2xl  w-full h-full' alt="" />
                    </div>
                </div>
                {/* button */}
                <div className="text-center rounded-lg pt-4 ">
                    <Link to='/projects/[12]/' className='bg-white md:hidden visible text-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>Read more</Link>
                  </div>
            </div>

                </div>
            ))}
        </div>
        {/* container start */}
        <div className="md:bg-[url('../../../public/wave.svg')] md:h-[11rem] -my-1 h-ful bg-cover bg-no-repeat w-full mx-auto  " >
        </div>
    </div>
  
    </div>
  )
}

export default NewSingleProject