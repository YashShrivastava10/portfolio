"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <main key={pathname}>
        <motion.div
          initial={{ z: 0, opacity: 0 }}
          animate={{
            z: 20,
            opacity: 1,
            transition: { delay: 1.5, ease: "easeInOut", duration: 0.3 },
          }}
          className="flex min-h-[calc(100vh-80px-101px)] flex-col sm:min-h-[calc(100vh-80px-65px)]"
        >
          <div className="flex flex-1 items-center">
            <div className="container mx-auto h-full px-4 py-2">{children}</div>
          </div>
        </motion.div>
      </main>
    </AnimatePresence>
  );
};
