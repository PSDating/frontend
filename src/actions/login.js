import fetch from "isomorphic-fetch";
import { authorizeAccountAction } from "../actions";

const loginSuccessful = user => ({
    type: "LOGIN_SUCCESSFUL",
    user
});

export function login(user) {
    return dispatch => {
        fetch("http://35.205.253.173:8080/user/register", {
            method: 'post'
        })
        .then(response => console.log(response.text()))
        .then(text => dispatch(loginSuccessful(user)))
        .catch(() => {
            console.error("Error connecting to the server");
        });
    };
}