"use client"
import React from 'react';
import Image from "next/image";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json";
import image from "/public/Training-and-Certifications.png";
const TrainingAndCertificationsPage = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.TrainingAndCertifications : En.TrainingAndCertifications;

  return (
    <div>
      <section className="bg-white sm:pt-20 pt-10">
        <div className="px-4">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400 mt-20 mb-20 sm:ml-28 sm:mr-28">
            <h2 
              className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e24545] text-center">
              {data.heading}
            </h2>
            <p 
              className="mb-4 text-base sm:text-xl text-black font-medium text-center">
              {data.description}
            </p>
          </div>
        </div>
      </section>
  
      <section className="bg-slate-400 bg-opacity-15 py-8 px-4 lg:py-16 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto gap-8 lg:gap-16">
          <div className="text-gray-500 font-light dark:text-gray-400 w-full lg:w-1/2">
            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#e24545] text-center lg:text-left mb-4">
              {data.heading1}
            </h2>
            <p 
              className="text-black font-normal text-center lg:text-left mb-4">
              {data.description1}
            </p>
          </div>
          <div 
            className="w-full lg:w-1/2">
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
  
      <div id="services" className="section relative pt-10 md:pt-16 md:pb-0 bg-[#e24545]">
        
      



      <div class="card3-container">
  <div class="card3">
    <div class="card3-inner">
      <div class="card3-front font-bold text-2xl">
        <p >{data.card1}</p>
      </div>
      <div class="card3-back">
        <p>* {data.card1Description1}</p>
        <br/><br/>
        <p>* {data.card1Description2}</p>
      </div>
    </div>
  </div>
  <div class="card3">
    <div class="card3-inner">
      <div class="card3-front font-bold text-2xl">
        <p>{data.card2}</p>
      </div>
      <div class="card3-back">
      <p>* {data.card2Description1}</p>
      <br/><br/>
      <p>* {data.card2Description2}</p>
      </div>
    </div>
  </div>
  <div class="card3">
    <div class="card3-inner">
      <div class="card3-front font-bold text-2xl">
        <p>{data.card3}</p>
      </div>
      <div class="card3-back">
      <p>* {data.card3Description1}</p>
      <br/><br/>
      <p>* {data.card3Description2}</p>
      </div>
    </div>
  </div>
  <div class="card3">
    <div class="card3-inner">
      <div class="card3-front font-bold text-2xl">
        <p>{data.card4}</p>
      </div>
      <div class="card3-back">
      <p>* {data.card4Description1}</p>
      <br/><br/>
      <p>* {data.card4Description2}</p>
      </div>
    </div>
  </div>
  <div class="card3">
    <div class="card3-inner">
      <div class="card3-front font-bold text-2xl">
        <p>{data.card5}</p>
      </div>
      <div class="card3-back">
        <p>* {data.card5Description1}</p>
        <br/><br/>
        <p>* {data.card5Description2}</p>
      </div>
    </div>
  </div>
</div>





  
        <p
          className="text-xl text-black font-semibold px-8 lg:px-60 pb-20 text-center">
          {data.description2}
        </p>
      </div>
  
      <section 
  className="bg-white py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
>
  <div className="mb-8">
    <h2 className="mb-14 -mt-6 text-3xl lg:text-4xl font-extrabold text-black text-center">
      {data.heading3}
    </h2>
  </div>
  <div className="flex flex-wrap justify-between gap-4">
    {[6, 7, 8, 9].map((card, index) => (
      <div
        key={card}
        className="service-card w-full sm:w-[48%] md:w-[22%] shadow-xl cursor-pointer py-8 px-6 bg-white flex flex-col items-center gap-3 transition-all duration-300 group hover:bg-[#202127] text-center"
      >
        <p className="font-bold text-2xl group-hover:text-white text-black">
          {data[`card${card}`]}
        </p>
        <p className="text-black group-hover:text-white text-sm">
          {data[`card${card}Description1`]}
        </p>
        <p
        
          className="text-5xl font-bold group-hover:text-white"
        >
          0{index + 1}
        </p>
      </div>
    ))}
  </div>
</section>
      <h2 
        className="bg-slate-400 bg-opacity-15 pt-10 pb-10 px-8 lg:px-20 mb-4 text-lg lg:text-xl font-extrabold text-black text-center mt-10">
        {data.description3}
      </h2>

    </div>
  );
};

export default TrainingAndCertificationsPage;
