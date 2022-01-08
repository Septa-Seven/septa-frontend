import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../modules/auth/authReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ authReducer });

// mount it on the Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);
