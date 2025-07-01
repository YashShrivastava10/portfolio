import { Timeline } from "@/components/Experience/Timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience | Yash Shrivastava, Web Developer",
  description:
    "Review Yash Shrivastava's professional work history as a full-stack/software developer/web developer, detailing roles, responsibilities, and key accomplishments in previous projects.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE}/experience`,
  },
};

const ExperiencePage = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-12 sm:mt-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold sm:text-5xl">
          My <span className="text-primary">Experience</span>
        </h1>
        <p className="text-muted-foreground mx-auto text-center text-lg leading-relaxed">
          My educational background and professional journey in software
          development
        </p>
      </div>
      <Timeline />
    </div>
  );
};

export default ExperiencePage;
