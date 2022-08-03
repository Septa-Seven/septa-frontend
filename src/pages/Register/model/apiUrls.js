export const apiUrls = {
  vk: `https://oauth.vk.com/authorize?client_id=${process.env.REACT_APP_VK_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_FRONTEND_DOMAIN}/vk_callback`,
  yandex:
    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${process.env.REACT_APP_YANDEX_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_FRONTEND_DOMAIN}/yandex_callback`,
  github:
    `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_FRONTEND_DOMAIN}/github_callback&state=asdasd`,
  google:
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_FRONTEND_DOMAIN}/google_callback&response_type=code&scope=email`,
};
