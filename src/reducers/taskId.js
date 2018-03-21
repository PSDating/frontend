const taskId = (state = null, action) => {
  if (action.type === "RECEIVE_TASK_ID") {
    return action.taskId;
  }

  return state;
};

export default taskId;
