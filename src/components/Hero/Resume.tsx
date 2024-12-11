import React from "react";
import { Download } from "lucide-react";
import Link from "next/link";

const Resume = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="/Yash_Resume_Full_Stack.pdf"
      className="flex items-center justify-center gap-4 px-8 py-2 border-2 rounded-full cursor-pointer border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all"
    >
      <label>Resume</label>
      <Download size={20} />
    </Link>
  );
};

export default Resume;
