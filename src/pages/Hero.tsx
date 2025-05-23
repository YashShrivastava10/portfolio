import MotionContainer from "@/components/common/MotionContainer";
import ImageCircle from "@/components/Hero/ImageCircle";
import UserDescription from "@/components/Hero/UserDescription";
import UserImage from "@/components/Hero/UserImage";

const Hero = () => {
  return (
    <section
      className="sm:items-center sm:py-20 flex items-start pt-20"
      id="hero"
    >
      <div className="container px-4 mx-auto">
        <div className="md:gap-12 sm:flex-row flex flex-col-reverse items-center gap-6">
          <MotionContainer
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center flex-1 gap-2"
          >
            <UserDescription />
          </MotionContainer>
          <MotionContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center flex-1"
          >
            <UserImage />
            <ImageCircle />
          </MotionContainer>
        </div>
      </div>
    </section>
  );
};

export default Hero;
