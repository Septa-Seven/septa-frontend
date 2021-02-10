import {call, put, takeLatest} from "redux-saga/effects";
import {API_getArticle, API_getArticles} from "../../utils";
import {
    loadArticleFail, loadArticlesFail, loadArticlesSuccess,
    loadArticleSuccess,
} from "../../redux/actions/actions";
import {LOAD_ARTICLE, LOAD_ARTICLES} from "../../shared/constants";

function* workerGetArticle({payload}) {
    try {
        const data = yield call(API_getArticle, payload);
        const result = data.data;
        yield put(loadArticleSuccess(result))
    }

    catch (error) {
        yield put(loadArticleFail(error))
    }
}

export function* watchGetArticle() {
    yield takeLatest(LOAD_ARTICLE, workerGetArticle)
}

function* workerGetArticles() {
    try {
        const data = yield call(API_getArticles);
        const result = data.data.results;
        yield put(loadArticlesSuccess(result))
    }

    catch (error) {
        yield put(loadArticlesFail(error))
    }
}

export function* watchGetArticles() {
    yield takeLatest(LOAD_ARTICLES, workerGetArticles)
}
