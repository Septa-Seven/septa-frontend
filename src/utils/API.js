import axios from "axios";

const API = axios.create({
  baseURL: "http://92.255.175.28:8000/",
  responseType: "json"
});

export const API_registerUser = async ({username, password, email}) => {
  console.log(username, password, email)
  return await API.post('auth/users/', {
    'username': username,
    'password': password,
    'email': email,
  });
}

export const API_authUser = async ({username, password}) => {
  return await API.post('auth/jwt/create/', {
    'username': username,
    'password': password,
  });
}

export const API_postToken = async ({token, uid}) => {
  return await API.post('auth/users/activation/', {
    'uid': uid,
    'token': token,
  });
}
