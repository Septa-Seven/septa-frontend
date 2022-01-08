import { makeAutoObservable } from "mobx";
import { postCode } from "../modules/auth/api";

export class AuthStore {
  authenticated = false;
  accessToken = "";
  refreshToken = "";
  user = { name: "", id: undefined };

  constructor() {
    makeAutoObservable(this);
  }

  async login(code, endpoint) {
    const { data } = await postCode({ endpoint, code });

    this.authenticated = true;
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;
    this.user.name = data.user.username;
    this.user.id = data.user.id;
  }
}
