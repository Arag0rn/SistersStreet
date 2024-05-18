"use client"
// import { useClickAway } from "react-use";
import { useLayoutEffect, useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "./routes";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden'; 
    } else {
      body.style.overflow = 'auto'; 
    }

  
    return () => {
      body.style.overflow = 'auto'; 
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
        <div className="absolute z-50 right-[15px] top-[5px]"> 
       <Hamburger size={60} color="white" easing="ease-in" toggled={isOpen} toggle={setOpen} />
       </div>
       <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ x: "100%", opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{
          type: "tween",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
        exit={{ opacity: 0 }}
        className="fixed h-full left-0 right-0 top-0 z-40 p-5 pt-0 mt-[10px] bg-neutral-900">
          <ul className="grid mt-[65px] gap-[11px]">
            {routes.map((route) => {

              return (
                <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                key={route.title}
                className="w-full p-[0.08rem]"
              >
              <a onClick={() => setOpen((prev) => !prev)}
                    className={
                        "flex items-center text-white text-[18px] font-bold justify-between w-full p-5"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </a>
                </motion.li>
              );
            })}
          </ul>
          <button className="px-[10px] py-[8px] rounded-[30px] w-[117px] text-black text-[16px] bg-gradient-to-tr from-[#FF6700] via-[#FF3186] to-[#49CEAE]">Donate</button>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};