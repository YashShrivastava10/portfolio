"use client";

import { motion } from "framer-motion";
import React from "react";

const RenderSkills = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-3 text-center transition-all duration-300 border-2 rounded-lg lg:px-8 lg:py-4 border-secondary text-accent"
        >
          <span className="font-medium">{skill}</span>
        </motion.div>
      ))}
    </>
  );
};

export default RenderSkills;
