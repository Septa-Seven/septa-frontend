export const getDateString = (date) => {
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return date.toLocaleDateString("ru", options);
};
