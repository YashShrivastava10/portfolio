import { socialLinks } from "@/constants/socialLinkData";
import Link from "next/link";
import React from "react";

const Social = () => (
  <div className="flex gap-6">
    {socialLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-2 duration-500 border rounded-full w-9 h-9 border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all"
        aria-label={link.label}
      >
        <span className="">{link.icon}</span>
      </Link>
    ))}
  </div>
);

export default Social;
