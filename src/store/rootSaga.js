import { all } from "redux-saga/effects";
import { authWatcher } from "../modules/auth/authSaga";

export default function* rootSaga() {
  yield all([authWatcher()]);
}
