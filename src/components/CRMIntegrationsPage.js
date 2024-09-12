"use client";
import React from "react";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";
import Image from "next/image";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import HubSpot from "../assets/Hubspot2.webp";

import Link from "next/link";
import SectionComponent from "./SectionComponent";
const CRMIntegrationsPage = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.CRMIntegrations : En.CRMIntegrations;
  return (
    <>
      <section className="bg-gradient-to-b from-[#9bdcf7]  to-white">
        <div className="relative z-10   min-w-full pt-8 px-4 md:px-8 lg:px-16 xl:pt-32 ">
          <p className="w-full text-center text-4xl font-bold hacking">
            {data.title}
          </p>
          {/* <h1 className="text-center">{data.heading}</h1> */}
          <p className="text-start md:text-center text-[30px] md:text-[50px] md:leading-[61px] font-[700] text-gray-900">
            {data.heading}
            <span className="hacking">{data.heading2}</span>
            <span>{data.heading3}</span>{" "}
            <div className="flex justify-center pt-4">
              <Image
                className=""
                src={HubSpot}
                width={175}
                height={150}
                alt="Description of image 1"
                data-value="2"
              />
            </div>
          </p>
          {/* <div className=""> */}
          <div class="h-fit w-fit relative mx-auto rounded-3xl bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[2.5px] py-[2.6px] group">
            <Link
              href={`/${locale}/ContactUs`}
              class="flex h-fit w-fit items-center justify-center bg-white group-hover:bg-[#e24545] rounded-3xl px-4 py-2"
            >
              <h1 class="text-md font-semibold text-[#e24545] group-hover:text-white text-nowrap px-2">
                {data.button}
              </h1>
            </Link>
          </div>
          {/* </div> */}
          <Image
            className="object object2 hidden md:absolute w-64 end-6 top-28 -z-10"
            src={image2}
            width={550}
            height={550}
            alt="Description of image 2"
            data-value="1"
          />{" "}
          <Image
            className="object object1 hidden md:absolute w-80 start-5 bottom-0 -z-10"
            src={image1}
            width={550}
            height={550}
            alt="Description of image 1"
            data-value="2"
          />
        </div>
        <p className="px-8 md:px-16 lg:px-48 text-[16px] text-start md:text-center">
          {data.text}
        </p>
      </section>{" "}
      <div className="container mx-auto p-4">
        {Object.keys(data)
          .filter((key) => key.startsWith("card"))
          .map((key, index) => (
            <SectionComponent
              id={index + 1}
              key={key}
              title={data[key]}
              description={data[`description${index + 1}`]}
              imageUrl={index}
              imageAlt={"section.imageAlt"}
              reverse={index % 2 != 1}
            />
          ))}
      </div>
      {/* <section className="bg-[#e24545] mt-20 py-8 px-4 pt-36 pb-20 pr-5 pl-5 sm:pr-20 sm:pl-20">
        <div className="mb-8">
          <h2 className="mb-14 -mt-6 text-3xl lg:text-4xl font-extrabold text-white text-center">
            {data.heading}
          </h2>
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          {Object.keys(data)
            .filter((key) => key.startsWith("card"))
            .map((key, index) => (
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
                      <br />
                      <br />
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
      </section> */}
    </>
  );
};
export default CRMIntegrationsPage;
