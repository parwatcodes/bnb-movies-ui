import { call, all, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import history from "../../history";

import { ADD_USER_TICKET, FETCH_USER_TICKETS, FETCH_USER_TICKETS_SUCCESS } from "./constants";

function* watcherFetchCinemasSaga() {
  yield takeLatest(FETCH_USER_TICKETS, workerFetchSeatsSaga);
}

function* workerFetchSeatsSaga(payload) {
  debugger
  try {
    let { params } = payload;
    debugger
    const url = "http://localhost:3001/api/v1/seats";

    const response = yield call(() => {
      return axios.get(url, params);
    });


    let {
      data: { data }
    } = response;
    yield put({ type: FETCH_USER_TICKETS_SUCCESS, data });
  } catch (error) {
    console.log("​}catch -> error", error);
    // dispatch a failure action to the store with the error
  }
}

function* watcherPostSeatSaga() {
  yield takeLatest(ADD_USER_TICKET, workerPostSeatSaga);
}

function* workerPostSeatSaga(payload) {
  let { type, data } = payload;

  try {
    const url = "http://localhost:3001/api/v1/seats";

    const response = yield call(() => {
      return axios.post(url, data);
    });

    const resp = response.data;
    // dispatch a success action to the store with the new dog
  } catch (error) {
    console.log("​}catch -> error", error);
    // dispatch a failure action to the store with the error
    // yield put({ type: LOGIN_ERROR, error });
  }
}

export default function* rootSaga() {
  yield all([fork(workerFetchSeatsSaga), fork(watcherPostSeatSaga)]);
}
