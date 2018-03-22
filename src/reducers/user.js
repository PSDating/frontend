const user = (state = null, action) => {
  if (action.type === "LOGIN_SUCCESSFUL") {
    action.user.loggedIn = true;
    return action.user;
  }

  if (action.type === "REGISTRATION_SUCCESSFUL") {
    action.user.loggedIn = true;
    return action.user;
  }

  return state;
};

export default user;
