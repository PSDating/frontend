const candidates = (state = [], action) => {
  if (action.type === "RECEIVE_RECOMMENDATIONS") {
    return action.recommendations;
  }

  if (action.type === "UPDATE_CANDIDATE") {
    const newState = state.concat();
    newState.shift();
    return newState;
  }

  return state;
};

export default candidates;
