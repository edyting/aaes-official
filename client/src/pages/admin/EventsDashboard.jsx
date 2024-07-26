import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import the Sidebar component
import { MdEditNote, MdDelete } from 'react-icons/md';
import { getEvents } from '@/api/api'; // Adjust the import to your API module

export default function EventsDashboard() {
  const [open, setOpen] = useState(true); // State for sidebar toggle
  const [events, setEvents] = useState([]); // State to store fetched events
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch events from the server
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response); // Set events from API response
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch events:', err);
        setError('Failed to load events');
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (error) return <p className="text-center py-5">{error}</p>;

  return (
    <div className="flex bg-slate-200 min-h-screen">
      <Sidebar open={open} setOpen={setOpen} /> {/* Use the Sidebar component */}
      <div className="flex-grow p-4 md:p-7">
        {/* Layout */}
        <div className="w-full max-w-screen-lg mx-auto">
          {/* Dashboard title */}
          <div className="py-5 flex flex-col md:flex-row justify-between items-center">
            <h2 className='text-3xl md:text-5xl font-bold text-[#0099ff]'>Events Dashboard</h2>
            <Link to={`/dash`} className='text-blue-500 hover:underline'>Back to Dashboard</Link>
          </div>
          {/* Create */}
          <div className="py-1 flex justify-end">
            <button className='bg-[#0099ff] text-white px-4 py-2 rounded-md font-bold'>
              <Link to={'/dash/addevent'}> Add Event</Link>
            </button>
          </div>
          {/* Container */}
          <div className="p-4">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {events.length > 0 ? (
                events.map((event) => (
                  <div className="flex flex-col sm:flex-row rounded-lg shadow-lg bg-white" key={event._id}>
                    {/* Image container */}
                    <div className="w-full sm:w-1/3">
                      <img
                        src={event.coverPhoto ? `/path/to/images/${event.coverPhoto}` : '/path/to/default/image.jpg'}
                        className='w-full h-48 object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg'
                        alt={event.title || 'Event cover'}
                      />
                    </div>
                    {/* Text container */}
                    <div className="w-full sm:w-2/3 p-4">
                      {/* Title */}
                      <div>
                        <h2 className='text-lg md:text-xl font-semibold capitalize'>{event.title || 'No Title'}</h2>
                      </div>
                      {/* Description */}
                      <div className="mt-2">
                        <p className='text-sm md:text-base'>{event.article ? `${event.article.slice(0, 50)}...` : 'No Description'}</p>
                      </div>
                      {/* Post Date */}
                      <div className="mt-2">
                        <p className='text-sm md:text-base'>Date: {event.time ? new Date(event.time).toLocaleDateString() : 'Unknown Date'}</p>
                      </div>
                    </div>
                    {/* CRUD buttons */}
                    <div className="flex flex-wrap items-center justify-between p-4 border-t border-gray-200 rounded-b-lg">
                      {/* Edit */}
                      <div>
                        <Link to={`/dash/${event._id}/edit`} className="flex text-green-400 items-center gap-2">
                          <p>Edit</p>
                          <MdEditNote className='text-lg' />
                        </Link>
                      </div>
                      {/* Delete */}
                      <div className="flex text-red-400 items-center gap-2">
                        <p>Delete</p>
                        <MdDelete className='text-lg' />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center py-5">No events available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
