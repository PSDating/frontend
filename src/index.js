import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import configureStore from "./configureStore";
import App from "./components/App.jsx";

const initialState = {
    user: null,
    message: "initial message",
    preferences: [
        "6202"
    ],
    candidate: {
        name: "Company 1",
        description: "Company description",
        image: "https://react.semantic-ui.com/assets/images/wireframe/image.png",
    }
};
const store = configureStore(initialState);

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);
render(<App store={store} />, document.getElementById("root"));
