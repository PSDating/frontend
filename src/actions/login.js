import fetch from "isomorphic-fetch";
import { authorizeAccountAction } from "../actions";

const loginSuccessful = user => ({
    type: "LOGIN_SUCCESSFUL",
    user
});

export function login(user) {
    return dispatch => {
        console.log(user)
        fetch("http://35.205.253.173:8080/register", {
            method: 'post'
        })
        .then(response => console.log(response.text()))
        .then(text => dispatch(receiveMessage(text)) )
        .catch(() => {
            console.error("Error connecting to the server");
        });
        dispatch(loginSuccessful(user));
    };
}