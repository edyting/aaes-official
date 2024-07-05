import image1 from '../../assets/avatar3.jpg'
import image2 from '../../assets/avatar1.jpg'
import image3 from '../../assets/avatar14.jpg'
import image4 from '../../assets/avatar5.jpg'
import image5 from '../../assets/avatar4.jpg'
import image6 from '../../assets/avatar2.jpg'
import image7 from '../../assets/avatar11.jpg'
import image8 from '../../assets/avatar6.jpg'
import { HashLink } from 'react-router-hash-link'

const ExecutiveShow = () => {
    let cards=[{image:image1,title:'Shoo Phar Dhie',id:1,text:'CEO'},
    {image:image2,title:'Shoo Phar Dhie',text:'CEO',id:2},
    {image:image3,title:'Shoo Phar Dhie',text:'CEO',id:3},]

    return ( 
        
       <div >
         <div className="md:w-[83%] md:mx-28 ">
         <div className="">
            <h2 className='md:text-4xl text-2xl ml-8 font-bold text-[#0099ff]'>Meet Our Executives</h2>
        </div>

            {/* cards container */}
            <div className="c-container md:w-[90%] md:mx-auto grid md:grid-cols-3 md:grid-rows-1  row-span-1 md:gap-x-4 gap-4 col-span-auto md:p-4 grid-cols-1 grid-rows-2 overflow-hidden">
                {cards.map((card)=>(
                <div className="w-[100%] relative shadow bg-primaryblue p-4 ">
                    {/* inner */}
                    <div className=""> 
                    {/* image */}
                    <div className="max-w-[] max-h-full">
                        <img src={card.image} alt="" className="w-[100%] h-full" />
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
          {/* button */}
          <div className="ml-12">
        <button className='capitalize text-[#0099ff] border-primary  border-2 px-4 py-2 mb-4  hover:text-white hover:bg-[#0099ff] rounded hover:text-primary'>
           {/* {!eventstate ? " view next event": " view past events"}   */}
           <HashLink to={"/about/#executives"} >
            Meet Our executives
          </HashLink>
         </button>
        </div>
       </div>
     );
}
 
export default ExecutiveShow;