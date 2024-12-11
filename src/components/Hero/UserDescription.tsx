import React from "react";
import Resume from "./Resume";
import Social from "./Social";
import Countdown from "./Countdown";

const UserDescription = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center md:text-left lg:text-6xl">
        Hi I'm
        <br />
        <span className="text-accent">Yash Shrivastava</span>
      </h1>
      <h2 className="text-xl text-center md:text-2xl text-textColor/80 md:text-left">
        Full-Stack Developer
      </h2>
      <div className="flex items-center justify-center gap-10 mt-6 lg:justify-start">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Resume />
          <Social />
        </div>
      </div>
      <Countdown />
    </>
  );
};

export default UserDescription;
