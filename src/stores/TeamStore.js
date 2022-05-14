import { makeAutoObservable } from "mobx";
import {
  createInvitation,
  deleteTeam,
  deleteUserInvitation,
  getInvitations,
  getTeam,
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

  get isLeader() {
    return this.rootStore.profileStore.userId === this.leader;
  }

  async getUsers(username, hasTeam) {
    const { data } = await getUsers(username, hasTeam);
    this.users = data.results;
  }

  async getInvitations() {
    const { data } = await getInvitations();
    this.invitations = data.results;
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
