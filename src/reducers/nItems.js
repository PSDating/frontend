const nItems = (state = 1, action) => {
  if (action.type === "INCREMENT_N_ITEMS") {
    return state + 1;
  }

  if (action.type === "DECREMENT_N_ITEMS" && state > 1) {
    return state - 1;
  }

  return state;
};

export default nItems;
