import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { getExecutives } from '@/api/api';
import imagePlaceholder from '../../assets/avatar1.jpg'; // Placeholder image for null photo

import React, { useEffect, useRef, useState } from 'react'

import { delay, motion, spring, useAnimation, useInView } from 'framer-motion'

const ExecutiveShow = () => {
  const [executives, setExecutives] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

<<<<<<< HEAD
    
  const cardVariant = {
    hidden:{
      Scale:0,opacity:0.8,y:200
    },
    show:{
      scale:1,opacity:1,y:0,
      
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
        
       <div className='w-full h-auto my-5'>
   {/* rounded container */}
   <div className="w-[95%] mx-auto border rounded-xl border-[#0099ff]">
=======
  useEffect(() => {
    const loadExecutives = async () => {
      try {
        const response = await getExecutives();
        setExecutives(response); // Set executives from API response
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch executives:', err);
        setError('Failed to load executives');
        setLoading(false);
      }
    };
>>>>>>> 3f5ce241a87ee1f9d4fea2c54867d17631eeae90

    loadExecutives();
  }, []);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (error) return <p className="text-center py-5">{error}</p>;

  return (
    <div className='w-full h-auto my-5'>
      {/* Rounded container */}
      <div className="w-[95%] mx-auto border rounded-xl border-[#0099ff]">
        <div className=" ">
          <div className="w-[90%] mx-auto">
            <h2 className='md:text-4xl text-2xl py-3 font-bold text-[#0099ff]'>Meet Our Executives</h2>
<<<<<<< HEAD
        </div>

            {/* cards container */}
            <motion.div className="md:w-[90%]  md:mx-auto grid md:grid-cols-3 md:grid-rows-1   md:gap-x-4 gap-4  md:p-4 grid-cols-1 grid-rows-2 "
             
            >
                {cards.map((card,i)=>(
                <motion.div className="w-[90%] mx-auto border shadow-lg border-[#0099ff] h-auto mb-2 rounded-xl "
                variants={cardVariant}
                initial="hidden"
                animate={mainControls}
                ref={cardContainer}
                transition={{
                    duration:2,ease:"easeIn",type: "spring",mass:0.4,damping:7,
                    delay:i*0.1
                  }}
                >
                    {/* inner */}
                    <div className=""> 
                    {/* image */}
                    <div className="max-w-full h-full shadow rounded-t-xl mx-auto">
                        <img src={card.image} alt="" className="w-[100%] rounded-t-xl h-[90%]" />
                    </div>
                    {/* text-card */}
                    <div className=" w-[95%] md:h-[4rem] text-center mt-4 mb-4 ">
                        <h2 className='md:text-xl font-medium '>{card.title}</h2>
                        <p className='font-poppins text-[#0099ff]'>{card.text}</p>
                    </div>
                    </div>
                </motion.div>
                ))}
            </motion.div>
          
=======
          </div>
          {/* Cards container */}
          <div className="md:w-[90%] md:mx-auto grid md:grid-cols-3 md:grid-rows-1 md:gap-x-4 gap-4 md:p-4 grid-cols-1 grid-rows-2 ">
            {executives.map((executive) => (
              <div className="w-[90%] mx-auto border shadow-lg border-[#0099ff] h-auto mb-2 rounded-xl" key={executive._id}>
                {/* Inner */}
                <div className="">
                  {/* Image */}
                  <div className="max-w-full h-full shadow rounded-t-xl mx-auto">
                    <img
                      src={executive.photo || imagePlaceholder}
                      alt={executive.fullName}
                      className="w-[100%] rounded-t-xl h-[90%]"
                    />
                  </div>
                  {/* Text-card */}
                  <div className="w-[95%] md:h-[4rem] text-center mt-4 mb-4">
                    <h2 className='md:text-xl font-medium'>{executive.fullName}</h2>
                    <p className='font-poppins text-[#0099ff]'>{executive.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
>>>>>>> 3f5ce241a87ee1f9d4fea2c54867d17631eeae90
        </div>
        {/* Button */}
        <div className="w-[90%] mx-auto">
          <button className='capitalize text-[#0099ff] border-primary border-2 px-4 py-2 mb-4 hover:text-white hover:bg-[#0099ff] rounded-xl hover:text-primary'>
            <HashLink to={"/about/#executives"}>
              Meet Our executives
            </HashLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveShow;
