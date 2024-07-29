import React from 'react'

// images
import image1 from '../../assets/avatar3.jpg'
import image2 from '../../assets/avatar1.jpg'
import image3 from '../../assets/avatar14.jpg'
import image4 from '../../assets/avatar5.jpg'
import image5 from '../../assets/avatar4.jpg'
import image6 from '../../assets/avatar2.jpg'
import image7 from '../../assets/avatar11.jpg'
import image8 from '../../assets/avatar6.jpg'

export default function Executive() {
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
      {/* display of executives  */}
      <div className="w-[95%] mx-auto">
        <h2 className="text-3xl md:ml-12 text-[#0099ff]">Current Executives</h2>
      </div>
      {/* cards container */}
      <div className="c-container mx-auto mt-4 w-[90%]  md:mx-auto grid md:grid-cols-3 md:grid-rows-  row-span-1 gap-x-4 gap-4 col-span-auto md:p-4 grid-cols-1 mb-6">
                {cards.map((card)=>(
                <div className="w-[100%] relative  hover:scale-[1.02]  rounded-xl shadow p-4 ">
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
                ))}
            </div>
    </div>
  )
}
