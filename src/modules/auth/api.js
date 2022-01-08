import { request } from "../../shared/settings";

export const postCode = async ({ endpoint, code }) => {
  console.log(endpoint, code);
  return await request.post(endpoint, {
    code,
  });
};
