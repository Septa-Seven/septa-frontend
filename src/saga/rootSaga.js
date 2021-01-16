import {all} from "@redux-saga/core/effects";
import {watchLogin, watchPostToken, watchRegister} from "./user";
import {watchGetNews} from "./news";

export const rootSaga = function*() {
    yield all([
        watchRegister(),
        watchLogin(),
        watchPostToken(),
        watchGetNews(),
    ])
}
