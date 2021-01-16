import {Api} from './httpClient';
import {API_URLS} from "../../shared/constants";


export const API_registerUser = async ({username, password, email}) => {
  return await Api.post(API_URLS.register, {
    'username': username,
    'password': password,
    'email': email,
  });
}

export const API_authUser = async ({username, password}) => {
  return await Api.post(API_URLS.login, {
    'username': username,
    'password': password,
  });
}

export const API_postToken = async ({token, uid}) => {
  return await Api.post(API_URLS.mailActivation, {
    'uid': uid,
    'token': token,
  });
}

export const API_getNews = async () => {
  return await Api.get(API_URLS.news);
}
