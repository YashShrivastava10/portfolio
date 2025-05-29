import { useStepCount } from "@/hooks/useStepCount";
import { motion } from "motion/react";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index: number, totalSteps: number) => {
  return totalSteps - index - 1;
};

export const Stairs = () => {
  const stepCount = useStepCount(); // responsive step count

  return (
    <>
      {[...Array(stepCount)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reverseIndex(index, stepCount) * 0.1,
            }}
            className="bg-foreground relative h-full w-full"
          />
        );
      })}
    </>
  );
};
