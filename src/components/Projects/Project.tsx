import React from "react";
import { ProjectType } from "./Projects";
import { Github, Link as LinkIcon } from "lucide-react";

const Project = ({ project }: { project: ProjectType }) => (
  <>
    <div className="relative overflow-hidden group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 transition-transform duration-500 object-fit group-hover:scale-110"
      />
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-accent/20 group-hover:opacity-100" />
    </div>
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
      <p
        className="h-[3rem] mb-4 overflow-hidden whitespace-normal text-textColor/80 line-clamp-2 text-ellipsis"
        title={project.description}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-lg bg-primary text-accent"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all text-textColor hover:text-accent hover:scale-105"
        >
          <Github size={20} />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all text-textColor hover:text-accent hover:scale-105"
        >
          <LinkIcon size={20} />
          Live Demo
        </a>
      </div>
    </div>
  </>
);

export default Project;
