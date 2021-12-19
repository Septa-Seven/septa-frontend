export const getQueryParams = (url, param) => {
  return new URL(url).searchParams.get(param);
};
