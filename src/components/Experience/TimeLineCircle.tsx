import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import React from "react";

const TimelineCircle = ({ type }: { type: string }) => {
  return (
    <div className="absolute left-0 flex items-center justify-center transform -translate-x-1/2 bg-transparent border rounded-full border-accent text-accent w-9 h-9 md:left-1/2">
      {type === "study" ? <GraduationCap /> : <BriefcaseBusiness />}
    </div>
  );
};

export default TimelineCircle;
