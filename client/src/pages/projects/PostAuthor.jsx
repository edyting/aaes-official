import React from 'react'
import { Link } from 'react-router-dom'


function PostAuthor() {
  return (
    <div className=''>
        <Link to={`/posts/users/id`} className='flex gap-5 items-start'>
            {/* <p src={avatar}/> */}
            <div className="">
                <p variant='h6'>
                    By: Manuel
                </p>
                <small>
                    Just Now
                </small>
            </div>
        </Link>
    </div>
  )
}

export default PostAuthor