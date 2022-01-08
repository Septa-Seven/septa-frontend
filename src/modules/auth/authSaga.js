import { takeLatest, call } from "redux-saga/effects";
import { auth } from "./authReducer";
import { postCode } from "./api";

function* authWorker(action) {
  const { code, endpoint } = action.payload;

  console.log(code, endpoint);
  try {
    const data = yield call(postCode, { code, endpoint });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  yield "jopa";
}

// watcher
// при срабатывании триггера login отработает и loginWorker
export function* authWatcher() {
  yield takeLatest(auth, authWorker);
}
