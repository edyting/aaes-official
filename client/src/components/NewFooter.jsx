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
        <div className="max-w-[95vw] mb-3 rounded-xl border-2 border-slate-50 mx-auto h-auto bg-[#0099ff]">
            {/* top */}
            <div className="w-full">
                <div className="w-[80%]  md:py-5 mx-auto bg-green h-auto">
                    <ul className='md:grid-cols-5 grid-cols-2 grid gap-y-3 py-2 '>
                        <li className='font-bold text-2xl text-white col-span-2 md:col-span-5 py-2'>logo</li>
                        <li> <Link className='bg-[#6c6d72] px-2 py-1 text-white rounded-[10px]'>Home</Link> </li>
                        <li> <Link className='bg-[#6c6d72] px-2 py-1 text-white rounded-[10px]'>About</Link> </li>
                        <li> <Link className='bg-[#6c6d72] px-2 py-1 text-white rounded-[10px]'>Project</Link> </li>
                        <li> <Link className='bg-[#6c6d72] px-2 py-1 text-white rounded-[10px]' to={'contact'}>Contact Us</Link> </li>
                    </ul>
                </div>
            </div>
             {/* line */}
             <div className="w-full">
             <div className=" bg-[#6c6d72] h-[0.5px] w-[90%] mx-auto"></div>
             </div>
            {/* middle */}
            <div className="">
                <div className="w-[80%] mx-auto  md:py-6 py-3  md:flex grid grid-cols-1  justify-between ">
                    {/* msg */}
                    <div className="">
                    <h1 className='text-2xl text-white capitalize py-2 font-bold'>suscribe</h1>
                    <p className='capitalize text-sm font-poppins pb-2'>join our mailing list and get our news </p>
                    </div>
                    {/* input */}
                    <div className="">
                    <form action="" className='flex gap-2'>
                    <input type="text" placeholder='your email address' name="" id="" className='rounded-xl  px-6 w-full py-2' />
                    <input type="submit" className='text-white px-4 bg-slate-400 rounded-xl' value="Suscribe" />
                    </form>
                    </div>
                </div>
            </div>
          {/* line */}
          <div className="w-full">
             <div className=" bg-[#6c6d72] h-[0.5px] w-[90%] mx-auto"></div>
             </div>
            {/* buttom */}
            <div className="w-full  py-4">
                <div className="w-[80%] md:flex grid grid-cols-1 grid-rows-2 gap-y-8 justify-between mx-auto">
                    {/* left */}
                    <div className="font-lobster">
                        @copyright 2024 Lorem ipsum dolor sit amet.
                    </div>
                    {/* right */}
                    <div className="row-start-1 py- md:py-0">
                    <ul className='grid-cols-5 gap-10 grid '>
                        <li> <Link className='text-white text-[2rem]'> <FaLinkedin /> </Link> </li>
                        <li>  <Link className='text-white text-[2rem]'> <FaSquareXTwitter />
                        </Link> </li>
                        <li>   <Link className='text-white text-[2rem]'> <FaInstagramSquare />
                        </Link></li>
                        <li> <Link className='text-white text-[2rem]'> <FaPhoneSquareAlt />
                        </Link></li>
                        <li> <Link className='text-white text-[2rem]'> <IoLocation />  </Link></li>
                    </ul>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}
