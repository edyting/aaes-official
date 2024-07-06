import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import NewFooter from './NewFooter'

export default function Layout() {
  return (
   <div>
    {/* navbar */}
    <div className="mx-0">
        <Navbar/>
    </div>
    {/* to display dynamic components */}
    <div className="">
        <Outlet/>
    </div>
    {/* <Footer/> */}
    <div className="">
    <NewFooter/>        
    </div>
   </div>
  )
}