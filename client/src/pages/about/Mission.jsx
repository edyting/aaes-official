

import React, { useEffect, useRef, useState } from 'react'

import { delay, motion, spring, useAnimation, useInView } from 'framer-motion'


export default function Mission() {

    const data = [
        {title:"Mission",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis nam eligendi rerum distinctio, dolores accusantium dolorum dolorem molestias fugit amet illo repellat rem commodi officiis laudantium. Illum eius nam, voluptatem ipsam, sunt accusantium fugit doloremque totam laudantium animi praesentium commodi corrupti dignissimos quidem vitae voluptatum corporis. Ab, fugit quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in explicabo esse optio expedita quo debitis reiciendis atque eius deleniti.",id:1},
        {title:"Vision",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis nam eligendi rerum distinctio, dolores accusantium dolorum dolorem molestias fugit amet illo repellat rem commodi officiis laudantium. Illum eius nam, voluptatem ipsam, sunt accusantium fugit doloremque totam laudantium animi praesentium commodi corrupti dignissimos quidem vitae voluptatum corporis. Ab, fugit quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in explicabo esse optio expedita quo debitis reiciendis atque eius deleniti.",id:2},
    ]


           
  const cardVariant = {
    hidden:{
      Scale:0,opacity:0.8,x:200
    },
    show:{
      scale:1,opacity:1,x:0,
      
    }
  }


   // setting up the image reveal animation
   const mainControls = useAnimation();

   const cardContainer = useRef(null);
   const isInView = useInView(cardContainer,{once:true} )


   useEffect(()=>{
     if(isInView){
      mainControls.start("show");
     }
     
   },[isInView])

    
  return (




    <div>
        {/* main container */}
        <motion.div ref={cardContainer} className="w-full flex flex-col md:flex-row justify-between gap-10 md:px-12 px-2 mt-12  mb-12 "
        
        >
            {/* mission */}
            <div className=" flex md:flex-row flex-col space-y-5 justify-between gap-[3%]">
                {data.map((data,i)=>(
                   <motion.div className="h-full outline  rounded-xl p-2 outline-[#0099ff]  outline-2 md:w-2/4" key={data.id}
                   variants={cardVariant}
                   initial="hidden"
                   animate={mainControls}

                   transition={{
                       duration:2,ease:"easeIn",type: "spring",mass:0.4,damping:7,
                       delay:i*0.1
                     }}
                   >
                     <h2 className='text-[#0099ff] font-bold mb-2 text-3xl ml-8'>{data.title}</h2>
                    <div className="p-4">
                        <p>{data.text}</p>
                    </div>
                   </motion.div>
                ))}
            </div>
            {/* vision
            <div className="h-full outline rounded-xl p-2 outline-[#0099ff]  outline-2 md:w-2/4">
                <h2 className='text-[#0099ff] font-bold mb-2 text-3xl ml-8'>Vision</h2>
                <div className="p-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis nam eligendi rerum distinctio, dolores accusantium dolorum dolorem molestias fugit amet illo repellat rem commodi officiis laudantium. Illum eius nam, voluptatem ipsam, sunt accusantium fugit doloremque totam laudantium animi praesentium commodi corrupti dignissimos quidem vitae voluptatum corporis. Ab, fugit quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in explicabo esse optio expedita quo debitis reiciendis atque eius deleniti.</p>
                </div>
            </div> */}
        </motion.div>
    </div>
  )
}
