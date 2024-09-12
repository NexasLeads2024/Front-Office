"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json";
import image from "/public/Training-and-Certifications.png";
import Card2svg from "../../public/card2svg";
import Link from "next/link";
import icon1 from "/public/icon1.svg";
import icon2 from "/public/icon2.svg";
import icon3 from "/public/icon3.svg";
import icon4 from "/public/icon4.svg";
import icon5 from "/public/icon5.svg";
import check from "/public/check.svg";

const TrainingAndCertificationsPage = () => {
  const { locale } = useParams();
  const data =
    locale === "fr"
      ? Fr.TrainingAndCertifications
      : En.TrainingAndCertifications;

  return (
    <div>
      <section className="bg-white sm:pt-20 pt-10">
        <div className="px-4">
          <div className="text-center pt-8 px-4 md:px-16">
            <h2 className="font-semibold border-t-4 border-[#e24545] font-chivo text-[18px] leading-[20px] text-[#e24545] inline-block">
              {data.title}
            </h2>{" "}
            {/* <div className="bg-cyan-400"> */}
            <p className="text-start md:text-center text-[30px] md:text-[50px] md:leading-[61px] font-[700] text-gray-900">
              {data.heading}
              <span className="hacking-2 text-gray-900">{data.subheading}</span>
            </p>
            {/* </div> */}
            <p className="mb-4 text-[17px] lg:px-40 text-gray-950 text-start md:text-center">
              {data.description}{" "}
              <span className="font-bold">{data.descriptionBold}</span>
              {data.secondDescription}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-950 text-center">
            {data.heading3}
          </h2>
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          {[6, 7, 8, 9].map((card, index) => (
            <div
              key={card}
              className="relative service-card w-full sm:w-[48%] md:w-[22%] shadow-xl cursor-pointer py-6 px-6 bg-white flex flex-col items-center transition-all duration-300 group hover:bg-[#202127] text-center"
            >
              <p className="font-bold text-2xl group-hover:text-white text-black  ">
                {data[`card${card}`]}
              </p>
              <p className="text-gray-950 group-hover:text-white text-sm   opacity-0">
                {data[`card${card}Description1`]}
              </p>
              <p className="text-gray-950 group-hover:text-white text-sm   absolute px-2 top-36">
                {data[`card${card}Description1`]}
              </p>
              <p className="text-5xl font-bold group-hover:text-white opacity-0">
                0{index + 1}
              </p>
              <p className="text-5xl font-bold group-hover:text-white absolute bottom-0">
                0{index + 1}
              </p>
            </div>
          ))}
        </div>
        <h2 className="py-4 px-8 lg:px-20 text-3xl lg:text-4xl font-extrabold text-gray-950 text-center mt-10">
          {data.description3}
        </h2>

        <div className="w-full flex justify-center">
          <Link
            href={`/${locale}/ContactUs`}
            class="h-fit w-fit rounded-3xl bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[2px] py-[2.6px] group ms-4 md:px-[2px] md:py-[2px] md:mx-auto min-w-[215px] min-h-[43px] transition-all duration-300 md:relative md:top-4"
          >
            <div class="flex h-full w-full items-center justify-center bg-white group-hover:bg-[#e24545] rounded-3xl px-3 py-2 transition-all duration-300">
              <h1 class="text-lg font-semibold text-[#e24545] group-hover:text-white text-nowrap">
                {data.button}
              </h1>
            </div>
          </Link>
        </div>
      </section>
      <section className="bg-slate-200 bg-opacity-15 px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto gap-8 lg:gap-16">
          <div className="text-gray-500 font-light dark:text-gray-400 w-full lg:w-1/2 px-4 md:px-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#e24545] text-start md:text-center lg:text-left mb-4">
              {data.heading1}
            </h2>
            <p className="text-gray-950 font-normal text-start md:text-center lg:text-left mb-4">
              {data.description1}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              className="rounded-lg w-full"
              src={image}
              alt="Training And Certifications"
              layout="responsive"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>
      <div
        id="services"
        className="section relative pt-10 md:pt-16 md:pb-0 bg-[#e24545]"
      >
        <div class="card3-container">
          <div class="card3">
            <div class="card3-inner">
              <div class="card3-front font-bold text-2xl">
                <p className="flex flex-col items-center gap-2">
                  <Image src={icon1} className="w-10" />
                  {data.card1}
                </p>{" "}
              </div>
              <ul class="card3-back grid gap-y-4 text-md font-medium">
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card1Description1}
                </li>
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card1Description2}
                </li>
              </ul>
            </div>
          </div>
          <div class="card3">
            <div class="card3-inner">
              <div class="card3-front font-bold text-2xl">
                <div className="flex flex-col items-center">
                  <p className="flex flex-col items-center gap-2">
                    <Image src={icon2} className="w-10" />
                    {data.card2}
                  </p>{" "}
                </div>
              </div>
              <ul class="card3-back grid gap-y-4 text-md font-medium">
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card2Description1}
                </li>
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card2Description2}
                </li>
              </ul>
            </div>
          </div>
          <div class="card3">
            <div class="card3-inner">
              <div class="card3-front font-bold text-2xl">
                <p className="flex flex-col items-center gap-2">
                  <Image src={icon3} className="w-10" />
                  {data.card3}
                </p>{" "}
              </div>
              <ul class="card3-back grid gap-y-4 text-md font-medium">
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card3Description1}
                </li>
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card3Description2}
                </li>
              </ul>
            </div>
          </div>
          <div class="card3">
            <div class="card3-inner">
              <div class="card3-front font-bold text-2xl">
                <p className="flex flex-col items-center gap-2">
                  <Image src={icon4} className="w-10" />
                  {data.card4}
                </p>{" "}
              </div>
              <ul class="card3-back grid gap-y-4 text-md font-medium">
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card4Description1}
                </li>
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card4Description2}
                </li>
              </ul>
            </div>
          </div>
          <div class="card3">
            <div class="card3-inner">
              <div class="card3-front font-bold text-2xl">
                <p className="flex flex-col items-center gap-2">
                  <Image src={icon5} className="w-10" />
                  {data.card5}
                </p>{" "}
              </div>
              <ul class="card3-back grid gap-y-4 text-md font-medium">
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card5Description1}
                </li>
                <li>
                  <span className="font-bold text-xl pe-1">-</span>
                  {data.card5Description2}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xl text-white px-8 lg:px-60 pb-20 text-start md:text-center">
          {data.description2}
        </p>
      </div>
    </div>
  );
};

export default TrainingAndCertificationsPage;
