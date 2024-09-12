"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.jpg";
import Image8 from "../assets/image8.jpg";
import Image9 from "../assets/image9.jpg";
import Image10 from "../assets/image10.jpg";
import Image11 from "../assets/image11.jpg";
import Image12 from "../assets/image12.jpg";
import Image13 from "../assets/image13.jpg";
import Image14 from "../assets/image14.jpg";
import Image15 from "../assets/image15.jpg";
import Image16 from "../assets/image16.jpg";
import Image17 from "../assets/image17.jpg";
import Image18 from "../assets/image18.jpg";
import Image19 from "../assets/image19.jpg";
import Image21 from "../assets/digishare.png";
import Image22 from "../assets/pyxeli.png";
import Image23 from "../assets/feizhoucom.png";

const images = [
  { src: Image1, href: "http://www.datawareghana.com" },
  { src: Image2, href: "https://www.themultione.com/lander" },
  { src: Image3, href: "https://www.omniacademy.ma" },
  { src: Image23, href: "https://www.feizhoucom.com" },
  { src: Image5, href: "#" },
  { src: Image6, href: "#" },
  { src: Image7, href: "https://ososs.com/en/" },
  { src: Image8, href: "https://www.kaba.ma" },
  { src: Image9, href: "#" },
  { src: Image10, href: "https://www.curacel.co" },
  { src: Image11, href: "https://www.cpl-network.com" },
  { src: Image12, href: "https://www.mantaraydigitalsolutions.com" },
  { src: Image13, href: "https://inveko.green" },
  { src: Image14, href: "https://www.dasauto.ma" },
  { src: Image15, href: "#" },
  { src: Image16, href: "#" },
  { src: Image17, href: "#" },
  { src: Image18, href: "#" },
  { src: Image19, href: "#" },
  { src: Image21, href: "https://digishare.ma/" },
  { src: Image22, href: "https://pyxeli.com/" },
  { src: Image4, href: "https://www.jove.com" },
];


const Partners = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("animationiteration", () => {
        container.scrollLeft = 0;
      });
    }
  }, []);

  return (
    <div className="-mt-20">
      <div className="relative overflow-hidden pt-5 pb-5 bg-transparent bg-opacity-15">
        <div ref={containerRef} className="flex space-x-12 animate-scroll1">
          {images.concat(images).map((image, index) => (
            <Link key={index} href={image.href} target="_blank">
              <Image
                loading="lazy"
                src={image.src}
                className="max-w-none"
                alt={`Image ${index + 1}`}
                width={"auto"}
                height={40}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
