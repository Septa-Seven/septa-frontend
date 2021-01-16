import {call, put, takeLatest} from "redux-saga/effects";
import {API_getNews} from "../../utils";
import {
    loadNewsFail,
    loadNewsSuccess,
} from "../../redux/actions/actions";
import {LOAD_NEWS} from "../../shared/constants";

function* workerGetNews({payload}) {
    try {
        const data = yield call(API_getNews, payload);
        yield put(loadNewsSuccess(data))
    }

    catch (error) {
        yield put(loadNewsFail(error))
    }
}

export function* watchGetNews() {
    yield takeLatest(LOAD_NEWS, workerGetNews)
}
