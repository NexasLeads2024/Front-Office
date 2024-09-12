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
import Link from "next/link";

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
      icon: <FontAwesomeIcon className="text-white" icon={faDollarSign} />,
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
      className="py-10 bg-gray-100 bg-violet-7000 bg-opacity-30 pt-10 mb-10"
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
        <p className="font-chivo text-lg md:text-2xl text-gray-950 font-medium px-4">
          {data.description}
        </p>
      </div>
      <div className="px-36 py-4 m-auto mt-5">
        <div className="grid gap-4 px-32 grid-cols-1 bg-red-3000 sm:grid-cols-1 sm:bg-green-4000 lg:grid-cols-2">
          {cardsData.map((stat, index) => (
            <div key={index} className="w-full max-w-[500px] mx-auto">
              <li className="grid items-center justify-center bg-gradient-to-tr from-[#e24545] to-[#e24594] h-full rounded-3xl p-4">
                <div className="flex flex-col items-center justify-between h-full">
                  <div className="flex flex-col items-center justify-center flex-grow">
                    <span className="text-[2rem] lg:text-[2.7rem] font-bold text-white text-center">
                      {stat.value}
                    </span>
                    <span className="px-6"></span>
                  </div>
                  <p className="font-[400px] text-[0.93rem] lg:text-[1rem] text-white text-center">
                    {stat.label}
                  </p>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="flex justify-center my-4">
        <Link
          href={`/${locale}/ContactUs`}
          class="h-fit w-fit rounded-[32px] bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[3px] py-[2.8px] group transition-all duration-300 cursor-pointer"
        >
          <div class="flex h-fit w-fit items-center justify-center bg-white group-hover:bg-[#e24545] rounded-[64px] px-4 py-1.5 transition-all duration-300">
            <h1 class="text-lg font-semibold text-[#e24545] group-hover:text-white text-nowrap">
              {locale == "fr" ? "Lire Plus" : "Read More"}
            </h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default StatsCards;
