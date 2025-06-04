import { ProjectCard } from "@/components/Projects/ProjectCard";
import {
  featuredProjects,
  moreProjects,
  openSource,
} from "@/constants/projects";
import { Globe, Layers, Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack & Open Source Projects | Portfolio of Yash Shrivastava",
  description:
    "Showcase of full-stack and open source projects by Yash Shrivastava. Explore modern web apps, APIs, and community-driven tools built with React, Node.js, Tailwind, and more.",
};

const ProjectsPage = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-12 sm:mt-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold sm:text-5xl">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="text-muted-foreground mx-auto text-center text-lg leading-relaxed">
          A showcase of my recent work, featuring full-stack applications and
          innovative solutions
        </p>
      </div>
      <ProjectCard
        label="Open Source Contribution"
        icon={<Globe className="text-blue-500" />}
        data={openSource}
      />
      <ProjectCard
        label="Featured Projects"
        icon={<Star className="fill-yellow-500 text-yellow-500" />}
        data={featuredProjects}
      />
      <ProjectCard
        label="More Projects"
        icon={<Layers className="text-emerald-500" />}
        data={moreProjects}
      />
    </div>
  );
};

export default ProjectsPage;
