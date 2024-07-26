import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link,useNavigate } from 'react-router-dom';
import { createEvent } from '@/api/api';

export default function AddEvent() {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('venue', venue);
    formData.append('time', time);
    formData.append('coverPhoto', coverPhoto);

    try {
      await createEvent(formData);
      console.log(formData);
      navigate('/dash/events'); // Redirect to events page after successful event creation
    } catch (error) {
      console.error('Failed to create event:', error);
    }
  };

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
                <form onSubmit={handleSubmit}>
                    {/* form content container */}
                    <div className="bg-slate-100 p-4">
                        {/* get title */}
                        <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff] ">
                                Title
                            </label>
                            <input type="text" placeholder='Enter Title' className='w-full p-2 rounded-[5px]' onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                         {/* get venue */}
                         <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff]">
                                Venue
                            </label>
                            <input type="text" placeholder='Enter Venue' className='w-full p-2 rounded-[5px]' onChange={(e)=>setVenue(e.target.value)} />
                        </div>

                         {/* get time */}
                         <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff]">
                                Time
                            </label>
                            <input type="text" placeholder='Enter Time' className='w-full p-2 rounded-[5px]' onChange={(e)=>setTime(e.target.value)}/>
                        </div>

                        {/* get cover photo */}
                        <div className="my-4">
                            <label htmlFor="" className='text-xl text-[#0099ff]'>Cover Photo</label>
                            <input type="file" accept='image/*' alt="cover photo" className='rounded-[5px]'  onChange={(e) => setCoverPhoto(e.target.files[0])}/>
                        </div>

                        {/* submit form */}
                        <div className="w-full flex justify-center">
                        <button
                          type="submit"
                          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                          Add events
                        </button>
                        </div>
                    </div>
                </form>
        </div>
    </div>
  )
}
