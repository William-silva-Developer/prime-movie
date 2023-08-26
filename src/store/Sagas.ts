import { all } from "redux-saga/effects";

import films from "./getFilm/SagaGetFilm";
import datailsMovie from "./DatailsFilm/SagaDatailsFilm";

export default function* rootSaga() {
  yield all([films, datailsMovie]);
}
