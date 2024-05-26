import React from 'react'
import Image from 'next/image';
import romb from '../../../images/ourteam/Romb1.svg'
import romb2 from '../../../images/ourteam/Romb2.svg'
import { StaticImageData } from 'next/image';

interface BoxProps {
    head: string;
    position: string;
    text: string;
    index: number;
    image: StaticImageData;
}

export const Box: React.FC<BoxProps>  = ({head, position, text, image, index}) => {
  return (
    <li className={`flex flex-col
    items-center xl:flex-col ${index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} ${index === 1 ? 'md:self-end' : 'md:flex-start'}`}>
        <div className='relative w-[285px] h-[336px] md:w-[180px] md:h-[207px] xl:w-[370px]
xl:h-[438px]'>
            <Image
        className="absolute w-full h-full"
        priority
        src={romb}
        height={285}
        width={336}
        alt="romb"
        />
            <Image
        className="absolute top-[107px] w-auto md:top-8 md:w-[180px] md:h-[207px] xl:w-full xl:h-[285px] xl:top-[149px]"
        priority
        src={romb2}
        height={290}
        width={336}
        alt="romb2"
        />
              <Image
        className={`absolute left-1/2 transform -translate-x-1/2 top-[72px] w-auto md:w-[139px] md:h-[170px] md:top-[35px] xl:w-[249px] xl:h-[300px] xl:top-[135px] ${index === 2 ? 'xl:w-[300px]' : 'xl:flex-row'} `}
        priority
        src={image}
        height={290}
        width={220}
        alt="member"
        />
        </div>
        <div className='mt-[16px] md:ml-[16px] md:w-[380px] md:m-0'>
            <h3 className='text-white text-[20px] font-bold'>{head}</h3>
            <span className='text-white text-[16px]'>{position}</span>
            <p className='text-white text-[20px] text-center mt-[16px] md:text-start'>{text}</p>
        </div>
        
    </li>
  )
}
