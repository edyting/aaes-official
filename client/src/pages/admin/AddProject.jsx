import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AddProject() {
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
    <div className='w-full bg-blue-300'>
        {/* container */}
        <div className="w-[80%] mx-auto bg-green-400">
                {/* form */}
                <form action="">
                    {/* form content container */}
                    <div className="">
                        {/* get title */}
                        <div className="">
                            <label htmlFor="">
                                Title
                            </label>
                            <input type="text" />
                        </div>
                        {/* get article on projects */}
                        <div className="">
                        {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
                        <ReactQuill className='bg-white overflow-scroll h-[8rem]' modules={modules} onChange={setValue} value={value} formats={formats}/>
                        </div>
                        {/* get cover photo */}
                        <div className="">
                            <label htmlFor="">Cover Photo</label>
                            <input type="image" src="" alt="" />
                        </div>
                    </div>
                </form>
        </div>
    </div>
  )
}
