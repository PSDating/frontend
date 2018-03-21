import { combineReducers } from "redux";
import taskId from "./taskId.js";
import nItems from "./nItems.js";
import solution from "./solution.js";
import error from "./error.js";

const knapsackApp = combineReducers({
  taskId,
  nItems,
  solution,
  error,
});

export default knapsackApp;
