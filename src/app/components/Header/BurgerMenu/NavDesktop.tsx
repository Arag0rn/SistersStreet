"use client"
import { routes } from "./routes";
import { v4 as uuidv4 } from 'uuid';

export const NavDesktop = () => {
  return (
    <ul className="hidden xl:flex gap-[32px]">
      {routes.map((route) => {
        const { href, title } = route;
        return (
          <li key={uuidv4()}>
            <a
              href={href}
              className="flex items-center gap-1 text-white text-[17px] font-bold hover:text-neutral-400 transition-all"
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};