"use client";
import Image from "next/image";
import React, { useState } from "react";
import plus from "../../../images/donations/Plus.svg";
import minus from "../../../images/donations/Minus.svg";
import credit from "../../../images/donations/Credit.svg";
import paypal from "../../../images/donations/PayPal.svg";
import google from "../../../images/donations/GooglePay.svg";
import apple from "../../../images/donations/ApplePay.svg";

export const DonatSection = () => {
  const [donation, setDonation] = useState(0);

  const increase = () => {
    setDonation(donation + 1);
  };

  const decrease = () => {
    setDonation(donation - 1);
  };

  return (
    <section className="clip-path-donations mt-[50px] bg-[#FF3186] pt-[152px] pb-[172px]">
      <div className="container flex flex-col overflow-hidden xl:px-[324px]">
        
        <h2 className="text-center text-[50px] font-bold text-[#FFF9F5] xl:text-[70px]">
          Donate!
        </h2>
        <p className="text-center text-[20px] text-white md:text-[24px] xl:w-[792px] xl:mx-auto">
          Help us build the Sister Street App and enhance the urban experience
          and safety of women.
        </p>

        <div className="mt-[40px] flex justify-center gap-[16px]">
          <button className="btn-blue">One Time</button>
          <button className="btn-blue border-[2px] border-solid border-[#262595] bg-transparent text-[#262595]">
            Montly
          </button>
        </div>
        <p className="mt-[40px] text-center text-[20px] font-bold text-[#FFF9F5] md:text-[26px]">
          Choose your amount
        </p>
        <div className="mt-[40px] flex gap-[16px] justify-center">
          <button className="btn-blue px-[16px] md:w-full">5 €</button>
          <button className="btn-blue px-[16px] md:w-full">10 €</button>
          <button className="btn-blue px-[16px] md:w-full">20 €</button>
          <button className="btn-blue px-[16px] md:w-full">50 €</button>
        </div>
        <p className="mt-[40px] text-center text-[20px] font-bold text-[#FFF9F5] md:text-[26px]">
          or Custom
        </p>
        <div className="flex justify-center gap-[24px] mt-[20px]">
          <button
            onClick={increase}
            className="flex items-center justify-center hover:scale-[110%]"
          >
            <Image
              className=""
              priority
              src={plus}
              height={40}
              width={40}
              alt="Plus"
            />
          </button>
          <button className="btn-blue w-[100px] px-[20px]">{donation} €</button>
          <button
            onClick={decrease}
            className="flex items-center justify-center hover:scale-[110%]"
          >
            <Image
              className=""
              priority
              src={minus}
              height={40}
              width={40}
              alt="Minus"
            />
          </button>
        </div>

        <div className="flex justify-between mt-[40px] md:justify-evenly">  
            <Image
              className=""
              priority
              src={credit}
              height={36}
              width={66}
              alt="credit"
            />
              <Image
              className=""
              priority
              src={paypal}
              height={36}
              width={66}
              alt="paypal"
            />
              <Image
              className=""
              priority
              src={google}
              height={36}
              width={66}
              alt="google"
            />
              <Image
              className=""
              priority
              src={apple}
              height={36}
              width={66}
              alt="apple"
            />
        </div>

        <button className="btn-blue mt-[40px] md:w-[385px] md:mx-auto">DONATE</button>
      </div>
    </section>
  );
};
