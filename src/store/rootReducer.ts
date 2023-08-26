import { combineReducers } from "@reduxjs/toolkit";

import filmsReducer from "./getFilm/getFilmSlice";
import datailsFilmReducer from "./DatailsFilm/DatailsFilmSlice";

const rootReducer = combineReducers({
  films: filmsReducer,
  datailsMovie: datailsFilmReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
