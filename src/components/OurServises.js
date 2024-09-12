// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import En from "../../messages/eng.json"; // Adjust path as necessary
// import Fr from "../../messages/fr.json"; // Adjust path as necessary

// export default function OurServices() {
//   const { locale } = useParams();

//   const d = locale === "fr" ? Fr.OurServicesPage : En.OurServicesPage;

//   // Determine the language-specific services data
//   const services = locale === "fr" ? Fr.servises : En.servises;

//   // State to handle selected service
//   const [service, setService] = useState(services["1"]);

//   const serviceLink = `/${locale}/${service.slug}`;

//   return (
//     <div>
//       <div className="px-4 md:px-8 lg:px-16 mb-28 mt-20">
//         <div className="text-center mb-20">
//           <h2 className="font-bold font-chivo text-2xl md:text-3xl lg:text-4xl text-[#e24545] mb-4">
//             {d.title}
//           </h2>
//         </div>
//         <div className=" w-full px-0 lg:px-36">
//           <div className="flex flex-wrap justify-center gap-12 px-0 mb-6  ">
//             {Object.keys(services).map((key) => {
//               const currService = services[key];
//               return (
//                 <button
//                   key={currService.slug}
//                   className={`${
//                     currService.slug === service.slug
//                       ? "bg-[#ff00008c] font-semibold "
//                       : "bg-[#f3404028] "
//                   } text-gray-900 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-items font-chivo text-sm px-4 py-1 md:text-base md:px-6 md:py-3 lg:px-8 lg:py-2 hover:bg-[#e24545] hover:text-gray-950 border-2 hover:border-[#e24545]`}
//                   onClick={() => setService(currService)}
//                 >
//                   {currService.name}
//                 </button>
//               );
//             })}
//           </div>
//           <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mx-auto max-w-5xl ">
//             <div className="relative lg:w-1/3 flex justify-center mb-6 lg:mb-0">
//               <div className="w-full max-w-[400px] mt-12">
//                 <Image
//                   className="object-cover rounded-lg"
//                   src={service.image}
//                   alt={service.name}
//                   layout="responsive"
//                   width={400}
//                   height={400}
//                 />
//               </div>
//             </div>
//             <div className="lg:w-3/4 p-4 md:p-6 lg:p-8 text-start ">
//               <h3 className="text-[#e24545] text-2xl font-bold text-start">
//                 {service.name}
//               </h3>
//               <p className="text-base md:text-lg mb-6 text-start">
//                 {service.description}
//               </p>
//               <Link href={serviceLink}>
//                 {/* <button className="cursor-pointer transition-all duration-500 p-[12px] rounded-[24px] flex gap-4 bg-gradient-to-r bg-[#e24545] w-full max-w-[700px] mx-auto">
//                 <svg
//                   className="h-12 w-12 bg-[#0a0a0a] shadow-xl rounded-full p-3"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z"
//                     fill="#F0F0F0"
//                   ></path>
//                 </svg>
//                 <span className="text-[1.9rem] font-bold text-white pr-3">
//                   {d.button}
//                 </span>
//               </button> */}
//                 <button className="rounded-3xl px-6 py-1 text-center font-semibold border-2 border-[#e24545] text-[#e24545] hover:bg-[#e24545] hover:text-white text-2xl w-fit h-fit text-nowrap">
//                   {d.button}
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json"; // Adjust path as necessary
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import DOMPurify from "dompurify";
export default function OurServices() {
  const { locale } = useParams();
  const d = locale === "fr" ? Fr.OurServicesPage : En.OurServicesPage;
  const services = locale === "fr" ? Fr.servises : En.servises;
  // Initialize the first service
  const firstService = Object.values(services)[0];
  const [service, setService] = useState(firstService);
  const [clicked, setClicked] = useState(true); // Set to true initially

  useEffect(() => {
    setService(firstService); // Ensure the first service is selected on mount
  }, [firstService]);

  const serviceLink = `/${locale}/${service.slug}`;

  const handleButtonClick = (currService) => {
    setService(currService);
    setClicked(true); // Set clicked state to true
  };
  const sanitizedDescription = DOMPurify.sanitize(service.description);
  return (
    <div className="relative">
      <div className="absolute top-0 right-20 -z-10 hidden md:block mt-[-10px]">
        {" "}
        {/* Adjust the right value and margin as needed */}
        <Image
          className="object hero-one"
          src={image2}
          width={450}
          height={450}
          alt="Description of image 1"
          data-value="2"
        />
      </div>
      <div className="relative">
        <div className="absolute inset-0 -z-10 hidden md:block mt-[-10px]">
          <Image
            className="object hero-one"
            src={image3}
            width={300}
            height={300}
            alt="Description of image 1"
            data-value="2"
          />
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-32 mb-10 relative">
        <div className="text-center mb-20">
          <h2 className="font-bold border-t-4 border-[#e24545] font-chivo text-[18px] text-[#e24545] mb-4 inline-block relative">
            {d.title}
          </h2>
          <p className="text-[50px] font-[700] text-gray-900">{d.subtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between  gap-4 mb-10 xl:px-10 2xl:px-36">
          {Object.keys(services).map((key) => {
            const currService = services[key];
            return (
              <button
                key={currService.slug}
                className={`${
                  currService.slug === service.slug
                    ? "font-bold bg-gray-300 bg-opacity-30"
                    : " bg-gray-200 bg-opacity-20 hover:bg-gray-300 hover:bg-opacity-30"
                } text-gray-950 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm lg:text-base border-2 flex items-center justify-center gap-2 px-2 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2`}
                onClick={() => handleButtonClick(currService)}
              >
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center ${
                    currService.slug === service.slug && clicked
                      ? "bg-[#e24545]"
                      : "bg-gray-300 bg-opacity-30"
                  }`}
                >
                  <Image
                    src={currService.image1}
                    alt={currService.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs md:text-sm text-nowrap">
                  {currService.name}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mx-auto max-w-6xl relative z-10 md:px-20 2xl:px-36 min-w-full">
          <div className="relative lg:w-1/3 flex justify-center mb-6 lg:mb-0">
            <div className=" max-w-[1200px] mt-12">
              <Image
                className="object-cover rounded-lg"
                src={service.image}
                alt={service.name}
                layout="responsive"
                width={1200}
                height={1200}
              />
            </div>
          </div>
          <div className="lg:w-2/3 p-4 md:p-6 lg:p-8">
            <div className=" mb-5 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-[#e24545]">
              <Image
                src={service.image1}
                alt={service.name}
                width={40}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-gray-900 text-2xl font-bold mb-5">
              {service.name}
            </h3>
            <span
              style={{ width: "50px", height: "auto", textSize: "17px" }}
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            ></span>
            <br />
            <div className="flex justify-start gap-x-2 pt-4">
              {service?.images?.length &&
                service?.images.map((img) => {
                  if (img.length < 1) return;
                  return (
                    <div key={img} className="flex items-center gap-4">
                      <Image
                        className="object-cover services-img ms-1"
                        src={img}
                        width={100}
                        height={40}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-start pt-4">
              <Link href={serviceLink}>
                <div class="h-fit w-fit rounded-3xl bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[2.5px] py-[2.6px] group ms-4 md:px-[3px] md:py-[2.5px]  md:pb-[2.5px] md:mx-auto min-w-[215px] min-h-[43px]">
                  <div class="flex h-full w-full items-center justify-center bg-white group-hover:bg-[#e24545] rounded-3xl px-3 py-2">
                    <h1 class="text-md font-semibold text-[#e24545] group-hover:text-white text-wrap lg:text-nowrap">
                      {d.button}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
