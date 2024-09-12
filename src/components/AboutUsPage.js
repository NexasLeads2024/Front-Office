"use client";
import React from "react";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";
import image1 from "../assets/AboutUs1.svg";
import image2 from "../assets/AboutUs2.svg";
import image3 from "../assets/AboutUs3.svg";
import image4 from "../assets/AboutUs4.svg";
import Image from "next/image";
import Link from "next/link";
const AboutUs = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.AboutUsPage : En.AboutUsPage;
  return (
    <div>
      {/* Section 1 */}
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-950 text-3xl font-semibold leading-relaxed text-center lg:text-left">
                    {data.heading}
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-[#e24545] text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      {data.heading1}
                    </h2>
                    <p className="text-gray-950 text-base font-normal leading-relaxed lg:text-start text-center">
                      {data.description}
                      <br />
                      <br />
                      {data.description1}
                      <br />
                      <br />
                      {data.description2}
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-[#e24545] transition-all duration-700 ease-in-out flex-col justify-start items-center gap-2.5 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9 text-center -mb-10 mt-8">
                        400K $
                      </h3>
                      <p className="text-gray-950 text-base font-normal leading-relaxed text-center">
                        {data.DealOpportunityGenerated}
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-[#e24545] transition-all duration-700 ease-in-out flex-col justify-start items-center gap-2.5 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9 text-center -mb-10 mt-8">
                        7
                      </h3>
                      <p className="text-gray-950 text-base font-normal leading-relaxed text-center">
                        {data.Countries}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-[#e24545] transition-all duration-700 ease-in-out flex-col justify-start items-center gap-2.5 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9 text-center -mb-10 mt-8">
                        187
                      </h3>
                      <p className="text-gray-950 text-base font-normal leading-relaxed text-center">
                        {data.CampaignsLaunched}
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-[#e24545] transition-all duration-700 ease-in-out flex-col justify-start items-center gap-2.5 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9 text-center -mb-10 mt-8">
                        14.8%
                      </h3>
                      <p className="text-gray-950 text-base font-normal leading-relaxed text-center">
                        {data.ReplyRate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={`/${locale}/ContactUs`} locale={locale}>
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-gray-950 capitalize transition-colors duration-300 transform bg-[#ffd126] rounded-md hover:bg-[#f8c600]"
                >
                  {data.button}
                </button>
              </Link>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <Image
                className="mt-10 ml-0 sm:ml-20"
                src={image1}
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="py-24 relative bg-slate-400 bg-opacity-15">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  {data.heading3}
                </h2>
                <p className="text-gray-950 text-base font-normal leading-relaxed lg:text-start text-center">
                  {data.description3}
                </p>
              </div>
              <Link href={`/${locale}/ContactUs`} locale={locale}>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-[#e24545] hover:bg-[#bd3a3a] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    {data.button3}
                  </span>
                </button>
              </Link>
            </div>
            <Image
              className="lg:mx-0 mx-auto h-full rounded-3xl mt-10"
              src={image4}
              alt="about Us image"
            />
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  {data.heading4}
                </h2>
                <p className="text-gray-950 text-base font-normal leading-relaxed lg:text-start text-center">
                  {data.description4}
                </p>
              </div>
              <Link href={`/${locale}/ContactUs`} locale={locale}>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-[#e24545] hover:bg-[#bd3a3a] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    {data.button4}
                  </span>
                </button>
              </Link>
            </div>
            <Image
              className="lg:mx-0 mx-auto h-full rounded-3xl mt-10"
              src={image3}
              alt="about Us image"
            />
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="py-24 relative bg-slate-400 bg-opacity-15">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  {data.heading5}
                </h2>
                <p className="text-gray-950 text-base font-normal leading-relaxed lg:text-start text-center">
                  {data.description5}
                </p>
              </div>
              <Link href={`/${locale}/ContactUs`} locale={locale}>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-[#e24545] hover:bg-[#bd3a3a] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    {data.button5}
                  </span>
                </button>
              </Link>
            </div>
            <Image
              className="lg:mx-0 mx-auto h-full rounded-3xl mt-10"
              src={image2}
              alt="about Us image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
