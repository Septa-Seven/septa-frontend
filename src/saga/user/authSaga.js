import {call, put, takeLatest} from "redux-saga/effects";
import {API_authUser, API_postToken} from "../../utils";
import {loginUserFail, loginUserSuccess, redirect, registerUserFail} from "../../redux/actions/actions";
import {LOGIN_USER, POST_TOKEN, ROUTING} from "../../shared/constants";

function* workerLogin({payload}) {
    try {
        const data = yield call(API_authUser, payload);
        yield put(loginUserSuccess(data))
        yield put(redirect(ROUTING.HOME_PAGE));
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
