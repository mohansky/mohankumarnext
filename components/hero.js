/** HERO COMPONENT **/
import Image from "next/image";
import Link from "next/link"; 
import HeroData from "../data/sitedata.json";
import { motion } from "framer-motion";

export default function Hero() {
  const hero = HeroData.siteMetadata[7];
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "tween", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
      delay: 3,
    },
  };

  return (
    <>
    <motion.div className="hero-img-container"
      initial={{opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 3,
        ease: "easeIn", 
      }}
      > 
      <Image
        className="hero-img"
        layout="fill"
        objectFit="cover"
        src="/images/dots.svg"
        alt={hero.hero.imgalt}
      />
      </motion.div>
      <motion.div 
        initial={{opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
          ease: "easeIn", 
        }}
       id="hero" className="overlay">
       </motion.div>
      <div className="hero-text">
        <motion.h2
          className="fw-bold mb-5"
          drag
          dragConstraints={{
            top: -5,
            left: -5,
            right: 5,
            bottom: 5,
          }}
          initial={{ y: -500, scale: 0.5 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {hero.hero.herotext}
        </motion.h2>

        <motion.div
          animate={{ y: ["5%", "-5%"] }}
          transition={bounceTransition}
        >
          <Link href="/#services">
            <a className="mt-5">
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 200 200"
                initial="hidden"
                animate="visible"
              >
                <motion.g transform="matrix(0.707107,0.707107,-0.707107,0.707107,158.69,14.0865)">
                  <motion.path
                    d="M41,37L41,124"
                    stroke="#fff"
                    strokeWidth="0.8rem"
                    strokeLinecap="round"
                    variants={draw}
                    custom={1}
                  />
                </motion.g>
                <motion.g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-16.6726,72.0693)">
                  <motion.path
                    d="M41,37L41,124"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="0.8rem"
                    variants={draw}
                    custom={1}
                  />
                </motion.g>
              </motion.svg>
            </a>
          </Link>
        </motion.div> 
      </div>
    </>
  );
}
