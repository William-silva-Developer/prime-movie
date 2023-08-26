import { delay, call, race, all, takeLatest, put } from "redux-saga/effects";
import { api } from "../../../service";

import { datailsFilmSucess, datailsFilmFailure } from "../DatailsFilmSlice";

function* datailsFilm(idFilm: any) {
  try {
    const { res, timout } = yield race({
      res: call(api.get, `/movie/${idFilm.payload}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "pt-BR",
        },
        headers: { "Content-Type": "application/json" },
      }),
      timout: delay(38000),
    });

    if (timout) {
      console.log("Tempo espirado...");
    }
    if (res.data === 0) {
      console.log("Objeto vazio...");
    }

    if (res.data) {
      yield put(datailsFilmSucess(res.data));
    }
  } catch (error: any) {
    console.log(error.response.status);
    yield put(datailsFilmFailure(error.response.status));
  }
}

export default all([takeLatest("datails/datailsFilm", datailsFilm)]);
