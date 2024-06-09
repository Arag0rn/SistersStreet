import React from "react";
import Image from "next/image";
import romb from "../../../images/ourteam/Romb1.svg";
import romb2 from "../../../images/ourteam/Romb2.svg";
import { StaticImageData } from "next/image";

interface BoxProps {
  head: string;
  position: string;
  text: string;
  index: number;
  image: StaticImageData;
}

export const Box: React.FC<BoxProps> = ({
  head,
  position,
  text,
  image,
  index,
}) => {
  return (
    <li
      className={`flex flex-col
    items-center xl:flex-col ${index === 1 ? "md:flex-row-reverse" : "md:flex-row"} ${index === 1 ? "md:self-end" : "md:flex-start"}`}
    >
      <div
        className="relative h-[336px] w-[285px] md:h-[207px] md:w-[180px] xl:h-[438px]
xl:w-[370px]"
      >
        <Image
          className="absolute bottom-[-2px] h-full w-full"
          priority
          src={romb}
          height={285}
          width={336}
          alt="romb"
        />
        <Image
          className="absolute top-[120px] w-auto md:top-[35px] md:h-[207px] md:w-[180px] xl:top-[150px] xl:h-[285px] xl:w-full"
          priority
          src={romb2}
          height={290}
          width={336}
          alt="romb2"
        />
        <Image
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 transform md:h-[170px] md:w-[130px] xl:h-[300px] xl:w-[249px] ${index === 2 ? "ml-5 h-[255px] w-[250px] md:w-[150px] xl:h-[330px] xl:w-[300px]" : "h-[255px] w-[200px]"} `}
          priority
          src={image}
          height={250}
          width={200}
          alt="member"
        />
      </div>
      <div className="mt-[16px] text-center md:m-0 md:ml-[16px] md:w-[380px]">
        <h3 className="text-[20px] font-bold text-white xl:mt-[40px] xl:text-[30px]">
          {head}
        </h3>
        <span className="text-[16px] text-white xl:text-[24px]">
          {position}
        </span>
        <p className="mt-[16px] text-center text-[20px] text-white md:text-start xl:text-center">
          {text}
        </p>
      </div>
    </li>
  );
};
