import React,{useEffect} from 'react'
import SingleProject from './SingleProject'
import Post from './Post'




export default function Projects() {
     // scroll tot top
     useEffect(()=>{
      window.scrollTo(0,0)
    },[]);

  return (
    <div>
      <Post/>
     
    </div>
  )
}
