import React from "react";
import Image from "next/image";
import woman from "../../../images/HowWork/Woman.svg";
import woman2 from "../../../images/HowWork/Woman2(1).svg";
import woman2_1 from "../../../images/HowWork/Woman2(2).svg";
import woman3_1 from "../../../images/HowWork/Woman3(1).svg";
import woman3_2 from "../../../images/HowWork/Woman3(2).svg";
import woman3_3 from "../../../images/HowWork/Woman3(3).svg";

export const HowWork = () => {
  return (
    <section className="overflow-hidden">
      <div className="container relative pb-[140px] pt-[1px] md:flex-col xl:w-auto">
        <div className="md: absolute inset-0 top-[110px] z-0 -mx-[calc(50vw-50%)] h-[108px] bg-[#49CEAE] clip-path-howitwork-top"></div>
        <h2 className="mx-auto mt-[266px] w-[300px] text-center text-[34px] font-bold text-white md:w-[530px] md:text-[50px] md:leading-[61px] xl:w-auto xl:text-[70px]">
          How Does Sister Street Work?
        </h2>
        <div className="relative mt-[112px] h-[307px]">
          <Image
            className="absolute right-0 top-[-60px] z-10 md:w-[140px]"
            priority
            src={woman}
            height={350}
            width={120}
            alt="Woman"
          />
          <p className="absolute z-10 text-[150px] font-bold ">1</p>
          <div className="absolute inset-0 z-0 -mx-[calc(50vw-50%)] h-[307px] bg-[#FF3186] clip-path-howitwork1 md:h-[320px] xl:h-[338px] "></div>
        </div>

        <p className="mt-[40px] text-[20px] text-white md:w-[377px] md:text-[24px] xl:w-[419px] ">
          Safeguarding the safety of the community is our top priority. Please
          complete a simple ID verification process to proceed.
        </p>

        <div className="relative mt-[105px] h-[307px] ">
          <Image
            className="absolute left-1/2 top-[-60px] z-10 -translate-x-1/2 transform md:left-1/3 md:w-[144px] xl:left-[819px] xl:top-[-90px] xl:w-[155px]"
            priority
            src={woman2}
            height={350}
            width={126}
            alt="Woman2-1"
          />
          <Image
            className="absolute left-0 z-10 md:top-[-50px] md:w-[125px] xl:left-[541px] xl:top-[-30px] xl:w-[125px]"
            priority
            src={woman2_1}
            height={350}
            width={109}
            alt="Woman2-2"
          />
          <p className="absolute right-0 z-10 text-[150px] font-bold ">2</p>
          <div className="absolute inset-0 z-0 -mx-[calc(50vw-50%)] h-[307px] scale-x-[-1] bg-[#FF6700] clip-path-howitwork1"></div>
        </div>
        <p className="mt-[70px] text-[20px] text-white md:w-[377px] md:self-end md:text-[24px] xl:mt-[80px] xl:w-[419px]">
          After confirming your ID, you can access all Sister Street features
          and explore our community space.
        </p>

        <div className="xl:mt-[230px \] relative mt-[174px]  h-[307px]">
          <Image
            className="absolute right-[200px] top-[-143px] z-10 md:right-[427px] md:top-[-80px] md:w-[124px] xl:right-[969px] xl:top-[-125px] xl:w-[100px]"
            priority
            src={woman3_1}
            height={250}
            width={77}
            alt="Woman3-1"
          />
          <Image
            className="absolute right-[74px] top-[-103px] z-10 md:right-[212px] md:top-[-90px] md:w-[131px] xl:right-[740px] xl:top-[-130px] xl:w-[155px]"
            priority
            src={woman3_2}
            height={300}
            width={98}
            alt="Woman3-2"
          />
          <Image
            className="absolute right-0 top-[-90px] z-10 -mx-[calc(50vw-45%)] md:right-0 md:mx-0 md:w-[163px] xl:right-[562px] xl:w-[135px]"
            priority
            src={woman3_3}
            height={350}
            width={132}
            alt="Woman3-3"
          />
          <p className="absolute z-10 text-[150px] font-bold ">3</p>
          <div className="absolute inset-0 z-0 -mx-[calc(50vw-50%)] h-[307px] bg-[#49CEAE] clip-path-howitwork1 "></div>
        </div>
        <p className="mt-[40px] text-[20px] text-white md:w-[377px] md:text-[24px] xl:w-[419px] ">
          By pressing a button, you can connect with other Sisters to talk on
          the phone, text, or walk together.
        </p>

        <div className="absolute inset-x-0 bottom-0 z-0 -mx-[calc(50vw-50%)] h-[108px] scale-x-[-1] bg-[#FF3186] clip-path-howitwork-top"></div>
      </div>
    </section>
  );
};
