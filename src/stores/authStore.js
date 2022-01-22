import { makeAutoObservable } from "mobx";
import { Auth } from "../services/Auth";

export class AuthStore {
  authenticated = false;
  accessToken = "";
  refreshToken = "";
  user = { name: "", id: undefined };

  constructor() {
    makeAutoObservable(this);
  }

  async login(code, endpoint) {
    const data = Auth.login(code, endpoint);
    this.authenticated = true;
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;

    this.user.name = data.user.username;
    this.user.id = data.user.id;
  }
}
