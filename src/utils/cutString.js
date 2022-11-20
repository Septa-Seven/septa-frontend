export const cutString = (string, count) => {
  if (string.length < count) return string;

  return string.substring(0, count) + "...";
};
