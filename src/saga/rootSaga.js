import {all} from "@redux-saga/core/effects";
import {watchLogin, watchPostToken, watchRegister} from "./user";
import {watchGetArticle, watchGetArticles} from "./articles";

export const rootSaga = function*() {
    yield all([
        watchRegister(),
        watchLogin(),
        watchPostToken(),
        watchGetArticle(),
        watchGetArticles(),
    ])
}
