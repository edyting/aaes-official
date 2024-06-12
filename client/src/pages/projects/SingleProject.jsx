import React, { useState,useEffect } from 'react';

import {DummyPost} from '../../db'

import bgsvg from '/wave.svg'
import demopic from '../../assets/blog16.jpg'
import { Link } from 'react-router-dom';


function SingleProject() {

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
      <div className='mt-4 md:mt-12 flex flex-col md:relative '>
        {/* container start */}
        <div className="h-[60vh] w-full  bg-[#0099ff] ">
            
            {currentproject.map((project)=>(
                // container
                <div key={project.id} className="h-full ">
         {/* white design */}
            <div className="w-[30rem] hidden  h-[25rem] z-10 md:block md:absolute  top-16 right-0">
                <div className='h-full w-full bg-white rounded-l-2xl z-4 relative'>
                    {/*  absolute image container*/}
                    <div className="h-[20rem] w-full md:absolute top-10 right-[8rem] rounded-3xl">
                        {/* image */}
                    <img src={project.thumbnail} className='object-center rounded-2xl w-full h-full' alt="" />
                    </div>
                </div>
            </div>
            
            {/* descriptive text */}
            <div className="w-[32rem] h-[24rem]  md:absolute top-20 left-24 ">
                  <h2 className='text-5xl capitalize text-center my-2 text-white font-bold'>Top featured projects</h2>
                  {/* paragraph */}
                  <div className="">
                    <p className='text-center text-white my-8'>
                        {project.desc}
                    </p>
                  </div>
                  {/* button */}
                  <div className="text-center rounded-lg">
                    <Link to='/projects/[12]/' className='bg-white text-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>Read more</Link>
                  </div>
             </div>
            
                </div>
            ))}
        </div>
        {/* container start */}
        <div className="bg-[url('../../../public/wave.svg')] h-[15rem]  bg-cover bg-no-repeat w-full " >
        </div>
    </div>
    </div>
  )
}

export default SingleProject