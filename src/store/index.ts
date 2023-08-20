import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './Sagas';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [ sagaMiddleWare ],
});

sagaMiddleWare.run(rootSaga);
