"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import En from '../../messages/eng.json'; 
import Fr from '../../messages/fr.json';
import { useParams } from "next/navigation";
import Subscribe from "@/components/Subscribe";
const LatestBlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // Number of posts per page
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.BlogPage : En.BlogPage;
    useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://back-end-beryl-seven.vercel.app/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const fetchedBlogs = await response.json();
        setBlogs(fetchedBlogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="py-24 bg-slate-400 bg-opacity-15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-[#e24545] text-center mb-16 mt-7">
        {data.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div
              key={post._id} // Assuming each post has a unique _id
              className="group border border-gray-300 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="flex-shrink-0">
                <img
                  src={post.url}
                  alt={post.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex-grow p-4 lg:p-6 transition-all duration-300 group-hover:bg-gray-50">
                <span className="text-[#e24545] font-medium mb-3 block">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {post.title}
                </h4>

                <Link href={`/${locale}/Blog/${post._id}`}>
                <span
                  className="cursor-pointer text-lg text-[#e24545] font-semibold"
                >
                  {data.button}
                </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 mb-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-[#e24545] text-white rounded"
          >
          {data.Previous}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-2 rounded ${currentPage === index + 1 ? 'bg-[#e24545] text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-[#e24545] text-white rounded"
          >
          {data.Next}
          </button>
        </div>
      </div>
      <Subscribe />
    </section>
  );
};

export default LatestBlogPosts;
