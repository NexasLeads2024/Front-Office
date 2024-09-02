"use client";
import React from "react";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json"; // Adjust path as necessary

export default function WhyUs() {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.WhyUs : En.WhyUs;
  const heading = locale === "fr" ? Fr.WhyUsHeading : En.WhyUsHeading;
  return (
    <div className="mt-18 mb-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-20 text-[#e24545] pt-20 pb-3">{heading.heading}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {Object.keys(data).map((key) => {
          const profile = data[key];
          return (
            <div key={key} className="card">
              <div className="bg uwu"></div>
              <div className="bg"></div>
              <div className="content">
                <div className="p-6 text-center">
                  <h3 className="block mb-2 font-sans text-2xl antialiased leading-snug tracking-normal text-black font-bold">
                    {profile.name}
                  </h3>
                  <p className="text-gray-500 text-base">
                    {profile.position}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
