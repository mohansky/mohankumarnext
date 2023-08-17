"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { Icon } from "@iconify/react";

export default function Toggle() {
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
      <div className="flex items-center justify-center my-5 lg:my-0">
        <Switch
          checked={theme} 
          onChange={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className={`${theme === "light" ? "bg-blue-500" : "bg-amber-500"}
          relative inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  
          focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Dark mode switch</span>
          <span
            aria-hidden="true"
            className={`${theme === "light" ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          >
            {theme === "light" ? (
              <Icon icon="line-md:moon-loop" className="w-6 h-6 text-black" />
            ) : (
              <Icon
                icon="line-md:sun-rising-loop"
                className="w-6 h-6 text-black "
              />
            )}
          </span>
        </Switch>
      </div>
    </>
  );
}
