import {
    LOAD_ARTICLE,
    LOAD_ARTICLE_FAIL,
    LOAD_ARTICLE_SUCCESS,
    LOAD_ARTICLES, LOAD_ARTICLES_FAIL,
    LOAD_ARTICLES_SUCCESS,
    ROUTING
} from "../../shared/constants";

const initialState = {
    article: {},
    articles: [],
    isLoading: false,
    errors: [],
}

export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLE:
            return {
                ...state,
                isLoading: true,
            }

        case LOAD_ARTICLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                article: action.payload,
            }

        case LOAD_ARTICLE_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: [action.payload],
            }

        case LOAD_ARTICLES:
            return {
                ...state,
                isLoading: true,
            }

        case LOAD_ARTICLES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                articles: action.payload,
            }

        case LOAD_ARTICLES_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: [action.payload],
            }

        default: return state;

    }
}
