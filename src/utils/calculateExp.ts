export function calculateTotalExperienceRounded() {
  const currentDate = new Date();
  const joining = new Date("12-24-2021");

  // Calculate total months of experience
  let years = currentDate.getFullYear() - joining.getFullYear();
  let months = currentDate.getMonth() - joining.getMonth();
  let days = currentDate.getDate() - joining.getDate();

  // Adjust for negative days or months
  if (days < 0) {
    months -= 1;
    days += new Date(
      joining.getFullYear(),
      joining.getMonth() + 1,
      0
    ).getDate(); // Days in previous month
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Convert to years as a decimal
  const totalExp = years + months / 12 + days / 365;

  // Round to nearest half or whole number
  return roundToNearest(totalExp);
}

function roundToNearest(value: number) {
  const whole = Math.floor(value); // Get the integer part
  const decimal = value - whole; // Get the decimal part

  if (decimal < 0.25) {
    return whole; // Round down to the nearest integer
  } else if (decimal < 0.75) {
    return whole + 0.5; // Round to the nearest half
  } else {
    return whole + 1; // Round up to the next whole number
  }
}
