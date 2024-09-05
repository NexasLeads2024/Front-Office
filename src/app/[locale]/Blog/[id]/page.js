"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import draftToHtml from "draftjs-to-html";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import En from "/messages/eng.json";
import Fr from "/messages/fr.json";
import Subscribe from "@/components/Subscribe";

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const params = useParams();

  const { id } = params;
  const locale = params.locale || "en"; // Default to 'en' if locale is not provided
  const data = locale === "fr" ? Fr.BlogPage : En.BlogPage;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // const response = await fetch(`https://back-end-beryl-seven.vercel.app/blogs/${id}`);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL_ADMIN}/blogs/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchLatestPosts = async () => {
      try {
        const response = await fetch(
          "https://back-end-beryl-seven.vercel.app/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const fetchedBlogs = await response.json();
        setLatestBlogs(fetchedBlogs.slice(0, 3)); // Get the latest 3 blogs
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchPost();
      fetchLatestPosts();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <div className="mx-auto p-5 sm:p-10 md:p-16 relative bg-[#e24545]">
        <Navbar />
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{ minHeight: "500px", backgroundImage: `url(${post.url})` }}
          title={post.title}
        ></div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="font-bold text-3xl mb-2 text-[#e24545] text-center pb-10">
                {post.title}
              </h1>
              <p className="text-gray-700 text-xs mt-2 font-bold">
                {data.WrittenBy}
                <span className="text-[#e24545] font-medium hover:text-gray-900 transition duration-500 ease-in-out pl-2 pr-4">
                  {post.author}
                </span>
                {data.In}
                <span className="text-xs text-[#e24545] font-medium hover:text-gray-900 transition duration-500 ease-in-out pl-2">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </p>
              <p className="text-base leading-8 my-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: draftToHtml(JSON.parse(post.text)),
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Latest Blogs Section */}
        <section className="py-24 bg-white mt-10 mb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl font-bold text-[#e24545] text-center mb-16 mt-7">
              {data.heading1}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestBlogs.map((latestPost) => (
                <div
                  key={latestPost._id} // Assuming each post has a unique _id
                  className="group border border-gray-300 rounded-2xl overflow-hidden flex flex-col bg-white"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={latestPost.url}
                      alt={latestPost.alt}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="flex-grow p-4 lg:p-6 transition-all duration-300 group-hover:bg-gray-50">
                    <span className="text-[#e24545] font-medium mb-3 block">
                      {new Date(latestPost.createdAt).toLocaleDateString()}
                    </span>
                    <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                      {latestPost.title}
                    </h4>
                    <Link href={`/${locale}/Blog/${latestPost._id}`}>
                      <span className="cursor-pointer text-lg text-[#e24545] font-semibold">
                        {data.button}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
