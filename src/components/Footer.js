"use client";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json";
import Link from "next/link";
import { FaTiktok } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
export default function Footer() {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.Footer : En.Footer;

  useEffect(() => {
    // Add LinkedIn Partner ID
    window._linkedin_partner_id = "6322657";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

    // Load LinkedIn Insight script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://sheetdb.io/api/v1/c4tv81qgayxbq';

    const data = {
      Email: email,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([data]),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrorMessage(`Error: ${errorData.message || 'Something went wrong.'}`);
        console.error('API Error:', errorData);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(`Network Error: ${error.message}`);
      console.error('Network Error:', error);
    }
  };

  return (
    <footer className="bg-white text-gray-800 py-8 md:py-14">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          
          {/* Logo and Newsletter Section */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Link href={`/${locale}/`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#e24545]">{data.logo}</h2>
            </Link>
            <p className="mb-4 text-center md:text-left text-sm md:text-base">
              {data.description}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Entrez votre email"
                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e24545]"
                required
              />
              <button type="submit" className="rounded-full bg-gradient-to-r from-[#ffd126] to-[#e24545] text-white font-bold px-4 py-2">
                {data.button}
              </button>
            </form>
            {status === 'success' && <p className="text-green-500">Subscribed successfully!</p>}
            {status === 'error' && <p className="text-red-500">{errorMessage}</p>}
            <div className="flex space-x-4 mb-4 justify-center md:justify-start">
              <Link href="https://www.tiktok.com/@nexasleads" target="_blank">
                <span aria-label="TikTok">
                  <FaTiktok className="w-6 h-6 text-black" />
                </span>
              </Link>
              <Link href="https://x.com/nexasleads" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-blue-400"
                  aria-label="Twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/nexasleads" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-pink-600"
                  aria-label="Instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/nexasleads" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-blue-700"
                  aria-label="LinkedIn"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Footer Links Section */}
          <div className="flex flex-col mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-2">{data.heading1}</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href={`/${locale}/`}>{data.page1}</Link></li>
              <li><Link href={`/${locale}/AboutUs`}>{data.page2}</Link></li>
              <li><Link href={`/${locale}/Blog`}>{data.page3}</Link></li>
              <li><Link href={`/${locale}/ContactUs`}>{data.page4}</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-2">{data.heading2}</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href={`/${locale}/Training-And-Certifications`}>{data.page5}</Link></li>
              <li><Link href={`/${locale}/Business-Development`}>{data.page6}</Link></li>
              <li><Link href={`/${locale}/CRM-Integrations`}>{data.page7}</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Partner Images */}
        <div className="bg-gray-100 py-4 mt-8">
        <div className="flex flex-wrap justify-center space-x-4">
          <Image src="/HUBSPOT.png" alt="HubSpot" className="w-24 h-12 object-contain" width={96}
          height={48} />
          <Image src="/SAI.png" alt="SAI" className="w-24 h-12 object-contain" width={96}
          height={48}/>
          <Image src="/MTM.png" alt="MTM" className="w-24 h-12 object-contain" width={96}
          height={48}/>
          <Image src="/AP.png" alt="AP" className="w-24 h-12 object-contain" width={96}
          height={48}/>
        </div>
      </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-900 text-white py-4 mt-8 text-center -mb-14">
      <p className="text-sm md:text-base">
      Copyright 2024 © NexasLeads by :{' '}
      <Link href='https://www.feizhoucom.com' target="_blank">
        <span className="text-white font-bold" rel="noopener noreferrer">
          Feizhoucom
        </span>
      </Link>
    </p>
      </div>      

    </footer>
  );
}
