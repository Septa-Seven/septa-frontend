import { axiosInstance } from "../../shared/settings";

const apiUrls = {
  teams: "/api/teams/:id/",
  users: "/api/users/",
  invitations: "/api/teams/invitations/",
  userInvitations: "/api/users/invitations/",
  deleteInvitations: "/api/teams/invitations/:id/",
  deleteTeam: "/api/teams/quit/",
  acceptInvitation: "/api/teams/invitations/:id/accept/",
};

export const getTeam = async (id) => {
  return await axiosInstance.get(apiUrls.teams.replace(":id", id));
};

export const getUsers = async (username, hasTeam) => {
  return await axiosInstance.get(apiUrls.users, {
    params: {
      has_team: hasTeam ? "1" : "0",
    },
  });
};

export const getInvitations = async () => {
  return await axiosInstance.get(apiUrls.invitations);
};

export const createInvitation = async (user) => {
  return await axiosInstance.post(apiUrls.invitations, { user });
};

export const getUserInvitations = async () => {
  return await axiosInstance.get(apiUrls.userInvitations);
};

export const acceptInvitation = async (id) => {
  return await axiosInstance.post(apiUrls.acceptInvitation.replace(":id", id));
};

export const deleteUserInvitation = async (id) => {
  return await axiosInstance.delete(
    apiUrls.deleteInvitations.replace(":id", id)
  );
};

export const deleteTeam = async () => {
  return await axiosInstance.post(apiUrls.deleteTeam);
};
