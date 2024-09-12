"use client";
import React from "react";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";

const BusinessDevelopmentPage = () => {
  const { locale } = useParams();
  const data =
    locale === "fr" ? Fr.BusinessDevelopment : En.BusinessDevelopment;

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

      <h2 className="mb-10 text-2xl px-8 md:px-12 sm:text-2xl lg:text-2xl font-bold text-[#e24545] text-center mt-10">
        {data.heading1}
      </h2>

      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
          <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-[calc(50%-1px)] sm:left-[50%] hidden sm:block"></div>
          {[
            {
              number: "1",
              heading: data.headingCard1,
              description: data.descriptionCard1,
              bgColor: "bg-slate-400 bg-opacity-15",
              reverse: false,
            },
            {
              number: "2",
              heading: data.headingCard2,
              description: data.descriptionCard2,
              bgColor: "bg-[#e24545]",
              textColor: "text-white",
              reverse: true,
            },
            {
              number: "3",
              heading: data.headingCard3,
              description: (
                <div>
                  {data.descriptionCard3}
                  <br /> <br />
                  {data.description1Card3}
                </div>
              ),
              bgColor: "bg-slate-400 bg-opacity-15",
              reverse: false,
            },
            {
              number: "4",
              heading: data.headingCard4,
              description: (
                <div>
                  {data.descriptionCard4}
                  <br /> <br />
                  {data.description1Card4}
                </div>
              ),
              textColor: "text-white",
              bgColor: "bg-[#e24545]",
              reverse: true,
            },
            {
              number: "5",
              heading: data.headingCard5,
              description: data.descriptionCard5,
              bgColor: "bg-slate-400 bg-opacity-15",
              reverse: false,
            },
            {
              number: "6",
              heading: data.headingCard6,
              description: data.descriptionCard6,
              bgColor: "bg-[#e24545]",
              textColor: "text-white",
              reverse: true,
            },
          ].map((item, index) => (
            <div
              className={`mb-8 flex justify-between ${
                index != 0 ? " md:-mt-24 " : " "
              }  ${item.reverse ? "flex-row-reverse" : ""} items-center w-full`}
            >
              <div className="order-1 w-5/12 hidden sm:block"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full sm:mr-0 mr-4 sm:ml-0 ml-4">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {item.number}
                </h1>
              </div>
              <div
                className={`order-1 ${item.bgColor} rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4`}
              >
                <h2
                  className={`mb-3 font-bold text-xl text-center ${item.textColor}`}
                >
                  {item.heading}
                </h2>
                <p
                  className={`text-base leading-snug tracking-wide text-start ${item.textColor}`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="pt-10 pb-10 px-8 lg:px-20 mb-4 text-lg lg:text-xl font-semibold text-gray-950 text-center mt-10 bg-slate-400 bg-opacity-15">
        {data.description1}
      </h2>
    </div>
  );
};

export default BusinessDevelopmentPage;
