"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ElementType } from "react";

type MotionContainerProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
};

const MotionContainer = ({
  children,
  className = "",
  tag: Tag = "div",
  ...motionProps
}: MotionContainerProps) => {
  const MotionTag = motion[Tag as keyof typeof motion] as ElementType;

  return (
    <MotionTag {...motionProps} className={`${className}`}>
      {children}
    </MotionTag>
  );
};

export default MotionContainer;
