export const getQueryParams = (url, param) => {
  console.log(new URL(url).searchParams.get(param));
  return new URL(url).searchParams.get(param);
};
