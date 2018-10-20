import { call, all, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  ADD_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIE_BY_ID,
  FETCH_MOVIE_BY_ID_SUCCESS
} from "./constants";

function* watcherFetchMoviesSaga() {
  yield takeLatest(FETCH_MOVIES, workerFetchMoviesSaga);
}

function* workerFetchMoviesSaga() {
  try {
    const url = "http://localhost:3001/api/v1/movies";

    const response = yield call(() => {
      return axios.get(url);
    });

    let {
      data: { data }
    } = response;
    yield put({ type: FETCH_MOVIES_SUCCESS, data });
  } catch (error) {
    console.log("​}catch -> error", error);
    // dispatch a failure action to the store with the error
  }
}

function* watcherPostMovieSaga() {
  yield takeLatest(ADD_MOVIE, workerPostMovieSaga);
}

function* workerPostMovieSaga(payload) {
  let { type, data } = payload;
  try {
    const url = "http://localhost:3001/api/v1/movies";

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

// function* watcherFetchMovieByIDSaga() {
//   yield takeLatest(FETCH_MOVIE_BY_ID, workerFetchMovieByIDSaga);
// }

// function* workerFetchMovieByIDSaga(payload) {
//   let { movieID, type } = payload;
//   try {
//     const url = "http://localhost:3001/api/v1/movies";

//     const response = yield call(() => {
//       return axios.post(url, data);
//     });

//     const resp = response.data;
//   } catch (error) {}
// }

export default function* rootSaga() {
  yield all([fork(watcherFetchMoviesSaga), fork(watcherPostMovieSaga)]);
}
