"use client";
import React from "react";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";
const CardCarousel = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.Reviews : En.Reviews;
  return (
    <div className="bg-slate-400 bg-opacity-15 mt-10">
      <h2 className="title-hacking text-gray-900 text-center pt-10">
        <span className="hacking">{data.headingHack}</span> {data.heading}
      </h2>
      <h2></h2>
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 pb-20 pt-10 pr-10 pl-10">
        {/* Review 1 */}
        <div className="mb-12 md:mb-0 border-2 border-[#e24545] rounded-lg p-6">
          <h3 className="mb-4 text-2xl font-bold">{data.heading1}</h3>
          <h2 className="text-black mb-4 font-semibold text-xl">
            {data.heading2}
          </h2>
          <p className="mb-4 text-black">{data.description}</p>
          <ul className="mb-0 flex items-center justify-center">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-[#e24545]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Review 2 */}
        <div className="mb-12 md:mb-0 border-2 border-[#e24545] rounded-lg p-6">
          <h3 className="mb-4 text-2xl font-bold">{data.heading3}</h3>
          <h2 className="text-black mb-4 font-semibold text-xl">
            {data.heading4}
          </h2>
          <p className="mb-4 text-black">{data.description1}</p>
          <ul className="mb-0 flex items-center justify-center">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-[#e24545]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Review 3 */}
        <div className="mb-12 md:mb-0 border-2 border-[#e24545] rounded-lg p-6">
          <h3 className="mb-4 text-2xl font-bold">{data.heading5}</h3>
          <h2 className="text-black mb-4 font-semibold text-xl">
            {data.heading6}
          </h2>
          <p className="mb-4 text-black">{data.description2}</p>
          <ul className="mb-0 flex items-center justify-center">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-[#e24545]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Add more reviews as needed */}
      </div>
    </div>
  );
};

export default CardCarousel;
