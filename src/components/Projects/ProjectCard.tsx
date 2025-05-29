import { Badge, Button, Card, CardContent } from "@/components/ui";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type ProjectCardProps = {
  label: string;
  icon: ReactNode;
  data: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
  }[];
};
export const ProjectCard = ({ label, icon, data }: ProjectCardProps) => {
  return (
    <div className="flex max-w-7xl flex-col gap-8">
      <label className="flex items-center gap-2">
        {icon}
        <h2 className="text-2xl font-semibold">{label}</h2>
      </label>
      <div
        className={`grid w-full gap-6 ${label === "Featured Projects" ? "lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}
      >
        {data.map((project) => (
          <Card
            key={project.title}
            className="group overflow-hidden p-0 transition-shadow hover:shadow-lg"
          >
            <div className="bg-muted relative aspect-video">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="flex flex-col gap-4 pb-6">
              <h2 className="text-xl leading-none font-medium md:text-2xl">
                {project.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Button asChild size="sm">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    Code
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
