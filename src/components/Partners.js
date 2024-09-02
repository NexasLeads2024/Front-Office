"use client";

import React from 'react';
import Partners1 from './Partners1';
import Partners2 from './Partners2';
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; 
import Fr from "../../messages/fr.json";
const Partners = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.Partners : En.Partners;
  return (
    <div >
    <h2 className="font-bold font-chivo text-5xl text-black  text-center pt-110 pb-20">
    {data.heading1} 
    <span className="hacking">{data.heading2}</span>
    </h2>
        <Partners1 />
        <Partners2 />
        <Partners1 />
        <Partners2 />
    </div>
  );
};

export default Partners;
