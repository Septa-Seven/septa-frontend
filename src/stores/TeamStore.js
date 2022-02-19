import { makeAutoObservable } from "mobx";
import { getTeam } from "../modules/team/api";

export class TeamStore {
  id = null;
  name = "";
  description = "";
  users = []; // id, username
  leader = null;
  membersCount = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getTeam(id) {
    const { data } = await getTeam(id);
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.users = data.users;
    this.leader = data.leader;
    this.membersCount = data.members_count;
  }
}
