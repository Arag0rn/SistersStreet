"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(true);
    console.log(isLargeScreen);

    useEffect(() => {
        const handleWindowResize = () => {
            if (typeof window !== 'undefined' && window.innerWidth >= 841) {
                setIsLargeScreen(true);
            } else {
                setIsLargeScreen(false);
            }
        };
    
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


  return (
    <section>
        <div className="mx-auto xl:mt-[244px] mt-[50px] sm:px-[16px] md:grid md:px-[32px] xl:px-[120px]">
        <h1 className='sm:w-[322px] text-stone-50 sm:text-[50px] text-[46px] font-bold sm:text-start text-center'>Welcome To Sister Street App</h1>
            <div className='flex relative mt-[40px] md:absolute'>
            {isLargeScreen ? (
          <Image
            className='absolute md:mt-[0px] max-w-none max-h-none left-1/2 transform -translate-x-1/2  md:w-[977px] md:h-[650px] md:left-[85px] md:top-[120px] top-[40px] md:-translate-x-0 z-1'
           priority
           src="/hero/Polygon2.svg"
           height={430}
           width={430}
           alt="Polygon"
           /> 
          ) : (
            <Image
            className='absolute max-w-none max-h-none left-1/2 transform -translate-x-1/2 top-[40px] z-1'
           priority
           src="/hero/Polygon.svg"
           height={430}
           width={430}
           alt="Polygon"
           /> 
          )}
     
            <Image
            className='sm:mt-[52px]  max-w-none max-h-none h-[300px] md:absolute md:left-[345px] md:w-[274px] md:h-[500px] md:top-[-76px] z-10'
            priority
            src="/hero/Phone1.webp"
            height={303}
            width={170}
            alt="Facebook"
            />
            <Image
            className='sm:mt-[68px] ml-[25px] z-10 max-w-none max-h-none h-[330px] md:absolute md:top-[60px] md:w-[274px] md:h-[500px] md:left-[545px] '
            priority
            src="/hero/Phone2.webp"
            height={20}
            width={170}
            alt="Facebook"
            />
            </div>
            

            <p className='md:w-[377px] mt-[40px] md:mt-[24px] text-stone-50 md:text-[24px] text-[20px] font-normal text-start z-10'>Sister Street is a women-only app  that provides a secure walking experience, particularly at night. Users connect with a supportive community through text, call or walking together.</p>

            <button className='rounded-[30px] mt-[56px] py-[12px] bg-pink-500 w-full text-neutral-900 text-[22px] font-extrabold z-10'>JOIN US</button>
            <div className='flex justify-between mt-[56px] px-[37px]'>
            <Image
            priority
            src="/hero/Facebook.svg"
            height={48}
            width={48}
            alt="Facebook"
            />
               <Image
            priority
            src="/hero/Insta.svg"
            height={48}
            width={48}
            alt="Insta"
            />
               <Image
            priority
            src="/hero/linkedIn.svg"
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