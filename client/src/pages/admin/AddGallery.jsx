import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

export default function AddGallery() {
    const [value, setValue] = useState('');

 

    

  return (
    <div className='w-full'>
        <div className=" w-[80%]  flex justify-between items-center py-8 mx-auto">
            <h2 className='text-4xl font-bold '>Add Image</h2>
            <Link to={'/dash/gallery'} className='text-[#0099ff]'>Back to Gallery</Link>
        </div>
        {/* container */}
        <div className="w-[80%] mx-auto">
                {/* form */}
                <form action="">
                    {/* form content container */}
                    <div className="bg-slate-100 rounded-xl p-4">
                        {/* get title */}
                        <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff]">
                                Image Caption
                            </label>
                            <input type="text" placeholder='Enter Image Title ' className=' rounded-[5px] p-2' />
                        </div>
                        {/* link to google drive */}
                       <div className="my-4 space-y-2  flex flex-col">
                        <label htmlFor="" className='text-xl text-[#0099ff]'>
                        Gallery Link (eg. from Google Drive or Google Photos)
                        </label>
                        <input type="text" placeholder='http://googledrive' className=' p-2 rounded-[5px]'  />
                       </div>
                        {/* get cover photo */}
                        <div className="my-4">
                            <label htmlFor="" className='text-xl text-[#0099ff]'>Cover Photo</label>
                            <input type="file" accept='image/*' alt="cover photo" />
                        </div>

                        {/* submit form */}
                        <div className="w-full flex justify-center">
                        <input type="submit" value="Add Project" className='bg-white border border-[#0099ff] rounded-[5px] px-2 py-1 mx-auto' />
                        </div>
                    </div>
                </form>
        </div>
    </div>
  )
}
