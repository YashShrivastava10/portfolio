import { experiences } from "@/constants/expereinceData";
import React from "react";
import TimelineItem from "./TimelineItem";

const TimeLine = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative flex flex-col gap-8 ml-6 md:ml-0">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            isLast={index === experiences.length - 1}
            type={exp.type}
            isLeft={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
