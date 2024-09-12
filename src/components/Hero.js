"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image11 from "../assets/single/1-removebg-preview.png";
import image12 from "../assets/single/2-removebg-preview (1).png";
import image13 from "../assets/single/3-removebg-preview.png";
import image14 from "../assets/single/4-removebg-preview.png";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";

export default function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll(".object");

    const handleMouseMove = (e) => {
      elements.forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 50;
        const y = (e.clientY * movingValue) / 50;

        // Remove the initial animation class when the mouse moves
        move.style.animation = "none";
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { locale } = useParams();
  const data = locale === "fr" ? Fr.Hero : En.Hero;

  return (
    <div>
      <div className="hero -mt-10 sm:mt-2 min-h-screen   relative">
        <div className="hero-text text-start md:text-center absolute w-full   top-[35%] md:top-[50%] start-[50%] -translate-x-[50%] -translate-y-[60%]">
          <h2 className="mt-20 px-4 text-start md:text-center text-3xl md:text-5xl 2xl:text-[4.5rem]">
            {data.heading}
            <br />
            <span className="hacking">{data.heading1}</span>
          </h2>
          <p className="-mt-12 px-4 text-start md:text-center text-[1rem] 2xl:text-[1.4rem] text-[#0c0202] font-base">
            {data.heading2} <span> </span>
            <br className="hidden md:block" />
            {data.heading3}
          </p>
          <p className="text-start md:text-center px-4 md:px-2 text-[1rem] 2xl:text-[1.4rem]">
            Lead・Data・CRM
          </p>
          <Link href={`/${locale}/ContactUs`} passHref className="bg-blue-400">
            {/* <button className="cta-button w-[200px] h-[90px] min-w-fit text-nowrap">
              {data.button}
            </button> */}
            <div class="h-fit w-fit rounded-3xl bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[2.5px] py-[2.6px] group ms-4 md:px-[2px] md:py-[2px] md:mx-auto min-w-[215px] min-h-[43px] transition-all duration-300">
              <div class="flex h-full w-full items-center justify-center bg-white group-hover:bg-[#e24545] rounded-3xl px-4 py-2 transition-all duration-300">
                <h1 class="text-md font-semibold text-[#e24545] group-hover:text-white text-nowrap">
                  {data.button}
                </h1>
              </div>
            </div>
          </Link>
        </div>
        <Image
          className="object object1 hero-one w-[17rem] 2xl:w-[24rem]"
          src={image1}
          width={550}
          height={550}
          alt="Description of image 1"
          data-value="2"
        />
        <Image
          className="object object2 hero-two w-[17rem] 2xl:w-[24rem]"
          src={image2}
          width={550}
          height={550}
          alt="Description of image 2"
          data-value="1"
        />
        <Image
          className="object object3 hero-three w-[17rem] 2xl:w-[24rem]"
          src={image3}
          width={550}
          height={550}
          alt="Description of image 3"
          data-value="0.8"
        />
      </div>
    </div>
  );
}
