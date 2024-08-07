import React, { useEffect, useRef } from 'react'
import image from '../../assets/blog62.jpg'
import { Link } from 'react-router-dom'
import { Scale } from 'lucide-react'
import { delay, motion, spring, useAnimation, useInView } from 'framer-motion'



function Second() {

    const imageVariant = {
      hidden:{
        Scale:0,opacity:0.8,
      },
      show:{
        scale:1,opacity:1,
        transition:{
          duration:2.5,delay:1,ease:"easeIn"
        }
      }
    }

    // setting up the image reveal animation
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const imageContainer = useRef(null);
    const isInView = useInView(imageContainer,{once:true} )

    useEffect(()=>{
      if(isInView){
       mainControls.start("show");
       slideControls.start("show");
      }
      
    },[isInView])

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
      <h1 className='md:text-[1.5rem] text-2xl font-poppins font-bold md:ml-[1rem]  capitalize '>What we do </h1>



      </div>
      </div>

      {/* flex */}
      <div className="max-w-[full] flex lg:gap-[20px]  flex-col md:flex-row md:max-h-[32rem]">
        

        {/* left image ******\/**** */}
        <motion.div  className="w-full mb-5 md:mb-0 relative  rounded-xl    md:max-h-full  max-h-[20rem] "
        ref={imageContainer}
        variants={imageVariant}
        initial="hidden" 
        animate={mainControls}
        >
          {/* image */}
          <img src={image} className='w-full rounded-xl  h-full object-center' alt="" />

          {/*cover for reveal */}
          <motion.div className=""
          variants={{
            hidden:{left:0},
            show:{left:"100%",
              scale:1.1,
              transition:{
                duration:1.5,ease:"easeIn"
              }
            }
          }}
          initial="hidden"
          animate={slideControls}
          style={{
            position:"absolute",
            top:0,
            bottom:0,
            left:0,
            right:0,
            background:"white",
            zIndex:20,
          }}
          >
              
          </motion.div>
        </motion.div>


        {/* right */}
        <div className=" flex items-center  justify-center">
          {/* text */}
          <motion.div className="md:text-start md:max-w-2/5 leading-loose  " 
             
          >

              <motion.h2 className='capitalize overflow-hidden h-auto font-poppins md:text-5xl text-3xl  font-bold text-[#0099ff]'
           initial={{opacity:0,y:-75}}
           animate={{opacity:1,y:0}}
           transition={{ease:"easeIn",duration:.7, }}
              >Get to know more about us</motion.h2>
            <motion.p className='font-roboto md:text-lg'
          
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quae quod voluptate tenetur earum rem saepe consequuntur quasi unde, quia veritatis expedita sed, numquam accusantium aperiam! Eaque fugiat excepturi nostrum.</motion.p>
            {/* button */}
            <motion.button className=' font-roboto md:text-[#0099ff] border border-[#0099ff] bg-[#0099ff] text-center text-white md:bg-white rounded-xl mt-2 px-3 py-2 block mx-auto text-lg'
              initial={{scale:0.5,opacity:0,}}
              animate={{scale:1,opacity:1}}
              transition={{ease:"easeIn",duration:1, type:"spring", stiffness:50}}
            >
              <Link to={'/about'}>
              See more
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Second
