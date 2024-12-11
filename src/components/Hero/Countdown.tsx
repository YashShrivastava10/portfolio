"use client";

import React from "react";
import CountUp from "react-countup";

const Countdown = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6 text-3xl font-extrabold text-center md:justify-start text-accent md:text-left lg:text-5xl">
      <CountUp start={0} end={3} duration={5} delay={1} />
      <p className="text-lg text-textColor">Years of experience</p>
    </div>
  );
};

export default Countdown;
