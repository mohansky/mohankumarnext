import { motion } from "framer-motion";

export default function Button({ className, children, onClick }) {
  return (
    <>
      <motion.button
        className={`bg-white text-mkblue font-semibold rounded-full border-2 border-mkblue  hover:bg-mkblue hover:text-white transition duration-150 ease-in-out ${className}`}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </>
  );
}
