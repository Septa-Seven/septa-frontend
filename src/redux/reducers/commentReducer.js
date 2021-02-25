import {POST_COMMENT, POST_COMMENT_FAIL, POST_COMMENT_SUCCESS} from "../../shared/constants";

const initialState = {
    isLoading: false,
    error: null,

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_COMMENT: return {
            ...state,
            isLoading: true,
        }

        case POST_COMMENT_SUCCESS: return {
            ...state,
            isLoading: false,
        }

        case POST_COMMENT_FAIL: return {
            ...state,
            isLoading: false,
            error: action.payload.error,
        }
    }
    return state;
}
