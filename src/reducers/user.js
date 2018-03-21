const user = (state = null, action) => {
  if (action.type === "LOGIN_SUCCESSFUL") {
    console.log(state);
    return action.user;
  }

  return state;
};

export default user;
