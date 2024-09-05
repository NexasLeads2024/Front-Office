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
  // useEffect(() => {
  //   const elements = document.querySelectorAll(".object");
  //   const handleMouseMove = (e) => {
  //     elements.forEach((move) => {
  //       const movingValue = move.getAttribute("data-value");
  //       const x = (e.clientX * movingValue) / 50;
  //       const y = (e.clientY * movingValue) / 50;
  //       move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //     });
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
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
      <div className="hero -mt-10 sm:mt-2 mb-16 min-h-screen ">
        <div className="hero-text">
          <h2 className="mt-20">
            {data.heading}
            <br />
            <span className="hacking">{data.heading1}</span>
          </h2>
          <p className="-mt-12 text-center text-lg text-[#0c0202] font-base">
            {data.heading2}
            <br /> {data.heading3}
          </p>
          <Link href={`/${locale}/ContactUs`} passHref>
            <button className="cta-button w-[200px] h-[90px] text-nowrap">
              {data.button}
            </button>
          </Link>
        </div>
        <Image
          className="object object1 hero-one "
          src={image11}
          width={500}
          height={500}
          alt="Description of image 1"
          data-value="2"
        />
        <Image
          className="object object2 hero-two "
          src={image12}
          width={500}
          height={500}
          alt="Description of image 2"
          data-value="1"
        />
        <Image
          className="object object3 hero-three "
          src={image14}
          width={500}
          height={500}
          alt="Description of image 3"
          data-value="0.8"
        />
      </div>
    </div>
  );
}
