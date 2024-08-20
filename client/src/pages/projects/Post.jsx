import React, { useEffect, useState } from 'react';
import { getProjects } from '@/api/api';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function Post() {
  const [posts, setPosts] = useState([]); // State to store fetched posts
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const postsPerPage = 4; // Number of posts per page

  const totalPages = Math.ceil(posts.length / postsPerPage); // Total number of pages
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
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
    loadPosts();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="h-[18rem] grid place-content-center">
        <p className="text-center py-5">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[18rem] grid place-content-center">
        <p className="text-center py-5">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-12 md:w-full w-[95%] mx-auto md:mx-0">
      {/* View all projects page */}
      <div className="mb-4 w-[95%] mx-auto">
        <h2 className="text-[#0099ff] font-bold text-3xl capitalize">
          Projects done by students
        </h2>
      </div>

      {/* All projects card */}
      <section className="md:mx-8 mb-12">
        {currentPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[26px]">
            {currentPosts.map((post) => (
              <div key={post._id} className="bg-white p-3 rounded-xl hover:shadow-xl">
                <div>
                  <img
                    src={post.image || '/path/to/default-image.jpg'}
                    alt={post.title || 'Post image'}
                    className="rounded overflow-hidden w-full h-[200px] object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div className="my-2 text-gray-900 font-bold">
                    <a href={`/posts/${post.id}`}>
                      {post.title && post.title.length > 20
                        ? post.title.substr(0, 20) + '...'
                        : post.title || 'Untitled Post'}
                    </a>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-600">{'Unknown Author'}</span>
                    {/* <a
                      href={`/posts/categories/${post.category}`}
                      className="bg-[#f9f9f9] text-gray-900 rounded py-1 px-3 hover:bg-gray-900 hover:text-white shadow"
                    >
                      {post.category || 'Uncategorized'}
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-2xl">No Posts Found</h1>
          </div>
        )}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="w-full mb-4">
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
      )}
    </div>
  );
}
