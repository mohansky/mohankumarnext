"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import MenuItems from "../data/menu.json";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="sticky top-0 bg-mkblue border-b-4 border-mkorange z-50 shadow-md">
        <div className="justify-between h-14 lg:px-20 lg:items-center lg:flex ">
          <div>
            <div className="flex items-center justify-between my-auto py-1 px-4  lg:block">
              <Link
                href="/"
                aria-label="Home Page"
                className="block lg:hidden font-bold text-white"
              >
                m<span className="my-auto font-bold">K</span>
              </Link>
              <Link
                href="/"
                aria-label="Home Page"
                className="hidden lg:block font-bold text-2xl text-white"
              >
                mohan<span className="fw-bold">KUMAR</span>
              </Link>
              <div className="lg:hidden">
                <button
                  className="text-white w-10 h-10  rounded-md outline-none focus:border-none focus:border border-none ease-in-out duration-500"
                  onClick={() => setNavbar(!navbar)}
                  aria-label="Menu Icon"
                >
                  {navbar ? (
                    <Icon icon="ph:x" width="40" />
                  ) : (
                    <Icon icon="ph:list" width="40" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "lg:p-0 block" : "hidden"
              }`}
            >
              <ul className=" bg-mkblue h-screen lg:h-full items-center justify-center lg:flex">
                {MenuItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-white text-xl text-center font-normal py-6 lg:py-2 px-3 
                    border-b-2 lg:border-b-0 border-mkorange hover:bg-slate-500 active:text-mkorange
                    hover:text-white hover:text-opacity-60 lg:hover:text-slate-500 lg:hover:bg-transparent ease-in-out duration-300"
                  >
                    <Link href={item.url} onClick={() => setNavbar(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
                 <ThemeToggle/>
              </ul>
             
            </div> 
          </div>
         
        </div>
      </nav>
    </>
  );
}
