import Carousel from '@/components/Carousel'
import React, { useEffect } from 'react'
import Eventsection from './Eventsection'
import Second from './Second'

import SingleProject from '../projects/SingleProject'
import Events from '../feed/Events'
import ExecutiveDisplay from '../about/ExecutiveDisplay'
import EventsCarousel from '@/components/EventsCarousel'
import ExecutiveShow from '../about/ExecutiveShow'
import NewSingleProject from '../projects/NewSingleProject'

export default function Home() {
  // to bring page to top
  // useEffect(()=>{
  //   window.scrollTo(0,0)
  // },[]);
  return (
    <div>
        <Carousel/>
        {/* what we do */}
        <Second/>

        {/* projects -prelude */}
        {/* <SingleProject/> */}

        {/* new single project */}
        <NewSingleProject/>

        {/* evets-section */}
        <Eventsection/>

        {/* events */}
        <Events/>
        {/* Events carousel */}

        {/* executive show */}
        <ExecutiveShow/>
    </div>
  )
}
