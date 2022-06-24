import { motion, useViewportScroll, useSpring } from "framer-motion";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

export default function Progresscircle() {
  const { scrollYProgress } = useViewportScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <motion.div className="progress-circle">
      <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke="#e67748"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            opacity: pathLength,
            scaleX: -1,
          }}
        />
      </svg>
      <motion.div
        style={{
          position: "-webkit-sticky",
          position: "fixed",
          opacity: pathLength,
        }}
      >
        <button onClick={handleClick} className="topbtn">
          <Icon className="topicon" icon="ep:arrow-up-bold" color="#2A485C" />
        </button>
      </motion.div>
    </motion.div>
  );
}
