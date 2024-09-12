"use client";
import Image from "next/image";
import slidesImage1 from "../assets/slidesImage1.png";
import slidesImage2 from "../assets/slidesImage2.png";
import slidesImage3 from "../assets/slidesImage3.png";
import slidesImage4 from "../assets/slidesImage4.png";
const images = [slidesImage1, slidesImage2, slidesImage3, slidesImage4];
const SectionComponent = ({
  id,
  title,
  description,
  imageUrl = "",
  imageAlt = "",
  reverse,
}) => (
  <div
    className={`flex font-Saira flex-col-reverse${
      reverse ? " md:flex-row-reverse " : " md:flex-row "
    } items-center my-8`}
  >
    <div className="md:w-1/2 p-4">
      <div className="items-center justify-start gap-2 hidden md:flex">
        <h1 className="text-[3rem] font-bold pb-4 text-[#e24545]">0{id}</h1>
        <h2
          className={`text-2xl text-gray-700 font-normal mb-4 uppercase border-b-2 border-b-[#e24545] w-fit px-1`}
        >
          {title}
        </h2>
      </div>
      <p
        className="lg:text-xl text-sm font-normal text-start text-gray-800"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
    <div className="md:w-1/2 p-6 flex justify-center">
      <Image
        src={images[id - 1]}
        className={`w-auto ${id == 2 ? "max-h-[350px]" : "max-h-72"}`}
      />
    </div>
    <div className="w-full items-center justify-start px-5 gap-2 flex md:hidden">
      <h1 className="text-3xl text-[#0FB9B6] font-bold pb-4">0{id}</h1>
      <h2
        className={`text-xl text-gray-700 uppercase border-b-2 border-b-[#0FB9B6] font-bold mb-4`}
      >
        {title}
      </h2>
    </div>
  </div>
);

export default SectionComponent;
