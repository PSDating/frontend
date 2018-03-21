const loginData = user => ({
    type: "LOGIN_SUCCESSFUL",
    user
});

export function login(user) {
    return dispatch => {
        dispatch(loginData(user));
    };
}