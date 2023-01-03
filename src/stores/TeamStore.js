import { makeAutoObservable } from "mobx";
import {
  acceptInvitation,
  createInvitation,
  deleteTeam,
  deleteUserInvitation,
  getInvitations,
  getTeam,
  getTeamSettings,
  getUserInvitations,
  getUsers,
} from "../modules/team/api";
import { createTeam } from "../forms/CreateTeam/module/api";
import { toast } from "react-hot-toast";

export class TeamStore {
  rootStore = null;

  id = null;
  name = "";
  description = "";
  users = []; // id, username
  team = [];
  invitations = [];
  leader = null;
  membersCount = null;
  userInvitations = [];
  settings = {};
  errors = null;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async createTeam(data) {
    try {
      const res = await createTeam(data);
      this.rootStore.profileStore.teamId = res.data.id;
      this.errors = null;
    } catch (error) {
      error.response.data.detail &&
        toast.error(error.response.data.detail, { position: "bottom-right" });
    }
  }

  async getTeam(id) {
    try {
      const { data } = await getTeam(id);
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.team = data.users;
      this.leader = data.leader;
      this.membersCount = data.membersCount;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async getTeamSettings() {
    try {
      const { data } = await getTeamSettings();
      this.settings.maxTeamSize = data.maxTeamSize;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  get isLeader() {
    return this.rootStore.profileStore.userId === this.leader;
  }

  get isMyTeam() {
    return this.rootStore.profileStore.teamId === this.id;
  }

  get isTeamFull() {
    return this.membersCount >= this.settings.maxTeamSize;
  }

  async getUsers(username, hasTeam) {
    try {
      const { data } = await getUsers(username, hasTeam);
      this.users = data.results;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async getInvitations() {
    try {
      const { data } = await getInvitations();
      this.invitations = data.results;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async acceptInvitation(inviteId) {
    await acceptInvitation(inviteId);
    const selectedTeam = this.userInvitations.find(({ id }) => id === inviteId);
    this.rootStore.profileStore.teamId = selectedTeam.team;
  }

  async inviteUser(userId) {
    try {
      await createInvitation(userId);
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async deleteUserInvitations(id) {
    try {
      await deleteUserInvitation(id);
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async getUserInvitations() {
    try {
      const { data } = await getUserInvitations();
      this.userInvitations = data.results;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async deleteTeam() {
    try {
      await deleteTeam();
      this.rootStore.profileStore.teamId = null;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }
}
