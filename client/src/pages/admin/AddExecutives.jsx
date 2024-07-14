import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

export default function AddExecutives() {
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
            <h2 className='text-4xl font-bold '>Add Executives</h2>
            <Link to={'/dash/executives'} className='text-[#0099ff]'>Back to Dashboard</Link>
        </div>
        {/* container */}
        <div className="w-[80%] mx-auto">
                {/* form */}
                <form action="">
                    {/* form content container */}
                    <div className="bg-[#0099ff] p-4">
                        {/* get title */}
                        <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="">
                                Full Name:
                            </label>
                            <input type="text" className='w-full p-2' />
                        </div>
                        {/* get position -> must be a select */}
                        <div className="">
                        <label htmlFor="" className="">
                                Position
                            </label>
                            <input type="text" className='w-full p-2' />
                        </div>
                        {/* get academic year -> must be a select */}
                        <div className="">
                        <label htmlFor="" className="">
                                Academic Year
                            </label>
                            <input type="text" className='w-full p-2' />
                        </div>
                        {/* get cover photo */}
                        <div className="my-4 flex flex-col">
                            <label htmlFor="">Executive Photo</label>
                            <input type="file" accept='image/*' alt="cover photo" />
                        </div>

                        {/* submit form */}
                        <div className="w-full flex justify-center">
                        <input type="submit" value="Add Executive" className='bg-white px-2 py-1 mx-auto' />
                        </div>

                        
                    </div>
                </form>
        </div>
    </div>
  )
}
