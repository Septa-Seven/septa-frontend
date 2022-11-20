import { getPercentDate } from "./getPercentDate";

export const getLeagueProgressBarPercent = (start, end) => {
  if (!end) return 50;

  if (!start) return 0;

  const startUtc = Date.parse(start);
  const endUtc = Date.parse(end);

  if (endUtc < new Date()) return 100;

  console.log(endUtc, new Date(), "конец");

  return getPercentDate(startUtc, endUtc);
};
