import CommonHeaderContainer from "@/components/common/CommonHeaderContainer";
import MotionContainer from "@/components/common/MotionContainer";
import RenderSkills from "@/components/Skills/RenderSkills";
import { techStack } from "@/constants/techStackData";

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="container px-4 mx-auto">
        <CommonHeaderContainer>
          <>Skills & Technologies</>
        </CommonHeaderContainer>
        <div className="grid grid-cols-1 gap-6 lg:gap-2 md:grid-cols-3">
          {/* Front-End Column */}
          <MotionContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-center">
              Front-End
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <RenderSkills skills={techStack.frontend} />
            </div>
          </MotionContainer>
          {/* Back-End Column */}
          <MotionContainer
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-center">Back-End</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <RenderSkills skills={techStack.backend} />
            </div>
          </MotionContainer>

          {/* Tools Column */}
          <MotionContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-center">Tools</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <RenderSkills skills={techStack.tools} />
            </div>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;
