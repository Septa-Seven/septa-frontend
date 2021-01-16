import {
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS, LOGOUT_SUCCESS, REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
    USER_LOADED,
    USER_LOADING
} from "../../shared/constants";


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isAuthenticated: true,

            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: null,
            }

        case LOGIN_USER_FAIL:
        case REGISTER_USER_FAIL:
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }

       default: return state;

    }
    return state;
}
