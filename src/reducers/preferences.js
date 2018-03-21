const addPreference = (state, preference) => {
  if (state.includes(preference)) {
    return state;
  }

  return state.concat(preference);
};

const removePreference = (state, preference) => {
  if (!state.includes(preference)) {
    return state;
  }

  let result = state.concat();
  result.splice(state.indexOf(preference), 1);
  return result;
}

const preferences = (state = [], action) => {
  if (action.type === "UPDATE_PREFERENCE") {
    const method = action.value ? addPreference : removePreference;
    return method(state, action.id);
  }

  return state;
};

export default preferences;
