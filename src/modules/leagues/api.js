import { axiosInstance } from "../../shared/settings";

const apiUrls = { getLeagues: "/api/matchmaking/leagues/" };

export const getLeagues = async () => {
  return await axiosInstance.get(apiUrls.getLeagues);
};
