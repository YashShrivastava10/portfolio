import CommonHeaderContainer from "@/components/common/CommonHeaderContainer";
import MotionContainer from "@/components/common/MotionContainer";
import RenderSkills from "@/components/Skills/RenderSkills";
import { techStack } from "@/constants/techStackData";
interface TechStack {
  frontend: string[];
  backend: string[];
  cloud: string[];
  tools: string[];
  [key: string]: string[]; // For future extensibility
}

interface TechCategory {
  category: string;
  skills: string[];
  icon: string;
}

interface AnimationProps {
  initial: {
    opacity: number;
    x?: number;
    scale?: number;
  };
  whileInView: {
    opacity: number;
    x?: number;
    scale?: number;
  };
  transition: {
    duration: number;
    delay?: number;
  };
}

const Skills = (): JSX.Element => {
  // Convert techStack object to array for easier mapping
  const techCategories: TechCategory[] = Object.entries(
    techStack as TechStack
  ).map(([category, skills]) => ({
    category: formatCategoryName(category),
    skills,
    icon: getCategoryIcon(category),
  }));

  // Helper function to format category names (e.g., "frontend" to "Front-End")
  function formatCategoryName(category: string): string {
    return category
      .split(/(?=[A-Z])|\b/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("-");
  }

  // Calculate animations for each category
  const getAnimationProps = (index: number): AnimationProps => {
    const isEven = index % 2 === 0;

    if (isEven) {
      return {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
      };
    } else {
      return {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
      };
    }
  };

  function getCategoryIcon(category: string): string {
    switch (category.toLowerCase()) {
      case "frontend":
        return "🎨";
      case "backend":
        return "⚙️";
      case "cloud":
        return "☁️";
      case "tools":
        return "🛠️";
      default:
        return "💻";
    }
  }

  return (
    <section className="py-20" id="skills">
      <div className="container px-4 mx-auto">
        <CommonHeaderContainer>
          <>Skills & Technologies</>
        </CommonHeaderContainer>

        <div className="md:grid-cols-2 lg:gap-8 grid grid-cols-1 gap-6">
          {techCategories.map((tech, index) => (
            <MotionContainer
              key={tech.category}
              {...getAnimationProps(index)}
              className="bg-secondary/20 backdrop-blur-sm rounded-xl border-secondary/30 p-6 border"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden="true">
                  {tech.icon}
                </span>
                <h3 className="text-accent text-lg font-medium">
                  {tech.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <RenderSkills skills={tech.skills} />
              </div>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
