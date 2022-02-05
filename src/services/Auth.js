import { postCode } from "../modules/auth/api";

const ACCESS_TOKEN = "authToken";
const REFRESH_TOKEN = "refreshToken";
const USER = "userId";

export class Auth {
  static async login(code, endpoint) {
    const { data } = await postCode({ endpoint, code });

    localStorage.setItem(ACCESS_TOKEN, data.access_token);
    localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
    localStorage.setItem(USER, data.user.pk);

    return data;
  }

  static getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  static deleteAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  static getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  static deleteRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN);
  }

  static setRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  static deleteUserId() {
    localStorage.removeItem(USER);
  }

  static getUserId() {
    return localStorage.getItem(USER);
  }
}
