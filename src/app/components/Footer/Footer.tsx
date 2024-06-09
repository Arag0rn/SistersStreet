import React from "react";
import Image from "next/image";
import logo from "../../../images/header/Logo.svg";

export const Footer = () => {
  return (
    <section className="hidden w-full pb-[8px] xl:block">
      <div className="h-[180px]"></div>
      <div className="container flex justify-between">
        <div className=" w-[320px] pl-[120px]">
          <Image
            priority
            src={logo}
            height={60}
            width={60}
            alt="sister street logo"
          />
        </div>
        <ul className="flex gap-[32px] pr-[120px] pt-[16px]">
          <li className="flex w-[180px] flex-col">
            <h3 className="text-[14px] font-bold leading-[21px]  text-[#FFF9F5] ">
              COMPANY
            </h3>
            <a
              className="mt-[16px] text-[14px] leading-[21px] text-[#FFF9F5]"
              href="#"
            >
              How it works
            </a>
            <a className="text-[14px] leading-[21px] text-[#FFF9F5]" href="#">
              Pricing
            </a>
            <a className="text-[14px] leading-[21px] text-[#FFF9F5]" href="#">
              Demo
            </a>
          </li>
          <li className="flex flex-col ">
            <h3 className="text-[14px] font-bold leading-[21px] text-[#FFF9F5] ">
              RESOURCES
            </h3>
            <a
              className="mt-[16px] text-[14px] leading-[21px] text-[#FFF9F5]"
              href="#"
            >
              Blog post name goes here
            </a>
            <a className="text-[14px] leading-[21px] text-[#FFF9F5]" href="#">
              Blog post name goes here
            </a>
            <a className="text-[14px] leading-[21px] text-[#FFF9F5]" href="#">
              Blog post name goes here
            </a>
            <a className="text-[14px] leading-[21px] text-[#FFF9F5]" href="#">
              See all resources
            </a>
          </li>
          <li className="flex flex-col ">
            <h3 className="text-[14px] font-bold leading-[21px] text-[#FFF9F5] ">
              ABOUT
            </h3>
            <a
              className="mt-[16px] text-[14px] leading-[21px] text-[#FFF9F5]"
              href=""
            >
              Terms & Conditions
            </a>
            <a className="text-[14px] leading-[21px] text-[#FFF9F5]" href="">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto mt-[40px] w-[400px] py-[16px] text-[14px] leading-[21px] text-[#FFF9F5]">
        Copyright © 2022 Company name
      </div>
    </section>
  );
};
