import { axiosInstance } from "../../../shared/settings";

const createTeamUrl = "/api/teams/";

export const createTeam = async ({ name, description }) => {
  return await axiosInstance.post(createTeamUrl, {
    name,
    description,
  });
};
