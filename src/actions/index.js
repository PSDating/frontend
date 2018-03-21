import fetch from "isomorphic-fetch";

export const incrementNItems = () => ({
  type: "INCREMENT_N_ITEMS",
});

export const decrementNItems = () => ({
  type: "DECREMENT_N_ITEMS",
});

const receiveTaskId = taskId => ({
  type: "RECEIVE_TASK_ID",
  taskId,
});

const receiveSolution = solution => ({
  type: "RECEIVE_SOLUTION",
  solution,
});

export const showError = error => ({
  type: "SHOW_ERROR",
  error,
});

export const clearError = () => ({
  type: "CLEAR_ERROR",
});

export function submitTask(task) {
  return dispatch =>
    fetch("http://localhost:5000/optimize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTaskId(json.task_id));
      })
      .catch(() => {
        dispatch(showError("Error connecting to the server."));
      });
}

export function requestSolution(taskId) {
  return dispatch =>
    fetch("http://localhost:5000/solution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task_id: taskId }),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveSolution(json.result));
      })
      .catch(() => {
        dispatch(showError("Error connecting to the server."));
      });
}
