export function ageCalculator(year, month, day) {
  const a = new Date(year, month, day);

  const MINUTE = 1000 * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const YEAR = DAY * 365;

  let age = (Date.now() - a.getTime())/ YEAR;
  return Math.floor(age);
}

