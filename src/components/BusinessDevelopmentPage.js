"use client";
import React from 'react';
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";

const BusinessDevelopmentPage = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.BusinessDevelopment : En.BusinessDevelopment;

  return (
    <div>
      <section 
        className="bg-slate-400 bg-opacity-15 sm:pt-20 pt-20 sm:pb-10 pb-20 px-4 sm:px-16"
      >
        <div className="text-gray-500 dark:text-gray-400 mt-10 sm:mt-12 sm:mb-10">
          <h2 
            className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e24545] text-center"
          >
            {data.heading}
          </h2>
          <p 
            className="mb-4 text-base sm:text-lg text-black font-semibold text-center"
          >
            {data.description}
          </p>
        </div>
      </section>

      <h2 
        className="mb-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e24545] text-center mt-10"
      >
        {data.heading1}
      </h2>

      <div 
        className="container mx-auto w-full h-full"
      >
        <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
          <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-[calc(50%-1px)] sm:left-[50%] hidden sm:block"></div>
          {[
            { number: "1", heading: data.headingCard1, description: data.descriptionCard1, bgColor: "bg-slate-400 bg-opacity-15", reverse: false },
            { number: "2", heading: data.headingCard2, description: data.descriptionCard2, bgColor: "bg-[#e24545]", textColor: "text-black", reverse: true },
            { number: "3", heading: data.headingCard3, description: <div>{data.descriptionCard3}<br /> <br />{data.description1Card3}</div>, bgColor: "bg-slate-400 bg-opacity-15", reverse: false },
            { number: "4", heading: data.headingCard4, description: <div>{data.descriptionCard4}<br /> <br />{data.description1Card4}</div>, textColor: "text-black", bgColor: "bg-[#e24545]", reverse: true },
            { number: "5", heading: data.headingCard5, description: data.descriptionCard5, bgColor: "bg-slate-400 bg-opacity-15", reverse: false },
            { number: "6", heading: data.headingCard6, description: data.descriptionCard6, bgColor: "bg-[#e24545]", textColor: "text-black" , reverse: true },
          ].map((item, index) => (
            <div
              className={`mb-8 flex justify-between ${item.reverse ? "flex-row-reverse" : ""} items-center w-full`}
            >
              <div className="order-1 w-5/12 hidden sm:block"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full sm:mr-0 mr-4 sm:ml-0 ml-4">
                <h1 className="mx-auto font-semibold text-lg text-white">{item.number}</h1>
              </div>
              <div className={`order-1 ${item.bgColor} rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4`}>
                <h2 className={`mb-3 font-bold text-xl text-center ${item.textColor}`}>
                  {item.heading}
                </h2>
                <p className={`text-base leading-snug tracking-wide text-center ${item.textColor}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 
        className="pt-10 pb-10 px-8 lg:px-20 mb-4 text-lg lg:text-xl font-extrabold text-black text-center mt-10 bg-slate-400 bg-opacity-15"
      >
        {data.description1}
      </h2>
    </div>
  );
};

export default BusinessDevelopmentPage;