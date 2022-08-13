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
      this.errors = error.response.data;
    }
  }

  async getTeam(id) {
    const { data } = await getTeam(id);
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.team = data.users;
    this.leader = data.leader;
    this.membersCount = data.membersCount;
  }

  async getTeamSettings() {
    const { data } = await getTeamSettings();
    this.settings.maxTeamSize = data.maxTeamSize;
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
    const { data } = await getUsers(username, hasTeam);
    this.users = data.results;
  }

  async getInvitations() {
    const { data } = await getInvitations();
    this.invitations = data.results;
  }

  async acceptInvitation(inviteId) {
    await acceptInvitation(inviteId);
    const selectedTeam = this.userInvitations.find(({ id }) => id === inviteId);
    this.rootStore.profileStore.teamId = selectedTeam.team;
  }

  async inviteUser(userId) {
    await createInvitation(userId);
  }

  async deleteUserInvitations(id) {
    await deleteUserInvitation(id);
  }

  async getUserInvitations() {
    const { data } = await getUserInvitations();
    this.userInvitations = data.results;
  }

  async deleteTeam() {
    await deleteTeam();
    this.rootStore.profileStore.teamId = null;
  }
}
