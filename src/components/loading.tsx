"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-10 h-10 rounded-full bg-blue-500"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}  // Bounce effect
        transition={{
          repeat: Infinity,  // Repeat infinitely
          repeatType: "loop",  // Loop the animation
          duration: 0.6,  // Duration of one cycle (up and down)
          ease: "easeInOut",  // Ease for smoother animation
        }}
      />
    </div>
  );
};

export default Loading;
