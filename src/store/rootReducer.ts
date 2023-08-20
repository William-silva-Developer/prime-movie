import { combineReducers } from "@reduxjs/toolkit";

import filmsReducer from './getFilm/getFilmSlice';
import showFilmsReducer from './showFilms/ShowFilmsSlice';

const rootReducer = combineReducers({
    
    films: filmsReducer,
    showFilms: showFilmsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;