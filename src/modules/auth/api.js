import { axiosInstance } from "../../shared/settings";

const apiUrls = {
  tokenVerify: "/api/auth/token/verify/",
};

export const postCode = async ({ endpoint, code }) => {
  return await axiosInstance.post(endpoint, {
    code,
  });
};

export const tokenVerify = async (token) => {
  return await axiosInstance.post(apiUrls.tokenVerify, { token });
};
