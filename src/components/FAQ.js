"use client"; 

import React from 'react';
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; 
import Fr from "../../messages/fr.json"; 

const FAQAccordion = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.FAQ : En.FAQ;

  return (
    <main className="p-5 bg-light-blue bg-slate-400 bg-opacity-15 pb-20 pt-10">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-3/4 lg:w-2/3 my-1">
          <h2 className="text-3xl text-center font-bold text-vnet-blue mb-12">FAQ</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FAQItem
              id={1}
              question={data.question1}
              answer={data.answer1}
            />
            <FAQItem
              id={2}
              question={data.question2}
              answer={data.answer2}
            />
            <FAQItem
              id={3}
              question={data.question3}
              answer={data.answer3}
            />
            <FAQItem
              id={4}
              question={data.question4}
              answer={data.answer4}
            />
            <FAQItem
              id={5}
              question={data.question5}
              answer={data.answer5}
            />
            <FAQItem
              id={6}
              question={data.question6}
              answer={data.answer6}
            />
            <FAQItem
              id={7}
              question={data.question7}
              answer={data.answer7}
            />
            <FAQItem
              id={8}
              question={data.question8}
              answer={data.answer8}
            />
          </ul>
        </div>
      </div>
    </main>
  );
};

const FAQItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="bg-white my-2 shadow-lg">
      <h2
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{question}</span>
        <svg
          className={`fill-current text-[#e24545] h-6 w-6 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={`border-l-2 border-[#e24545] overflow-hidden duration-500 transition-all ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <p className="p-3 text-gray-900">
          {answer}
        </p>
      </div>
    </li>
  );
};

export default FAQAccordion;
