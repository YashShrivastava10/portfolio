import CommonHeaderContainer from "@/components/common/CommonHeaderContainer";
import MotionContainer from "@/components/common/MotionContainer";
import Project from "@/components/Projects/Project";
import { projects } from "@/constants/projectsData";

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
};

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container px-4 mx-auto">
        <CommonHeaderContainer>
          <>Featured Projects</>
        </CommonHeaderContainer>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionContainer
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="overflow-hidden rounded-lg bg-secondary transform-gpu"
            >
              <Project project={project}></Project>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
