// import CommonHeaderContainer from "@/components/common/CommonHeaderContainer";
// import MotionContainer from "@/components/common/MotionContainer";
// import RenderSkills from "@/components/Skills/RenderSkills";
// import { techStack } from "@/constants/techStackData";

// const Skills = () => {
//   return (
//     <section className="py-20" id="skills">
//       <div className="container px-4 mx-auto">
//         <CommonHeaderContainer>
//           <>Skills & Technologies</>
//         </CommonHeaderContainer>
//         <div className="grid grid-cols-1 gap-6 lg:gap-2 md:grid-cols-3">
//           {/* Front-End Column */}
//           <MotionContainer
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="mb-6 text-xl font-semibold text-center">
//               Front-End
//             </h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               <RenderSkills skills={techStack.frontend} />
//             </div>
//           </MotionContainer>
//           {/* Back-End Column */}
//           <MotionContainer
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="mb-6 text-xl font-semibold text-center">Back-End</h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               <RenderSkills skills={techStack.backend} />
//             </div>
//           </MotionContainer>

//           {/* Tools Column */}
//           <MotionContainer
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="mb-6 text-xl font-semibold text-center">Tools</h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               <RenderSkills skills={techStack.tools} />
//             </div>
//           </MotionContainer>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import CommonHeaderContainer from "@/components/common/CommonHeaderContainer";
import MotionContainer from "@/components/common/MotionContainer";
import RenderSkills from "@/components/Skills/RenderSkills";
import { techStack } from "@/constants/techStackData";

// Type definitions
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

  return (
    <section className="py-20" id="skills">
      <div className="container px-4 mx-auto">
        <CommonHeaderContainer>
          <>Skills & Technologies</>
        </CommonHeaderContainer>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {techCategories.map((tech, index) => (
            <MotionContainer key={tech.category} {...getAnimationProps(index)}>
              <h3 className="mb-6 text-xl font-semibold text-center">
                {tech.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
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
