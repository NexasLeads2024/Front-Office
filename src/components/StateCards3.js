"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faDollarSign,
  faPercent,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import image3 from "../assets/image3.svg";
import Image from "next/image";

const StatsCards = () => {
  const [shown, setShown] = useState(false);
  const [counts, setCounts] = useState({
    deal: 0,
    countries: 0,
    campaigns: 0,
    replyRate: 0,
  });
  const ref = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setShown(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (shown) {
      const animateCount = (id, end) => {
        let start = 0;
        const step = () => {
          if (start < end) {
            start = Math.min(start + Math.ceil(end / 100), end);
            setCounts((prev) => ({ ...prev, [id]: start }));
            requestAnimationFrame(step);
          }
        };
        step();
      };

      animateCount("deal", 400);
      animateCount("countries", 7);
      animateCount("campaigns", 187);
      animateCount("replyRate", 14.8);
    }
  }, [shown]);

  const { locale } = useParams();
  const data = locale === "fr" ? Fr.StatsCards : En.StatsCards;

  return (
    <section
      ref={ref}
      className="py-10 bg-gray-100 bg-violet-7000 bg-opacity-30 -mt-10"
    >
      <div className="relative">
        <div className="absolute top-0 right-0 md:right-20 -z-10 hidden md:block mt-[-10px]">
          {" "}
          {/* Adjust the right value and margin as needed */}
          <Image
            className="object hero-one"
            src={image3}
            width={600}
            height={600}
            alt="Description of image 1"
            data-value="2"
          />
        </div>
      </div>
      <div className="text-center mb-8">
        <h2 className="font-bold border-t-4 border-[#e24545] font-chivo text-2xl md:text-3xl text-[#e24545] mb-4 inline-block relative">
          {data.heading}
        </h2>
        <p className="font-chivo text-lg md:text-2xl text-black font-medium">
          {data.description}
        </p>
      </div>
      <div className="px-4 md:px-56 py-4 m-auto mt-5 bg-yellow-5000">
        <div className="grid grid-cols-1 md:grid-cols-2 xls:grid-cols-4 gap-8 w-full bg-green-4000">
          {[
            {
              value: counts.deal + "K $",
              label: data.DealOpportunityGenerated,
              icon: (
                <FontAwesomeIcon
                  className="text-gray-900"
                  icon={faDollarSign}
                />
              ),
            },
            {
              value: counts.countries,
              label: data.Countries,
              icon: <FontAwesomeIcon className="text-white" icon={faGlobe} />,
            },
            {
              value: counts.campaigns,
              label: data.CampaignsLaunched,
              icon: (
                <FontAwesomeIcon className="text-white" icon={faBullhorn} />
              ),
            },
            {
              value: counts.replyRate + "%",
              label: data.ReplyRate,
              icon: <FontAwesomeIcon className="text-white" icon={faPercent} />,
            },
          ].map((stat, index) => (
            <div key={index} className="w-full max-w-[500px] mx-auto">
              {/* <div className="flex flex-col px-4 py-6 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#e24545] hover:via-[#e24545] hover:to-[#d46969] rounded-xl shadow-lg duration-300 hover:shadow-2xl group flex-grow">
                <div className="flex flex-row justify-between items-center">
                  <div className="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                    {stat.icon}
                  </div>
                  <div className="inline-flex text-sm text-black sm:text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {stat.value}
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-black mt-8 text-center">
                  {stat.value}
                </h1>
                <div>
                  <p className="text-base md:text-lg text-center mb-6 md:mb-12">
                    {stat.label}
                  </p>
                </div>
              </div> */}
              <li className="relative grid gap-2 items-start bg-gradient-to-tr from-[#e24545] to-[#e24594] h-[198pxss]s h-fit rounded-3xl p-4">
                <div className="flex justify-between">
                  <span className="px-4 py-3 h-fit w-fit bg-gray-300 rounded-xl bg-opacity-30">
                    {stat.icon}
                  </span>
                  <span className="text-[44px] font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="px-6"></span>
                </div>
                <p className="font-[400px] text-[16px] text-start text-white">
                  {stat.label}
                </p>
              </li>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
