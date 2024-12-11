"use client";

import React from "react";
import { motion } from "framer-motion";

const CommonHeaderContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-3xl font-bold text-center"
    >
      {children}
    </motion.h2>
  );
};

export default CommonHeaderContainer;
