import React from "react";
import { Box } from "./Box";
import member1 from "../../../images/ourteam/foti.png";
import member2 from "../../../images/ourteam/sarah.png";
import member3 from "../../../images/ourteam/liza.webp";
import { StaticImageData } from "next/image";

interface ourTeamBox {
  head: string;
  position: string;
  text: string;
  image: StaticImageData;
}

const ourTeamBox: { [key: string]: ourTeamBox } = {
  "1box": {
    head: "Fotini Chora",
    position: "Founder, CEO",
    text: "My goal is create impactful products addressing societal needs, prioritising social responsibility, particularly benefiting women.",
    image: member1,
  },
  "2box": {
    head: "Sarah Psalti",
    position: "Founder, COO",
    text: "Deeply creative, digital marketing background. Passionate about mental health promotion, active citizenship, and advocacy.",
    image: member2,
  },
  "3box": {
    head: "Lisa Reichet",
    position: "Product Designer",
    text: "My goal is to make technology more intuitive and user-friendly, addressing real needs and creating a safer world through design.",
    image: member3,
  },
};

export const OurTeam = () => {
  return (
    <section className="pt-[110px]">
      <div className="container flex-col">
        <h2 className="text-center text-[34px] font-bold text-white xl:text-[70px]">
          Our Team
        </h2>
        <ul className="mt-[16px] flex flex-col items-center gap-[30px] px-[15px] md:items-start xl:mt-[48px] xl:flex-row xl:justify-center">
          {Object.keys(ourTeamBox).map((key, index) => {
            const box = ourTeamBox[key];
            return (
              <Box
                index={index}
                key={key}
                head={box.head}
                position={box.position}
                text={box.text}
                image={box.image}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
