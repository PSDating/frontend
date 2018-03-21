import fetch from "isomorphic-fetch";

const receiveMessage = message => ({
  type: "RECEIVE_MESSAGE",
  message,
});

export function fetchMessage() {
  return dispatch =>
    fetch("http://35.205.253.173:8080/hello")
    .then(response => response.text())
    .then(text => {
      dispatch(receiveMessage(text));
    })
    .catch(() => {
      console.error("Error connecting to the server");
    });
}