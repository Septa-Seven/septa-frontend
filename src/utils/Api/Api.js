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

export const API_getArticle = async (id) => {
  return await Api.get(API_URLS.article.replace(':id', id));
}

export const API_getArticles = async () => {
  return await Api.get(API_URLS.articles);
}

export const API_postComment = async ({article, body}) => {
  return await Api.post(API_URLS.comments, {
    'article': article,
    'body': body,
  });
}

