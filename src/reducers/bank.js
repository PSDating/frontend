const bank = (state = false, action) => {
    if (action.type === "AUTHORIZE_ACCOUNT") {
      return true;
    }
  
    return state;
  }
  
  export default bank;
  