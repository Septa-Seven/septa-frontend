import {PUT_USER} from "./actions/actions";
import {combineReducers} from "redux";
import {authReducer, errorReducer, articlesReducer, redirectReducer} from "./reducers";


export const rootReducer = combineReducers({
    article: articlesReducer,
    errors: errorReducer,
    auth: authReducer,
    redirect: redirectReducer,
});

