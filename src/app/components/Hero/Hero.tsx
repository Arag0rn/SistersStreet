"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import insta from "../../../images/hero/Insta.svg";
import facebook from "../../../images/hero/Facebook.svg";
import linkedIn from "../../../images/hero/linkedIn.svg";
import phone1 from "../../../images/hero/Phone1.webp";
import phone2 from "../../../images/hero/Phone2.webp";

const Hero = () => {
  return (
    <section className="relative bg-hero-pattern bg-[length:420px_429px] bg-no-repeat sm:bg-[left_-2px_top_300px] md:bg-[length:977px_910px] md:bg-[right_-420px_top_80px] md:pb-[120px] xl:bg-[length:_977px] xl:bg-[right_calc(50%_-_360px)_top_380px] xl:pb-[120px] overflow-hidden">
      <div className="container w-auto mt-[50px] flex flex-col md:flex xl:pt-[244px] ">
        <h1 className="text-center text-[46px] font-bold text-stone-50 sm:text-[50px] xl:w-[451px] xl:text-[70px] xl:leading-[120%]">
          Welcome To Sister Street App
        </h1>

        <Image
          className="absolute z-10 h-[300px] max-h-none max-w-none sm:top-[310px] md:right-[calc(50%_-_245px)] md:top-[89px] md:h-[500px] md:w-[274px] xl:right-[calc(50%_-_250px)] xl:top-[280px] xl:w-[328px] xl:h-[600px]"
          priority
          src={phone1}
          height={303}
          width={170}
          alt="Facebook"
        />
        <Image
          className="absolute z-10 h-[320px] max-h-none max-w-none sm:left-[196px] sm:top-[340px] md:left-[calc(50%_-_-190px)] md:top-[259px] md:h-[500px] md:w-[274px] xl:left-[calc(50%_-_-380px)] xl:top-[420px]  xl:w-[328px] xl:h-[600px]"
          priority
          src={phone2}
          height={20}
          width={170}
          alt="Facebook"
        />

        <p className="z-10 mt-[440px] text-start text-[20px] font-normal text-stone-50 md:mt-[24px] md:w-[377px] md:text-[24px] xl:w-[476px]">
          Sister Street is a women-only app that provides a secure walking
          experience, particularly at night. Users connect with a supportive
          community through text, call or walking together.
        </p>

        <button className="z-10 mt-[56px] w-full rounded-[30px] bg-pink-500 py-[12px] text-[22px] font-extrabold text-neutral-900 md:w-[284px]">
          JOIN US
        </button>
        <div className="mt-[56px] flex justify-between px-[37px] md:w-[284px] md:px-[1px]">
          <Image
            priority
            src={facebook}
            height={48}
            width={48}
            alt="Facebook"
          />
          <Image priority src={insta} height={48} width={48} alt="Insta" />
          <Image
            priority
            src={linkedIn}
            height={48}
            width={48}
            alt="linkedIn"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
