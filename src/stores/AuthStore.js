import { makeAutoObservable } from "mobx";
import { Auth } from "../services/Auth";
import { toast } from "react-hot-toast";
import { tokenVerify } from "../modules/auth/api";

export class AuthStore {
  refreshToken = "";
  userId = undefined;
  accessToken = Auth.getAccessToken();

  constructor() {
    makeAutoObservable(this);
  }

  async login(code, endpoint) {
    try {
      const data = await Auth.login(code, endpoint);
      this.accessToken = data.accessToken;
      this.refreshToken = data.refreshToken;

      this.userId = data.user.pk;
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async checkAuth(accessToken) {
    await tokenVerify(accessToken);
  }

  logout() {
    Auth.deleteAccessToken();
    Auth.deleteRefreshToken();
    document.location.assign("/");
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  setUserId(userId) {
    this.userId = userId;
  }
}
