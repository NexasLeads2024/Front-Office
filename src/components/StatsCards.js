'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json"; // Adjust path as necessary
const StatsCards = () => {
  const [shown, setShown] = useState(false);
  const [counts, setCounts] = useState({
    deal: 0,
    countries: 0,
    campaigns: 0,
    replyRate: 0
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
            setCounts(prev => ({ ...prev, [id]: start }));
            requestAnimationFrame(step);
          }
        };
        step();
      };

      animateCount('deal', 400);
      animateCount('countries', 7);
      animateCount('campaigns', 187);
      animateCount('replyRate', 14.8);
    }
  }, [shown]);

  const { locale } = useParams();
  const data = locale === "fr" ? Fr.StatsCards : En.StatsCards;

  return (
    <section ref={ref} className="py-20 bg-slate-400 bg-opacity-15">
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-white flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:w-1/3">
          <h2 className="text-5xl font-bold mb-4 text-center lg:text-left text-[#e24545]">{data.heading}</h2>
          <p className="text-lg text-gray-500 leading-6 text-center lg:text-left">
            {data.description}
          </p>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-16">
            {[
              { value: counts.deal + 'K $', label: data.DealOpportunityGenerated },
              { value: counts.countries, label: data.Countries },
              { value: counts.campaigns, label: data.CampaignsLaunched },
              { value: counts.replyRate + '%', label: data.ReplyRate },
            ].map((stat, index) => (
              <article key={index} className="flex flex-col items-center text-center lg:text-left">
                <div className="text-4xl font-extrabold text-[#e24545] mb-2">
                  {stat.value}
                </div>
                <span className="text-gray-700 text-1xl font-bold mt-3">{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default StatsCards;
