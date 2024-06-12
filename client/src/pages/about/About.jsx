import Carousel from './Carousel'
import React from 'react'
import Second from './Second'
import Mission from './Mission'

export default function About() {
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
    </div>
  )
}
