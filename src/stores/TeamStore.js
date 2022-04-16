import { makeAutoObservable } from "mobx";
import {
  createInvitation,
  getInvitations,
  getTeam,
  getUsers,
} from "../modules/team/api";

export class TeamStore {
  id = null;
  name = "";
  description = "";
  users = []; // id, username
  team = [];
  invitations = [];
  leader = null;
  membersCount = null;
  isLeader = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getTeam(id) {
    const { data } = await getTeam(id);
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.team = data.users;
    this.leader = data.leader;
    this.membersCount = data.members_count;
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
}
