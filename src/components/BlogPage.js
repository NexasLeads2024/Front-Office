"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";
import { useParams } from "next/navigation";
import Subscribe from "@/components/Subscribe";
const LatestBlogPosts = () => {
  const [loading, setLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // Number of posts per page
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.BlogPage : En.BlogPage;
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://back-end-mu-coral.vercel.app/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const fetchedBlogs = await response.json();
        setBlogs(fetchedBlogs);
      } catch (error) {
        // setError(error.message);
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

  if (loading)
    return (
      <>
        <section className="py-24 bg-slate-400 bg-opacity-15">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl font-bold text-[#e24545] text-center mb-16 mt-7">
              {data.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
              {[1, 2, 3].map((post) => (
                <div
                  role="status"
                  class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      class="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div class="flex items-center mt-4">
                    <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              ))}
            </div>
          </div>
          <Subscribe />
        </section>
      </>
    );
  if (isFetched && !blogs?.length >= 1)
    return (
      <h1 className="font-semibold text-3xl">
        {locale !== "fr" ? "No Blogs Found!" : "Aucun Blog Found!"}
      </h1>
    );
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
                  <span className="cursor-pointer text-lg text-[#e24545] font-semibold">
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
              className={`px-4 py-2 mx-2 rounded ${
                currentPage === index + 1
                  ? "bg-[#e24545] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
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
