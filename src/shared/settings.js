import axios from "axios";
import { apiUrls, baseUrl } from "./apiUrls";
import { Auth } from "../services/Auth";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Auth.getAccessToken();

    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
    const refreshToken = Auth.getRefreshToken();

    if (
      error.response.status === 401 &&
      originalRequest.url !== "/api/auth/token/refresh/"
    ) {
      if (refreshToken) {
        originalRequest._retry = true;
        try {
          const response = await axiosInstance.post(apiUrls.refreshToken, {
            refresh_token: refreshToken,
          });

          if (response.status === 200) {
            Auth.setRefreshToken(response.data);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + Auth.getAccessToken();
            return;
          }
        } catch (e) {
          Auth.deleteAccessToken();
          return document.location.assign("/login");
        }
      }
      return document.location.assign("/login");
    }

    throw error;
  }
);

export { axiosInstance };
