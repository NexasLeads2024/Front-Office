"use client";
import React, { useState, useEffect } from "react";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProspectCalculator = () => {
  const defaultValues = {
    emailProspects: 10000,
    linkedinProspects: 700,
    whatsappProspects: 2500,
    smsProspects: 2500,
  };

  const [emailProspects, setEmailProspects] = useState(0);
  const [linkedinProspects, setLinkedinProspects] = useState(0);
  const [whatsappProspects, setWhatsappProspects] = useState(0);
  const [smsProspects, setSmsProspects] = useState(0);

  useEffect(() => {
    // Initialize state with default values
    setEmailProspects(defaultValues.emailProspects);
    setLinkedinProspects(defaultValues.linkedinProspects);
    setWhatsappProspects(defaultValues.whatsappProspects);
    setSmsProspects(defaultValues.smsProspects);
  }, []);

  const { locale } = useParams();
  const Data = locale === "fr" ? Fr.ProspectCalculator : En.ProspectCalculator;

  const calculateProspects = (value, rate) => Math.floor((value * rate) / 100);

  const emailResult = calculateProspects(emailProspects, 1.3);
  const linkedinResult = calculateProspects(linkedinProspects, 7);
  const whatsappResult = calculateProspects(whatsappProspects, 5);
  const smsResult = calculateProspects(smsProspects, 1);

  const totalProspects =
    emailResult + linkedinResult + whatsappResult + smsResult;

  return (
    <div className="flex flex-col items-center mb-20 mt-20">
      <div className="flex flex-col md:flex-row items-center mb-8 w-full max-w-3xl">
        {/* Title */}
        <div className="text-center w-full">
          <h2 className="font-bold border-t-4 border-[#e24545] font-chivo text-3xl text-[#e24545] mb-2 inline-block relative">
            {Data.heading}
          </h2>
          <br />
          <br />
          <span className="font-medium text-base">{Data.description}</span>
        </div>
      </div>

      {/* Dashboard */}
      <div className="w-full max-w-3xl p-8 border-1 bg-white rounded-3xl text-center shadow-2xl mb-8">
        <div className="prospect-calculator p-4 md:p-6 lg:p-8">
          <div className="stats-container flex flex-col gap-6 pt-12">
            <div className="input-group flex flex-col gap-4 relative">
              <label htmlFor="emailProspects" className="text-lg font-semibold">
                {Data.email} {emailProspects}
              </label>
              <input
                id="emailProspects"
                type="range"
                min="0" // Ensure min value is lower than the default
                max="120000"
                value={emailProspects}
                onChange={(e) => setEmailProspects(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #e24545 ${
                    emailProspects / 1200
                  }%, #d3d3d3 ${emailProspects / 1200}%)`,
                }}
              />
            </div>
            <div className="input-group flex flex-col gap-4 relative">
              <label
                htmlFor="linkedinProspects"
                className="text-lg font-semibold"
              >
                {Data.linkedin} {linkedinProspects}
              </label>
              <input
                id="linkedinProspects"
                type="range"
                min="0" // Ensure min value is lower than the default
                max="7000"
                value={linkedinProspects}
                onChange={(e) => setLinkedinProspects(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #e24545 ${
                    linkedinProspects / 70
                  }%, #d3d3d3 ${linkedinProspects / 70}%)`,
                }}
              />
            </div>
            <div className="input-group flex flex-col gap-4 relative">
              <label
                htmlFor="whatsappProspects"
                className="text-lg font-semibold"
              >
                {Data.whatsapp} {whatsappProspects}
              </label>
              <input
                id="whatsappProspects"
                type="range"
                min="0" // Ensure min value is lower than the default
                max="25000"
                value={whatsappProspects}
                onChange={(e) => setWhatsappProspects(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #e24545 ${
                    whatsappProspects / 250
                  }%, #d3d3d3 ${whatsappProspects / 250}%)`,
                }}
              />
            </div>
            <div className="input-group flex flex-col gap-4 relative">
              <label htmlFor="smsProspects" className="text-lg font-semibold">
                {Data.phone} {smsProspects}
              </label>
              <input
                id="smsProspects"
                type="range"
                min="0" // Ensure min value is lower than the default
                max="10000"
                value={smsProspects}
                onChange={(e) => setSmsProspects(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #e24545 ${
                    smsProspects / 100
                  }%, #d3d3d3 ${smsProspects / 100}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Total Prospects outside of the diagram */}
      <h3 className="text-2xl font-bold text-[#e24545]">
        <span className="text-white bg-black pt-1 pb-1 pl-1 pr-1">
          {totalProspects}
        </span>{" "}
        {Data.heading1}
      </h3>
      {/* -------------------------------- */}
      <div className="flex justify-center mt-20 w-full">
        {" "}
        {/* Center the button */}
        <Link href={`/${locale}/ContactUs`} locale={locale}>
          {/* <div className="flex justify-center items-center cursor-pointer group relative gap-1.5 px-6 py-3 bg-[#ffd126] text-black rounded-lg hover:bg-[#f8c600] transition font-semibold text-md ml-10">
                  {data.button}
                </div> */}
          {/* <div class="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center"> */}
          <div class="h-fit w-full rounded-3xl bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[2.5px] py-[2.6px] group">
            <div class="flex h-fit w-fit items-center justify-center bg-white group-hover:bg-[#e24545] rounded-3xl px-4 py-1">
              <h1 class="text-xl tracking-wider font-semibold text-[#e24545] group-hover:text-white text-nowrap px-4">
                {Data.button}
              </h1>
            </div>
          </div>
          {/* </div> */}
          {/* <button className="bg-transparent border-2 border-gradient text-[#e24545] font-semibold py-2 px-4 rounded-full hover:bg-[#e24545] hover:text-white transition duration-300 ease-in-out">
                  {data.button}
                </button> */}
        </Link>
        {/* <Link href={`/${locale}/ContactUs`} locale={locale}>
          <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-white overflow-hidden h-16 w-64 rounded-2xl bg-[#ff3737] p-2 flex justify-center items-center font-extrabold">
            <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-[#e24545]"></div>
            <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-[#993939]"></div>
            <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-[#c47979]"></div>
            <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-[#975353]"></div>
            <p className="z-10">{Data.button}</p>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default ProspectCalculator;

// 'use client';
// import React, { useState } from 'react';
// import En from "../../messages/eng.json"; // Adjust path as necessary
// import Fr from "../../messages/fr.json";
// import { useParams } from "next/navigation";
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ProspectCalculator = () => {
//   const [emailProspects, setEmailProspects] = useState(10000);
//   const [linkedinProspects, setLinkedinProspects] = useState(700);
//   const [whatsappProspects, setWhatsappProspects] = useState(2500);
//   const [smsProspects, setSmsProspects] = useState(2500);

//   const { locale } = useParams();
//   const Data = locale === "fr" ? Fr.ProspectCalculator : En.ProspectCalculator;

//   const calculateProspects = (value, rate) => Math.floor(value * rate / 100);

//   const data = {
//     labels: ['Email', 'LinkedIn', 'WhatsApp', 'Phone SMS'],
//     datasets: [
//       {
//         label: Data.heading1,
//         data: [
//           calculateProspects(emailProspects, 1.3),
//           calculateProspects(linkedinProspects, 7),
//           calculateProspects(whatsappProspects, 5),
//           calculateProspects(smsProspects, 1)
//         ],
//         backgroundColor: '#e24545',
//         borderWidth: 2
//       }
//     ]
//   };

//   const options = {
//     plugins: {
//       legend: {
//         labels: {
//           color: 'black',
//         }
//       },
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem) => `Number of prospects: ${tooltipItem.raw}`,
//         },
//         backgroundColor: '#e24545',
//         titleColor: '#fff',
//         bodyColor: '#fff',
//       }
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         ticks: {
//           color: 'black'
//         },
//         grid: {
//           color: '#ddd'
//         }
//       },
//       y: {
//         ticks: {
//           color: '#black'
//         },
//         grid: {
//           color: '#ddd'
//         }
//       }
//     }
//   };

//   return (
//     <div className='mb-20'>
//       <h2 className="font-bold font-chivo text-2xl md:text-3xl lg:text-4xl text-[#e24545] text-center mt-20 mb-20">{Data.heading}</h2>
//       <div className="prospect-calculator p-4 md:p-6 lg:p-8">
//         <div className="stats-container flex flex-col gap-4 pt-12">
//           <div className="input-group flex flex-col gap-2">
//             <label htmlFor="emailProspects">{Data.email} {emailProspects}</label>
//             <input
//               id="emailProspects"
//               type="range"
//               min="10000"
//               max="120000"
//               value={emailProspects}
//               onChange={(e) => setEmailProspects(Number(e.target.value))}
//               className="w-full"
//             />
//           </div>
//           <div className="input-group flex flex-col gap-2">
//             <label htmlFor="linkedinProspects">{Data.linkedin} {linkedinProspects}</label>
//             <input
//               id="linkedinProspects"
//               type="range"
//               min="700"
//               max="7000"
//               value={linkedinProspects}
//               onChange={(e) => setLinkedinProspects(Number(e.target.value))}
//               className="w-full"
//             />
//           </div>
//           <div className="input-group flex flex-col gap-2">
//             <label htmlFor="whatsappProspects">{Data.whatsapp} {whatsappProspects}</label>
//             <input
//               id="whatsappProspects"
//               type="range"
//               min="2500"
//               max="25000"
//               value={whatsappProspects}
//               onChange={(e) => setWhatsappProspects(Number(e.target.value))}
//               className="w-full"
//             />
//           </div>
//           <div className="input-group flex flex-col gap-2">
//             <label htmlFor="smsProspects">{Data.phone} {smsProspects}</label>
//             <input
//               id="smsProspects"
//               type="range"
//               min="2500"
//               max="10000"
//               value={smsProspects}
//               onChange={(e) => setSmsProspects(Number(e.target.value))}
//               className="w-full"
//             />
//           </div>
//         </div>
//         <div className="chart-container flex justify-center">
//           <div className="w-full max-w-4xl" style={{ height: '400px' }}>
//             <Bar data={data} options={options} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProspectCalculator;
