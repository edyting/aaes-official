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
                    <ul className='md:grid-cols-5 grid-cols-2 grid '>
                        <li className='font-bold text-2xl text-white'>logo</li>
                        <li> <Link className='bg-[#6c6d72] px-2 py-1 text-white rounded-[10px]'>Home</Link> </li>
                        <li> <Link className='bg-[#6c6d72] px-2 py-1 text-white rounded-[10px]'>About</Link> </li>
                        <li> <Link className='bg-[#6c6d72] px-2 py-1 text-white rounded-[10px]'>Project</Link> </li>
                        <li> <Link className='bg-[#6c6d72] px-2 py-1 text-white rounded-[10px]'>Contact Us</Link> </li>
                    </ul>
                </div>
            </div>
             {/* line */}
             <div className="w-full">
             <div className=" bg-[#6c6d72] h-[0.5px] w-[90%] mx-auto"></div>
             </div>
            {/* middle */}
            <div className="">
                <div className="w-[80%] mx-auto py-6 bg-yellow- flex justify-between ">
                    {/* msg */}
                    <div className="">
                    <h1 className='text-lg capitalize font-bold'>suscribe</h1>
                    <p className='capitalize text-sm'>join our mailing list and get our news </p>
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
                <div className="w-[80%] flex justify-between mx-auto">
                    {/* left */}
                    <div className="">
                        @copyright 2024 Lorem ipsum dolor sit amet.
                    </div>
                    {/* right */}
                    <div className="">
                    <ul className='md:grid-cols-5 gap-10 grid '>
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
