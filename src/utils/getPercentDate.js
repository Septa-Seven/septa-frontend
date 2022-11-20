export const getPercentDate = (start, end) => {
  const duration = end - start;
  const passed = Date.now() - start;

  return (passed / duration) * 100;
};
