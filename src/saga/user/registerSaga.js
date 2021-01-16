import {call, put, takeLatest} from "redux-saga/effects";
import {API_registerUser} from "../../utils";
import {redirect, registerUserFail, registerUserSuccess} from "../../redux/actions/actions";
import {REGISTER_USER, ROUTING} from "../../shared/constants";

function* workerRegister({payload}) {
    try {
        const data = yield call(API_registerUser, payload);
        yield put(registerUserSuccess(data))
        yield put(redirect(ROUTING.REGISTER_SUCCESS));
    }

    catch (error) {
        yield put(registerUserFail(error))
    }
}

export function* watchRegister() {
    yield takeLatest(REGISTER_USER, workerRegister)
}
