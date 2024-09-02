"use client"
import React from 'react';
import image from "../assets/ContactUs.svg";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";

const ContactUsPage = () => {

  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Subject, setSubject] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const serviceId = "service_8je240n";
    const templateId = "template_02z6ldk";
  
    try {
      const emailData = {
        FullName: FullName,
        Email: Email,
        Message: Message,
        Subject: Subject,
      };
  
      const response = await emailjs.send(serviceId, templateId, emailData, 'xNkcsKLB95h08UcVu');
  
      console.log('Email sent successfully!', response);
      setStatusMessage("Votre message a été envoyé avec succès!");
      setFullName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const { locale } = useParams();
  const data = locale === "fr" ? Fr.ContactUs : En.ContactUs;

  return (
    <div>
      <section className="min-h-screen bg-white lg:flex">
        <div className="hidden lg:block lg:w-1/2 lg:items-center lg:justify-center">
          <div className="w-full h-full bg-cover bg-center">
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={image}
                alt="Contact Us"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full p-8 lg:p-12 lg:w-1/2 bg-[#e24545]">
          <h1 className="text-5xl font-bold text-gray-800 capitalize dark:text-white lg:text-5xl text-center mt-10">
          {data.heading}
          </h1>
          <p className="text-white text-lg text-center mt-8 -mb-6">
          {data.description}
          </p>

          <form className="grid grid-cols-1 gap-6 mt-8 md:mt-12">
            <div className="w-full">
              <div className="relative">
                <div className="w-full p-5 bg-white rounded-lg font-mono">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">{data.heading1}</label>
                  <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#e24545] hover:shadow-lg hover:border-[#e24545] bg-gray-100 text-black"
                    placeholder={data.heading1}
                    type="text"
                    id="input2"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative">
                <div className="w-full p-5 bg-white rounded-lg font-mono">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">{data.heading2}</label>
                  <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#e24545] hover:shadow-lg hover:border-[#e24545] bg-gray-100 text-black"
                    placeholder={data.heading2}
                    type="text"
                    id="input2"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative">
                <div className="w-full p-5 bg-white rounded-lg font-mono">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">{data.heading3}</label>
                  <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#e24545] hover:shadow-lg hover:border-[#e24545] bg-gray-100 text-black"
                    placeholder={data.heading3}
                    type="text"
                    id="input2"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative">
                <div className="w-full p-5 bg-white rounded-lg font-mono">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input3">{data.heading4}</label>
                  <textarea
                    id="message"
                    name="message"
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:[#e24545] hover:shadow-lg hover:border-[#e24545] bg-gray-100 resize-none text-black"
                    placeholder={data.heading4}
                    style={{ height: '150px' }} 
                  ></textarea>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-[#ffd126] rounded-md hover:bg-[#f8c600]"
              >
               {data.button}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
