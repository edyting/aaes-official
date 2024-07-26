import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import NewFooter from './NewFooter'



export default function Layout() {

  const location = useLocation();

  const [showNavbar,setShowNavbar]= useState(false);

  useEffect(()=>{

        // Match paths that should not show the navbar
        const hideNavbarPaths = [
          '/dash',
          '/dash/projects',
          '/dash/gallery',
          '/dash/events',
          '/dash/executives',
          '/dash/addproject',
          '/dash/addexecutives',
          '/login',
          // Add other paths here as needed
        ];


      // if(location.pathname == '/dash' || location.pathname == '/dash/projects' || location.pathname == '/dash/gallery' || location.pathname == '/dash/events' || location.pathname == '/dash/executives' || location.pathname == '/dash/addproject' || location.pathname == '/dash/:id/edit'){
      //   setShowNavbar(false)
      // }
      // else{
      //   setShowNavbar(true)
      // }

      // using regular expression
  // Check if current path matches any of the hideNavbarPaths or /dash/:id/edit
      // Check if current path matches any of the hideNavbarPaths or starts with /dash or /projects/:id
      const matchHideNavbarPaths = hideNavbarPaths.includes(location.pathname) ||
      /^\/dash.*/.test(location.pathname) ||
      /^\/projects\/[^/]+$/.test(location.pathname);

    setShowNavbar(!matchHideNavbarPaths);

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
