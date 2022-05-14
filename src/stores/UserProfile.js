import { makeAutoObservable } from "mobx";
import { getProfileInfo } from "../modules/profile/api";

export class UserProfile {
  userId = undefined;
  teamId = undefined;
  username = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getProfile(userId) {
    try {
      const { data } = await getProfileInfo(userId);
      this.username = data.username;
      this.userId = data.id;
      this.teamId = data.teamId;
    } catch (e) {
      console.log(e);
    }
  }
}
