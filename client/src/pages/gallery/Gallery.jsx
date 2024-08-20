import React, { useEffect, useState } from 'react';
import { getGalleryItems } from '@/api/api'; // Adjust the import to your API module
import { Link } from 'react-router-dom';
import { MdEditNote } from 'react-icons/md'; // Import the icon

export default function Gallery() {
    const [galleries, setGalleries] = useState([]); // State to store fetched events
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    // Fetch gallery from the server
    useEffect(() => {
        const loadGallery = async () => {
            try {
                const response = await getGalleryItems();
                setGalleries(response); // Set events from API response
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch events:', err);
                setError('Failed to load events');
                setLoading(false);
            }
        };

        loadGallery();
    }, []);

    if (loading) return <p className="text-center py-5">Loading...</p>;
    if (error) return <p className="text-center py-5">{error}</p>;

    return (
        <div>
            {/* outer-container */}
            <div className="w-full">
                {/* top */}
                <div className="w-full text-center">
                    <div className="md:w-[70%] w-[90%] mt-5 md:mt-0 mx-auto">
                        <h1 className="md:text-5xl text-2xl font-bold md:p-4 p-2">Welcome to LOGO Gallery</h1>
                        <p>Our gallery showcases captivating images and snapshots capturing the essence of our association's activities, events, and achievements. From insightful laboratory experiments to captivating field trips, this collection offers a glimpse into the diverse and exciting experiences shared by our members.</p>
                    </div>
                </div>
                {/* grid-container */}
                <div className="md:w-[80%] w-[90%] grid md:grid-cols-3 grid-cols-1 gap-5 mx-auto my-12">
                    {galleries.length > 0 ? (
                        galleries.map((gallery) => (
                            <div key={gallery._id} className=" ">
                                {/* gallery */}
                                <div className="md:w-[95%] relative hover:scale-[1.02] rounded-xl shadow p-4">
                                    {/* inner */}
                                    <div className="">
                                        {/* image */}
                                        <div className="w-full h-full">
                                            <img src={gallery.cover} alt="" className="w-[100%] rounded-xl h-full" />
                                        </div>
                                        {/* text-gallery */}
                                        <div className="w-[95%] md:h-[4rem] -mt-4 absolute z-10 bottom-2 md:left-2 left-1 text-center bg-white">
                                            <h2 className="md:text-xl font-medium">{gallery.caption}</h2>
                                            <Link to={gallery.link} className="flex text-green-400 items-center gap-2">
                                                <p>See more</p>
                                                
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-5">No photo available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
