import Image from "next/image";
import woman from "../../../images/staysafe/woman.svg";

export const StaySafe = () => {
  return (
    <section className="bg-staysafe-pattern bg-[length:726px_500px] bg-no-repeat pt-[120px] sm:bg-[left_-100px_top_340px] md:bg-[length:1350px] md:bg-[left_-160px_top_160px] md:pb-[50px]">
      <div className="container flex flex-col items-center md:items-end xl:items-end">
        <h2 className="w-[340px] text-[34px] font-bold leading-[122%] text-stone-50 md:mr-[19px] md:w-[510px] md:text-[50px] xl:mr-0 xl:w-[590px] xl:text-[70px]">
          Stay Safe With Sister Street
        </h2>
        <Image
          className="mt-[26px] md:absolute md:left-[32px] md:mt-0 md:w-[201px] xl:left-[200px]"
          priority
          src={woman}
          height={467}
          width={176}
          alt="Woman"
        />

        <div className="mt-[96px] md:mt-[24px] md:w-[529px] xl:w-[590px]">
          <p className="text-[20px] font-normal text-stone-50 md:text-[24px]">
            Sister Street is dedicated to empowering women and helping them
            achieve equal status as citizens.{" "}
          </p>
          <p className="mt-[40px] text-[20px] font-normal text-stone-50 md:text-[24px]">
            Drawing inspiration from personal experiences, our mission is to
            ensure women feel secure when navigating and sharing urban spaces,
            while also preventing gender-based violence. We strive to create
            inclusive and safe cities for everyone.
          </p>
        </div>

        <button className="btn-main mt-[40px] w-full md:order-4 md:mr-[245px] md:w-[284px] xl:mr-[306px]">
          ABOUT US
        </button>
      </div>
    </section>
  );
};
