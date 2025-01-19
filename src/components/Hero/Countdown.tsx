"use client";

import { calculateTotalExperienceRounded } from "@/utils/calculateExp";
import React from "react";
import CountUp from "react-countup";

const Countdown = () => {
  return (
    <div className="flex gap-4 mt-4 sm:flex-row">
      <div className="flex items-center justify-start w-1/2 gap-2 text-5xl font-extrabold text-center md:justify-start text-accent md:text-left lg:text-5xl">
        <CountUp
          start={0}
          end={Math.round(calculateTotalExperienceRounded())}
          duration={5}
          delay={2}
        />
        <p className="text-lg text-left text-textColor max-w-1/2">
          Years of experience
        </p>
      </div>
      <div className="flex items-center justify-center w-1/2 gap-2 text-5xl font-extrabold text-center md:justify-start text-accent md:text-left lg:text-5xl">
        <CountUp start={0} end={15} duration={5} delay={1} />
        <p className="text-lg text-textColor max-w-1/2">Projects</p>
      </div>
    </div>
  );
};

export default Countdown;
