const solution = (state = null, action) => {
  if (action.type === "RECEIVE_SOLUTION") {
    return action.solution;
  }

  return state;
};

export default solution;
