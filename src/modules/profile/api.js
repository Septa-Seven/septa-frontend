import { axiosInstance } from "../../shared/settings";

const apiUrls = { getProfile: "/api/users/:id/" };

export const getProfileInfo = async (id) => {
  return await axiosInstance.get(apiUrls.getProfile.replace(":id", id));
};
