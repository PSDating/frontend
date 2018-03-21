const error = (state = null, action) => {
  if (action.type === "SHOW_ERROR") {
    return action.error;
  }

  if (action.type === "CLEAR_ERROR") {
    return null;
  }

  return state;
};

export default error;
