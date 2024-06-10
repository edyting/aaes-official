// src/components/Navbar.jsx
import React, { useState, useEffect,useRef } from 'react';
import { Link, } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };



  let hoverbg = 'focus:underline hover:underline decoration-solid decoration-4 decoration-rounded-lg decoration-primary underline-offset-[15px] h-full py-4 px-4';

  return (
    
    <nav
      className={`h-[5rem]  top-0 font-poppins delay-150 ease-in-out  flex items-center z-[100]
      mx-0 transition-all  bg-white   shadow duration-300
       `
    }
    >
      <div className="container md:mx- ">
        <div className="md:flex hidden  items-center justify-between">
          <div className="text-gray-800 text-xl font-bold font-roboto">
            <Link to="/">LOGO</Link>
          </div>



          <div className={`hidden md:flex   `}>
            <Link to="/" className={`text-gray-800 text-lg ${hoverbg}`}>
              {/* <div className="icon"><IoHomeOutline />
</div> */}
             <h1> Home</h1>
            </Link>
            <Link to="/about" className={`text-gray-800 text-lg ${hoverbg}`}>
              About
            </Link>
            {/* <Link to="/services" className={`text-gray-800 text-lg ${hoverbg}`}>
              Services
            </Link> */}
            <Link to="/contact" className={`text-gray-800 text-lg ${hoverbg}`}>
              Contact
            </Link>
          </div>

        </div>



        <div className="">
            {/* Responsive Menu for Small Screens */}
            {isOpen ? (
            <div className="md:hidden mx-0 top-0 left-0 absolute h-screen w-screen bg-gray-800 z-[100]">
                
            <div className="text-white p-4 text-2xl mb-0 pb-0 font-bold flex justify-between">
            <Link to="/">LOGO</Link>
            <IoMdClose size={'2rem'} onClick={toggleNavbar}/>
          </div>

              <div className="flex flex-col space-y-2 p-4">
                <Link to="/" className="text-white">
                  Home
                </Link>
                <Link to="/about" className="text-white">
                  About
                </Link>
                <Link to="/services" className="text-white">
                  Services
                </Link>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </div>
            </div>
          ): <div className="flex p-4 md:hidden  items-center justify-between">
          <div className="text-gray-800 text-xl font-bold">
            <Link to="/">LOGO</Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none ">
            {!isOpen? <IoMenu size={'2rem'} className='text-gray-800' />:
            <IoMdClose size={'2rem'} className='text-gray-800'/>}
            </button>
          </div>

          <div className={`hidden md:flex space-x-4`}>
            <Link to="/" className="text-gray-800">
              Home
            </Link>
            <Link to="/about" className="text-gray-800">
              About
            </Link>
            <Link to="/feed" className="text-gray-800">
              Services
            </Link>
            <Link to="/" className="text-gray-800">
              Contact
            </Link>
          </div>

        </div> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


