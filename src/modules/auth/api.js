import { axiosInstance } from "../../shared/settings";

export const postCode = async ({ endpoint, code }) => {
  return await axiosInstance.post(endpoint, {
    code,
  });
};
