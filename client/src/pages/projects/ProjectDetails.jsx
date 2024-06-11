import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import {DummyPost} from '../../db'



function ProjectDetails() {
    // scroll tot top
    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);

    const [posts,setPost]= useState(DummyPost)

    //   paginating
       const [currentpage,setCurrentpage]=useState(1);
       const [postperpage,setpostperpage]=useState(1);
    //    logic
       const lastIndex = currentpage * postperpage;
       const firstIndex = lastIndex - postperpage;
       const currentproject = posts.slice(posts.length -1,posts.length)


  return (
    <div className=' mx-auto '>
        {/* carousel */}
        <Carousel/>
        {currentproject.map((project)=>(
      <section  className=''>
        <div className=" bg-white rounded-xl p-3 shadow">


        <h1 className='text-4xl font-bold py-2 text-center capitalize'>Details of  Post</h1>
            <div className="w-[60%] mx-auto my-4 space-y-2">
            {/* to generate more text */}
             <p>{project.desc}</p>
             <p>{project.desc}</p>
             <p>{project.desc}</p>
             <p>{project.desc}</p>
             <p>{project.desc}</p>
             <p>{project.desc}</p>
             <p>{project.desc}</p>
             <p>{project.desc}</p>
             <p>{project.desc}</p>
             <p>{project.desc}</p>
           
            </div>
        </div>
      </section>
        ))}
        <div className="text-center rounded-lg my-12">
                    <Link to='/projects' className='text-white bg-[#0099ff] font-semibold capitalize px-4 py-2 rounded-[0.5rem]'>View More Projecs</Link>
                  </div>
    </div>
  )
}

export default ProjectDetails