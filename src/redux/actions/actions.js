import {
    LOAD_ARTICLE,
    LOAD_ARTICLE_FAIL,
    LOAD_ARTICLE_SUCCESS, LOAD_ARTICLES, LOAD_ARTICLES_FAIL, LOAD_ARTICLES_SUCCESS,
    LOGIN_USER, LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS, POST_COMMENT, POST_COMMENT_FAIL, POST_COMMENT_SUCCESS,
    POST_TOKEN,
    PUT_USER,
    REGISTER_USER, REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS, ROUTING, SET_TOKEN, USER_LOADED, USER_LOADING
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

export const setToken = (data) => {
    return {
        type: SET_TOKEN,
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

export const loadArticleSuccess = (data) => {
    return {
        type: LOAD_ARTICLE_SUCCESS,
        payload: data,
    };
}

export const loadArticleFail = (data) => {
    return {
        type: LOAD_ARTICLE_FAIL,
        payload: data,
    };
}

export const loadArticle = (data) => {
    return {
        type: LOAD_ARTICLE,
        payload: data,
    };
}

export const loadArticlesSuccess = (data) => {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        payload: data,
    };
}

export const loadArticlesFail = (data) => {
    return {
        type: LOAD_ARTICLES_FAIL,
        payload: data,
    };
}

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
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

export const postCommentSuccess = () => {
    return {
        type: POST_COMMENT_SUCCESS,
    };
}

export const postComment = (data, article) => {
    return {
        type: POST_COMMENT,
        payload: {...data, article},
    };
}

export const postCommentFail = (data) => {
    return {
        type: POST_COMMENT_FAIL,
        payload: data,
    };
}
