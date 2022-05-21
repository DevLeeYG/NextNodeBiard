import { all, delay } from "@redux-saga/core/effects";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    yield delay(1000);
    console.log(action);
    yield put({
      //put은 디스패치랑 비슷
      type: "LOG_IN_SUCCESS",
      data: action.data
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data
    });
  }
}

function* logOut(action) {
  try {
    yield delay(1000);
    yield put({
      //put은 디스패치랑 비슷
      type: "LOG_OUT_SUCCESS"
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data
    });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn); //로그인 액션이 실행될때까지 기다리겟다
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watch(LogOut))]);
}
