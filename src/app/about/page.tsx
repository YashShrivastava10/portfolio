import { FunFact } from "@/components/About/FunFact";
import { Interest } from "@/components/About/Interest";
import { MyStory } from "@/components/About/MyStory";
import { PersonalInformation } from "@/components/About/PersonalInformation";
import { ProfileImage } from "@/components/About/ProfileImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yash Shrivastava | Web Developer",
  description:
    "Learn about Yash Shrivastava, a passionate full-stack developer. Discover his journey, technical expertise, interests, and approach to building software solutions.",
};

const AboutPage = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-12 sm:mt-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold sm:text-5xl">
          About <span className="text-primary">Me</span>
        </h1>
        <p className="text-muted-foreground mx-auto text-center text-lg leading-relaxed">
          Get to know the person behind the code — my journey, passions, and
          what makes me tick.
        </p>
      </div>
      <div className="flex max-w-7xl flex-col gap-6">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
          <div className="order-2 sm:order-1">
            <PersonalInformation />
          </div>
          <div className="order-1 sm:order-2">
            <ProfileImage />
          </div>
        </div>
        <div>
          <MyStory />
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <Interest />
          <FunFact />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
