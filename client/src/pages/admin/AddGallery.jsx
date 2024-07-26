import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createGalleryItem } from '@/api/api'; // Make sure this function is defined in your API

export default function AddGallery() {
  const [caption, setCaption] = useState('');
  const [link, setLink] = useState('');
  const [cover, setCover] = useState(null); // Use null for files
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('link', link);
    if (cover) {
      formData.append('cover', cover); // Append the file
    }

    try {
      await createGalleryItem(formData); // Update to appropriate API function
      navigate('/dash/gallery'); // Redirect to gallery page after successful submission
    } catch (error) {
      console.error('Failed to create gallery item:', error);
    }
  };

  return (
    <div className='w-full'>
      <div className="w-[80%] flex justify-between items-center py-8 mx-auto">
        <h2 className='text-4xl font-bold'>Add Image</h2>
        <Link to='/dash/gallery' className='text-[#0099ff]'>Back to Gallery</Link>
      </div>
      {/* Container */}
      <div className="w-[80%] mx-auto">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Form content container */}
          <div className="bg-slate-100 rounded-xl p-4">
            {/* Image Caption */}
            <div className="my-4 flex flex-col">
              <label htmlFor="caption" className="text-xl text-[#0099ff]">Image Caption</label>
              <input
                type="text"
                id="caption"
                placeholder='Enter Image Caption'
                className='w-full rounded-[5px] p-2'
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>

            {/* Gallery Link */}
            <div className="my-4 flex flex-col">
              <label htmlFor="link" className='text-xl text-[#0099ff]'>
                Gallery Link (e.g., from Google Drive or Google Photos)
              </label>
              <input
                type="text"
                id="link"
                placeholder='http://googledrive'
                className='w-full rounded-[5px] p-2'
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            {/* Cover Photo */}
            <div className="my-4">
              <label htmlFor="cover" className='text-xl text-[#0099ff]'>Cover Photo</label>
              <input
                type="file"
                id="cover"
                accept='image/*'
                className='w-full rounded-[5px] p-2'
                onChange={(e) => setCover(e.target.files[0])} // Handle file input
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Add Image
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
