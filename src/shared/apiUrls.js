export const baseUrl = process.env.REACT_APP_BASE_URL;

export const apiUrls = {
  vkAuth: "/api/auth/vk/",
  githubAuth: "/api/auth/github/",
  yandexAuth: "/api/auth/yandex/",
  googleAuth: "/api/auth/google/",
  refreshToken: `${baseUrl}/api/auth/token/refresh/`,
};
