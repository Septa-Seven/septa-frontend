import {takeLatest, put, call} from 'redux-saga/effects'
import {putUser} from "../redux/actions/actions";
import {API_authUser, API_postToken, API_registerUser} from "../utils/API";
import {LOGIN_USER, POST_TOKEN, REGISTER_USER} from "../shared/constants";

function* workerRegister({payload}) {
    try {
        const data = yield call(API_registerUser, payload);
        console.log(data)
        yield put(putUser(data))
    }

    catch (error) {
        console.log(error);
    }

}

export function* watchRegister() {
    yield takeLatest(REGISTER_USER, workerRegister)
}

function* workerLogin({payload}) {
    try {
        const data = yield call(API_authUser, payload);
        console.log(data)
        yield put(putUser(data))
    }

    catch (error) {
        console.log(error);
    }

}

export function* watchLogin() {
    yield takeLatest(LOGIN_USER, workerLogin)
}

function* workerPostToken({payload}) {
    try {
        const data = yield call(API_postToken, payload);
        console.log(data);
        yield put(putUser(data))
    }

    catch (error) {
        console.log(error);
    }

}

export function* watchPostToken() {
    yield takeLatest(POST_TOKEN, workerPostToken)
}
