import {React,useState }from 'react'

// images

import cover1 from "../../components/images/image1.jpg"
import cover2 from "../../components/images/image2.jpg"
import cover3 from "../../components/images/image3.jpg"
import { Link } from 'react-router-dom'

// icons
import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import Sidebar from './components/Sidebar'



export default function GalleryDashboard() {

  const [open, setOpen] = useState(true);

  const projectData =[
    {
      "title":   "ai in engineering",
      "article":  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam facere tempore temporibus enim sint maiores tempora labore unde delectus recusandae, architecto, explicabo, beatae laboriosam deserunt! Deserunt eligendi illo totam iste iure omnis corrupti maiores consequuntur, atque nemo ad libero, quisquam voluptas accusamus qui. Quasi minima dignissimos repellat atque dolore unde?",
      "coverPhoto" : cover1,
      "postDate":"Posted At 3:00",
      "id":1
    },
    {
      "title":   "ai in engineering",
      "article":  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam facere tempore temporibus enim sint maiores tempora labore unde delectus recusandae, architecto, explicabo, beatae laboriosam deserunt! Deserunt eligendi illo totam iste iure omnis corrupti maiores consequuntur, atque nemo ad libero, quisquam voluptas accusamus qui. Quasi minima dignissimos repellat atque dolore unde?",
      "coverPhoto" : cover2,
      "postDate":"Posted At 3:00",
      "id":2
    },
    {
      "title":   "ai in engineering",
      "article":  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam facere tempore temporibus enim sint maiores tempora labore unde delectus recusandae, architecto, explicabo, beatae laboriosam deserunt! Deserunt eligendi illo totam iste iure omnis corrupti maiores consequuntur, atque nemo ad libero, quisquam voluptas accusamus qui. Quasi minima dignissimos repellat atque dolore unde?",
      "coverPhoto" : cover3,
      "postDate":"Posted At 3:00",
      "id":3
    }

  ]


  return (
    <div className="flex bg-slate-200">
       <Sidebar open={open} setOpen={setOpen} />
      {/* layout */}
      <div className="flex-grow p-7">
        <div className="w-full">
          {/* dashboard title */}
          <div className="w-[90%] mx-auto py-5 flex justify-between items-center">
            <h2 className='text-5xl font-bold text-[#0099ff]  '>Gallery Dashboard</h2>
            <Link to={`/dash`}>Back to Dashboard</Link>
          </div>
          {/* create */}
          <div className="w-[90%] mx-auto py-1 flex justify-end">
                <button className='bg-[#0099ff] text-white px-3 py-1 rounded-[5px] font-bold' >
                  <Link to={'/dash/addgallery'}> Add Images</Link>
                </button>
          </div>
              {/* container */}
              <div className="w-[90%] p-4 m-auto ">
                {/* grid */}
                <div className=" grid grid-cols-1 gap-4">
                  {projectData.map((project)=>(
                    <div className="flex rounded-xl  shadow-lg bg-white" key={project.id}>
                    {/* image container */}
                    <div className="w-2/12">
                    <img src={`${project.coverPhoto}`} className=' rounded-xl' alt="" />
                    </div>
                    {/* text container */}
                    <div className="w-8/12  pl-8">
                        {/* title */}
                        <div className="">
                          <h2 className='text-3xl capitalize '>{project.title}</h2>
                        </div>
                        {/* details */}
                        {/* <div className="">
                          <p>{project.article.split('').slice(0,80)} ...</p>
                        </div> */}
                    </div>

                    {/* crud buttons */}
                    <div className="w-2/12 flex items-center justify-between p-4">
                        {/* edit */}
                        <div >
                        <Link to={`/dash/${project.id}/edit`} className="flex text-green-400 items-center gap-2">
                          <p>Edit</p>
                        <MdEditNote className='text-xl'/></Link>
                        </div>
                        {/* delete */}
                        <div className=" flex text-red-400 items-center gap-2">
                          <p>Delete</p>
                          <MdDelete className='text-xl' />
                        </div>
                    </div>
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}
