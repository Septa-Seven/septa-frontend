import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(rootSaga);
