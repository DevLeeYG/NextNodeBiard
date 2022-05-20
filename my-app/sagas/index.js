import axios from "axios";
import { all, call, fork, take } from "redux-saga/effects";
function logInAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  try {
    const result = yield call(logInAPI);
    yield PushSubscription({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}
//success = result.data,
//err.response.data

function* watchLogIn() {
  yield take("LOG_IN");
}

function* watchLogOut() {
  yield take("LOG_OUT");
}

function* watchAddPost() {
  yield take("ADD_POST");
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
