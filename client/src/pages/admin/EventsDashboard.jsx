import React, { useState } from 'react';
import cover1 from "../../components/images/image1.jpg";
import cover2 from "../../components/images/image2.jpg";
import cover3 from "../../components/images/image3.jpg";
import { Link } from 'react-router-dom';
import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import { MdEditNote, MdDelete } from "react-icons/md";

export default function EventsDashboard() {
  const [open, setOpen] = useState(true); // State for sidebar toggle

  const projectData = [
    {
      "title": "ai in engineering",
      "article": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam facere tempore temporibus enim sint maiores tempora labore unde delectus recusandae, architecto, explicabo, beatae laboriosam deserunt! Deserunt eligendi illo totam iste iure omnis corrupti maiores consequuntur, atque nemo ad libero, quisquam voluptas accusamus qui. Quasi minima dignissimos repellat atque dolore unde?",
      "coverPhoto": cover1,
      "postDate": "Posted At 3:00",
      "id": 1
    },
    {
      "title": "ai in engineering",
      "article": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam facere tempore temporibus enim sint maiores tempora labore unde delectus recusandae, architecto, explicabo, beatae laboriosam deserunt! Deserunt eligendi illo totam iste iure omnis corrupti maiores consequuntur, atque nemo ad libero, quisquam voluptas accusamus qui. Quasi minima dignissimos repellat atque dolore unde?",
      "coverPhoto": cover2,
      "postDate": "Posted At 3:00",
      "id": 2
    },
    {
      "title": "ai in engineering",
      "article": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam facere tempore temporibus enim sint maiores tempora labore unde delectus recusandae, architecto, explicabo, beatae laboriosam deserunt! Deserunt eligendi illo totam iste iure omnis corrupti maiores consequuntur, atque nemo ad libero, quisquam voluptas accusamus qui. Quasi minima dignissimos repellat atque dolore unde?",
      "coverPhoto": cover3,
      "postDate": "Posted At 3:00",
      "id": 3
    }
  ];

  return (
    <div className="flex bg-slate-200">
      <Sidebar open={open} setOpen={setOpen} /> {/* Use the Sidebar component */}
      <div className="flex-grow p-7">
        {/* Layout */}
        <div className="w-full">
          {/* Dashboard title */}
          <div className="w-[90%] mx-auto py-5 flex justify-between items-center">
            <h2 className='text-5xl font-bold text-[#0099ff]'>Events Dashboard</h2>
            <Link to={`/dash`}>Back to Dashboard</Link>
          </div>
          {/* Create */}
          <div className="w-[90%] mx-auto py-1 flex justify-end">
            <button className='bg-[#0099ff] text-white px-3 py-1 rounded-[5px] font-bold'>
              <Link to={'/dash/addevent'}> Add Events</Link>
            </button>
          </div>
          {/* Container */}
          <div className="w-[90%] p-4 m-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 gap-4">
              {projectData.map((project) => (
                <div className="flex rounded-l-xl shadow-lg bg-white" key={project.id}>
                  {/* Image container */}
                  <div className="w-2/12">
                    <img src={project.coverPhoto} className='rounded-l-xl' alt="" />
                  </div>
                  {/* Text container */}
                  <div className="w-8/12 pl-8">
                    {/* Title */}
                    <div>
                      <h2 className='text-xl capitalize'>Title: {project.title}</h2>
                    </div>
                    {/* Time */}
                    <div>
                      <p>Time: {project.article.split('').slice(0, 10)} ...</p>
                    </div>
                    {/* Venue */}
                    <div>
                      <p>Venue: {project.article.split('').slice(0, 10)} ...</p>
                    </div>
                  </div>
                  {/* CRUD buttons */}
                  <div className="w-2/12 flex items-center justify-between p-4">
                    {/* Edit */}
                    <div>
                      <Link to={`/dash/${project.id}/edit`} className="flex text-green-400 items-center gap-2">
                        <p>Edit</p>
                        <MdEditNote className='text-xl' />
                      </Link>
                    </div>
                    {/* Delete */}
                    <div className="flex text-red-400 items-center gap-2">
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
  );
}
