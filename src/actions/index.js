import fetch from "isomorphic-fetch";

export const receiveMessage = message => ({
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

export const updatePreference = data => Object.assign({}, {
  type: "UPDATE_PREFERENCE"
}, data);

export const updateCandidate = data => Object.assign({}, {
  type: "UPDATE_CANDIDATE"
}, data);

<<<<<<< HEAD
export function authorizeAccount(data) {
  return dispatch =>
    dispatch(authorizeAccountAction(data))
}

export const authorizeAccountAction = data => Object.assign({}, {
  type: "AUTHORIZE_ACCOUNT"
}, data);
=======
export const scannerAuthorize = () => ({
  type: "SCANNER_AUTHORIZE"
});

export function fetchRecommendations() {
  return dispatch =>
    fetch("http://35.205.253.173:8080/recommendations")
    .then(response => response.json())
    .then(json => {
      dispatch(receiveRecommendations(json));
    })
    .catch(() => {
      console.error("Error connecting to the server");
    });
}

export const receiveRecommendations = recommendations => ({
  type: "RECEIVE_RECOMMENDATIONS",
  recommendations,
});
>>>>>>> 5f7534d8d52ec2ad28c65202b5a93d0448ea6fe9
