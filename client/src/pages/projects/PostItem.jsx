import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from './PostAuthor';


function PostItem({post}) {

    //short the body rext of the card
    const shortdesc = post.desc.length > 120? post.desc.substr(0,120)+'...': post.desc;
    const shorttitle = post.title.length > 20? post.title.substr(0,20)+'...': post.title;

  return (
    <div>
        <div className="w-full  rounded-xl">
            <article className='bg-white  p-3 rounded-xl hover:shadow-xl'>
                <div className="">
                    <img src={post.thumbnail} alt={post.title} className='rounded overflow-hidden w-full h-[16rem]' />
                </div>
                <div className="mt-[1rem]">
                   <div className="my-2 text-gray-900 font-bold ">
                   <Link to={`/posts/${post.id}`}>
                    {shorttitle}
                    </Link>
                   </div>
                    <p>
                        {shortdesc}
                    </p>
                    <div className="flex justify-between items-end mt-4 items-center">
                        <PostAuthor/>
                        <Link to={`/posts/categories/${post.category}`} className='bg-[#f9f9f9] text-gray-900 rounded py-1 px-3 hover:bg-gray-900 hover:text-white shadow'>
                            {post.category}
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    </div>
  )
}

export default PostItem