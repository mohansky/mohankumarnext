import React, { useEffect } from "react";
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router'

export default function Backtop() {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push('/')
      }
      useEffect(function mount() {
        function onScroll() {
          console.log("scroll!");
        }
        const showOnPx = 600;
        const backToTopButton = document.querySelector(".back-to-top")  
        const scrollContainer = () => {
            return document.documentElement || document.body;
          };
        document.addEventListener("scroll", () => {
            if (scrollContainer().scrollTop > showOnPx ) {
              backToTopButton.classList.remove("hide")
            } else {
              backToTopButton.classList.add("hide")
            }
          })   
        window.addEventListener("scroll", onScroll);
        return function unMount() {
          window.removeEventListener("scroll", onScroll);
        }; 
      });
    
return (
    <>
      <button onClick={handleClick} className="back-to-top hide">
        <Icon icon="ep:arrow-up-bold" color="#2A485C" width="40" />    
      </button>
    </>
  );
}
