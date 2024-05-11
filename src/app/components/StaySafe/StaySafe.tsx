import Image from 'next/image';
import woman from '../../../images/staysafe/Woman.svg';

export const StaySafe = () => {
  return (
    <section className="pt-[120px] bg-staysafe-pattern bg-no-repeat sm:bg-[left_-100px_top_340px] bg-[length:726px_500px]">
        <div className="mx-auto xl:w-[1440px] sm:px-[16px] md:px-[32px] flex flex-col items-center xl:px-[120px] md:items-end">
            <h2 className="w-[340px] text-stone-50 text-[34px] font-bold leading-[122%]">Stay safe with Sister street</h2>
            <Image
            className='mt-[26px] md:absolute md:left-[32px] md:mt-0'
            priority
            src={woman}
            height={467}
            width={176}
            alt="Woman"
            />

            <div className="mt-[96px] md:w-[529px]">
                <p className="text-stone-50 text-[20px] font-normal">Sister Street is dedicated to empowering women and helping them achieve equal status as citizens. </p>
                <p className="mt-[40px] text-stone-50 text-[20px] font-normal">Drawing inspiration from personal experiences, our mission is to ensure women feel secure when navigating and sharing urban spaces, while also preventing gender-based violence. We strive to create inclusive and safe cities for everyone.</p>
            </div>

            <button className="btn-main mt-[40px] w-full md:order-4">ABOUT US</button>
        </div>
    </section>
  )
}
