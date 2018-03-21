import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import knapsackApp from "./reducers";

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
if (process.env.NODE_ENV === "production") {
  composeEnhancers = compose;
}

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {
  const loggerMiddleware = createLogger();
  middleware.push(loggerMiddleware);
}

export default function configureStore(preloadedState) {
  return createStore(
    knapsackApp,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}
