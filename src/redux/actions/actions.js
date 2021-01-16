import {
    LOAD_NEWS,
    LOAD_NEWS_FAIL,
    LOAD_NEWS_SUCCESS,
    LOGIN_USER, LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    POST_TOKEN,
    PUT_USER,
    REGISTER_USER, REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS, ROUTING, USER_LOADED, USER_LOADING
} from "../../shared/constants";

export const putUser = (data) => {
    return {
        type: PUT_USER,
        payload: data,
    };
}

export const userLoading = (data) => {
    return {
        type: USER_LOADING,
        payload: data,
    };
}

export const userLoaded = (data) => {
    return {
        type: USER_LOADED,
        payload: data,
    };
}

export const loginUserSuccess = (data) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: data,
    };
}

export const loginUserFail = (data) => {
    return {
        type: LOGIN_USER_FAIL,
        payload: data,
    };
}

export const loginUser = (data) => {
    return {
      type: LOGIN_USER,
      payload: data,
    };
}

export const registerUserSuccess = (data) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: data,
    };
}

export const registerUserFail = (data) => {
    return {
        type: REGISTER_USER_FAIL,
        payload: data,
    };
}

export const registerUser = (data) => {
    return {
        type: REGISTER_USER,
        payload: data,
    };
}

export const loadNewsSuccess = (data) => {
    return {
        type: LOAD_NEWS_SUCCESS,
        payload: data,
    };
}

export const loadNewsFail = (data) => {
    return {
        type: LOAD_NEWS_FAIL,
        payload: data,
    };
}

export const loadNews = () => {
    return {
        type: LOAD_NEWS,
    };
}

export const postToken = (data) => {
    return {
        type: POST_TOKEN,
        payload: data,
    };
}

export const redirect = (data) => {
    return {
        type: ROUTING,
        payload: data,
    };
}
