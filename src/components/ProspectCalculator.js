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
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center mb-4 w-full max-w-3xl">
        <div className="text-center">
          <h2 className="font-bold border-t-4 border-[#e24545] text-[18px] text-[#e24545] mb-1 inline-block relative">
            {Data.heading}
          </h2>
          <p className="text-[16px] text-start md:text-center px-10 font-[700] text-gray-900">
            {Data.subtitle}
          </p>
        </div>
      </div>
      {/* <div className="w-full p-8 bg-red-400 my-2"></div> */}

      {/* Dashboard */}
      <div className="w-full max-w-3xl p-4 pt-2 border-1 bg-white rounded-3xl text-center shadow-2xl mb-4">
        <div className="prospect-calculator p-4 pt-0 md:p-4">
          <div className="stats-container flex flex-col gap-2 pt-4">
            <div className="input-group flex flex-col gap-4 relative">
              <label
                htmlFor="emailProspects"
                className="text-lg font-semibold text-start"
              >
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
                className="text-lg font-semibold text-start"
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
                className="text-lg font-semibold text-start"
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
              <label
                htmlFor="smsProspects"
                className="text-lg font-semibold text-start"
              >
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
      <h3 className="text-2xl font-bold text-[#e24545] text-center">
        <span className="text-white bg-black pt-1 pb-1 pl-1 pr-1 me-1">
          {totalProspects}
        </span>
        {Data.heading1}
      </h3>
      {/* -------------------------------- */}
      <div className="flex justify-center mt-8 w-full">
        {" "}
        {/* Center the button */}
        <Link href={`/${locale}/ContactUs`} locale={locale}>
          <div class="h-fit w-full rounded-3xl bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[2.5px] py-[2.6px] group">
            <div class="flex h-fit w-fit items-center justify-center bg-white group-hover:bg-[#e24545] rounded-3xl px-4 py-1">
              <h1 class="text-xl tracking-wider font-semibold text-[#e24545] group-hover:text-white text-nowrap px-4">
                {Data.button}
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProspectCalculator;
