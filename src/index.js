import "babel-polyfill";

import React from "react";
import BasicExample from "./BasicExample";
import { render } from "react-dom";
import configureStore from "./configureStore";
import App from "./components/App.jsx";

const store = configureStore();

render(<BasicExample store={store} />, document.getElementById("root"));
