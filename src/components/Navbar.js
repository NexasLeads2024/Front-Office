'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo-nexasleads.png';
import englishFlag from '../assets/en.png';
import frenchFlag from '../assets/fr.png';
import En from '../../messages/eng.json'; 
import Fr from '../../messages/fr.json';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar({ params = {} }) {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menu state
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState(params.locale || 'en');
  const locale = params.locale || language;
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-eu1.hs-scripts.com/143456522.js';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    setMounted(true);
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }

    const loadScript = (src, id, callback) => {
      if (!document.getElementById(id)) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.onload = callback;
        document.head.appendChild(script);
      }
    };

    loadScript('https://cdn.vector.co/pixel.js', 'vector-script', () => {
      if (window.vector) {
        window.vector.load('e25ed6b6-8912-4ef3-aeef-dd7fd2c772f0');
      }
    });

    loadScript('https://www.googletagmanager.com/gtag/js?id=G-Z5L69L8CCH', 'google-tag', () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-Z5L69L8CCH');
    });

    loadScript('https://static.hotjar.com/c/hotjar-3885332.js?sv=6', 'hotjar-script', () => {
      window.hj = window.hj || function () {
        (window.hj.q = window.hj.q || []).push(arguments);
      };
      window._hjSettings = { hjid: 3885332, hjsv: 6 };
    });
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLocalizedPath = (lang) => {
    const pathArray = window.location.pathname.split('/');
    pathArray[1] = lang;
    return pathArray.join('/');
  };
  if (!mounted) return null;
  const data = locale === 'fr' ? Fr.Navbar : En.Navbar;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Logo */}
          <div className="flex-shrink-0 hidden md:block ml-20">
            <Link href={`/${locale}/`} locale={locale}>
              <Image 
                src={logo}
                alt="NexasLeads"
                width={150} 
                height={50} 
                priority
                style={{ width: '150px', height: 'auto' }}
                layout="intrinsic"
              />
            </Link>
          </div>

          {/* Mobile Logo */}
          <div className="flex-1 flex items-center justify-between space-x-10">
            <div className="flex-shrink-0 md:hidden">
              <Link href={`/${locale}/`} locale={locale}>
                <Image 
                  src={logo}
                  alt="NexasLeads"
                  width={150} 
                  height={50} 
                  priority
                  style={{ width: '150px', height: 'auto' }}
                  layout="intrinsic"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href={`/${locale}/`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm ml-20">
                {data.title1}
              </Link>
              <Link href={`/${locale}/AboutUs`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm">
                {data.title2}
              </Link>
              <div className="relative group" ref={dropdownRef}>
                <button
                  className="text-gray-700 hover:text-[#ffd126] font-bold text-sm flex items-center"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {data.title3}
                  <FaChevronDown 
                    className={`ml-2 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 py-2 w-48 bg-white border rounded-md shadow-lg transition-opacity duration-200">
                    <Link href={`/${locale}/Training-And-Certifications`} locale={locale} className="block px-4 py-2 text-gray-700 hover:text-[#ffd126] font-bold text-sm">
                      {data.title6}
                    </Link>
                    <Link href={`/${locale}/Business-Development`} locale={locale} className="block px-4 py-2 text-gray-700 hover:text-[#ffd126] font-bold text-sm">
                      {data.title7}
                    </Link>
                    <Link href={`/${locale}/CRM-Integrations`} locale={locale} className="block px-4 py-2 text-gray-700 hover:text-[#ffd126] font-bold text-sm">
                      {data.title8}
                    </Link>
                  </div>
                )}
              </div>
              <Link href={`/${locale}/Blog`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm">
                {data.title4}
              </Link>
              <Link href={`/${locale}/ContactUs`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm">
                {data.title5}
              </Link>
              <div className="flex items-center space-x-2">
                <Link
                  href={getLocalizedPath('fr')}
                  locale="fr"
                  className="flex items-center justify-center hover:underline"
                  onClick={() => setLanguage('fr')}
                >
                  <Image
                    src={frenchFlag}
                    alt="French"
                    width={24}
                    height={24}
                    className="border-2 border-black"
                  />
                </Link>
                <Link
                  href={getLocalizedPath('en')}
                  locale="en"
                  className="flex items-center justify-center hover:underline"
                  onClick={() => setLanguage('en')}
                >
                  <Image
                    src={englishFlag}
                    alt="English"
                    width={24}
                    height={24}
                    className="border-2 border-black"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Button */}
            <div className="hidden md:flex items-center">
              <Link href="https://calendly.com/yassir-gazani-auy/20" target="_blank">
                <div className="flex justify-center items-center cursor-pointer group relative gap-1.5 px-6 py-3 bg-[#ffd126] text-black rounded-lg hover:bg-[#f8c600] transition font-semibold text-sm ml-10">
                  {data.button}
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#ffd126] focus:outline-none focus:text-blue-600"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white shadow-md z-40 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-gray-700 hover:text-[#ffd126]"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link href={`/${locale}/`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm py-2">
            {data.title1}
          </Link>
          <Link href={`/${locale}/AboutUs`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm py-2">
            {data.title2}
          </Link>
          
            
          
            <div className="flex flex-col pl-4">
              <Link href={`/${locale}/Training-And-Certifications`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm py-2">
                {data.title6}
              </Link>
              <Link href={`/${locale}/Business-Development`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm py-2">
                {data.title7}
              </Link>
              <Link href={`/${locale}/CRM-Integrations`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm py-2">
                {data.title8}
              </Link>
            </div>
          
          <Link href={`/${locale}/Blog`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm py-2">
            {data.title4}
          </Link>
          <Link href={`/${locale}/ContactUs`} locale={locale} className="text-gray-700 hover:text-[#ffd126] font-bold text-sm py-2">
            {data.title5}
          </Link>
          <div className="flex items-center space-x-2 py-2">
            <Link
              href={getLocalizedPath('fr')}
              locale="fr"
              className="flex items-center justify-center hover:underline"
              onClick={() => setLanguage('fr')}
            >
              <Image
                src={frenchFlag}
                alt="French"
                width={24}
                height={24}
                className="border-2 border-black"
              />
            </Link>
            <Link
              href={getLocalizedPath('en')}
              locale="en"
              className="flex items-center justify-center hover:underline"
              onClick={() => setLanguage('en')}
            >
              <Image
                src={englishFlag}
                alt="English"
                width={24}
                height={24}
                className="border-2 border-black"
              />
            </Link>
          </div>
          <Link href="https://calendly.com/yassir-gazani-auy/20" target="_blank" className="flex justify-center items-center cursor-pointer group relative gap-1.5 px-6 py-3 bg-[#ffd126] text-black rounded-lg hover:bg-[#f8c600] transition font-semibold text-sm mt-4">
            {data.button}
          </Link>
        </div>
      </div>
    </nav>
  );
}
