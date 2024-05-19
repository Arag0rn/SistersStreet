import React from 'react'
import Image from "next/image";
import woman from "../../../images/HowWork/Woman.svg";
import woman2 from "../../../images/HowWork/Woman2(1).svg";
import woman2_1 from "../../../images/HowWork/Woman2(2).svg";
import woman3_1 from "../../../images/HowWork/Woman3(1).svg";
import woman3_2 from "../../../images/HowWork/Woman3(2).svg";
import woman3_3 from "../../../images/HowWork/Woman3(3).svg";

export const HowWork = () =>{
  return (
    <section>
         <div className='container relative md:flex-col xl:w-auto overflow:visible pt-[1px] pb-[140px]'>
            <div className='absolute inset-0 bg-[#49CEAE] clip-path-howitwork-top h-[108px] -mx-[calc(50vw-50%)] z-0 top-[110px] '></div>
            <h2 className='text-white mt-[266px] text-[34px] font-bold w-[300px] text-center mx-auto'>How Does Sister Street Work?</h2>
            <div className='relative h-[307px] mt-[112px]'>  
            <Image
          className="absolute z-10 right-0 top-[-60px]"
          priority
          src={woman}
          height={350}
          width={120}
          alt="Woman"
        />
                <p className='absolute z-10 text-[150px] font-bold '>1</p>
                <div className="absolute inset-0 h-[307px] bg-[#FF3186] clip-path-howitwork1 -mx-[calc(50vw-50%)] z-0">
                </div>

            </div>

            <p className='text-white text-[20px] mt-[40px]'>Safeguarding the safety of the community is our top priority. Please complete a simple ID verification process to proceed.</p>
           

            <div className='relative h-[307px] mt-[105px]'>
            <Image
          className="absolute z-10 left-1/2 transform -translate-x-1/2 top-[-60px]"
          priority
          src={woman2}
          height={350}
          width={126}
          alt="Woman"
        />
                <Image
          className="absolute z-10 left-0 "
          priority
          src={woman2_1}
          height={350}
          width={109}
          alt="Woman"
        />
                <p className='absolute z-10 text-[150px] right-0 font-bold '>2</p>
                <div className="absolute scale-x-[-1] inset-0 h-[307px] bg-[#FF6700] clip-path-howitwork1 -mx-[calc(50vw-50%)] z-0">
                </div>
                </div>
            <p className='text-white text-[20px] mt-[70px]'>After confirming your ID, you can access all Sister Street features and explore our community space.</p>

            <div className='relative h-[307px] mt-[174px]'>
            <Image
          className="absolute z-10 left-[90px] top-[-143px]"
          priority
          src={woman3_1}
          height={250}
          width={77}
          alt="Woman"
        />
                   <Image
          className="absolute z-10 right-[74px] top-[-103px]"
          priority
          src={woman3_2}
          height={300}
          width={98}
          alt="Woman"
        />
                   <Image
          className="absolute z-10 right-0 top-[-90px] -mx-[calc(50vw-50%)]"
          priority
          src={woman3_3}
          height={350}
          width={132}
          alt="Woman"
        />
                <p className='absolute z-10 text-[150px] font-bold '>3</p>
            <div className="absolute inset-0 h-[307px] bg-[#49CEAE] clip-path-howitwork1 -mx-[calc(50vw-50%)] z-0">
                </div>
                </div>
            <p className='text-white text-[20px] mt-[40px]'>By pressing a button, you can connect with other Sisters to talk on the phone, text, or walk together.</p>

            <div className="absolute scale-x-[-1] inset-x-0 bottom-0 bg-[#FF3186] clip-path-howitwork-top h-[108px] -mx-[calc(50vw-50%)] z-0"></div>

        </div >
    </section>
  )
}
