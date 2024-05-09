"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import insta from '../../../images/hero/Insta.svg';
import facebook from '../../../images/hero/Facebook.svg';
import linkedIn from '../../../images/hero/linkedIn.svg';
import phone1 from '../../../images/hero/Phone1.webp';
import phone2 from '../../../images/hero/Phone2.webp';


const Hero = () => {

  return (
    <section 
    className="bg-no-repeat relative bg-hero-pattern sm:bg-[left_-2px_top_240px] bg-[length:390px_429px] md:bg-[length:977px_650px] md:bg-[right_-270px_top_175px] xl:bg-[right_-96px_top_100px] xl:bg-[length:_977px]"
  >
        <div className="mx-auto xl:w-[1440px] xl:mt-[244px] mt-[50px] sm:px-[16px] md:px-[32px] md:flex flex-col xl:px-[120px]">
        <h1 className='xl:leading-[120%] xl:text-[70px] xl:w-[451px] sm:w-[322px] text-stone-50 sm:text-[50px] text-[46px] font-bold sm:text-start text-center'>Welcome To Sister Street App</h1>
     
            <Image
            className='sm:top-[255px] max-w-none max-h-none h-[300px] absolute md:right-[180px] md:w-[274px] md:h-[500px] md:top-[89px] z-10 xl:right-[446px]'
            priority
            src={phone1}
            height={303}
            width={170}
            alt="Facebook"
            />
            <Image
            className='sm:top-[283px] sm:left-[196px] z-10 max-w-none max-h-none h-[320px] absolute md:top-[259px] md:w-[274px] md:h-[500px] md:left-[670px] xl:left-[1049px]'
            priority
            src={phone2}
            height={20}
            width={170}
            alt="Facebook"
            />
  
            

            <p className='xl:w-[476px] md:w-[377px] mt-[440px] md:mt-[24px] text-stone-50 md:text-[24px] text-[20px] font-normal text-start z-10'>Sister Street is a women-only app  that provides a secure walking experience, particularly at night. Users connect with a supportive community through text, call or walking together.</p>

            <button className='rounded-[30px] mt-[56px] py-[12px] bg-pink-500 w-full text-neutral-900 text-[22px] font-extrabold z-10 md:w-[284px]'>JOIN US</button>
            <div className='flex justify-between mt-[56px] px-[37px] md:w-[284px] md:px-[1px]'>
            <Image
            priority
            src={facebook}
            height={48}
            width={48}
            alt="Facebook"
            />
               <Image
            priority
            src={insta}
            height={48}
            width={48}
            alt="Insta"
            />
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
  )
}

export default Hero