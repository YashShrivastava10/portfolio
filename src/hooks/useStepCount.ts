import { useEffect, useState } from "react";

export const useStepCount = () => {
  const [stepCount, setStepCount] = useState(6);

  useEffect(() => {
    const updateStepCount = () => {
      const width = window.innerWidth;
      if (width < 640) setStepCount(3);
      else if (width < 1024) setStepCount(4);
      else setStepCount(6);
    };

    updateStepCount();
    window.addEventListener("resize", updateStepCount);
    return () => window.removeEventListener("resize", updateStepCount);
  }, []);

  return stepCount;
};
