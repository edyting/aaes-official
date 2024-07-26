import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { getEvents } from "@/api/api";
import EventsCarousel from "@/components/EventsCarousel";
import imagePlaceholder from "../../assets/avatar1.jpg"; // Placeholder image for events without a cover image

function Upcoming() {
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
    <div className='w-full pl-2'>
      {/* cards container */}
      {/* view name */}
      <div className="">
        {/* <h1 className='text-2xl text-[#0099ff]  font-bold'>UPCOMING EVENTS</h1> */}
      </div>
      <div className="relative">
        <div className="relative md:w-full md:overflow-hidden">
          <div className="flex justify-between items-center w-full md:h-full">
            <EventsCarousel items={events.map(event => ({
              title: event.title,
              description: event.description || 'No description available',
              date: event.date || 'No date specified',
              intro: event.intro || 'No introduction available',
              time: event.time || 'No time specified',
              venue: event.venue || 'No venue specified',
              img: event.cover || imagePlaceholder,
              button: 'RSVP',
              id: event._id
            }))} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming;
