import { combineReducers } from "redux";
import user from "./user.js";
import message from "./message.js";
import preferences from "./preferences.js";
import candidate from "./candidate.js";
import candidates from "./candidates.js";
import categories from "./categories.js";
import matches from "./matches.js";

const PSDating = combineReducers({
  user,
  message,
  preferences,
  candidate,
  candidates,
  categories,
  matches
});

export default PSDating;
