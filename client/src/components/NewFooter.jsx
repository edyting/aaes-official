import React from 'react'


// icons
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";





export default function NewFooter() {
  return (
    <div>
        {/* main footer container */}
        <div className="max-w-[95vw] md:mb-3 rounded-xl border-2 flex md:flex-row flex-col justify-between border-slate-50 mx-auto  bg-[#0099ff]">
           
            {/* top */}
            <div className="md:w-[30%] w-[90%]  mx-auto ">
                <div className=" w-full flex items-center md:justify-center md:py-5 md:mx-auto bg-green ">
                    <ul className=' py-2 '>
                        <li className='font-bold text-2xl text-white py-2'>logo</li>
                        <li> <Link className='px-2 py-1 text-white rounded-[10px]'>Home</Link> </li>
                        <li> <Link className='px-2 py-1 text-white rounded-[10px]'>About</Link> </li>
                        <li> <Link className='px-2 py-1 text-white rounded-[10px]'>Project</Link> </li>
                        <li> <Link className='px-2 py-1 text-white rounded-[10px]' to={'contact'}>Contact Us</Link> </li>
                    </ul>
                </div>
            </div>
            
            {/* middle */}
            <div className="md:w-[60%] mx-auto ">
                <div className=" mx-auto  md:py-6   md:flex flex-col  justify-between ">
                    {/* msg */}
                    <div className="">
                    <h1 className='text-2xl text-white  capitalize py-2 font-bold'>suscribe</h1>
                    <p className='capitalize text-sm font-poppins md:pb-2'>join our mailing list and get our news </p>
                    </div>
                    {/* input */}
                    <div className="">
                    <form action="" className='flex gap-2'>
                    <input type="text" placeholder='your email address' name="" id="" className='rounded-xl  px-6 w-full py-2' />
                    <input type="submit" className='text-white px-4 bg-slate-400 rounded-xl' value="Suscribe" />
                    </form>
                    </div>

                           {/*initially buttom */}
            <div className="w-full  md:py-4 py-2">
                <div className=" md:flex grid grid-cols-1 grid-rows-2 gap-y-8 justify-between mx-auto">
                    
                    {/* top-icons */}
                    <div className="row-start-1 py- md:py-0">
                    <ul className='grid-cols-5 md:gap-5 grid '>
                        <li> <Link className='text-white text-[2rem]'> <FaLinkedin /> </Link> </li>
                        <li>  <Link className='text-white text-[2rem]'> <FaSquareXTwitter />
                        </Link> </li>
                        <li>   <Link className='text-white text-[2rem]'> <FaInstagramSquare />
                        </Link></li>
                        <li> <Link className='text-white text-[2rem]'> <FaPhoneSquareAlt />
                        </Link></li>
                        <li> <Link className='text-white text-[2rem]'> <IoLocation />  </Link></li>
                    </ul>
                    {/* bottom */}
                    <div className="font-lobster">
                        @copyright 2024 Lorem ipsum dolor sit  <Link to={'/dash'}>amet.</Link>
                    </div>
                    </div>
            </div>
            </div>
                </div>
            </div>
         
          
     
        </div>
    </div>
  )
}
