import {call, put, takeLatest} from "redux-saga/effects";
import {API_authUser, API_postToken} from "../../utils";
import {loginUserFail, loginUserSuccess, putUser, registerUserFail} from "../../redux/actions/actions";
import {LOGIN_USER, POST_TOKEN} from "../../shared/constants";

function* workerLogin({payload}) {
    try {
        const data = yield call(API_authUser, payload);
        yield put(putUser(data))
    }

    catch (error) {
        yield put(loginUserFail(error))
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN_USER, workerLogin)
}

function* workerPostToken({payload}) {
    try {
        const data = yield call(API_postToken, payload);
        yield put(loginUserSuccess(data))
    }

    catch (error) {
        yield put(registerUserFail(error))
    }
}

export function* watchPostToken() {
    yield takeLatest(POST_TOKEN, workerPostToken)
}
