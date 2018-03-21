import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import configureStore from "./configureStore";
import App from "./components/App.jsx";

const store = configureStore();

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);
render(<App store={store} />, document.getElementById("root"));
