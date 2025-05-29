export const getRoundedYOE = () => {
  const proStartDate = new Date("2021-12-01");
  const internshipMonths = 4;
  const now = new Date();

  const totalProMonths =
    (now.getFullYear() - proStartDate.getFullYear()) * 12 +
    (now.getMonth() - proStartDate.getMonth());

  const totalMonths = totalProMonths + internshipMonths;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return months >= 6 ? years + 1 : years;
};
