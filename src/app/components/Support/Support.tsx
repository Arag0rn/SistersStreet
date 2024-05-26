import React from 'react'
import Box from './Box'
import team from "../../../images/support/team.svg";
import survey from "../../../images/support/survey.svg";
import social from "../../../images/support/social.svg";
import donation from "../../../images/support/donation.svg";

interface SupportBox {
    head: string;
    text: string;
    button: string;
    color: string;
    image: string; 
}

const supportBox: { [key: string]: SupportBox } = {
     "1box": {
        head: "Join our team",
        text: "Interested in joining a female-led team? Contact us today to learn about open positions",
        button: "Join Us",
        color: "FF3186",
        image: team
    },
    "2box": {
        head: "Donate",
        text: "Join Sister Street's patronage program to gain exclusive access to news and features.",
        button: "Donate",
        color: "FF6700",
        image: donation
    },
    "3box": {
        head: "Stay connected",
        text: "Don't miss out on the latest Sister Street news! Follow us on social media.",
        button: "Follow us",
        color: "FFC700",
        image: social
    },
    "4box": {
        head: "Co-create",
        text: "We encourage you to take part in our user survey. Your valuable feedback will help us serve you better.",
        button: "Survey",
        color: "49CEAE",
        image: survey
    },
}


export const Support = () => {
  return (
    <section className='mt-[100px]'>
        <div className='container md:flex-col xl:px-[324px] xl:w-auto items-center'>
        <h2 className="w-[250px] text-[34px] font-bold leading-[122%] text-stone-50 md:text-[50px] md:text-center md:w-auto md:mr-[19px] xl:w-auto xl:text-[70px] xl:mr-0">How To Support Us?</h2>
        <p className="mt-[20px] text-[20px] font-normal text-stone-50 md:text-[24px] md:text-center md:w-auto xl:w-[653px] xl:text-[24px]">Although Sister Street is still in its early days, you can still join the sister community!</p>
        <ul className="flex flex-col gap-[16px] mt-[20px] md:flex-row flex-wrap xl:justify-center">
            {Object.keys(supportBox).map((key) => {
                const box = supportBox[key];
                return <Box key={key} head={box.head} text={box.text} button={box.button} color={box.color} image={box.image} />;
            })}
        </ul>
        </div>
    </section>
  )
}
