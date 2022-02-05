import { axiosInstance } from "../../shared/settings";

const apiUrls = { getTeam: "/api/teams/:id/" };

export const getTeam = async (id) => {
  return await axiosInstance.get(apiUrls.getTeam.replace(":id", id));
};
