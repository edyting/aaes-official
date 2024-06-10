import Carousel from '@/components/Carousel'
import React from 'react'
import Eventsection from './Eventsection'
import Second from './Second'
import Projects from './Projects'

export default function Home() {
  return (
    <div>
        <Carousel/>
        {/* what we do */}
        <Second/>

        {/* projects -prelude */}
        <Projects/>

        {/* evets-section */}
        <Eventsection/>
    </div>
  )
}
