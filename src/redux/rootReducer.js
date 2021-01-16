import {PUT_USER} from "./actions/actions";
import {combineReducers} from "redux";
import {authReducer, errorReducer, newsReducer, redirectReducer} from "./reducers";


export const rootReducer = combineReducers({
    news: newsReducer,
    errors: errorReducer,
    auth: authReducer,
    redirect: redirectReducer,
});

