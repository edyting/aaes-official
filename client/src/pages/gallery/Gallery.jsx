import React, { useEffect } from 'react'

// images
import image1 from '../../assets/avatar3.jpg'
import image2 from '../../assets/avatar1.jpg'
import image3 from '../../assets/avatar14.jpg'
import image4 from '../../assets/avatar5.jpg'
import image5 from '../../assets/avatar4.jpg'
import image6 from '../../assets/avatar2.jpg'
import image7 from '../../assets/avatar11.jpg'
import image8 from '../../assets/avatar6.jpg'


export default function Gallery() {

    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);

      

    let cards=[{image:image1,title:'Shoo Phar Dhie',id:1,text:'CEO'},
        {image:image2,title:'Shoo Phar Dhie',text:'CEO',id:2},
        {image:image3,title:'Shoo Phar Dhie',text:'CEO',id:3},
        {image:image4,title:'Shoo Phar Dhie',text:'CEO',id:4},
        {image:image5,title:'Shoo Phar Dhie',text:'CEO',id:5},
        {image:image6,title:'Shoo Phar Dhie',text:'CEO',id:6},
        {image:image7,title:'Shoo Phar Dhie',text:'CEO',id:7},
        {image:image8,title:'Shoo Phar Dhie',text:'CEO',id:8}]

  return (
    <div>
        {/* outer-container */}
        <div className="w-full">
            {/* top */}
            <div className="w-full text-center">
                <div className="md:w-[70%] w-[90%] mt-5 md:mt-0 mx-auto">
                <h1 className='md:text-5xl text-2xl font-bold md:p-4 p-2'>Welcome to LOGO Gallery</h1>
                <p>Our gallery showcases captivating images and snapshots capturing the essence of our association's activities, events, and achievements. From insightful laboratory experiments to captivating field trips, this collection offers a glimpse into the diverse and exciting experiences shared by our members.</p>
                </div>
            </div>
            {/* grid-container  */}
            <div className="md:w-[80%] w-[90%] grid md:grid-cols-3 grid-cols-1 gap-5 mx-auto my-12">
                {cards.map((card) => (
                    <div key={card.id} className=" ">
                    {/* card */}
                        <div className="md:w-[95%] relative hover:scale-[1.02]   rounded-xl shadow p-4 ">
                    {/* inner */}
                    <div className=""> 
                    {/* image */}
                    <div className="w-full h-full">
                        <img src={card.image} alt="" className="w-[100%] rounded-xl h-full" />
                    </div>
                    {/* text-card */}
                    <div className=" w-[95%] md:h-[4rem] -mt-4 absolute z-10 bottom-2 md:left-2 left-1 text-center bg-white">
                        <h2 className='md:text-xl font-medium'>{card.title}</h2>
                        <p className='text-grayscale'>{card.text}</p>
                    </div>
                    </div>
                </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
