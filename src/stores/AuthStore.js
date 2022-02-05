import { makeAutoObservable } from "mobx";
import { Auth } from "../services/Auth";
import { toast } from "react-hot-toast";

export class AuthStore {
  accessToken = "";
  refreshToken = "";
  userId = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async login(code, endpoint) {
    try {
      const data = await Auth.login(code, endpoint);
      this.accessToken = data.access_token;
      this.refreshToken = data.refresh_token;

      this.userId = data.user.pk;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  setUserId(userId) {
    this.userId = userId;
  }
}
