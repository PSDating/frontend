import { combineReducers } from "redux";
import user from "./user.js";
import message from "./message.js";
import preferences from "./preferences.js";
import candidate from "./candidate.js";

const PSDating = combineReducers({
  user,
  message,
  preferences,
  candidate
});

export default PSDating;
