"use client";
import Image from "next/image";
import image from "../assets/image22.webp";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json"; // Adjust path as necessary
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link"; // Import Link from Next.js

export default function Component() {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.Section : En.Section;

  return (
    <div className="flex flex-col items-center justify-center bg-[#e24545] text-white mx-2 sm:mx-6 lg:mx-16 xl:mx-24 mt-24 sm:mt-32 lg:mt-48 pb-14 sm:pb-20 lg:pb-28 mb-10 lg:mb-20">
      <div className="flex flex-col items-center justify-center space-y-4 max-w-full sm:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%]">
        <Image
          src={image}
          alt="Illustration"
          className="w-[240px] h-[200px] sm:w-[320px] sm:h-[260px] lg:w-[380px] lg:h-[320px] -mt-10 sm:-mt-16 lg:-mt-20"
          width="300"
          height="200"
          style={{ aspectRatio: "300/200", objectFit: "cover" }}
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center sm:pb-5 sm:pt-6 lg:pb-5 lg:pt-10">
          {data.heading}
          <br />
          {data.heading1}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-center pb-6 sm:pb-8 lg:pb-10 text-black">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Link href="https://calendly.com/yassir-gazani-auy/20" target="_blank"> {/* Replace '/path1' with the actual path */}
            <div className="flex justify-center items-center cursor-pointer group relative gap-1.5 px-8 py-4 sm:px-10 sm:py-5 bg-[#ffd126] text-black rounded-3xl hover:bg-[#f8c600] transition font-semibold shadow-md">
              {data.button}
            </div>
          </Link>
          <Link href={`/${locale}/ContactUs`}> {/* Replace '/path2' with the actual path */}
            <div className="flex justify-center items-center cursor-pointer group relative gap-1.5 px-8 py-4 sm:px-10 sm:py-5 bg-black text-[#ffd126] rounded-3xl hover:bg-stone-900 transition font-semibold shadow-md">
              {data.button1}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
