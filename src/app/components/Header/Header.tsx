"use client";
import React from "react";
import Image from "next/image";
import { NavDesktop } from "./BurgerMenu/NavDesktop";
import { NavMobile } from "./BurgerMenu/Nav-mobile";
import logo from "../../../images/header/Logo.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="container relative mt-[20px] flex justify-between xl:mt-[80px] xl:max-w-[1440px]">
        <Link href={'/'}>
        <Image
          priority
          src={logo}
          height={60}
          width={60}
          alt="sister street logo"
        />
        </Link>
        <div className="flex items-center justify-between gap-[32px]">
          <NavDesktop />
          <NavMobile />

          <Link href="/donations" className="hidden h-[50px] w-[140px] rounded-[30px] bg-gradient-to-tr from-[#FF6700] via-[#FF3186] to-[#49CEAE] text-[16px] text-black hover:bg-gradient-to-tr hover:from-[#FF6700] hover:to-[#49CEAE] hover:ease-in-out xl:flex xl:justify-center xl:items-center">
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
};
