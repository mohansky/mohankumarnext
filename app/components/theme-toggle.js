"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "./button";
import Toggle from "./toggle";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <select
        className="bg-mkblue text-gray-100 focus:outline-none outline-none block w-full mt-0 px-0.5 border-0 focus:ring-0 focus:border-0"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">
            Dark 
        </option>
        <option value="light"> 
           Light      
        </option>
      </select> */}
      <Toggle/>

      {/* <button
        className="px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
        onClick={() => {setTheme(theme === "light" ? "dark" : "light"); }} >
        Change Theme
      </button> */}
    </>
  );
};
