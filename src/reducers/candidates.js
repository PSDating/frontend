const candidates = (state = {items: [], detailMode: false}, action) => {
  if (action.type === "RECEIVE_RECOMMENDATIONS") {
    return Object.assign({}, state, {items: action.recommendations})
  }

  if (action.type === "CANCEL_DETAIL_MODE") {
    return Object.assign({}, state, { detailMode: false })
  }

  if (action.type === "UPDATE_CANDIDATE") {
    const newState = state.items.concat();
    newState.shift();

    if (action.data) {
        return Object.assign({}, state, {items: newState, detailMode: action.data});
    }
    return Object.assign({}, state, {items: newState});
  }

  return state;
};

export default candidates;
