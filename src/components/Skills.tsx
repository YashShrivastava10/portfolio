import { motion } from "framer-motion";
import { techStack } from "../constants/techStackData";

const Skills = () => {
  const renderSkills = (skills: string[]) =>
    skills.map((skill, index) => (
      <motion.div
        key={skill}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="px-8 py-4 text-center transition-all duration-300 border-2 rounded-lg border-secondary text-accent"
      >
        <span className="font-medium">{skill}</span>
      </motion.div>
    ));

  return (
    <section className="py-20" id="skills">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Front-End Column */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-center">
              Front-End
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {renderSkills(techStack.frontend)}
            </div>
          </div>

          {/* Back-End Column */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-center">Back-End</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {renderSkills(techStack.backend)}
            </div>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-center">Tools</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {renderSkills(techStack.tools)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
