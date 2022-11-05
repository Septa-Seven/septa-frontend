export const getPercentDate = (start, end) => {
  const startUtc = Date.parse(start);
  const endUtc = Date.parse(end);

  const duration = endUtc - startUtc;
  const passed = Date.now() - startUtc;

  return (passed / duration) * 100;
};
