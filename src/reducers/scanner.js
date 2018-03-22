const initialState = {
  image: null,
  authorized: null
};

const scanner = (state = initialState, action) => {
  if (action.type === "SCANNER_AUTHORIZE") {
    return Object.assign({}, state, { authorized: true });
  }

  return state;
};

export default scanner;
