import React, { useState } from 'react';

import PostItem from './PostItem';

import {DummyPost} from '../../db'


function Post() {
  const [posts,setPost]= useState(DummyPost)
  return (
    <div>
      <section>
      {posts.length > 0 ?  <div className="grid md:grid-cols-3 grid-cols-1 gap-[26px]">
       {posts.map((post)=>(
          <PostItem post={post} key={post.id}/>
        ))}
       </div> : <div className="h-[30vh] flex justify-center items-center ">
       <h1 className='text-2xl  '> No Posts Found</h1>
       </div> }
      </section>
    </div>
  )
}

export default Post