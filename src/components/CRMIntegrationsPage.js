"use client";
import React from 'react';
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";
const CRMIntegrationsPage = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.CRMIntegrations : En.CRMIntegrations;
  return (

<section 
  className="bg-[#e24545] py-8 px-4 pt-36 pb-20 pr-5 pl-5 sm:pr-20 sm:pl-20"
>
  <div className="mb-8">
    <h2 className="mb-14 -mt-6 text-3xl lg:text-4xl font-extrabold text-white text-center">
      {data.heading}
    </h2>
  </div>
  <div className="flex flex-wrap justify-between gap-4">
    {Object.keys(data).filter(key => key.startsWith('card')).map((key, index) => (
      <div
        key={index}
        className="service-card w-full sm:w-[48%] md:w-[22%] shadow-xl cursor-pointer py-8 px-6 bg-white flex flex-col items-center gap-3 transition-all duration-300 group hover:bg-[#202127] text-center"
      >
        <p className="font-bold text-2xl group-hover:text-white text-black/80">
          {data[key]}
        </p>
        <p className="text-gray-400 text-sm">
          {index === 3 ? (
            <div>
              {data.description4}
              <br /><br />
              {data.description5}
            </div>
          ) : (
            data[`description${index + 1}`]
          )}
        </p>
        <p
          style={{
            WebkitTextStroke: "1px gray",
            WebkitTextFillColor: "transparent",
          }}
          className="text-5xl font-bold"
        >
          0{index + 1}
        </p>
      </div>
    ))}
  </div>
</section>
  );
};
export default CRMIntegrationsPage;
