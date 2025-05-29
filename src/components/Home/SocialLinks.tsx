"use client";

import { socialLinks } from "@/constants/socialLinks";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui";

export const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4 md:justify-start">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                aria-label={link.label}
                className="hover:text-primary"
              >
                <Icon className="size-5" />
              </Button>
            </Link>
          </motion.span>
        );
      })}
    </div>
  );
};
