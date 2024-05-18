"use client";
import React from "react";
import Image from "next/image";
import { NavDesktop } from "./BurgerMenu/NavDesktop";
import { NavMobile } from "./BurgerMenu/Nav-mobile";
import logo from "../../../images/header/Logo.svg";

export const Header = () => {
  return (
    <header>
      <div className="container relative w-auto mt-[20px] flex justify-between xl:mt-[80px] xl:max-w-[1440px]">
        <Image
          priority
          src={logo}
          height={60}
          width={60}
          alt="sister street logo"
        />
        <div className="flex items-center justify-between gap-[32px]">
          <NavDesktop />
          <NavMobile />

          <button className="hidden h-[50px] w-[140px] rounded-[30px] bg-gradient-to-tr from-[#FF6700] via-[#FF3186] to-[#49CEAE] hover:bg-gradient-to-tr hover:from-[#FF6700] hover:to-[#49CEAE] text-[16px] text-black xl:block hover:ease-in-out">
            Donate
          </button>
        </div>
      </div>
    </header>
  );
};
