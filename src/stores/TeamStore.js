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

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async createTeam(data) {
    const res = await createTeam(data);
    this.rootStore.profileStore.teamId = res.data.id;
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
