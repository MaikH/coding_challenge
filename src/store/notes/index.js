import { createAction, handleActions } from "redux-actions";
import merge from "deepmerge";
import { takeEvery, fork, put } from "redux-saga/effects";

import api from "./api";
import { getDefaultTextNote } from "../../utils/note.util";

const initialState = {};

const FETCH_NOTES = "cc/notes/FETCH_NOTES";
const SET_NOTES = "cc/notes/SET_NOTES";
const CREATE_NOTE = "cc/notes/CREATE_NOTE";
const SAVE_CREATED_NOTE = "cc/notes/SAVE_CREATED_NOTE";
const UPDATE_NOTE_ORDER = "cc/notes/UPDATE_NOTE_ORDER";

export const getNotes = createAction(FETCH_NOTES);
const setNotes = createAction(SET_NOTES);
export const createNote = createAction(CREATE_NOTE);
export const saveCreatedNote = createAction(SAVE_CREATED_NOTE);
export const updateNoteOrder = createAction(UPDATE_NOTE_ORDER);

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
          notes: notes.map((note) => ({ ...note, order: 0 })),
        });
      },
    },
    [createNote]: {
      next(state, _) {
        const { notes: previousNotes } = state;
        const temporaryNoteExists = !!previousNotes.find(
          ({ temp }) => temp === true
        );

        if (temporaryNoteExists) return state;

        return merge(state, {
          notes: [
            {
              ...getDefaultTextNote(),
              x: 0,
              y: 0,
              temp: true,
              content: "",
            },
          ],
        });
      },
    },
    [saveCreatedNote]: {
      next(state, action) {
        const { notes } = state;
        const { content } = action?.payload;
        const temporaryNote = notes.find(({ temp }) => temp === true);
        const nonTemporaryNotes = notes.filter(({ temp }) => temp !== true);
        return {
          ...state,
          notes: [
            ...nonTemporaryNotes,
            { ...temporaryNote, temp: false, content },
          ],
        };
      },
    },
    [updateNoteOrder]: {
      next(state, action) {
        const newState = Object.assign({}, state);
        const { notes } = newState;
        const { id: lastDraggedId } = action?.payload;
        const lastDragged = notes.filter(({ id }) => id === lastDraggedId);
        const oldDraggedNotes = notes.filter(({ id }) => id !== lastDraggedId);
        const orderedForLastDragged = [lastDragged, ...oldDraggedNotes];
        const notesCount = notes.length;
        return {
          ...newState,
          notes: notes.map((note) => ({
            ...note,
            order:
              notesCount -
              orderedForLastDragged.map(({ id }) => id).indexOf(note.id),
          })),
        };
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
