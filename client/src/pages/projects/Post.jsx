<<<<<<< HEAD
// import React, { useState } from 'react';

// import PostItem from './PostItem';

// import {DummyPost} from '../../db'

// // importing pagination from shad cn
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"


// function Post() {
//   const [posts,setPost]= useState(DummyPost)
//   return (
//     <div className='mt-12  md:w-full w-[95%] mx-auto md:mx-0 '>
//       {/* view all projects page */}
//       <div className=" mb-4">
//         <h2 className='text-[#0099ff] font-bold text-3xl ml-12  capitalize '>Projects done by students</h2>
//       </div>

//       {/* all projects card */}
//       <section className='md:mx-8 mb-12'>
//       {posts.length > 0 ?  <div className="grid md:grid-cols-3 grid-cols-1 gap-[26px]">
//        {posts.map((post)=>(
//           <PostItem post={post} key={post.id}/>
//         ))}
//        </div> : <div className=" flex justify-center items-center ">
//        <h1 className='text-2xl  '> No Posts Found</h1>
//        </div> }
//       </section>

//        {/* pagination */}
//        <div className="w-full bg-green-400">
//                {/* pagination */}
//       <div className="mb-4">
//             <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious href="#" />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">1</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationEllipsis />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext href="#" />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>

//       </div>
//         </div>
//     </div>
//   )
// }

// export default Post



import PostItem from './PostItem';
import { DummyPost } from '../../db';

import React, { useEffect, useRef, useState } from 'react'

import { delay, motion, spring, useAnimation, useInView } from 'framer-motion'

// Importing pagination from shadcn
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const cardVariant = {
  hidden:{
    opacity:0,y:-200
  },
  show:{
    opacity:1,y:0,
    
  }
}

function Post() {
  const [posts] = useState(DummyPost);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // setting up the image reveal animation
  const mainControls = useAnimation();

  const cardContainer = useRef(null);
  const isInView = useInView(cardContainer,{once:true} )


  useEffect(()=>{
    if(isInView){
     mainControls.start("show");
    }
    
  },[isInView])

  return (
    <div  ref={cardContainer} className='mt-12 md:w-full w-[95%] mx-auto md:mx-0'>
      {/* View all projects page */}
      <div className="mb-4 w-[95%] mx-auto">
        <h2 className='text-[#0099ff] font-bold text-3xl  capitalize'>Projects done by students</h2>
      </div>

      {/* All projects card */}
      <section className='md:mx-8 mb-12'>
        {currentPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[26px]">
            {currentPosts.map((post,i) => (
             <motion.div className=""
             variants={cardVariant}
                initial="hidden"
                animate={mainControls}
               
                transition={{
                    duration:2,ease:"easeIn",type: "spring",
                    delay:i*0.2
                  }}
             >
               <PostItem post={post} key={post.id} />
             </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className='text-2xl'>No Posts Found</h1>
          </div>
        )}
      </section>

      {/* Pagination */}
      <div className="w-full ">
        <div className="mb-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    href="#" 
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

=======
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

>>>>>>> 3f5ce241a87ee1f9d4fea2c54867d17631eeae90
export default Post;
