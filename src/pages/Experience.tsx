import TimeLine from "../components/Experience/TimeLine";
import MotionContainer from "../components/common/MotionContainer";

const Experience = () => {
  return (
    <section className="w-full py-20 bg-secondary" id="experience">
      <div className="container px-4 mx-auto">
        <MotionContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-3xl font-bold text-center"
        >
          Work Experience
        </MotionContainer>

        <TimeLine />
      </div>
    </section>
  );
};

export default Experience;
