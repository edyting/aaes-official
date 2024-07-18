import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

export default function AddEvent() {
    const [value, setValue] = useState('');

    const formats =[
        'header',
        'bold','italic','underline','strike','blockquote',
        'list','bullet','indent',
        'link','image'
        ]

        const modules ={
            toolbar:[
              [{'header':[1,2,3,4,5,6,false]}],
              ['bold','italic','underline','strike','blockquote'],
              [{'list':'ordered'},{'list':'bullet'},{'indent':'1'},{'indent':'+1'}],
              ['link','image'],
              ['clean']
            ],
          }

  return (
    <div className='w-full'>
        <div className=" w-[80%]  flex justify-between items-center py-8 mx-auto">
            <h2 className='text-4xl font-bold '>Add Event</h2>
            <Link to={'/dash/events'} className='text-[#0099ff]'>Back to Events</Link>
        </div>
        {/* container */}
        <div className="w-[80%] mx-auto">
                {/* form */}
                <form action="">
                    {/* form content container */}
                    <div className="bg-slate-100 p-4">
                        {/* get title */}
                        <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff] ">
                                Title
                            </label>
                            <input type="text" placeholder='Enter Title' className='w-full p-2 rounded-[5px]' />
                        </div>
                         {/* get venue */}
                         <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff]">
                                Venue
                            </label>
                            <input type="text" placeholder='Enter Venue' className='w-full p-2 rounded-[5px]' />
                        </div>

                         {/* get time */}
                         <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff]">
                                Time
                            </label>
                            <input type="text" placeholder='Enter Time' className='w-full p-2 rounded-[5px]' />
                        </div>

                        {/* get cover photo */}
                        <div className="my-4">
                            <label htmlFor="" className='text-xl text-[#0099ff]'>Cover Photo</label>
                            <input type="file" accept='image/*' alt="cover photo" className='rounded-[5px]' />
                        </div>

                        {/* submit form */}
                        <div className="w-full flex justify-center">
                        <input type="submit" value="Add Project" className='bg-white px-2 py-1 border rounded-[5px] border-[#0099ff] mx-auto' />
                        </div>
                    </div>
                </form>
        </div>
    </div>
  )
}
