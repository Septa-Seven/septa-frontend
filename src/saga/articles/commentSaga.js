import {call, put, takeLatest} from "redux-saga/effects";
import {API_postComment} from "../../utils";
import {loadArticle, postCommentFail, postCommentSuccess} from "../../redux/actions/actions";
import {POST_COMMENT} from "../../shared/constants";

function* workerPostComment({payload}) {
    try {
        yield call(API_postComment, payload);
        yield put(postCommentSuccess())
        yield put(loadArticle(payload.article))
    }

    catch (error) {
        yield put(postCommentFail(error))
    }
}

export function* watchPostComment() {
    yield takeLatest(POST_COMMENT, workerPostComment)
}
