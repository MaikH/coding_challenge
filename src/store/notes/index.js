import { createAction, handleActions } from "redux-actions";
import merge from "deepmerge";
import { takeEvery, fork, put } from "redux-saga/effects";

import api from "./api";

const initialState = {};

const FETCH_NOTES = "cc/notes/FETCH_NOTES";
const SET_NOTES = "cc/notes/SET_NOTES";

export const getNotes = createAction(FETCH_NOTES);
export const setNotes = createAction(SET_NOTES);

export default handleActions(
  {
    [getNotes]: {
      next(state) {
        return merge(state, {
          loading: true,
        });
      },
    },
    [setNotes]: {
      next(state, action) {
        const { notes } = action.payload;
        return merge(state, {
          loading: false,
          notes,
        });
      },
    },
  },
  initialState
);

function* fetchNotes() {
  const { fetchNotes } = api();
  const notes = yield fetchNotes();
  yield put(setNotes({ notes }));
}

function* watchNotes() {
  yield takeEvery(FETCH_NOTES, fetchNotes);
}

export function* noteSagas() {
  yield fork(watchNotes);
}
