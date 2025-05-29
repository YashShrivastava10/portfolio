"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Stairs } from "./Stairs";

export const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          className="fixed top-0 right-0 left-0 flex h-screen w-screen"
          initial={{ zIndex: 20 }}
          animate={{ zIndex: 0 }}
        >
          <Stairs />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
