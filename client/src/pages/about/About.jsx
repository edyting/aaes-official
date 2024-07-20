import Carousel from './Carousel'
import React from 'react'
import Second from './Second'
import Mission from './Mission'
import Executive from './Executive'

export default function About() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <div>
      {/* carousel */}
      <div className="mb-12">
        <Carousel/>
      </div>

      {/* years as an association */}
      <div className="">
        <Second/>
      </div>
      {/* mission and vision section */}

      <div className="">
        <Mission/>
      </div>

      {/* executives */}
      <div className="" id='executives'>
      <Executive/>
      </div>
    </div>
  )
}
