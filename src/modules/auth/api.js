import { request } from "../../shared/settings";

export const postCode = async ({ endpoint, code }) => {
  return await request.post(endpoint, {
    code,
  });
};
