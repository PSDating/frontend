const message = (state = null, action) => {
  if (action.type === "RECEIVE_MESSAGE") {
    return action.message;
  }

  return state;
};

export default message;
