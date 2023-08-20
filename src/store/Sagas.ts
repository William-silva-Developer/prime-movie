import { all } from "redux-saga/effects";

import films from './getFilm/SagaGetFilm';

export default function* rootSaga () {
    
    yield all ([
        films,
    ]);
}