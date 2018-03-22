import { combineReducers } from "redux";
import user from "./user.js";
import message from "./message.js";
import preferences from "./preferences.js";
import candidates from "./candidates.js";
import categories from "./categories.js";
import matches from "./matches.js";
import scanner from "./scanner.js";

const PSDating = combineReducers({
  user,
  message,
  preferences,
  candidates,
  categories,
  matches,
  scanner
});

export default PSDating;
