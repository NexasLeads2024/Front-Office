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

  const cardsData = [
    {
      value: counts.deal + "K $",
      label: data.DealOpportunityGenerated,
      icon: <FontAwesomeIcon className="text-gray-900" icon={faDollarSign} />,
    },
    {
      value: counts.countries,
      label: data.Countries,
      icon: <FontAwesomeIcon className="text-white" icon={faGlobe} />,
    },
    {
      value: counts.campaigns,
      label: data.CampaignsLaunched,
      icon: <FontAwesomeIcon className="text-white" icon={faBullhorn} />,
    },
    {
      value: counts.replyRate + "%",
      label: data.ReplyRate,
      icon: <FontAwesomeIcon className="text-white" icon={faPercent} />,
    },
  ];
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
      <div className="px-4 md:px-28 lg:px-32 xl:px-36 py-4 m-auto mt-5 bg-yellow-5000">
        <div
          // className="grid grid-cols-1 md:grid-cols-2 xls:grid-cols-4 gap-8 w-full bg-green-4000"
          className="grid gap-4 px-2 grid-cols-1 bg-red-3000 sm:grid-cols-1 sm:bg-green-4000 lg:grid-cols-2 bg-green-4000"
        >
          {cardsData.map((stat, index) => (
            <div key={index} className="w-full max-w-[500px] mx-auto">
              <li className="grid items-start bg-gradient-to-tr from-[#e24545] to-[#e24594] h-fit rounded-3xl p-4">
                <div className="flex justify-between">
                  <span className="px-4 py-3 h-fit w-fit bg-gray-300 rounded-xl bg-opacity-30">
                    {stat.icon}
                  </span>
                  <span className="text-[2rem] lg:text-[2.3rem] font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="px-6"></span>
                </div>
                <p className="font-[400px] text-[0.93rem] lg:text-[1rem] text-start text-white">
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
