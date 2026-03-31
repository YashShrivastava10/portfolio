type MonthRangeKey = "1-3" | "4-6" | "7-10" | "gt10";

const MONTH_ROUNDING: Record<MonthRangeKey, (year: number) => string> = {
  "1-3": (year) => `${year}+`,
  "4-6": (year) => `${year}.5`,
  "7-10": (year) => `${year}.5+`,
  gt10: (year) => `${year + 1}`,
};

export const getRoundedYOE = (): string => {
  const proStartDate = new Date("2021-12-24");
  const internshipMonths = 2;
  const now = new Date();

  const totalProMonths =
    (now.getFullYear() - proStartDate.getFullYear()) * 12 +
    (now.getMonth() - proStartDate.getMonth());

  const totalMonths = totalProMonths + internshipMonths;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const rangeKey: MonthRangeKey =
    months <= 3 ? "1-3" : months <= 6 ? "4-6" : months <= 10 ? "7-10" : "gt10";

  return MONTH_ROUNDING[rangeKey](years);
};
