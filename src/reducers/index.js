import { combineReducers } from "redux";
import user from "./user.js";
import message from "./message.js";
import preferences from "./preferences.js";

const PSDating = combineReducers({
  user,
  message,
  preferences
});

export default PSDating;
