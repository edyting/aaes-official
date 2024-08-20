import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

function PostItem({ post }) {
  // Shorten the title if it's too long
  const shortTitle = post.title && post.title.length > 20 ? post.title.substr(0, 20) + '...' : post.title;

  // Shorten the description if it's too long (uncomment if needed)
  // const shortDesc = post.desc && post.desc.length > 120 ? post.desc.substr(0, 120) + '...' : post.desc;

  return (
    <div className="w-full rounded-xl">
      <article className="bg-white p-3 rounded-xl hover:shadow-xl">
        <div className="">
          <img
            src={post.image || '/path/to/default-image.jpg'} // Fallback image if none provided
            alt={post.title || 'Post image'}
            className="rounded overflow-hidden w-full h-[200px] object-cover"
          />
        </div>
        <div className="mt-4">
          <div className="my-2 text-gray-900 font-bold">
            <Link to={`/posts/${post.id}`}>
              {shortTitle || 'Untitled Post'}
            </Link>
          </div>
          {/* Add description if needed */}
          {/* <p className="text-gray-600">
            {shortDesc || 'No description available.'}
          </p> */}
          <div className="flex justify-between items-center mt-4">
            {/* Passing author data to PostAuthor */}
            <PostAuthor author={post.author} />
            <Link
              to={`/posts/categories/${post.category}`}
              className="bg-[#f9f9f9] text-gray-900 rounded py-1 px-3 hover:bg-gray-900 hover:text-white shadow"
            >
              {post.category || 'Uncategorized'}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostItem;
