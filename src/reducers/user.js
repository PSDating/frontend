const user = (state = null, action) => {
  if (action.type === "LOGIN_SUCCESSFUL") {
    return action.user;
  }

  return state;
};

export default user;
