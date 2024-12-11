"use client";

import { motion } from "framer-motion";
import React from "react";

const ImageCircle = () => {
  return (
    <motion.svg
      className="absolute w-3/4 lg:w-96 aspect-square"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
        strokeWidth={4}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate: [120, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.circle>
    </motion.svg>
  );
};

export default ImageCircle;
