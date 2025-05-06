"use client";

import { motion } from "framer-motion";

const RenderSkills = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill, idx) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ color: "var(--accent)" }}
          transition={{ duration: 0.2, delay: idx * 0.03 }}
          className="px-3 py-1.5 text-sm bg-secondary/40 rounded text-textColor transition-colors duration-300"
        >
          {skill}
        </motion.span>
      ))}
    </>
  );
};

export default RenderSkills;
