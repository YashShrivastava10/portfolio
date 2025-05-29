import { ProjectCard } from "@/components/Projects/ProjectCard";
import { featuredProjects, moreProjects } from "@/constants/projects";
import { Layers, Star } from "lucide-react";

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
        label="Featured Projects"
        icon={<Star className="fill-yellow-500 text-yellow-500" />}
        data={featuredProjects}
      />
      <ProjectCard
        label="More Projects"
        icon={<Layers className="text-blue-500" />}
        data={moreProjects}
      />
    </div>
  );
};

export default ProjectsPage;
