import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";
import Technologies from "../skills/technologies";

interface IRequest {
  title?: string;
  text?: string;
  srcImg?: any;
  itemsPosition?: string;
  flexReverse?: string;
  link?: string;
  skill: {
    id: string;
    skill: string;
    img: string;
  }[];
}

export default function Project({
  title,
  text,
  srcImg,
  itemsPosition,
  flexReverse,
  link,
  skill,
}: IRequest) {
  return (
    <div
      className={`text-center flex flex-col lg:flex-row gap-5 xl:gap-0 items-center mb-[1.875rem] lg:text-start md:items-start lg:mb-28 xl:mb-32 ${flexReverse}`}
    >
      <div className="lg:w-[70%] flex flex-col gap-6">
        <h1 className="text-base font-semibold md:text-3xl">{title}</h1>
        <div className="space-y-4">
          <p
            className={`max-w-[600px] 2xl:max-w-[800px] text-[#D4D4D4] text-xs md:text-lg xl:text-xl text-${itemsPosition}`}
          >
            {text}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start">
            {skill.map(({ id, skill, img }) => (
              <Technologies key={id} srcImg={img} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <a
        className={`my-14 lg:my-0  mx-auto lg:mx-0 ${
          flexReverse == "lg:flex-row-reverse" ? "lg:mr-12" : "lg:ml-12"
        }`}
        target="_blank"
        href={`${link}`}
      >
        <div className="block hover:scale-110 transition-all duration-500 cursor-pointer w-[350px]">
          <Image
            alt="Project"
            src={srcImg}
            priority
            className="rounded-3xl max-h-64"
          />
        </div>
      </a>
    </div>
  );
}
