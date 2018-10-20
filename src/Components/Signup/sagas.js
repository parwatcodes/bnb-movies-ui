import { call, all, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./constants";

function* watcherSignupSaga() {
  yield takeLatest(SIGNUP, workerSignupSaga);
}

function* workerSignupSaga(payload) {
  let { data, type } = payload
  console.log("this is sags", data);
  try {
    const url = "http://localhost:3001/api/v1/users/signup";

  const response = yield call(() => {
    return axios.post(url, data)
  })

    const resp = response.data;
    yield put({ type: SIGNUP_SUCCESS, data: resp.data });
  } catch (error) {
    console.log("​}catch -> error", error);
    // dispatch a failure action to the store with the error
  }
}

export default function* rootSaga() {
  yield all([fork(watcherSignupSaga)]);
}
