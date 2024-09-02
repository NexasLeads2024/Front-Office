"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpeg";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import Image7 from "../assets/image7.png";
import Image8 from "../assets/image8.png";
import Image9 from "../assets/image9.png";
import Image10 from "../assets/image10.png";
import Image11 from "../assets/image11.jpeg";
import Image12 from "../assets/image12.jpeg";
import Image13 from "../assets/image13.jpeg";
import Image14 from "../assets/image14.jpeg";
import Image15 from "../assets/image15.png";
import Image16 from "../assets/image16.jpeg";
import Image17 from "../assets/image17.png";
import Image18 from "../assets/image18.png";
import Image19 from "../assets/image19.png";
import Image20 from "../assets/image20.jpeg";

const images = [  
  { src: Image7, href: "https://ososs.com/en/" },
  { src: Image8, href: "https://www.kaba.ma" },
  { src: Image9, href: "/" },
  { src: Image10, href: "https://www.curacel.co" },
  { src: Image11, href: "https://www.cpl-network.com" },
  { src: Image12, href: "https://www.mantaraydigitalsolutions.com" },
  { src: Image13, href: "https://inveko.green" },
  { src: Image15, href: "/" },
  { src: Image16, href: "/" },
  { src: Image17, href: "/" },
  { src: Image18, href: "/" },
  { src: Image19, href: "/" },
  { src: Image14, href: "https://www.dasauto.ma" },
  { src: Image1, href: "http://www.datawareghana.com" },
  { src: Image2, href: "https://www.themultione.com/lander" },
  { src: Image3, href: "https://www.omniacademy.ma" },
  { src: Image4, href: "https://www.jove.com" },
  { src: Image5, href: "/" },
  { src: Image6, href: "/" },
  { src: Image20, href: "https://feizhoucom.com" },
];

const Partners = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('animationiteration', () => {
        container.scrollLeft = 0;
      });
    }
  }, []);

  return (
    <div className='-mt-20'>
    <div className="relative overflow-hidden pt-5 pb-5 bg-slate-400 bg-opacity-15">
      <div
        ref={containerRef}
        className="flex space-x-12 animate-scroll1"
      >
        {images.concat(images).map((image, index) => (
          <Link key={index} href={image.href} target="_blank">
            <Image
              loading="lazy"
              src={image.src}
              className="max-w-none"
              alt={`Image ${index + 1}`}
              width={80}
              height={55}
            />
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Partners;
