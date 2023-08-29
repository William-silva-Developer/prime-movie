import { all, put, takeLatest, call, delay, race } from "redux-saga/effects";
import { api } from "../../../service";
import {
  getFilmsFailure,
  getFilmsNull,
  getFilmsSuccess,
  getFilmsTimeout,
} from "../getFilmSlice";

function* getFilms() {
  try {
    const { res, timout } = yield race({
      res: call(api.get, "/movie/now_playing?", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "pt-BR",
          page: 1,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
      timout: delay(32000),
    });

    if (timout) {
      yield put(getFilmsTimeout());
    }

    if (res.data.length === 0) {
      yield put(getFilmsNull());
    }

    if (res.data) {
      yield put(getFilmsSuccess(res.data.results));
    }
  } catch (error: any) {
    yield put(getFilmsFailure());
  }
}

export default all([takeLatest("films/getFilms", getFilms)]);
