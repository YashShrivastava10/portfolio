import { skills } from "@/constants/skills";

const totalSkills = Object.entries(skills)
  .filter(([key]) => key !== "tools")
  .flatMap(([, value]) => value).length;

const formatSkillsCount = (count: number): string => {
  const unit = count % 10;
  const base = Math.floor(count / 10) * 10;

  const formatMap: Record<string, () => string> = {
    zero: () => `${count}`,
    lessThanFive: () => `${base}+`,
    five: () => `${base + 5}`,
    greaterThanFive: () => `${base + 5}+`,
  };

  if (unit === 0) return formatMap.zero();
  if (unit < 5) return formatMap.lessThanFive();
  if (unit === 5) return formatMap.five();

  return formatMap.greaterThanFive();
};

export const skillsCount = formatSkillsCount(totalSkills);
