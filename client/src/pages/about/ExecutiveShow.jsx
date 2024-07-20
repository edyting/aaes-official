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
        
       <div className='w-full h-auto my-5'>
   {/* rounded container */}
   <div className="w-[95%] mx-auto border rounded-xl border-[#0099ff]">

   <div className=" ">
         <div className="w-[90%] mx-auto">
            <h2 className='md:text-4xl text-2xl py-3 font-bold text-[#0099ff]'>Meet Our Executives</h2>
        </div>

            {/* cards container */}
            <div className="md:w-[90%]  md:mx-auto grid md:grid-cols-3 md:grid-rows-1   md:gap-x-4 gap-4  md:p-4 grid-cols-1 grid-rows-2 ">
                {cards.map((card)=>(
                <div className="w-[90%] mx-auto border shadow-lg border-[#0099ff] h-auto mb-2 rounded-xl ">
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
                </div>
                ))}
            </div>
          
        </div>
          {/* button */}
          <div className="w-[90%] mx-auto   ">
        <button className='capitalize text-[#0099ff] border-primary  border-2 px-4 py-2 mb-4  hover:text-white hover:bg-[#0099ff] rounded-xl hover:text-primary'>
           {/* {!eventstate ? " view next event": " view past events"}   */}
           <HashLink to={"/about/#executives"} >
            Meet Our executives
          </HashLink>
         </button>
        </div>
   </div>
       </div>
     );
}
 
export default ExecutiveShow;