import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useNavigate } from 'react-router-dom';
import { createProject } from '@/api/api'; // Make sure this function is defined in your API

export default function AddProject() {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [cover, setCover] = useState(null); // Handle file input
  const navigate = useNavigate();

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image'
  ];

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('article', article);
    if (cover) {
      formData.append('coverImg', cover); // Handle file input
    }

    try {
      await createProject(formData); // Ensure this function is defined in your API
      navigate('/dash/projects'); // Redirect to projects page after successful submission
    } catch (error) {
      console.error('Failed to create project:', error);
    }
  };

  return (
    <div className='w-full'>
      <div className="w-[80%] flex justify-between items-center py-8 mx-auto">
        <h2 className='text-4xl font-bold'>Add Project</h2>
        <Link to='/dash/projects' className='text-[#0099ff]'>Back to Projects</Link>
      </div>
      {/* Container */}
      <div className="w-[80%] mx-auto">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Form content container */}
          <div className="bg-slate-100 rounded-xl p-4">
            {/* Title */}
            <div className="my-4 flex flex-col">
              <label htmlFor="title" className="text-[#0099ff] text-xl">Title</label>
              <input
                type="text"
                id="title"
                placeholder='Enter Title'
                className='w-full rounded-[5px] p-2'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Article */}
            <div className="my-4">
              <label htmlFor="article" className='text-xl text-[#0099ff]'>Article</label>
              <ReactQuill
                className='bg-white rounded-xl overflow-scroll h-[15rem]'
                modules={modules}
                formats={formats}
                value={article}
                onChange={setArticle}
              />
            </div>

            {/* Cover Photo */}
            <div className="my-4">
              <label htmlFor="cover" className='text-xl text-[#0099ff]'>Cover Photo</label>
              <input
                type="file"
                id="cover"
                accept='image/*'
                className='text-[#0099ff]'
                onChange={(e) => setCover(e.target.files[0])} // Handle file input
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Add Project
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
