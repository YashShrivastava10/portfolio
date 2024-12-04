import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { experiences } from "../../constants/expereinceData";

const Experience = () => {
  return (
    <section className="w-full py-20 bg-secondary" id="experience">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-3xl font-bold text-center"
        >
          Work Experience
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline items */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
