import { all, fork } from "redux-saga/effects";
/**
 * 사가를 쓰는방법은 루트사가를 만들어놓고 거기에 비동기 액션들을 넣어준다
 */
//all 은 배열을 받고 안에 있는 것들을 한번에 실행
//fork는 함수를 실행시키는 역할을 합니다.
//콜도 마찬가지나 fork는 비동기 call은 동기
import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
