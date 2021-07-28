import { all } from "redux-saga/effects";

import { noteSagas } from "./notes";

export default function* rootSaga() {
  yield all([noteSagas()]);
}
