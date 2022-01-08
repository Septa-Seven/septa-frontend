import { createAction, createReducer } from "@reduxjs/toolkit";

export const auth = createAction("auth", (payload) => {
  return { payload };
});

export const successAuth = createAction("auth-success", (payload) => payload);

export const authReducer = createReducer({}, {});
