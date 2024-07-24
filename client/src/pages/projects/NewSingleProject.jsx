import React, { useState,useEffect,useRef } from 'react';

import {DummyPost} from '../../db'

import bgsvg from '/wave.svg'
import demopic from '../../assets/blog16.jpg'
import { Link } from 'react-router-dom';
import ProjectCarousel from '@/components/ProjectCarousel';


import { delay, motion, spring, useAnimation, useInView } from 'framer-motion'




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





  // setting up the image reveal animation
  const carouselControls = useAnimation();

  const textControls = useAnimation();

  const textContainer = useRef(null);
  const isInView = useInView(textContainer,{once:true} )

  const textVariant={
    hidden:{
      scale:0,opacity:0,x:200,y:400
    },
    show:{
      scale:1,opacity:1,x:0,y:0,
      transition:{ duration: 1.5,type: "spring", stiffness: 20,delay:.4 }
    }
  }

  const carouselVariant={
    hidden:{
      scale:0,opacity:0,x:300
    },
    show:{
      scale:1,opacity:1,x:0,
      transition:{ duration: 1.5,type: "spring", stiffness: 20,delay:.4 }
    }
  }

  useEffect(()=>{
    if(isInView){
     carouselControls.start("show");
     textControls.start("show");

    }
    
  },[isInView])


  return (
    <div>
      <div className='mt-4 md:mt-12 md:mb-12 '>
        {/* container start */}
        <div ref={textContainer} className="md:h-auto h-full w-full mx-auto bg-[#0099ff] md:pt-12 md:relative ">
            
            {currentproject.map((project)=>(
                // container
                <div key={project.id} className="h-full grid md:grid-cols-2 grid-cols-1 ">
  
            
            {/* descriptive text */}
            <motion.div  className="md:w-[75%] w-full h-[100%] md:justify-self-center text-center "
            variants={textVariant} initial="hidden" animate={textControls}
            >
                  <h2 className='md:text-4xl font-poppins text-3xl capitalize md:text-start my-2 text-white font-bold'>Top featured projects</h2>
                  {/* paragraph */}
                  <div className="">
                    <div className='text-start w-[95%] font-roboto mx-auto my-2 text-white md:my-8'>
                       <p className='my-2'>  {project.desc} </p>

                        <div className="text-start   rounded-lg">
                    <Link to='/projects/[12]/' className='bg-white  md:inline-flex text-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>Read more</Link>
                  </div>
                    </div>
                    

                
                  </div>
                  {/* button */}
                 
             </motion.div>
                 
            {/* white design */}
            <div className="md:w-[70%] md:justify-self-end md:h-[110%] md:z-10  py-4 items-end">
                <div className='md:h-full md:w-full md:bg-white rounded-l-2xl md:z-4 w-full h-full relative'>
                    {/*  absolute image container*/}
                    <motion.div className="md:h-[20rem] w-full  h-[calc(30vh-60%) shadow-2xl md:absolute md:top-[6%] md:right-[20%] md:rounded-3xl"
                    variants={carouselVariant}
                    initial="hidden"
                    animate={carouselControls}
                    >
                        {/* carousel to display project images */}
                    <ProjectCarousel/>
                    </motion.div>
                </div>
                {/* button */}
                <div className="text-center  rounded-lg pt-4 ">
                    <Link to='/projects/[12]/' className='bg-white md:hidden  flex text-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>Read more</Link>
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