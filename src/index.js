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
        companyName: "Albert Heijn Rotterdam",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Albert_Heijn_Logo.svg/2000px-Albert_Heijn_Logo.svg.png",
        address: "yep",
        zipCity: "Rotterdam",
        phonenumber: "010-1234567"
    },
    categories: [
        {
            id: "69202",
            label: "Accountant",
            icon: "euro"
        },
        {
            id: "6202",
            label: "IT",
            icon: "desktop"
        },
        {
            id: "7430",
            label: "Translation",
            icon: "talk"
        },
        {
            id: "69101",
            label: "Legal",
            icon: "legal"
        },
    ]
};
const store = configureStore(initialState);

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);
render(<App store={store} />, document.getElementById("root"));