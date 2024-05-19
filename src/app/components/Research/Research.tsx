import React from 'react'

interface ResearchBox {
    head: string;
    text: string;
    color: string;
}

const researchBox: { [key: string]: ResearchBox } = {
    "1box": {
       head: "70%",
       text: "of women report attempting to engage in phone conversations as a safety measure to feel secure during their nightime walks.",
       color: "FF3186",
   },
   "2box": {
       head: "Only 1.7%",
       text: "of women feel safe walking alone at night.",
       color: "FF6700",
   },
   "3box": {
       head: "78%",
       text: "of women want active participation in a supportive community to improve their nighttime safety.",
       color: "49CEAE",
   }
}

export const Research = () => {
  return (
    <section className='mt-[110px]'>
         <div className='container md:flex-col xl:w-auto'>
        <h2 className="w-[250px] text-[46px] font-bold leading-[120%] text-stone-50 md:text-[50px] md:text-center md:w-auto md:mr-[19px] xl:w-auto xl:text-[70px] xl:mr-0">Research</h2>
        <ul className="flex flex-col gap-[20px] mt-[40px] md:flex-row md:justify-stretch">
  {Object.keys(researchBox).map((key) => {
    const box = researchBox[key];
    return (
      <li
        key={key}
        className="rounded-[30px] border-2 p-[20px] backdrop-blur-[2px] flex-1 basis-0 h-full"
        style={{ borderColor: `#${box.color}` }}
      >
        <h1 className='text-[34px] font-bold md:text-[50px] xl:text-[60px]' style={{ color: `#${box.color}` }}>{box.head}</h1>
        <p className='text-[16px] md:text-[18px] xl:text-[24px]' style={{ color: `#${box.color}` }}>{box.text}</p>
      </li>
    );
  })}
</ul>

        <p className='mt-[40px] text-white text-[20px] md:w-[506px] md:text-center md:mx-auto md:mt-[48px]'>Help us build an app that promotes safety and freedom. Take our survey and tell us what you need to feel safe on the road or during your nighttime walks.</p>
        <button className='btn-main mt-[40px] bg-[#49CEAE] p-[10px_24px] mx-auto block md:mt-[48px]'>Fill out our survey</button>
        </div>
    </section>
  )
}
