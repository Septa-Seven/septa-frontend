import { getPercentDate } from "./getPercentDate";

export const getLeagueProgressBarPercent = (start, end) => {
  if (!end) return 50;

  if (!start) return 0;

  return getPercentDate(start, end);
};
