"use client"
import React from 'react';

import Image from 'next/image';
import { NavDesktop } from './BurgerMenu/NavDesktop';
import { NavMobile } from './BurgerMenu/Nav-mobile';

export const Header = () => { 
  return (
    <header>
        <div className="mx-auto mt-[80px] flex justify-between sm:px-[6px] md:px-[32px] xl:px-[120px]">
            <Image
            priority
            src="/images/Logo.svg"
            height={60}
            width={60}
            alt="sister street logo"
            />
            <div className="flex justify-between items-center gap-[32px]">
                <NavDesktop/>
                <NavMobile/>

                <button className="hidden xl:block rounded-[30px] w-[140px] h-[50px] text-black text-[16px] bg-gradient-to-tr from-[#FF6700] via-[#FF3186] to-[#49CEAE]">Donate</button>
            </div>
        </div>
    </header>
  )
}
