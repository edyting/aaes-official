import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Newsletter from './Newsletter';

function Footer() {
  return (
    <div className='bg-[#0099ff] w-screen '>
        {/* flex */}
      <div className="md:w-[80%] mx-auto md:mx-12 lg:mx-auto">
            {/* top */}
            <div className="md:flex md:py-4 grid grid-cols-2 mb-3 md:mb-0 justify-between  md:flex-row text-white space-y-4 text-lg items-center mx-2 md:mx-0">
                {/* logo */}
                <div className="col-span-2 text-center">
                    <h1>LOGO</h1>
                </div>
                {/* call us */}
                <div className="flex items-center gap-2 ">
                    {/* icon */}
                    <div className="bg-gray-600  md:p-2 p-1 flex items-center justify-center rounded-full shadow-xl ">
                    <IoCallOutline className='text-[30px] md:text-[40px]' />
                    </div>
                    {/* info */}
                    <div className="">
                    <h1 className='capitalize font-bold text-primary'>call us on</h1>
                    <p className='text-sm'>+233 88 989 5555</p>
                    </div>
                </div>
                {/* mail us */}
                <div className="flex items-center gap-2">
                    {/* icon */}
                    <div className="bg-gray-600  md:p-2 p-1 flex items-center justify-center rounded-full shadow-xl">
                    <IoMailOutline className='text-[30px] md:text-[40px]' />
                    </div>
                    {/* info */}
                    <div className="">
                        <h1 className='capitalize font-bold text-primary'>mail us on</h1>
                        <p className='text-sm'>mailus@gmail.com</p>
                    </div>
                </div>
                {/* location */}
                <div className="flex items-center gap-2">
                    {/* icon */}
                    <div className="bg-gray-600  md:p-2 p-1 flex items-center justify-center rounded-full shadow-xl">
                    <IoLocationOutline className='text-[30px] md:text-[40px]' />
                    </div>
                    {/* info */}
                    <div className="">
                        <h1 className='capitalize font-bold text-primary'>location</h1>
                        <p className='text-sm'>kumasi,ayeduase</p>
                    </div>
                </div>
            </div>
            {/* line */}
            <div className="bg-[#6c6d72] h-[0.5px] w-full"></div>
            {/* middle */}
            <div className="text-white flex flex-col md:flex-row justify-between py-4">
                {/* quick links */}
                <div className="flex space-x-8 mb-2 md:mb-0 lg:mx-4">
                <div className="">
                    <div className="flex  items-center gap-1">
                        <div className="h-2 w-2 bg-muted"></div>
                    <h1 className='text-primary text-lg font-bold capitaliz'>Quick links</h1>
                    </div>
                    <ul className='pl-4'>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                {/* social media */}
                <div className="">
                <div className="flex  items-center gap-1">
                        <div className="h-2 w-2 bg-muted"></div>
                    <h1 className='text-primary text-lg font-bold capitalize'>social media</h1>
                    </div>
                    <ul className='pl-4'>
                        <li>facebook</li>
                        <li>facebook</li>
                        <li>facebook</li>
                        <li>facebook</li>
                    </ul>

                </div>
                </div>
                {/* newsletter */}
                <div className="md:ml-6 lg:ml-0 ml-0">
                    <Newsletter/>
                </div>
            </div>
             {/* line */}
             <div className=" bg-[#6c6d72] h-[0.5px] w-full"></div>
            {/* bottom */}
            <div className="py-4 md:py-2 flex items-center justify-center text-white">
                    <p>@copyright 2024</p>
            </div>
      </div>
    </div>
  )
}

export default Footer