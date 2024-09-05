"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json"; // Adjust path as necessary

export default function OurServices() {
  const { locale } = useParams();

  const d = locale === "fr" ? Fr.OurServicesPage : En.OurServicesPage;

  // Determine the language-specific services data
  const services = locale === "fr" ? Fr.servises : En.servises;

  // State to handle selected service
  const [service, setService] = useState(services["1"]);

  const serviceLink = `/${locale}/${service.slug}`;

  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16 mb-28 mt-20">
        <div className="text-center mb-20">
          <h2 className="font-bold font-chivo text-2xl md:text-3xl lg:text-4xl text-[#e24545] mb-4">
            {d.title}
          </h2>
        </div>
        <div className="bg-blue-4000 w-full px-0 lg:px-36">
          <div className="flex flex-wrap justify-center gap-12 px-0 mb-6 bg-green-4000">
            {Object.keys(services).map((key) => {
              const currService = services[key];
              return (
                <button
                  key={currService.slug}
                  className={`${
                    currService.slug === service.slug
                      ? "bg-[#ff00008c] font-semibold "
                      : "bg-[#f3404028] "
                  } text-gray-900 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-items font-chivo text-sm px-4 py-1 md:text-base md:px-6 md:py-3 lg:px-8 lg:py-2 hover:bg-[#e24545] hover:text-black border-2 hover:border-[#e24545]`}
                  onClick={() => setService(currService)}
                >
                  lalala {currService.name}
                </button>
              );
            })}
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mx-auto max-w-5xl bg-yellow-4000">
            <div className="relative lg:w-1/3 flex justify-center mb-6 lg:mb-0">
              <div className="w-full max-w-[400px] mt-12">
                <Image
                  className="object-cover rounded-lg"
                  src={service.image}
                  alt={service.name}
                  layout="responsive"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="lg:w-3/4 p-4 md:p-6 lg:p-8 text-start bg-blue-4000">
              <h3 className="text-[#e24545] text-2xl font-bold text-start">
                {service.name}
              </h3>
              <p className="text-base md:text-lg mb-6 text-start">
                {service.description}
              </p>
              <Link href={serviceLink}>
                {/* <button className="cursor-pointer transition-all duration-500 p-[12px] rounded-[24px] flex gap-4 bg-gradient-to-r bg-[#e24545] w-full max-w-[700px] mx-auto">
                <svg
                  className="h-12 w-12 bg-[#0a0a0a] shadow-xl rounded-full p-3"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z"
                    fill="#F0F0F0"
                  ></path>
                </svg>
                <span className="text-[1.9rem] font-bold text-white pr-3">
                  {d.button}
                </span>
              </button> */}
                <button className="rounded-3xl px-6 py-1 text-center font-semibold border-2 border-[#e24545] text-[#e24545] hover:bg-[#e24545] hover:text-white text-2xl w-fit h-fit text-nowrap">
                  {d.button}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
