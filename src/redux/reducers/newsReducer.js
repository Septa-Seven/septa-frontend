import {LOAD_NEWS, LOAD_NEWS_FAIL, LOAD_NEWS_SUCCESS, ROUTING} from "../../shared/constants";

const initialState = {
    news : {},
    isLoading: false,
    errors: [],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
            return {
                ...state,
                isLoading: true,
            }

        case LOAD_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                news: action.payload,
            }

        case LOAD_NEWS_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: [action.payload],
            }

        default: return state;

    }
}
