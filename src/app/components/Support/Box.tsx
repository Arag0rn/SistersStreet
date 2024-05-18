import React from 'react'
import Image from "next/image";

interface BoxProps {
    head: string;
    text: string;
    button: string;
    color: string;
    image: string;
}

const Box: React.FC<BoxProps> =  ({head, text, button, color, image}) => {
  return (
    <>
     
   <li className="rounded-[20px] border-2 p-[20px] backdrop-blur-[2px] md:w-[360px]" style={{ borderColor: `#${color}` }}>
    <div className="flex items-center">
    <Image
          priority
          src={image}
          height={46}
          width={46}
          alt="icon"
        />
    <h1 className='text-white ml-[8px] text-[20px] font-bold md:text-[26px] xl:text-[30px]' style={{ color: `#${color}` }}>{head}</h1>
    </div>
    <div className="border-[1px] mt-[16px] " style={{ borderColor: `#${color}` }}></div>
    <p className="mt-[16px] text-[16px] md:text-[18px] md:w-[335px] xl:text-[24px] xl:h-[144px]" style={{ color: `#${color}` }}>{text}</p>
    <button className='mt-[16px] btn-main w-full' style={{ backgroundColor: `#${color}` }}>{button}</button>
    </li>
    </>
  )
}

export default Box