"use client";
import React from "react";
import Image from "next/image";

import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json"; // Adjust path as necessary
import Link from "next/link";

export default function WhyUs() {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.WhyUs : En.WhyUs;
  const heading = locale === "fr" ? Fr.WhyUsHeading : En.WhyUsHeading;
  return (
    <div className="mt-18 mb-20">
      <div className="text-center">
        <h2 className="font-bold border-t-4 border-[#e24545] text-[18px] text-[#e24545] mb-1 inline-block relative">
          NexasLeads
        </h2>
        <p className="text-[50px] font-[700] text-gray-900">
          {heading.heading}
        </p>

        {/* <p className="text-[16px] font-[700] text-gray-900">
        </p> */}
      </div>
      {/* <div className="flex flex-wrap justify-center gap-8">
        {Object.keys(data).map((key) => {
          const profile = data[key];
          return (
            <div key={key} className="card">
              <div className="bg uwu"></div>
              <div className="bg"></div>
              <div className="content">
                <div className="p-6 text-center">
                  <h3 className="block mb-2 font-sans text-2xl antialiased leading-snug tracking-normal text-gray-950 font-bold">
                    {profile.name}
                  </h3>
                  <p className="text-gray-500 text-base">{profile.position}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <hr />
      <br /> */}
      <div className="grid md:grid-cols-3 px-4 lg:px-24">
        {Object.keys(data).map((key) => {
          const profile = data[key];
          return (
            <div key={key} className="p-6 text-center me-0.5">
              <div className="flex gap-x-2">
                <Image
                  className="icon h-[50px] w-auto"
                  src={profile.icon}
                  alt="about Us image"
                  width={20}
                  height={20}
                />
                <h3 className="text-start mb-2 text-[22px] tracking-normal  text-gray-900 font-bold">
                  {profile.name}
                </h3>
              </div>
              <p className="text-gray-500 text-[17px] md:text-[16px] text-start">
                {profile.position}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link
          href={`/${locale}/ContactUs`}
          class="h-fit w-fit rounded-[32px] bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[3px] py-[2.8px] group transition-all duration-300 cursor-pointer"
        >
          <div class="flex h-fit w-fit items-center justify-center bg-white group-hover:bg-[#e24545] rounded-[64px] px-4 py-1.5 transition-all duration-300">
            <h1 class="text-lg font-semibold text-[#e24545] group-hover:text-white text-nowrap">
              {heading.button}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
