import { combineReducers } from "redux";
import user from "./user.js";
import message from "./message.js";

const PSDating = combineReducers({
  user,
  message
});

export default PSDating;
