"use client"
import Image from 'next/image'
import React from 'react'
import phone1 from "../../../images/hero/Phone1.webp";
import phone2 from "../../../images/hero/Phone2.webp";
import Facebook from "../LetsMeet/Facebook";
import Instagram from "../LetsMeet/Instagram";
import Linkedin from "../LetsMeet/Linkedin";

export const Donations = () => {
  return (
    <>
     <section className="relative bg-hero-pattern bg-[length:450px_439px] bg-no-repeat sm:bg-[left_-2px_top_200px] md:bg-[length:977px_910px] md:bg-[right_-420px_top_80px] md:pb-[120px] xl:bg-[length:_977px] xl:bg-[right_calc(50%_-_360px)_top_380px] xl:pb-[120px]">
      <div className="container mt-[50px] flex flex-col md:flex xl:pt-[244px] ">
        <h1 className="text-center text-[46px] font-bold text-stone-50 sm:text-[50px] xl:w-[451px] xl:text-[70px] xl:leading-[120%]">
        Support with
        Donation
        </h1>

        <Image
          className="absolute z-10 h-[300px] max-h-none max-w-none sm:top-[210px] md:right-[calc(50%_-_245px)] md:top-[89px] md:h-[500px] md:w-[274px] xl:right-[calc(50%_-_250px)] xl:top-[280px] xl:h-[600px] xl:w-[328px]"
          priority
          src={phone1}
          height={303}
          width={170}
          alt="Phone1"
        />
        <Image
          className="absolute z-10 h-[320px] max-h-none max-w-none sm:left-[196px] sm:top-[240px] md:left-[calc(50%_-_-190px)] md:top-[259px] md:h-[500px] md:w-[274px] xl:left-[calc(50%_-_-380px)] xl:top-[420px]  xl:h-[600px] xl:w-[328px]"
          priority
          src={phone2}
          height={20}
          width={170}
          alt="Phone2"
        />

        <p className="z-10 mt-[440px] text-start text-[20px] font-normal text-stone-50 md:mt-[24px] md:w-[377px] md:text-[24px] xl:w-[476px]">
        Thank you for considering donating to the development of the Sister Street App. We are fully committed to maintaining complete transparency about where your money is spent. 
<br /><br />
Through our insider news and updates, we will take you along on our Sister Street journey, sharing every step of the way. Every cent counts, and we truly appreciate all of our patrons&apos; contributions!
        </p>

        <button className="btn-main z-10 mt-[56px]  rounded-[30px] py-[12px] text-[22px] font-extrabold md:w-[284px]">
          JOIN US
        </button>
        <div className="mt-[56px] flex justify-between px-[37px] md:w-[284px] md:px-[1px]">
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </section>
    </>
  )
}
