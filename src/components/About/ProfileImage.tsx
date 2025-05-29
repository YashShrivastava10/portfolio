"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative size-70 lg:size-96"
        >
          <Image
            src="/profile-1.png"
            alt="Yash"
            fill
            className="rounded-3xl object-cover shadow-2xl"
            priority
          />
          <div className="from-primary/10 absolute inset-0 rounded-3xl bg-gradient-to-tr to-transparent" />
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [0, 180, 360] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="bg-primary/20 absolute -top-6 -right-6 h-12 w-12 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [8, -8, 8], rotate: [360, 180, 0] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="bg-primary/10 absolute -bottom-6 -left-6 h-16 w-16 rounded-full blur-sm"
        />
      </div>
    </motion.div>
  );
};
