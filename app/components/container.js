"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Container({ className, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div ref={ref}>
        <div
          className={`w-full md:w-3/4 mx-auto my-20 p-2 ${className}`}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
