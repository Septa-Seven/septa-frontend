import { axiosInstance } from "../../shared/settings";

const apiUrls = {
  teams: "/api/teams/:id/",
  users: "/api/users/",
  invitations: "/api/teams/invitations/",
};

export const getTeam = async (id) => {
  return await axiosInstance.get(apiUrls.teams.replace(":id", id));
};

export const getUsers = async (username, hasTeam) => {
  return await axiosInstance.get(apiUrls.users, {
    params: {
      has_no_team: hasTeam,
    },
  });
};

export const getInvitations = async () => {
  return await axiosInstance.get(apiUrls.invitations);
};

export const createInvitation = async (user) => {
  return await axiosInstance.post(apiUrls.invitations, { user });
};
