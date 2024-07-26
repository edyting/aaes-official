import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import { getProjects } from '@/api/api';

function Post() {
  const [posts, setPosts] = useState([]);  // Ensure initial state is an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await getProjects();
        setPosts(response);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    loadPost();
  }, []);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (error) return <p className="text-center py-5">{error}</p>;

  return (
    <div className='mt-12 md:w-full w-[95%] mx-auto md:mx-0'>
      {/* view all projects page */}
      <div className="mb-4">
        <h2 className='text-[#0099ff] font-bold text-3xl ml-12 capitalize'>Projects done by students</h2>
      </div>

      {/* all projects card */}
      <section className='md:mx-8 mb-12'>
         (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[26px]">
            {posts.map((post) => (
              <PostItem post={post} key={post._id} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className='text-2xl'>No Posts Found</h1>
          </div>
        )
      </section>
    </div>
  );
}

export default Post;
