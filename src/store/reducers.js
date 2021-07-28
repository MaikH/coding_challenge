import { combineReducers } from "redux";

import noteReducer from "./notes";

const rootReducer = combineReducers({
  notes: noteReducer,
});

export default rootReducer;
