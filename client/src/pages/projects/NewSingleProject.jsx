import React, { useState,useEffect } from 'react';

import {DummyPost} from '../../db'

import bgsvg from '/wave.svg'
import demopic from '../../assets/blog16.jpg'
import { Link } from 'react-router-dom';
import ProjectCarousel from '@/components/ProjectCarousel';


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
      <div className='mt-4 md:mt-12 md:mb-12 block'>
        {/* container start */}
        <div className="h-auto  w-full mx-auto bg-[#0099ff] md:pt-12 md:relative ">
            
            {currentproject.map((project)=>(
                // container
                <div key={project.id} className="h-full grid md:grid-cols-2 grid-cols-1 ">
  
            
            {/* descriptive text */}
            <div className="md:w-[75%] h-auto md:justify-self-center text-center ">
                  <h2 className='md:text-4xl font-poppins text-3xl capitalize md:text-start my-2 text-white font-bold'>Top featured projects</h2>
                  {/* paragraph */}
                  <div className="">
                    <p className='text-start w-[95%] font-roboto mx-auto text-white md:my-8'>
                        {project.desc}
                    </p>
                  </div>
                  {/* button */}
                  <div className="text-start rounded-lg">
                    <Link to='/projects/[12]/' className='bg-white hidden md:inline-flex text-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>Read more</Link>
                  </div>

             </div>
                 
            {/* white design */}
            <div className="md:w-[70%] md:justify-self-end md:h-[110%] z-10  py-4 items-end">
                <div className='md:h-full md:w-full md:bg-white rounded-l-2xl z-4 w-full h-full relative'>
                    {/*  absolute image container*/}
                    <div className="md:h-[20rem] w-full  h-[calc(30vh-60%)] absolute md:top-[6%] md:right-[20%] md:rounded-3xl">
                        {/* carousel to display project images */}
                    <ProjectCarousel/>
                    </div>
                </div>
                {/* button */}
                <div className="text-center rounded-lg pt-4 ">
                    <Link to='/projects/[12]/' className='bg-white md:hidden  visible text-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>Read more</Link>
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