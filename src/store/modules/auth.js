import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { takeLatest } from "redux-saga/effects";
import { loginAPI, registerAPI } from "../../api/auth";
import createRequestSaga from "../../lib/createRequestSaga";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const REGISTER = "auth/REGISTER";
const LOGIN = "auth/LOGIN";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const register = createAction(REGISTER, ({ id, password, name }) => ({
  id,
  password,