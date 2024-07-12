import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import NewFooter from './NewFooter'



export default function Layout() {

  const location = useLocation();

  const [showNavbar,setShowNavbar]= useState(false);

  useEffect(()=>{
      if(location.pathname == '/dash' || location.pathname == '/dash/projects' || location.pathname == '/dash/gallery' || location.pathname == '/dash/events' || location.pathname == '/dash/executives' || location.pathname == '/dash/addproject'){
        setShowNavbar(false)
      }
      else{
        setShowNavbar(true)
      }
  },[location])

  return (
   <div>
    {/* navbar */}
    <div className="mx-0">
        {showNavbar && <Navbar/>}
    </div>
    {/* to display dynamic components */}
    <div className="">
        <Outlet/>
    </div>
    {/* <Footer/> */}
    <div className="">
    {showNavbar && <NewFooter/> }       
    </div>
   </div>
  )
}